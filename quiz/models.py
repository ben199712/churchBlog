from django.db import models
from django.contrib.auth import get_user_model


class QuizCategory(models.Model):
    name = models.CharField(max_length=120, unique=True)

    class Meta:
        ordering = ["name"]

    def __str__(self):
        return self.name


class Quiz(models.Model):
    DIFFICULTY_CHOICES = (
        ("easy", "Easy"),
        ("medium", "Medium"),
        ("hard", "Hard"),
    )

    title = models.CharField(max_length=200)
    category = models.ForeignKey(QuizCategory, on_delete=models.CASCADE, related_name="quizzes")
    difficulty = models.CharField(max_length=10, choices=DIFFICULTY_CHOICES, default="easy")
    time_limit = models.PositiveIntegerField(help_text="Time limit in minutes", default=0)
    is_published = models.BooleanField(default=True)

    class Meta:
        ordering = ["title"]

    def __str__(self):
        return self.title


class Question(models.Model):
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE, related_name="questions")
    question_text = models.TextField()
    explanation = models.TextField(blank=True)

    def __str__(self):
        return self.question_text[:80]


class Answer(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE, related_name="answers")
    answer_text = models.CharField(max_length=255)
    is_correct = models.BooleanField(default=False)

    def __str__(self):
        return self.answer_text


User = get_user_model()


class QuizAttempt(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="quiz_attempts", null=True, blank=True)
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE, related_name="attempts")
    score = models.PositiveIntegerField(default=0)
    completion_time = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-completion_time"]

    def __str__(self):
        username = self.user.username if self.user else "Anonymous"
        return f"{username} - {self.quiz.title} ({self.score})"


class UserAnswer(models.Model):
    attempt = models.ForeignKey(QuizAttempt, on_delete=models.CASCADE, related_name="user_answers")
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    selected_answer = models.ForeignKey(Answer, on_delete=models.SET_NULL, null=True)

    class Meta:
        unique_together = ("attempt", "question")

    def __str__(self):
        return f"Attempt {self.attempt_id} - Q{self.question_id}"
