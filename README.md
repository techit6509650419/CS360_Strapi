# 🚀 Strapi

## วัตถุประสงค์

Strapi เป็นระบบจัดการเนื้อหาแบบ Headless CMS (Content Management System) ที่พัฒนาด้วยภาษา JavaScript และใช้ Node.js ที่ยืดหยุ่นและทรงพลัง ซึ่งช่วยให้นักพัฒนาสามารถสร้างและจัดการเนื้อหาเว็บหรือแอปพลิเคชันได้ง่าย โดยไม่ถูกจำกัดด้วยเทคโนโลยีส่วนหน้า (Frontend) ที่ต้องใช้งาน Strapi ถูกออกแบบมาให้รองรับการทำงานในสภาพแวดล้อมที่หลากหลายและสามารถปรับแต่งให้ตรงตามความต้องการเฉพาะของแต่ละโปรเจกต์ได้

## กรณีการใช้งาน

1. สร้างเว็บไซต์แบบ Static หรือ Dynamic: นักพัฒนาสามารถใช้ Strapi ร่วมกับเฟรมเวิร์กต่าง ๆ เช่น Gatsby หรือ Next.js เพื่อสร้างเว็บไซต์ที่มีประสิทธิภาพสูง

2. จัดการเนื้อหาหลายภาษา: Strapi สามารถรองรับการจัดการเนื้อหาในหลายภาษา ทำให้เหมาะสำหรับเว็บไซต์หรือแอปพลิเคชันที่ต้องการรองรับผู้ใช้จากหลายประเทศ

3. การสร้าง API สำหรับแอปพลิเคชันมือถือ: ด้วยความสามารถในการสร้าง API นักพัฒนาสามารถใช้ Strapi เป็นแบ็กเอนด์สำหรับแอปพลิเคชันมือถือ

4. การสร้างและจัดการบล็อกหรือเนื้อหาสำหรับองค์กร: องค์กรต่าง ๆ สามารถใช้ Strapi เพื่อสร้างและจัดการบล็อกข่าว ประกาศ หรือเนื้อหาอื่น ๆ ที่ต้องการเผยแพร่

5. การพัฒนาแพลตฟอร์ม E-commerce: Strapi สามารถใช้เป็น CMS สำหรับแพลตฟอร์ม E-commerce ที่ต้องการจัดการผลิตภัณฑ์และเนื้อหาที่เกี่ยวข้อง

## องค์ประกอบ 

📝 Content Manager

จัดการและเผยแพร่ประเภทเนื้อหาทั้งหมดที่สร้างขึ้นด้วย Content-type Builder

📚 Content Type Builder

สร้างโครงสร้างข้อมูลของคุณโดยการสร้างและจัดการประเภทเนื้อหา (Content-types)

🗃️ Media Library

อัปโหลดและจัดการสื่อทั้งหมดของคุณ และจัดระเบียบให้เป็นโฟลเดอร์ต่าง ๆ

📅 Releases

จัดระเบียบรายการเนื้อหาในคอนเทนเนอร์เพื่อการเผยแพร่และยกเลิกการเผยแพร่

🔐 Users, Roles & Permission

กำหนดสิทธิ์ให้กับบทบาท ซึ่งจะถูกเชื่อมโยงกับผู้ใช้

🔗 Plugins

ค้นหาฟังก์ชันเพิ่มเติมเพื่อขยายและปรับแต่งแอปพลิเคชันของคุณ

⚙️ General Settings

เข้าถึงฟีเจอร์ที่จำเป็นสำหรับการตั้งค่าแผงควบคุมผู้ดูแลระบบของ Strapi

## .gitignore File

ไฟล์ `.gitignore` คือไฟล์ที่ใช้บอก Git ว่าไฟล์หรือโฟลเดอร์ใดบ้างที่ไม่ต้องการติดตาม (track) หรือไม่ต้องการอัปโหลดไปยัง Git repository โดยเฉพาะไฟล์ที่ไม่ต้องการในระบบควบคุมเวอร์ชัน เช่น ไฟล์ที่ถูกสร้างขึ้นอัตโนมัติ หรือไฟล์ที่มีข้อมูลส่วนตัวที่ไม่ควรแชร์ โดยเนื้อหาในไฟล์ที่ Strapi มีให้มีดังนี้

ได้ครับ นี่คือคำอธิบายสั้นๆ ของแต่ละไฟล์และโฟลเดอร์ในไฟล์ `.gitignore` ที่คุณจัดหมวดหมู่:

