from django.db import models

# Create your models here.
class TimeStampedModel(models.Model):
    create_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Note(TimeStampedModel):
    body = models.TextField(null=True, blank=True)
    
    

    def __str__(self):
        return self.body[0:50]

    class Meta:
        verbose_name = 'Note'
        verbose_name_plural = 'Notes'