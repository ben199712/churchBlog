from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_churchinfo'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Servie',
            new_name='Service',
        ),
    ]