### 1. **Operating System**
   - **OS X**
     - `.DS_Store`: ไฟล์ metadata ที่สร้างโดย macOS เพื่อเก็บข้อมูลไดเร็กทอรี
     - `.AppleDouble`: ไฟล์ที่ใช้เก็บข้อมูลของไฟล์ Mac ในฟอร์แมต DOS/Windows
     - `.LSOverride`: ไฟล์สำหรับการตั้งค่าไอคอนและรูปลักษณ์ใน macOS
     - `Icon`: ไฟล์ไอคอนใน macOS
     - `.Spotlight-V100`: โฟลเดอร์ที่ใช้โดย Spotlight ของ macOS สำหรับการจัดทำดัชนี
     - `.Trashes`: โฟลเดอร์ถังขยะ (Trash) ของ macOS
     - `._*`: ไฟล์ทรัพยากร (resource forks) ของ macOS
   - **Linux**
     - `*~`: ไฟล์สำรองที่สร้างขึ้นโดยโปรแกรมแก้ไขข้อความบางตัวใน Linux
   - **Windows**
     - `Thumbs.db`: ไฟล์แคชไอคอนที่สร้างโดย Windows Explorer
     - `ehthumbs.db`: ไฟล์แคชไอคอนสำหรับวิดีโอใน Windows
     - `Desktop.ini`: ไฟล์การตั้งค่าส่วนตัวของโฟลเดอร์ใน Windows
     - `$RECYCLE.BIN/`: โฟลเดอร์ถังขยะ (Recycle Bin) ของ Windows
     - `*.cab`: ไฟล์การติดตั้ง Windows Cabinet
     - `*.msi`: ไฟล์ติดตั้ง Windows Installer
     - `*.msm`, `*.msp`: ไฟล์โมดูลและแพตช์สำหรับ Windows Installer

### 2. **Packages**
   - **Common Packages**
     - `*.7z`, `*.zip`, `*.rar`: ไฟล์บีบอัดทั่วไป
     - `*.csv`, `*.dat`: ไฟล์ข้อมูล
     - `*.dmg`: ไฟล์ดิสก์อิมเมจของ macOS
     - `*.gz`, `*.tar`: ไฟล์บีบอัดและอาร์ไคฟ์ของ Unix/Linux
     - `*.iso`: ไฟล์ดิสก์อิมเมจสำหรับการติดตั้งระบบ
     - `*.jar`: ไฟล์อาร์ไคฟ์ของ Java
   - **Binary and Executable Files**
     - `*.com`, `*.exe`: ไฟล์โปรแกรมประยุกต์ที่สามารถรันได้
     - `*.class`: ไฟล์ที่คอมไพล์จาก Java
     - `*.dll`, `*.so`: ไฟล์ไลบรารีไดนามิกของ Windows และ Unix/Linux
     - `*.o`: ไฟล์ object ที่คอมไพล์แล้ว
   - **Temp and Swap Files**
     - `*.seed`: ไฟล์ชั่วคราวที่เกี่ยวข้องกับการตั้งค่าระบบ
     - `*.swo`, `*.swp`: ไฟล์ swap ที่สร้างโดยโปรแกรมแก้ไขข้อความ (เช่น Vim)
     - `*.out`: ไฟล์ output ที่สร้างหลังจากการคอมไพล์
     - `*.pid`: ไฟล์ที่เก็บ ID ของโปรเซส

### 3. **Logs and Databases**
   - **Temp and Logs**
     - `.tmp`: ไฟล์ชั่วคราวที่สร้างโดยโปรแกรมต่างๆ
     - `*.log`: ไฟล์ล็อกที่ใช้บันทึกข้อมูลการทำงานของโปรแกรม
   - **Database Files**
     - `*.sql`: ไฟล์สคริปต์ SQL สำหรับการจัดการฐานข้อมูล
     - `*.sqlite`, `*.sqlite3`: ไฟล์ฐานข้อมูล SQLite

### 4. **Misc.**
   - **Miscellaneous**
     - `*#`: ไฟล์สำรองที่สร้างโดยโปรแกรมแก้ไขข้อความบางตัว
     - `ssl`: โฟลเดอร์หรือไฟล์ที่เกี่ยวข้องกับใบรับรอง SSL
     - `.idea`: โฟลเดอร์การตั้งค่าโครงการของ IntelliJ IDEA
     - `nbproject`: โฟลเดอร์การตั้งค่าโครงการของ NetBeans
     - `public/uploads/*`: ไฟล์อัปโหลดใน Strapi (ไม่ต้องการติดตาม)
     - `!public/uploads/.gitkeep`: ยกเว้นไฟล์ `.gitkeep` เพื่อรักษาโครงสร้างโฟลเดอร์

