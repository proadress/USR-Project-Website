## 安裝

```bash
yarn
# or
yarn install
```

## 啟動

```bash
yarn dev
```

## 檔案分類

/src/app/products/[...slug]/page.tsx 所有產品
/src/app/page.tsx 主頁
/src/app/login/page.tsx 登入

新版的 data 變成 json 檔
補充
"count": "999+",
"type": "票券",
"Material": "虛擬票券",
"Description": "如報名網站所述",
"ValidityDate": "以選購活動日期為主",
"Fee": "0",
"Features": [
"周邊環境認識與海洋安全教育",
"為您準備獨木舟裝備與安全設施",
"獨木舟與龍舟版知識操作指導",
"活動個人裝備介紹與救生衣穿戴",
"水中基本操作",
"帥哥與美女助教為您拍攝歡樂時光",
"體驗海上跳水與上船",
"如何使用： 以報名網站為主",
"適用平台： X",
"注意事項： 如報名網站所述"
]

其中 features 是對應到商品描述，一個字串一個<p>

## 補充

已經安裝好可以用的 css 資源
[**Tailinwd css →**](https://tailwindcss.com/)

[**Daisy UI →**](https://daisyui.com/)

[**Next UI →**](https://nextui.org/)
