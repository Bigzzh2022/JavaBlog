# JavaBlog
Vue3+Ts+Element plus+Java+Mysql博客Powered by Cursor

以完成内容：
- [x] 右键鼠标菜单
- [x] F12弹窗
- [x] 前端基本页面
- [x] 登录和注册

数据库在![Clip_2024-11-15_14-53-22](https://github.com/user-attachments/assets/1df7f992-3350-4b1a-a7e3-30e2c3c8ade4)里修改

```sql
datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://localhost:3306/blog_db?useUnicode=true&characterEncoding=utf8&serverTimezone=Asia/Shanghai&allowPublicKeyRetrieval=true&useSSL=false
    username: 用户名
    password: 密码
```

启动后端项目：

```
mvn clean install
mvn spring-boot:run
```

启动前端项目：
```
npm install
npm run dev
```
