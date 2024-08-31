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

### `develop`

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
