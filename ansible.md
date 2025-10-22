# 📘 Ansible

### 🏗️ ساختار کلی Ansible

```bash
ansible.cfg          # تنظیمات کلی
inventory.ini / yaml # فهرست هاست‌ها
playbook.yml         # لیست task‌ها
roles/
 ├── common/
 │   ├── tasks/
 │   ├── templates/
 │   ├── files/
 │   ├── vars/
 │   └── handlers/
```

### ⚙️ تنظیم فایل ansible.cfg

```ini
[defaults]
inventory = ./inventory.ini
remote_user = ubuntu
private_key_file = ~/.ssh/id_rsa
host_key_checking = False
retry_files_enabled = False
roles_path = ./roles
deprecation_warnings = False
```

### 🌍 فهرست هاست‌ها (Inventory)

#### 📄 ini:

```ini
[web]
web1 ansible_host=192.168.1.10 ansible_user=ubuntu
web2 ansible_host=192.168.1.11 ansible_user=ubuntu

[db]
db1 ansible_host=192.168.1.12 ansible_user=ubuntu

[all:vars]
ansible_python_interpreter=/usr/bin/python3
```

### 📄 YAML:

```yaml
all:
  hosts:
    web1:
      ansible_host: 192.168.1.10
  children:
    db:
      hosts:
        db1:
          ansible_host: 192.168.1.12

```

## 🧩 دستورات CLI اصلی

| دستور                                          | توضیح                     |
| ---------------------------------------------- | ------------------------- |
| `ansible all -m ping`                          | پینگ به تمام هاست‌ها      |
| `ansible web -m shell -a "uptime"`             | اجرای دستور در گروه `web` |
| `ansible-playbook site.yml`                    | اجرای Playbook            |
| `ansible-playbook play.yml --tags "setup"`     | اجرای تگ خاص              |
| `ansible-playbook play.yml --limit web1`       | محدود کردن به یک هاست     |
| `ansible-playbook play.yml -e "version=1.2.3"` | ارسال متغیر در زمان اجرا  |
| `ansible-vault encrypt secrets.yml`            | رمزگذاری فایل             |
| `ansible-vault view secrets.yml`               | مشاهده فایل رمزگذاری‌شده  |
| `ansible-vault decrypt secrets.yml`            | رمزگشایی                  |
| `ansible-doc -l`                               | لیست تمام ماژول‌ها        |
| `ansible-doc service`                          | مستندات ماژول خاص         |


## 📘 ساختار Playbook

```yaml
- name: Setup Web Server
  hosts: web
  become: yes
  vars:
    nginx_port: 80

  tasks:
    - name: Install Nginx
      apt:
        name: nginx
        state: present
        update_cache: yes

    - name: Start Nginx
      service:
        name: nginx
        state: started
        enabled: yes

    - name: Deploy Config
      template:
        src: nginx.conf.j2
        dest: /etc/nginx/nginx.conf
      notify: Restart Nginx

  handlers:
    - name: Restart Nginx
      service:
        name: nginx
        state: restarted
```

## 🧱 مهم‌ترین ماژول‌ها

### 📦 بسته‌ها

```yaml
- apt:
    name: nginx
    state: latest
    update_cache: yes

- yum:
    name: httpd
    state: present
```

### 🔧 سرویس‌ها

```yaml
- service:
    name: nginx
    state: restarted
    enabled: yes
```

### 📂 فایل‌ها

```yaml
- file:
    path: /opt/app
    state: directory
    mode: '0755'
    owner: root
    group: root
```

### 📄 تمپلیت

```yaml
- template:
    src: config.j2
    dest: /etc/myapp/config.ini
```

### 📤 کپی فایل

```yaml
- copy:
    src: ./index.html
    dest: /var/www/html/index.html
    mode: '0644'
```

### 🧠 دستور و شل

```yaml
- shell: "echo Hello > /tmp/hi.txt"
- command: "ls -l /etc"
```


### 💾 داکر

```yaml
- community.docker.docker_compose_v2:
    project_src: /opt/project
    state: present
```

## 🧮 متغیرها و Jinja2

### تعریف:

```yaml
vars:
  env: production
  port: 8080
```

### استفاده:

```yaml
- debug:
    msg: "App running in {{ env }} on port {{ port }}"
```

### از فایل:

```yaml
vars_files:
  - vars/common.yml
```

### از خط فرمان:

```yaml
ansible-playbook deploy.yml -e "env=staging"
```

