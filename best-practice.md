# 📘 Best Practice

## ⚙️ SOLID

| حرف   | اصل                   | هدف                                                  |
| ----- | ------------------------------------- | ---------------------------------------------------- |
| **S** | Single Responsibility Principle (SRP) | هر کلاس فقط یک مسئولیت داشته باشد                     |
| **O** | O - Open/Closed Principle (OCP)       | کلاس‌ها برای توسعه باز ولی برای تغییر بسته باشند       |
| **L** | Liskov Substitution Principle (LSP)   | زیرکلاس‌ها باید قابل جایگزینی با کلاس پایه باشند        |
| **I** | Interface Segregation Principle (ISP) | هر Interface باید فقط متدهای مورد نیاز را تعریف کند  |
| **D** | Dependency Inversion Principle (DIP)  | وابستگی‌ها باید به Abstraction باشد نه به پیاده‌سازی   |

---

## ⚙️ Clean Code

---

### 💯 ساختار ماژولار، DDD، با تست‌ها و BDD/TDD

```python
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