### 5. **Node.js**
   - **Node.js Folders**
     - `lib-cov`: โฟลเดอร์ที่ใช้ในการตรวจสอบความครอบคลุมของโค้ด
     - `lcov.info`: ไฟล์รายงานความครอบคลุมของโค้ดในรูปแบบ lcov
     - `pids`: ไฟล์ที่เก็บ Process IDs ของ Node.js
     - `logs`: ไฟล์ล็อกที่สร้างโดย Node.js
     - `results`: โฟลเดอร์ที่ใช้เก็บผลการทดสอบ
   - **Dependencies Folder**
     - `node_modules`: โฟลเดอร์ที่เก็บแพ็กเกจและ dependencies ที่ติดตั้งโดย npm หรือ yarn
   - **Node.js History**
     - `.node_history`: ไฟล์ที่เก็บประวัติคำสั่งที่พิมพ์ใน Node.js REPL

### 6. **Tests**
   - **Coverage Folder**
     - `coverage`: โฟลเดอร์ที่เก็บข้อมูลความครอบคลุมของการทดสอบ

### 7. **Strapi**
   - **Environment Files**
     - `.env`: ไฟล์ที่เก็บตัวแปรสภาพแวดล้อมสำหรับการตั้งค่าต่างๆ
   - **Strapi System Files and Folders**
     - `license.txt`: ไฟล์ใบอนุญาตของ Strapi
     - `exports`: โฟลเดอร์หรือไฟล์ที่เกี่ยวข้องกับการส่งออกข้อมูล
     - `.strapi`: โฟลเดอร์การตั้งค่าและข้อมูลระบบของ Strapi
     - `dist`, `build`: โฟลเดอร์ที่เก็บไฟล์ที่สร้างจากการ build โครงการ
     - `.strapi-updater.json`, `.strapi-cloud.json`: ไฟล์การตั้งค่าและการอัปเดตของ Strapi

## วิธีการติดตั้ง Strapi ลง Local Machine ด้วย CLI

### ก่อนที่จะติดตั้ง Strapi ต้องติดตั้ง

- **Node.js**
- **แพ็กเกจ Node.js**
  - npm (v6 ขึ้นไป)
  - yarn
- **Python** (หากใช้ฐานข้อมูล SQLite)

## การสร้างโปรเจกต์ Strapi

### 1. เปิดเทอร์มินัลแล้วรันคำสั่งต่อไปนี้:

#### ใช้ Yarn

```bash
yarn create strapi-app my-project
```

### 2. เลือกประเภทการติดตั้ง Quickstart

- เลือกใช้ฐานข้อมูลเริ่มต้น (SQLite) ซึ่งจะทำให้การตั้งค่าเร็วและง่ายขึ้น

### 3. ข้ามขั้นตอนการล็อกอิน Strapi Cloud

- ใช้ปุ่มลูกศรเพื่อเลือก Skip

## การรันแอปพลิเคชัน Strapi

### ใช้ Yarn

```bash
yarn develop
```

## นำ Strapi application ลงไปยัง GitHub 

### 1. สร้าง Github Repository

### 2. Push โปรเจกต์ไปยัง GitHub

```bash
# เริ่มต้น Git ในโปรเจกต์ของคุณ
git init

# เพิ่มไฟล์ทั้งหมดในโปรเจกต์ไปยัง Git
git add .

# สร้างคอมมิตแรก
git commit -m "Add Strapi project"

# ตั้งชื่อสาขาหลักเป็น main
git branch -M main

# เชื่อมต่อโปรเจกต์กับ GitHub Repository
git remote add origin https://github.com/techit6509650419/CS360_Strapi.git

# พุชโปรเจกต์ไปยัง GitHub
git push -u origin main
```
## วิธี Deploy Strapi ลง AWS

### 1. สร้าง AWS EC2

### 2. ติดตั้ง Node.js ด้วย npm บน

```bash
cd ~
sudo yum update
...
sudo yum install -y ca-certificates curl gnupg
...
sudo yum install nodejs -y
...
node -v && npm -v
```

### 3. การสร้างและเปลี่ยนไดเรกทอรีเริ่มต้นของ npm

