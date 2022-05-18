from django.contrib import admin
from .models import Note


@admin.register(Note)
class StudentAdmin(admin.ModelAdmin):
    list_display = ('body','create_at','update_at',)
# admin.site.register(Note)