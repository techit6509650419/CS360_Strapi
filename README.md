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





Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project including [Strapi Cloud](https://cloud.strapi.io). Browse the [deployment section of the documentation](https://docs.strapi.io/dev-docs/deployment) to find the best solution for your use case.

```
yarn strapi deploy
```

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://strapi.io/blog) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>
