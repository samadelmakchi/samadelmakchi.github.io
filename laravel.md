# 📘 Laravel Artisan Commands

### 🟢 عمومی (General)

```php
php artisan list            # نمایش همه دستورات موجود
php artisan help <command>  # نمایش راهنمای یک دستور خاص
php artisan serve           # اجرای وب‌سرور داخلی (پورت پیش‌فرض: 8000)
php artisan tinker          # اجرای REPL تعاملی لاراول
php artisan inspire         # نمایش جمله انگیزشی
```

### 🔵 ساخت (Make)

```php
php artisan make:controller NameController            # ساخت کنترلر جدید
php artisan make:model Name                           # ساخت مدل جدید
php artisan make:migration create_table_name          # ساخت فایل مایگریشن
php artisan make:seeder NameSeeder                    # ساخت Seeder جدید
php artisan make:factory NameFactory                  # ساخت Factory جدید
php artisan make:middleware NameMiddleware            # ساخت Middleware
php artisan make:request NameRequest                  # ساخت Form Request برای اعتبارسنجی
php artisan make:job NameJob                          # ساخت Job جدید
php artisan make:event NameEvent                      # ساخت Event جدید
php artisan make:listener NameListener                # ساخت Listener
php artisan make:command NameCommand                  # ساخت Command سفارشی
php artisan make:mail NameMail                        # ساخت کلاس ایمیل
php artisan make:notification NameNotification        # ساخت Notification
php artisan make:policy NamePolicy                    # ساخت Policy
php artisan make:resource NameResource                # ساخت API Resource
php artisan make:test NameTest                        # ساخت تست (Unit/Feature)
php artisan make:observer NameObserver --model=User   # ساخت Observer برای مدل
php artisan make:provider NameServiceProvider         # ساخت Service Provider
php artisan make:rule NameRule                        # ساخت Rule سفارشی اعتبارسنجی
php artisan make:channel NameChannel                  # ساخت کانال Broadcast
php artisan make:exception NameException              # ساخت Exception سفارشی
```

### 🟠 مایگریشن و دیتابیس

```php
php artisan migrate                 # اجرای همه مایگریشن‌ها
php artisan migrate:rollback        # بازگردانی آخرین مایگریشن
php artisan migrate:reset           # بازگردانی همه مایگریشن‌ها
php artisan migrate:refresh         # بازگردانی و اجرای دوباره همه مایگریشن‌ها
php artisan migrate:fresh           # حذف همه جداول و اجرای دوباره مایگریشن‌ها
php artisan migrate:status          # نمایش وضعیت مایگریشن‌ها
php artisan db:seed                 # اجرای Seederها
php artisan db:wipe                 # پاک کردن کامل دیتابیس
php artisan schema:dump             # ذخیره‌سازی ساختار دیتابیس
php artisan schema:dump --prune     # ذخیره و حذف فایل‌های قدیمی dump
```

### 🟡 کش و بهینه‌سازی

```php
php artisan cache:clear     # پاک کردن کش برنامه
php artisan cache:table     # ایجاد جدول cache در دیتابیس
php artisan config:clear    # پاک کردن کش تنظیمات
php artisan config:cache    # کش کردن فایل config
php artisan route:clear     # پاک کردن کش مسیرها
php artisan route:cache     # کش کردن مسیرها
php artisan view:clear      # پاک کردن کش Blade
php artisan view:cache      # کامپایل و کش کردن Blade
php artisan optimize        # بهینه‌سازی برنامه (deprecated در Laravel 9+)
php artisan optimize:clear  # پاک کردن همه کش‌ها
```

### 🟣 صف‌ها (Queues)

```php
php artisan queue:work            # اجرای صف‌ها
php artisan queue:listen          # اجرای صف در حالت شنود
php artisan queue:restart         # ری‌استارت کارگرها (workers)
php artisan queue:failed          # نمایش لیست Jobهای ناموفق
php artisan queue:retry all       # اجرای دوباره همه Jobهای ناموفق
php artisan queue:flush           # حذف همه Jobهای ناموفق
php artisan queue:table           # ایجاد جدول jobs در دیتابیس
php artisan queue:failed-table    # ایجاد جدول failed_jobs
```

### 🟤 وظایف زمان‌بندی (Scheduler)

```php
php artisan schedule:run         # اجرای وظایف زمان‌بندی شده
php artisan schedule:list        # نمایش وظایف زمان‌بندی
php artisan schedule:clear-cache # پاک کردن کش Scheduler
```

### 🟣 تست و دیباگ

```php
php artisan test                      # اجرای تست‌ها (Unit و Feature)
php artisan test --filter=UserTest    # اجرای یک تست خاص
php artisan route:list                # نمایش همه مسیرها
php artisan event:list                # نمایش همه Eventها
php artisan vendor:publish            # انتشار فایل‌های پکیج‌ها (config/view/lang/...)
php artisan env                       # نمایش environment فعلی
```

