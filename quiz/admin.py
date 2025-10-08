from django.contrib import admin
from .models import QuizCategory, Quiz, Question, Answer, QuizAttempt, UserAnswer


@admin.register(QuizCategory)
class QuizCategoryAdmin(admin.ModelAdmin):
    list_display = ("name",)
    search_fields = ("name",)


class AnswerInline(admin.TabularInline):
    model = Answer
    extra = 1


@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    list_display = ("quiz", "question_text")
    search_fields = ("question_text",)
    inlines = [AnswerInline]


class QuestionInline(admin.TabularInline):
    model = Question
    extra = 1


@admin.register(Quiz)
class QuizAdmin(admin.ModelAdmin):
    list_display = ("title", "category", "difficulty", "is_published")
    list_filter = ("category", "difficulty", "is_published")
    search_fields = ("title",)
    inlines = [QuestionInline]


@admin.register(QuizAttempt)
class QuizAttemptAdmin(admin.ModelAdmin):
    list_display = ("user", "quiz", "score", "completion_time")
    list_filter = ("quiz", "completion_time")
    search_fields = ("user__username", "quiz__title")


@admin.register(UserAnswer)
class UserAnswerAdmin(admin.ModelAdmin):
    list_display = ("attempt", "question", "selected_answer")
