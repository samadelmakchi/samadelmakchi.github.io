# 📕 Laravel Framework

### 1️⃣ Directory Structure (ساختار پوشه‌ها)

| پوشه         | توضیح                                                         |
| ------------ | ------------------------------------------------------------- |
| `app/`       | شامل مدل‌ها، کنترلرها، middleware و منطق اصلی                 |
| `app/Http`   | کنترلرها، middleware و request‌ها                             |
| `app/Models` | مدل‌های Eloquent                                              |
| `bootstrap/` | bootstrap و فایل cache                                        |
| `config/`    | فایل‌های تنظیمات لاراول                                       |
| `database/`  | مایگریشن‌ها، seeders و factories                              |
| `public/`    | مسیر اصلی وب و فایل‌های عمومی                                 |
| `resources/` | viewها (Blade), lang و assets                                 |
| `routes/`    | فایل‌های routes (web.php, api.php, channels.php, console.php) |
| `storage/`   | کش، log، فایل‌های آپلود شده                                   |
| `tests/`     | تست‌های Unit و Feature                                        |
| `vendor/`    | پکیج‌های Composer                                             |

### 2️⃣ Artisan (فقط مرور سریع)

```bash
php artisan list            # لیست همه دستورات
php artisan serve           # اجرای سرور توسعه
php artisan migrate         # اجرای مایگریشن‌ها
php artisan make:controller NameController --api
php artisan make:model Name -m
php artisan tinker          # REPL لاراول
```

### 3️⃣ Routes (مسیرها)

```php
// مسیر ساده GET
Route::get('/users', [UserController::class, 'index']);

// مسیر POST
Route::post('/users', [UserController::class, 'store']);

// Route با پارامتر
Route::get('/users/{id}', [UserController::class, 'show']);

// گروه‌بندی و middleware
Route::prefix('admin')->middleware('auth')->group(function() {
    Route::get('/dashboard', [AdminController::class, 'index']);
});

// Resource routes
Route::resource('posts', PostController::class);
Route::apiResource('posts', PostController::class);
```

### 4️⃣ Config & Env

```php
// دسترسی به config
$value = config('app.timezone');

// تغییر تنظیمات runtime
config(['app.debug' => true]);

// دسترسی به env
$env = env('APP_ENV', 'production');
```

### 5️⃣ Service Container & Dependency Injection

```php
// استفاده از DI در کنترلر
public function __construct(UserRepository $users) {
    $this->users = $users;
}

// resolve از container
$userRepo = app(UserRepository::class);

// bind کلاس به interface
App::bind(UserRepositoryInterface::class, UserRepository::class);
```

### 6️⃣ Facades (پرکاربرد)

| Facade      | توضیح                              |
| ----------- | ---------------------------------- |
| `DB`        | Query Builder و دستورات مستقیم SQL |
| `Cache`     | دسترسی به کش                       |
| `Route`     | تعریف مسیرها                       |
| `Auth`      | احراز هویت و guardها               |
| `Log`       | نوشتن log                          |
| `Queue`     | کار با صف‌ها                       |
| `Validator` | اعتبارسنجی داده‌ها                 |
| `Storage`   | فایل‌ها و diskها                   |
| `Event`     | انتشار و گوش دادن Eventها          |
| `Schema`    | مایگریشن‌ها و تغییر جداول          |
| `Config`    | دسترسی به تنظیمات                  |


### 7️⃣ Helpers (پرکاربرد)

```php
// Routing and URL
route('users.show', ['id' => 1]);
url('/path');

// Data
old('name');
session('key', 'default');
request()->input('name');

// Date and time
now();
today();

// Array and string
collect([1,2,3])->sum();
Str::slug('Hello World');
Arr::get($array, 'key', 'default');
```

### 8️⃣ Middleware

```php
// Creating middleware
php artisan make:middleware CheckAdmin

// Register in Kernel.php
protected $routeMiddleware = [
    'admin' => \App\Http\Middleware\CheckAdmin::class,
];

// Use in Route
Route::middleware('admin')->group(function() {
    Route::get('/admin', [AdminController::class, 'index']);
});
```

### 9️⃣ Events & Listeners

```bash
php artisan make:event UserRegistered
php artisan make:listener SendWelcomeEmail --event=UserRegistered
```

```php
// Event release
event(new UserRegistered($user));

// Listener
public function handle(UserRegistered $event) {
    Mail::to($event->user->email)->send(new WelcomeMail());
}
```

### 🔟 Jobs & Queues

```bash
php artisan make:job SendEmailJob
php artisan queue:work
```

```php
dispatch(new SendEmailJob($user));
SendEmailJob::dispatch($user)->delay(now()->addMinutes(5));
```

### 1️⃣1️⃣ Validation

```php
$request->validate([
    'name' => 'required|string|max:255',
    'email' => 'required|email|unique:users,email'
]);

// استفاده از FormRequest
php artisan make:request StoreUserRequest
```

### 1️⃣2️⃣ View & Blade

```php
// retuen view
return view('users.index', ['users' => $users]);

// Blade directives
@foreach($users as $user)
    {{ $user->name }}
@endforeach

@if($user->isAdmin())
    Admin
@endif
```

### 1️⃣3️⃣ Storage و File System

```php
use Illuminate\Support\Facades\Storage;

// آپلود فایل
$path = $request->file('avatar')->store('avatars');

// دسترسی به فایل
Storage::disk('public')->get($path);

// لینک storage/public
php artisan storage:link
```

### 1️⃣4️⃣ Logging

```php
use Illuminate\Support\Facades\Log;

Log::info('User created', ['id' => $user->id]);
Log::warning('Something might be wrong');
Log::error('Something is broken!');
```

### 1️⃣5️⃣ Testing

```bash
php artisan make:test UserTest       # Feature Test
php artisan make:test UserUnitTest --unit  # Unit Test

// اجرای تست‌ها
php artisan test
```
