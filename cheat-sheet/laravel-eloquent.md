# 📘 Laravel Eloquent

### 1️⃣ Create / Insert (ایجاد و ذخیره مدل‌ها)

```php
// ایجاد و ذخیره مدل جدید
$user = new User;
$user->name = 'Ali';
$user->email = 'ali@example.com';
$user->password = bcrypt('password');
$user->save();

// ایجاد مدل با Mass Assignment (fillable لازم است)
$user = User::create([
    'name' => 'Sara',
    'email' => 'sara@example.com',
    'password' => bcrypt('password')
]);
```

### 2️⃣ Read / Select (خواندن داده‌ها)

```php
// همه رکوردها
$users = User::all();

// پیدا کردن بر اساس primary key
$user = User::find(1);

// پیدا کردن یا خطا دادن
$user = User::findOrFail(1);

// شرط ساده
$users = User::where('status', 'active')->get();

// چند شرط
$users = User::where('status', 'active')
             ->where('role', 'admin')
             ->get();

// اولین رکورد
$user = User::where('email', 'ali@example.com')->first();

// انتخاب ستون‌ها
$users = User::select('id', 'name', 'email')->get();
```

### 3️⃣ Update (بروزرسانی داده‌ها)

```php
// بروزرسانی رکورد خاص
$user = User::find(1);
$user->name = 'Updated Name';
$user->save();

// Mass Update
User::where('status', 'inactive')->update(['status' => 'active']);
```

### 4️⃣ Delete (حذف داده‌ها)

```php
// حذف مدل
$user = User::find(1);
$user->delete();

// حذف بر اساس شرط
User::where('status', 'inactive')->delete();

// حذف همه رکوردها
User::truncate();
```

### 5️⃣ Soft Deletes (حذف نرم)

```php
use Illuminate\Database\Eloquent\SoftDeletes;

class User extends Model {
    use SoftDeletes;
}

// حذف نرم
$user->delete();

// بازیابی
User::withTrashed()->find(1)->restore();

// فقط رکوردهای حذف‌شده
$trashedUsers = User::onlyTrashed()->get();

// حذف دائمی
$user->forceDelete();
```

### 6️⃣ Relationships (روابط)

#### 6.1 One-to-One (یک به یک)

```php
class User extends Model {
    public function profile() {
        return $this->hasOne(Profile::class);
    }
}

// استفاده
$user->profile;
```

#### 6.2 One-to-Many (یک به چند)

```php
class User extends Model {
    public function posts() {
        return $this->hasMany(Post::class);
    }
}

// استفاده
$user->posts;
```

#### 6.3 Many-to-Many (چند به چند)

```php
class User extends Model {
    public function roles() {
        return $this->belongsToMany(Role::class);
    }
}

// اضافه کردن نقش
$user->roles()->attach($roleId);

// حذف نقش
$user->roles()->detach($roleId);

// همزمان اضافه و حذف
$user->roles()->sync([$roleId1, $roleId2]);
```

#### 6.4 HasManyThrough (رابطه)

```php
class Country extends Model {
    public function posts() {
        return $this->hasManyThrough(Post::class, User::class);
    }
}
```

#### 6.5 رابطه Polymorphic

```php
class Post extends Model {
    public function comments() {
        return $this->morphMany(Comment::class, 'commentable');
    }
}

class Video extends Model {
    public function comments() {
        return $this->morphMany(Comment::class, 'commentable');
    }
}
```

### 7️⃣ Aggregates & Count

```php
// شمارش رکوردها
$count = User::count();

// بیشینه مقدار
$maxAge = User::max('age');

// کمینه مقدار
$minAge = User::min('age');

// میانگین
$avgAge = User::avg('age');

// مجموع
$totalAge = User::sum('age');
```

### 8️⃣ Query Scopes (Scopes محلی و جهانی)

#### Local Scope

```php
class User extends Model {
    public function scopeActive($query) {
        return $query->where('status', 'active');
    }
}

// استفاده
$users = User::active()->get();
```

#### Global Scope

```php
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Scope;

class ActiveScope implements Scope {
    public function apply(Builder $builder, Model $model) {
        $builder->where('status', 'active');
    }
}

// افزودن به مدل
protected static function booted() {
    static::addGlobalScope(new ActiveScope);
}
```

### 9️⃣ Accessors & Mutators

```php
// Accessor (خواندن)
public function getFullNameAttribute() {
    return $this->first_name . ' ' . $this->last_name;
}

// استفاده
$user->full_name;

// Mutator (نوشتن)
public function setPasswordAttribute($value) {
    $this->attributes['password'] = bcrypt($value);
}
```

### 🔟 Eager Loading (بارگذاری زودهنگام)

```php
// جلوگیری از N+1 Problem
$users = User::with('posts')->get();

// چند رابطه همزمان
$users = User::with(['posts', 'roles'])->get();
```

### 1️⃣1️⃣ Lazy Loading (بارگذاری تنبل)

```php
$user = User::find(1);
$posts = $user->posts; // query اجرا می‌شود هنگام دسترسی
```

### 1️⃣2️⃣ Other useful features (دیگر امکانات مفید)

```php
// FirstOrCreate
$user = User::firstOrCreate(
    ['email' => 'ali@example.com'],
    ['name' => 'Ali']
);

// FirstOrNew
$user = User::firstOrNew(['email' => 'ali@example.com']);
$user->name = 'Ali';
$user->save();

// UpdateOrCreate
$user = User::updateOrCreate(
    ['email' => 'ali@example.com'],
    ['name' => 'Ali Updated']
);

// Chunking (برای داده‌های بزرگ)
User::chunk(100, function($users) {
    foreach ($users as $user) {
        // عملیات روی هر chunk
    }
});

// Pagination
$users = User::paginate(15);
$users = User::simplePaginate(15);
```

