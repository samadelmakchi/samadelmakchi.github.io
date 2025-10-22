# 🐳 Docker & Docker Compose

## 🚀 مقدمه

داکر ابزاری برای ساخت، اجرا و مدیریت کانتینرها است و دارای سه بخش اصلی زیر است:

- Dockerfile → ساخت Image
- Docker CLI → مدیریت Container و Image
- Docker Compose → اجرای چند سرویس مرتبط

## ⚙️ نصب و بررسی نسخه

```bash
docker version
docker info
docker compose version
```

## 📦 دستورات پایه Docker

| دستور                            | توضیح                         |
| -------------------------------- | ----------------------------- |
| `docker ps`                      | نمایش کانتینرهای در حال اجرا  |
| `docker ps -a`                   | همه کانتینرها (حتی متوقف‌شده) |
| `docker images`                  | لیست Imageها                  |
| `docker pull nginx`              | دانلود Image                  |
| `docker run nginx`               | اجرای Image                   |
| `docker run -d -p 8080:80 nginx` | اجرای در پس‌زمینه با مپ پورت  |
| `docker exec -it container bash` | ورود به کانتینر               |
| `docker logs -f container`       | نمایش لاگ‌ها                  |
| `docker stop container`          | توقف کانتینر                  |
| `docker rm container`            | حذف کانتینر                   |
| `docker rmi image`               | حذف Image                     |
| `docker system prune -af`        | پاک‌سازی همه چیز 😎           |


## 🧱 ساخت Image از Dockerfile

```bash
docker build -t myapp:latest .
```

🔸تعیین نام و تگ (name:tag) → -t

🔸مسیر داکرفایل (پوشه فعلی) → .

## 🧰 ساختار پایه Dockerfile

```bash
# پایه Image
FROM ubuntu:22.04

# تنظیم Maintainer
LABEL maintainer="samad@example.com"

# نصب پکیج‌ها
RUN apt-get update && apt-get install -y nginx curl

# کپی فایل‌ها به کانتینر
COPY ./html /var/www/html

# تعریف Working Directory
WORKDIR /var/www/html

# تنظیم متغیر محیطی
ENV ENVIRONMENT=production

# پورت قابل دسترسی
EXPOSE 80

# اجرای دستور اصلی
CMD ["nginx", "-g", "daemon off;"]
```

## 🧩 مهم‌ترین دستورها در Dockerfile

| دستور        | توضیح                                  |
| ------------ | -------------------------------------- |
| `FROM`       | پایه Image                             |
| `LABEL`      | متادیتا (مانند author، version)        |
| `RUN`        | اجرای دستور در زمان Build              |
| `COPY`       | کپی فایل از سیستم میزبان               |
| `ADD`        | شبیه COPY ولی با قابلیت دانلود و unzip |
| `WORKDIR`    | تغییر دایرکتوری کاری                   |
| `ENV`        | تعریف متغیر محیطی                      |
| `EXPOSE`     | مستندسازی پورت                         |
| `CMD`        | دستور پیش‌فرض زمان اجرا                |
| `ENTRYPOINT` | دستور غیرقابل‌تغییر زمان اجرا          |
| `USER`       | اجرای کانتینر با کاربر خاص             |
| `ARG`        | متغیر فقط در زمان Build                |

## 🔄 تفاوت CMD و ENTRYPOINT

| ویژگی         | CMD           | ENTRYPOINT                  |
| ------------- | ------------- | --------------------------- |
| قابل override | بله           | خیر (مگر با `--entrypoint`) |
| هدف           | دستور پیش‌فرض | نقطه شروع ثابت              |

### مثال:

```dockerfile
ENTRYPOINT ["python3", "app.py"]
```

## 🧠 ARG vs ENV

```dockerfile
ARG APP_VERSION=1.0
ENV VERSION=${APP_VERSION}
```

🔸 ARG فقط در زمان build معتبر است.

🔸 ENV در زمان اجرا هم وجود دارد.

## 🧩 Multi-Stage Build (پیشنهاد DevOps)

```dockerfile
# Stage 1: Build
FROM node:20 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Run
FROM nginx:1.27
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```
✅ سبک‌تر، سریع‌تر، امن‌تر

## 

```bash

```

## 

```bash

```