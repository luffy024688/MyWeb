# Avery工作室｜個人網站

郝逸清（Avery Hau）的個人作品網站，介紹背景、專案作品、精選文章與聯絡方式。

主題：**資料分析 × AI 應用 × 商業應用**

線上倉庫：[https://github.com/luffy024688/MyWeb](https://github.com/luffy024688/MyWeb)

---

## 功能簡介

- 關於我、作品集、精選文章、聯絡表單
- 深／淺色模式切換
- 導覽列中英介面切換（頂欄文字）
- Email、Line ID 點擊複製

---

## 技術棧

- HTML / CSS / JavaScript（純靜態頁面，無前端框架）
- [Yarn](https://yarnpkg.com/) 管理依賴與本機預覽
- 本機靜態伺服器：`[serve](https://www.npmjs.com/package/serve)`

---

## 專案結構

```text
.
├── index.html              # 網頁入口
├── package.json            # Yarn 專案與指令設定
├── yarn.lock               # 依賴版本鎖定
├── .gitignore
├── .nvmrc                  # 建議 Node 版本
├── .yarnrc.yml
├── assets/
│   ├── css/
│   │   ├── site.css        # 主要樣式
│   │   └── custom.css      # Avery 工作室客製樣式
│   ├── js/
│   │   ├── site-fx.js      # 背景動效、進場動畫、點擊複製
│   │   └── contact-form.js # 聯絡表單邏輯
│   └── img/
│       └── profile.jpg     # 大頭照
└── README.md
```

---



## 環境需求

- Node.js **20+**（建議使用 `.nvmrc` 指定的版本）
- Yarn **4.x**（本專案 `packageManager` 為 Yarn 4）

若已安裝 [nvm](https://github.com/nvm-sh/nvm)：

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
nvm use
```

---



## 本機啟動

```bash
# 安裝依賴
yarn install

# 啟動本機預覽（預設埠號 8765）
yarn dev
```

瀏覽器開啟：[h](http://localhost:8765)

其他指令：


| 指令             | 說明           |
| -------------- | ------------ |
| `yarn start`   | 同 `yarn dev` |
| `yarn preview` | 同 `yarn dev` |


---



## 頁面區塊


| 區塊   | 說明                                    |
| ---- | ------------------------------------- |
| Hero | 姓名、專長標語、快捷按鈕                          |
| 關於我  | 學經歷與自我介紹                              |
| 作品集  | 專案標題可連到外部作品                           |
| 精選文章 | Medium 文章連結                           |
| 聯絡我  | 表單與 Email／Line／Medium／LinkedIn／GitHub |


---



## 聯絡方式

- Email：頁面上點擊可複製
- Line ID
- [Medium](https://medium.com/@avery02468)
- [LinkedIn](https://www.linkedin.com/in/luffy02468/)
- [GitHub](https://github.com/luffy024688)

> 目前聯絡表單為前端驗證與畫面提示；尚未串接後端寄信服務。實際聯繫請直接使用上方 Email 或社群連結。

---



## 作者

**郝逸清（Avery Hau）**