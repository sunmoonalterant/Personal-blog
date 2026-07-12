# 个人博客

一个用 Astro、Markdown 与 GitHub Pages 制作的中文作品集博客。

## 本地运行

```bash
npm install
npm run dev
```

运行 `npm test` 检查核心目录与内容模型，运行 `npm run build` 生成生产文件。

## 写内容

- 文章放在 `src/content/blog/`，复制任意 `.md` 文件并修改 frontmatter。
- 作品放在 `src/content/projects/`；可设置 `featured: true` 让它显示在首页。
- 图片放在 `public/images/`，然后在 frontmatter 中以 `/images/文件名.svg` 引用。

## 发布到 GitHub Pages

1. 安装 Git，创建名为 `personal-blog` 的 GitHub 仓库并推送本目录。
2. 将 `astro.config.mjs` 中的 `site` 改成你的 `https://用户名.github.io`，将 `base` 改成仓库名（例如 `/personal-blog`）。如果仓库名为 `用户名.github.io`，删除 `base`。
3. 在 GitHub 仓库的 **Settings → Pages** 中，将 Source 设为 **GitHub Actions**。
4. 推送到 `main` 分支；工作流会自动构建和发布。

以后使用自定义域名时，把 `site` 改成域名地址、删除 `base`，并在仓库根目录新增 `public/CNAME`（内容为你的域名）后重新发布。
