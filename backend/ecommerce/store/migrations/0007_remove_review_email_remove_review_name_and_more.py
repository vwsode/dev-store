# Generated by Django 5.0.2 on 2024-02-16 19:11

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0006_alter_category_slug'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.RemoveField(
            model_name='review',
            name='email',
        ),
        migrations.RemoveField(
            model_name='review',
            name='name',
        ),
        migrations.AddField(
            model_name='review',
            name='username',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='username'),
            preserve_default=False,
        ),
    ]
