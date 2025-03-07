from datetime import datetime, timedelta

def get_max_age(day):
    now = datetime.now()
    return str(now - timedelta(days=day))