### 🟤 استوریج و فایل‌ها

```php
php artisan storage:link    # ایجاد symlink برای storage/public
php artisan storage:unlink  # حذف symlink (در ورژن‌های جدید)
```

### ⚫️ Broadcasting

```php
php artisan make:channel ChannelName    # ساخت کانال جدید
php artisan make:event EventName        # ساخت Event قابل broadcast
php artisan make:listener ListenerName  # ساخت Listener برای Event
php artisan event:generate              # تولید Event/Listenerهای ثبت‌شده
```

### ⚪️ Passport / Sanctum / Auth (بسته به نصب)

```php
php artisan make:auth                 # ساخت auth scaffold (در نسخه‌های قدیمی لاراول)
php artisan passport:install          # نصب Passport
php artisan passport:keys             # تولید کلیدهای OAuth
php artisan sanctum:prune-expired     # پاکسازی توکن‌های منقضی‌شده
```

### 🟢 Horizon (اگر استفاده شود)

```php
php artisan horizon              # اجرای داشبورد Horizon
php artisan horizon:status       # وضعیت Horizon
php artisan horizon:terminate    # متوقف کردن Horizon
```

### 🟣 Swagger / OpenAPI (L5-Swagger)

```php
php artisan l5-swagger:generate            # تولید فایل مستندات Swagger
php artisan l5-swagger:publish             # انتشار فایل‌های تنظیمات
php artisan l5-swagger:clear               # پاکسازی مستندات تولید شده
php artisan l5-swagger:generate --force    # بازتولید مستندات حتی در صورت وجود فایل‌های قدیمی
php artisan l5-swagger:generate --all      # تولید مستندات برای تمام تعریف‌های چندگانه
php artisan l5-swagger:publish-assets      # کپی assetهای Swagger UI به public/vendor/l5-swagger
php artisan l5-swagger:publish-config      # انتشار فایل تنظیمات فقط
php artisan l5-swagger:publish-view        # انتشار فایل‌های View برای سفارشی‌سازی UI
```

---

## ⚙️ SOLID

| حرف   | اصل                   | هدف                                                  |
| ----- | ------------------------------------- | ---------------------------------------------------- |
| **S** | Single Responsibility Principle (SRP) | هر کلاس فقط یک مسئولیت داشته باشد                     |
| **O** | O - Open/Closed Principle (OCP)       | کلاس‌ها برای توسعه باز ولی برای تغییر بسته باشند       |
| **L** | Liskov Substitution Principle (LSP)   | زیرکلاس‌ها باید قابل جایگزینی با کلاس پایه باشند        |
| **I** | Interface Segregation Principle (ISP) | هر Interface باید فقط متدهای مورد نیاز را تعریف کند  |
| **D** | Dependency Inversion Principle (DIP)  | وابستگی‌ها باید به Abstraction باشد نه به پیاده‌سازی   |

---

### 💯 ساختار ماژولار، DDD، با تست‌ها و BDD/TDD

