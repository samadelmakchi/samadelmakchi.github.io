# 📘 Laravel Helper Functions Cheat Sheet

Laravel دارای مجموعه‌ای از **Helper Functions** است که برای توسعه سریع‌تر بسیار کاربردی هستند.

---

## 🔹 مسیرها و URL‌ها

```php
url('path');                        // ایجاد URL کامل
asset('img/logo.png');              // مسیر asset‌ها
route('users.show', ['id' => 1]);   // مسیر بر اساس نام Route
secure_url('profile');              // URL با https
action([UserController::class, 'index']); // مسیر تابع کنترلر
```

---

## 🔹 داده‌ها و Request‌ها

```php
request('name');                   // دریافت پارامتر از Request
request()->all();                  // تمام داده‌های Request
old('email');                      // مقدار قبلی فیلد فرم
session('key');                    // گرفتن مقدار از Session
csrf_token();                      // تولید توکن CSRF
```

---

## 🔹 مسیرها و فایل‌ها

```php
base_path('config/app.php');       // مسیر پوشه اصلی پروژه
app_path('Http/Controllers');      // مسیر پوشه app
config_path();                     // مسیر config
storage_path('logs');              // مسیر storage
public_path('img');                // مسیر public
database_path('migrations');       // مسیر دیتابیس
```

---

## 🔹 آرایه‌ها (Arrays)

```php
use Illuminate\Support\Arr;

Arr::get($array, 'key', 'default');         // گرفتن مقدار
Arr::has($array, 'key');                    // بررسی وجود کلید
Arr::set($array, 'key', 'value');           // تنظیم مقدار
Arr::only($array, ['id', 'name']);          // فقط کلیدهای مشخص
Arr::except($array, ['password']);          // حذف کلیدها
Arr::pluck($array, 'email');                // استخراج مقادیر کلید خاص
```

---

## 🔹 رشته‌ها (Strings)

```php
use Illuminate\Support\Str;

Str::slug('Hello World');                   // hello-world
Str::limit('This is a long text', 10);      // This is a...
Str::upper('laravel');                      // LARAVEL
Str::lower('LARAVEL');                      // laravel
Str::random(16);                            // رشته تصادفی
Str::startsWith('Hello', 'He');             // true
Str::contains('Laravel is awesome', 'some'); // true
Str::replace('Laravel', 'PHP', 'Laravel Rocks'); // PHP Rocks
```

---

## 🔹 تاریخ و زمان

```php
now();                                     // شی Carbon از زمان فعلی
today();                                   // فقط تاریخ امروز
now()->addDays(3);                         // اضافه کردن روز
now()->format('Y-m-d H:i');                // فرمت دلخواه
```

---

## 🔹 پاسخ‌ها و JSON

```php
response()->json(['message' => 'OK'], 200); // پاسخ JSON
response('Hello World', 200);               // پاسخ متنی
redirect('home');                           // ریدایرکت
redirect()->route('dashboard');             // ریدایرکت به route
abort(404, 'Not Found');                    // خطای HTTP
```

---

## 🔹 لاگ‌ها (Logging)

```php
logger('User logged in');                   // لاگ ساده
Log::info('Info message');                  // سطح info
Log::error('Error occurred', ['id' => 1]);  // سطح error
```

---

## 🔹 Env و Config

```php
env('APP_ENV');                            // دریافت مقدار env
config('app.timezone');                    // دریافت مقدار config
config(['app.debug' => true]);             // تغییر مقدار در runtime
```

---

## 🔹 کمکی‌های Collection

```php
collect([1,2,3])->sum();                   // جمع مقادیر
collect([1,2,3])->avg();                   // میانگین
collect(['a'=>1, 'b'=>2])->keys();         // کلیدها
collect(['a'=>1, 'b'=>2])->values();       // مقادیر
collect([1,2,3,4])->filter(fn($v)=>$v>2);  // فیلتر
collect([1,2,3])->map(fn($v)=>$v*2);       // نگاشت
```

---

## 🔹 کمکی‌های Debug

```php
dd($var);                                  // Dump & Die
dump($var);                                // Dump بدون توقف
ray($var);                                 // ارسال به Laravel Ray (در صورت نصب)
```

---

## 🔹 مسیرها و View

```php
view('users.index', ['users'=>$users]);    // بازگشت View
view()->exists('users.index');             // بررسی وجود View
back();                                    // بازگشت به صفحه قبل
```

---

## 🔹 کش (Cache)

```php
cache(['key' => 'value'], now()->addMinutes(10));  // ذخیره در cache
cache('key');                                      // گرفتن مقدار
Cache::remember('users', 60, fn() => User::all()); // ذخیره یا بازیابی
```

---

## 🔹 Auth و User

```php
auth()->user();                           // کاربر لاگین شده
auth()->check();                          // بررسی ورود
auth()->id();                             // شناسه کاربر
```

---

## 🔹 صف‌ها (Queues)

```php
dispatch(new SendEmailJob($user));         // ارسال job به صف
queue()->push(new JobClass);               // اضافه کردن به صف
```

---

## 🔹 رویدادها (Events)

```php
event(new UserRegistered($user));          // انتشار Event
```

---

## 🔹 متفرقه

```php
bcrypt('password');                       // هش رمز عبور
abort_if(!$user, 404);                    // شرط و خطا
optional($user)->email;                   // جلوگیری از خطای null
tap($user)->update(['active'=>1]);        // اجرای عمل و برگرداندن شی
```

---

✅ این Cheat Sheet شامل پرکاربردترین **Helper Functions لاراول** است و برای توسعه سریع و تمیز بسیار مفید است.
