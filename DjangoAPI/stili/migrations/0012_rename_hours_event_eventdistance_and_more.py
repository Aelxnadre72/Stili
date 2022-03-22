# Generated by Django 4.0.2 on 2022-03-14 15:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stili', '0011_rename_organizer_event_organizer_id'),
    ]

    operations = [
        migrations.RenameField(
            model_name='event',
            old_name='hours',
            new_name='eventDistance',
        ),
        migrations.AlterField(
            model_name='event',
            name='eventDifficulty',
            field=models.CharField(choices=[('1', 'Easy'), ('2', 'Mediocre'), ('3', 'Veteran')], max_length=1),
        ),
    ]
