from django.shortcuts import render, get_object_or_404, redirect
from django.contrib import messages
from .models import Quiz, QuizCategory, Question, Answer, QuizAttempt, UserAnswer


def home(request):
    categories = QuizCategory.objects.all()
    quizzes = Quiz.objects.filter(is_published=True)
    return render(request, 'quiz.html', {
        'categories': categories,
        'quizzes': quizzes,
    })


def quiz_detail(request, quiz_id):
    quiz = get_object_or_404(Quiz, id=quiz_id, is_published=True)
    questions = quiz.questions.prefetch_related('answers').all()
    if request.method == 'POST':
        total = questions.count()
        correct = 0
        attempt = QuizAttempt.objects.create(user=request.user if request.user.is_authenticated else None, quiz=quiz)
        for q in questions:
            selected_id = request.POST.get(f'q{q.id}')
            selected = Answer.objects.filter(id=selected_id).first() if selected_id else None
            UserAnswer.objects.create(attempt=attempt, question=q, selected_answer=selected)
            if selected and selected.is_correct:
                correct += 1
        attempt.score = int((correct / total) * 100) if total else 0
        attempt.save()
        messages.success(request, f'You scored {correct}/{total} correct ({attempt.score}%).')
        return redirect('quiz_detail', quiz_id=quiz.id)
    return render(request, 'quiz_detail.html', {
        'quiz': quiz,
        'questions': questions,
    })
