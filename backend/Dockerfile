# 베이스 이미지로 Python 3.9 사용
FROM python:3.10.11-slim

WORKDIR /app

RUN apt-get update && apt-get install -y \
     libpq-dev \
     gcc \
     && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

ENV PYTHONUNBUFFERED=1

EXPOSE 8000

CMD ["gunicorn", "--bind", "0.0.0.0:8000", "core.wsgi:application"]