```text
app/
    ├─ Shared/                                          # بخش اشتراکی بین تمام ماژول‌ها
    │  ├─ Enums/                                        # Enumهای عمومی
    │  │    ├─ ActivityCategoryType.php                 # نوع فعالیت (sign_score, real_score, qualitative_score)
    │  │    └─ UserRole.php                             # نقش‌های کاربری (Admin, Teacher, Student)
    │  ├─ ValueObjects/                                 # اشیاء با ارزش مشترک بین ماژول‌ها
    │  │    ├─ Money.php                                # مقدار پول و واحد آن
    │  │    └─ DateRange.php                            # بازه زمانی عمومی
    │  ├─ Helpers/                                      # توابع عمومی و کمکی
    │  │    └─ FormatterHelper.php                      # فرمت‌دهی تاریخ، عدد، متن و ...
    │  ├─ Contracts/                                    # Interfaceهای عمومی
    │  │    ├─ RepositoryInterface.php                  # Interface پایه برای Repositoryها
    │  │    └─ NotifierInterface.php                    # Interface برای ارسال نوتیفیکیشن
    │  ├─ Events/                                       # رویدادهای مشترک
    │  │    └─ UserRegisteredEvent.php                  # مثال: ثبت نام کاربر
    │  ├─ Jobs/                                         # Jobهای عمومی
    │  │    └─ SendEmailJob.php                         # ارسال ایمیل
    │  ├─ Exceptions/                                   # Exceptionهای عمومی
    │  │    └─ NotFoundException.php                    # خطای پیدا نشدن آیتم
    │  └─ Config/                                       # مقادیر ثابت و کانفیگ‌های اشتراکی
    │       └─ Constants.php                            # مقادیر ثابت عمومی مثل MAX_UPLOAD_SIZE
    ├─ Modules/
    │   └─ Attendance/
    │       ├─ Domain/                                      # هسته دامنه (Business Logic Core)
    │       │    ├─ Entities/                               # مدل‌های دامنه
    │       │    │    ├─ Attendance.php                     # مدل Attendance و منطق مربوط به حضور دانش‌آموز
    │       │    │    └─ AttendancePermit.php               # مدل AttendancePermit و منطق مربوط به مجوزهای غیبت
    │       │    ├─ ValueObjects/                           # اشیاء با ارزش که مقادیر پیچیده را مدل می‌کنند
    │       │    │    ├─ TimeRange.php                      # بازه زمانی حضور
    │       │    │    └─ AttendanceStatus.php               # وضعیت حضور (حضوری، غیبت، مرخصی)
    │       │    ├─ Repositories/                           # Interfaceها برای Repositoryها
    │       │    │    └─ AttendanceRepositoryInterface.php  # تعریف متدهای انتزاعی برای دسترسی به داده‌ها
    │       │    ├─ Enums/                                  # Enumهای مخصوص این ماژول
    │       │    │    ├─ SignScore.php                      # نمره مثبت یا منفی
    │       │    │    └─ QualitativeScore.php               # نمره کیفی
    │       │    └─ Services/                               # قوانین دامنه و منطق تجاری
    │       │         └─ AttendanceService.php              # منطق عملیات روی Attendance، محاسبات و قوانین
    │       ├─ Infrastructure/                              # لایه زیرساخت و پیاده‌سازی
    │       │    └─ Repositories/                           # پیاده‌سازی Repositoryها
    │       │         └─ EloquentAttendanceRepository.php   # دسترسی به دیتابیس با Eloquent
    │       ├─ Application/                                 # لایه اپلیکیشن، پردازش DTO، Command و Query
    │       │    ├─ DTOs/                                   # Data Transfer Objects
    │       │    │    └─ AttendanceDTO.php                  # شکل داده برای انتقال بین لایه‌ها
    │       │    ├─ Commands/                               # عملیات‌های قابل اجرا (CQRS)
    │       │    │    ├─ CreateAttendanceCommand.php
    │       │    │    └─ UpdateAttendanceCommand.php
    │       │    └─ Queries/                                # کوئری‌ها برای بازیابی داده‌ها
    │       │         └─ ListAttendanceQuery.php
    │       ├─ Http/                                        # لایه ارتباط با وب / API
    │       │    ├─ Controllers/                            # کنترلرهای HTTP
    │       │    │    └─ AttendanceController.php           # دریافت درخواست‌ها و بازگرداندن پاسخ
    │       │    ├─ Requests/                               # درخواست‌ها و اعتبارسنجی
    │       │    │    ├─ AttendanceRequest.php              # اعتبارسنجی Create/Update Attendance
    │       │    │    └─ AttendanceFilterRequest.php        # اعتبارسنجی فیلترهای Attendance
    │       │    ├─ Resources/                              # Resourceها برای پاسخ JSON
    │       │    │    └─ AttendanceResource.php
    │       │    └─ Filters/                                # فیلترهای جستجو
    │       │         └─ AttendanceFilter.php
    │       ├─ Actions/                                     # Actionها برای واحدهای عملیاتی
    │       │    └─ MarkAttendanceAction.php                # عمل نشانه‌گذاری حضور یک دانش‌آموز
    │       ├─ Helpers/                                     # توابع کمکی مرتبط با ماژول
    │       │    └─ AttendanceHelper.php                    # توابع یوتیلیتی برای عملیات متداول روی Attendance
    │       ├─ routes.php                                   # تعریف روت‌های مخصوص ماژول
    │       ├─ Tests/                                       # تست‌ها
    │       │    ├─ Unit/                                   # تست‌های واحد
    │       │    │    ├─ Services/
    │       │    │    │    └─ AttendanceServiceTest.php     # تست واحد منطق دامنه
    │       │    │    └─ Entities/
    │       │    │         └─ AttendanceTest.php            # تست Entityها
    │       │    ├─ Feature/                                # تست لایه اپلیکیشن و HTTP
    │       │    │    ├─ Controllers/
    │       │    │    │    └─ AttendanceControllerTest.php
    │       │    │    └─ Filters/
    │       │    │         └─ AttendanceFilterTest.php
    │       │    ├─ Integration/                            # تست اتصال به DB و Repository
    │       │    │    └─ Repositories/
    │       │    │         └─ EloquentAttendanceRepositoryTest.php
    │       │    └─ Acceptance/                             # تست‌های BDD / End-to-End
    │       │         └─ AttendanceFeatureTest.php
    ├─ Database/
        └─ Migrations/                                                # Migrationها برای دیتابیس
            ├─ 2025_10_21_000001_create_attendances_table.php         # ساخت جدول attendances
            └─ 2025_10_21_000002_create_attendance_permits_table.php  # ساخت جدول attendance_permits
```