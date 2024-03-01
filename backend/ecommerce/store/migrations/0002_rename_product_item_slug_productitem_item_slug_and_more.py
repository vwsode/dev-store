# Generated by Django 5.0.2 on 2024-02-27 19:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='productitem',
            old_name='product_item_slug',
            new_name='item_slug',
        ),
        migrations.RemoveField(
            model_name='product',
            name='product_slug',
        ),
        migrations.AlterField(
            model_name='productitem',
            name='main_image',
            field=models.ImageField(upload_to=''),
        ),
        migrations.AlterField(
            model_name='productshots',
            name='image',
            field=models.ImageField(upload_to=''),
        ),
    ]