การดำเนินการต่อไปนี้จะช่วยให้คุณแก้ไขปัญหาสิทธิ์ในการเข้าถึงจาก [npmjs.com](https://www.npmjs.com):

### 1. **สร้างไดเรกทอรี `.npm-global` และตั้งค่าพาธไปยังไดเรกทอรีนี้สำหรับ `node_modules`**

   ```bash
   cd ~
   mkdir ~/.npm-global
   npm config set prefix '~/.npm-global'
   ```

### 2. **สร้าง (หรือแก้ไข) ไฟล์ `~/.profile`**

   ```bash
   sudo nano ~/.profile
   ```
   
   เพิ่มบรรทัดเหล่านี้ที่ด้านล่างของไฟล์ `~/.profile`:

   ```bash
   # set PATH so global node modules install without permission issues
   export PATH=~/.npm-global/bin:$PATH
   ```

### 3. **อัปเดตตัวแปรระบบของคุณ**

   ```bash
   source ~/.profile
   ```

###  4. ติดตั้ง Git
   ```bash
   sudo yum install -y git
   ```

###  5. ติดตั้ง Yarn
   ```bash
   npm install -g yarn
   ```

### 6. ติดตั้ง `pg`

ติดตั้งในเครื่องพัฒนา (development machine) ให้ไปที่ไดเรกทอรีรากของโปรเจกต์ Strapi 

```bash
cd ./my-project/
```
จากนั้นติดตั้งแพ็กเกจ `pg`:

```bash
npm add pg
```
### 7. การติดตั้ง Strapi AWS S3 Upload Provider

#### ติดตั้ง Strapi AWS S3 Upload Provider

```bash
npm install @strapi/provider-upload-aws-s3
```
แก้ไขไฟล์ที่ `./config/plugins.js` ด้วยการเพิ่มการตั้งค่าต่อไปนี้:

#### **JavaScript**

```javascript
module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        s3Options: {
          accessKeyId: env('AWS_ACCESS_KEY_ID'),
          secretAccessKey: env('AWS_ACCESS_SECRET'),
          region: env('AWS_REGION'),
          params: {
            Bucket: env('AWS_BUCKET_NAME'),
          },
        }
      },
      // These parameters could solve issues with ACL public-read access — see [this issue](https://github.com/strapi/strapi/issues/5868) for details
      actionOptions: {
        upload: {
          ACL: null
        },
        uploadStream: {
          ACL: null
        },
      }
    },
  }
});
```

### 8. ส่งการเปลี่ยนแปลงไปยัง GitHub

   ```bash
   git add .
   
   git commit -m 'Installed pg, aws-S3 upload provider and updated the config files'

   git push
   ```
## 9. การนำเข้าและติดตั้งโปรเจกต์จาก GitHub บน EC2

```bash
cd ~
git clone https://github.com/your-name/your-project-repo.git
```

### 10. ติดตั้งแพ็กเกจสำหรับโปรเจกต์

```bash
cd ./my-project/
npm install
NODE_ENV=production npm run build
```
### 11. ติดตั้ง PM2 Runtime

```bash
npm install pm2@latest -g
```
### 12. การตั้งค่า PM2 Runtime

ตั้งค่าไฟล์ `ecosystem.config.js` เพื่อกำหนดตัวแปรสภาพแวดล้อมที่เชื่อมต่อ Strapi กับฐานข้อมูล

#### 1. สร้างและแก้ไขไฟล์ ecosystem.config.js

```bash
cd ~
pm2 init
sudo nano ecosystem.config.js
```

#### 2. อัปเดตเนื้อหาไฟล์

แทนที่เนื้อหาในไฟล์ `ecosystem.config.js` ด้วย

```javascript
module.exports = {
  apps: [
    {
      name: 'your-app-name', // ชื่อโปรเจกต์ของคุณ
      cwd: '/home/ubuntu/my-project', // เส้นทางไปยังโปรเจกต์ของคุณ
      script: 'npm', // ใช้ npm ในตัวอย่างนี้ สามารถใช้ yarn ได้เช่นกัน
      args: 'start', // สคริปต์เพื่อเริ่มต้นเซิร์ฟเวอร์ Strapi, `start` เป็นค่าเริ่มต้น
      env: {
        APP_KEYS: 'your app keys', // คุณสามารถค้นหาได้ในไฟล์ .env ของโปรเจกต์ของคุณ
        API_TOKEN_SALT: 'your api token salt',
        ADMIN_JWT_SECRET: 'your admin jwt secret',
        JWT_SECRET: 'your jwt secret',
        NODE_ENV: 'production',
        DATABASE_HOST: 'your-unique-url.rds.amazonaws.com', // Endpoint ฐานข้อมูลในแท็บ 'Connectivity & Security'
        DATABASE_PORT: '5432',
        DATABASE_NAME: 'strapi', // ชื่อ DB ในแท็บ 'Configuration'
        DATABASE_USERNAME: 'postgres', // ชื่อผู้ใช้เริ่มต้น
        DATABASE_PASSWORD: 'Password',
        AWS_ACCESS_KEY_ID: 'aws-access-key-id',
        AWS_ACCESS_SECRET: 'aws-access-secret', // หาได้จาก Amazon S3 Dashboard
        AWS_REGION: 'aws-region',
        AWS_BUCKET_NAME: 'my-project-bucket-name',
      },
    },
  ],
};
```
### 13. เริ่มต้น PM2

ใช้คำสั่งต่อไปนี้เพื่อเริ่มต้น PM2 ด้วยไฟล์ `ecosystem.config.js`:

```bash
cd ~
pm2 start ecosystem.config.js
```

สามารถเข้าถึงโปรเจกต์ Strapi ผ่าน URL: `http://your-ip-address:1337/` 