## 🧱 شرط‌ها (Conditions)

```yaml
- name: Install Nginx only on Ubuntu
  apt:
    name: nginx
    state: present
  when: ansible_os_family == "Debian"

```

## 🔁 حلقه‌ها (Loops) 

```yaml
- name: Create multiple users
  user:
    name: "{{ item }}"
    state: present
  loop:
    - alice
    - bob
    - charlie
```

## 🏷️ تگ ها (Tags)

```yaml
- name: Install packages
  apt:
    name: nginx
    state: present
  tags: ['install']

- name: Deploy app
  copy:
    src: app
    dest: /srv/app
  tags: ['deploy']
```

## 🧰 Handlers

```yaml
- name: Copy config
  template:
    src: nginx.conf.j2
    dest: /etc/nginx/nginx.conf
  notify: Restart Nginx

```

## 📦 قوانین (Roles)

### ساختار:

```bash
roles/
 └── web/
     ├── tasks/main.yml
     ├── handlers/main.yml
     ├── templates/
     ├── files/
     ├── vars/main.yml
     ├── defaults/main.yml
     ├── meta/main.yml
```

### اجرای Role:

```yaml
- hosts: web
  roles:
    - web
```

## 🔐 Vault (رمزگذاری متغیرها)

### ایجاد:

```bash
ansible-vault create secrets.yml
```

### استفاده:

```yaml
vars_files:
  - secrets.yml
```

### اجرای Playbook:

```bash
ansible-playbook site.yml --ask-vault-pass
```
## 🧩 خطاگیری (Debugging)

### 

```yaml
- debug:
    var: ansible_facts

- name: Check variable
  debug:
    msg: "Current user: {{ ansible_user_id }}"
```

### فعال‌سازی Verbose:

```bash
ansible-playbook deploy.yml -vvv
```

## ⚡ Performance & Parallelism

| تنظیم            | توضیح                            |
| ---------------- | -------------------------------- |
| `-f 20`          | اجرای ۲۰ هاست همزمان             |
| `serial: 5`      | اجرای Playbook در گروه‌های ۵تایی |
| `strategy: free` | اجرای مستقل وظایف                |

## 🧩 Facts

### نمایش اطلاعات سیستم:

```bash
ansible all -m setup
```

### نمونه استفاده:

```yaml
- debug:
    msg: "Server IP: {{ ansible_default_ipv4.address }}"
```

## 🧠 ترفندهای مفید

### Conditional import:

```yaml
- import_playbook: deploy.yml
  when: env == "prod"
```

### Dynamic Includes:

```yaml
- include_tasks: "{{ ansible_os_family }}.yml"
```

### Register + When:

```yaml
- command: systemctl status nginx
  register: nginx_status
  ignore_errors: yes

- debug:
    var: nginx_status.stdout
  when: nginx_status.rc == 0
```

## 🧰 تست Playbook بدون اجرا (--check)

```bash
ansible-playbook play.yml --check --diff
```

## 📦 Ansible Galaxy 

```bash
ansible-galaxy init role_name
ansible-galaxy install geerlingguy.docker
ansible-galaxy list
```

## 🔄 Idempotency

- Ansible همیشه در تلاش است تغییری اعمال نکند مگر لازم باشد.
- از changed_when و failed_when برای کنترل دقیق استفاده کن:

```yaml
- shell: "grep 'active' /tmp/status.txt"
  register: status
  changed_when: false
  failed_when: status.rc != 0
```

## 🧰 ابزارهای مکمل مفید

| ابزار                   | کاربرد                            |
| ----------------------- | --------------------------------- |
| **Molecule**            | تست Roleها                        |
| **Ansible Lint**        | بررسی استانداردهای YAML           |
| **AWX / Ansible Tower** | داشبورد مدیریت مرکزی              |
| **Mitogen plugin**      | افزایش سرعت اجرا                  |
| **community.docker**    | مدیریت Docker Compose و کانتینرها |


## 🧩 مثال نهایی DevOps واقعی 

```yaml
- name: Deploy Dockerized App
  hosts: all
  become: true

  vars:
    app_dir: /opt/app

  tasks:
    - name: Ensure Docker Installed
      apt:
        name: docker.io
        state: present
        update_cache: yes

    - name: Copy compose file
      copy:
        src: docker-compose.yml
        dest: "{{ app_dir }}/docker-compose.yml"

    - name: Run containers
      community.docker.docker_compose_v2:
        project_src: "{{ app_dir }}"
        state: present
```