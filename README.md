# 向未来家庭教育官网

父母稳下来，孩子长出来，家庭向未来。

## 网站结构

### 核心页面

- `index.html` — 首页（品牌展示 + 核心价值 + 引导转化）
- `about.html` — 关于我们（使命、愿景、价值观、品牌故事）
- `system.html` — 四层地图（交互式金字塔，家庭教育方法论）
- `value.html` — 价值四圈（第四层实操工具，话术示范）
- `cases.html` — 真实改变（家长评价和案例展示）
- `contact.html` — 联系我们（预约咨询表单）
- `thanks.html` — 感谢页（表单提交后跳转）

### 技术栈

- 纯静态 HTML + CSS + 原生 JavaScript
- 现代响应式设计，支持移动端
- Google Fonts: Noto Sans SC
- 零依赖，无需构建工具

### 设计特色

- **现代化视觉**：清新渐变、圆角卡片、流畅动画
- **响应式布局**：完美适配手机、平板、桌面
- **交互体验**：可展开的四层地图、平滑滚动、移动端菜单
- **转化导向**：多处 CTA 引导，免费工具领取

### 资源配置

如需使用二维码图片，请放置到 `/images/` 目录：

- `qr-wechat.jpg` — 微信二维码
- `qr-mp.jpg` — 公众号二维码

### 部署

#### 本地预览

```bash
# 使用 Python 内置服务器
python -m http.server 8080

# 或使用 Node.js 的 http-server
npx http-server -p 8080
```

然后访问 `http://localhost:8080`

#### 部署到 GitHub Pages

1. 创建 GitHub 仓库
2. 推送到仓库
3. 在 GitHub Settings 中启用 GitHub Pages
4. 选择 `main` 分支作为源

#### 部署到其他平台

- **Vercel**: 直接导入 GitHub 仓库
- **Netlify**: 拖拽 `dist` 文件夹或连接 GitHub
- **Cloudflare Pages**: 连接 GitHub 仓库
- **任何静态托管**: 上传所有文件即可

### 定制

#### 修改联系方式

在 `contact.html` 中修改：

```html
<p>contact@xiangweilai.com</p>
```

#### 修改表单提交

目前表单使用前端演示，实际使用时可：

1. 使用 [Formspree](https://formspree.io/)
2. 使用 [EmailJS](https://www.emailjs.com/)
3. 自建后端接收

#### 修改配色

在 `css/style.css` 中修改 CSS 变量：

```css
:root {
    --primary: #4A90A4;        /* 主色调 */
    --primary-dark: #3A7A8A;   /* 主色深色 */
    --secondary: #E8B4A3;      /* 辅助色 */
    --accent: #F2D0A9;         /* 强调色 */
}
```

### 内容更新

#### 更新首页案例

在 `index.html` 中找到 `testimonials` 区域修改评价内容。

#### 更新四层地图详情

在 `system.html` 中找到 `pyramid-detail` 区域修改每一层的详细说明。

#### 更新价值四圈话术

在 `value.html` 中找到 `speech-pair` 区域修改话术示例。

### SEO 优化

每个页面都包含：

- 语义化 HTML 标签
- Meta description
- 响应式设计（移动端友好）
- 快速的加载速度（无外部依赖）

### 浏览器支持

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- 移动端浏览器

### 版权

© 2026 向未来家庭教育。All rights reserved.
