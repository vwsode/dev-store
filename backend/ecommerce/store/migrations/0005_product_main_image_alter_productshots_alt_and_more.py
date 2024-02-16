# Generated by Django 5.0.2 on 2024-02-16 07:20

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0004_remove_product_image_productshots_alt'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='main_image',
            field=models.ImageField(blank=True, null=True, upload_to='products/'),
        ),
        migrations.AlterField(
            model_name='productshots',
            name='alt',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='productshots',
            name='product',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='images', to='store.product'),
        ),
    ]