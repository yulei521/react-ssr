// 这里的node代码，会用babel处理
import React from 'react';
// renderToString 转换成字符串
import { renderToString } from 'react-dom/server';
// import Koa from 'koa';
import express from 'express';
import KoaRouter from 'koa-router';
import KoaStatic from 'koa-static';
import { StaticRouter } from 'react-router-dom';
import App from '../src/App';

const app = express();
// 配置前端静态资源，方便引入客户端js文件
app.use(express.static('public'));
// const app = new Koa();
const router = new KoaRouter();

app.get('*', (req, res) => {
  // dom节点转换成字符串
  const content = renderToString(
    <StaticRouter location={req.url}>
      {App}
    </StaticRouter>
  );
  // ctx.type = 'text/html;charset=uf-8';
  res.send(`
      <html>
        <head>
          <meta charset="utf-8"/>
          <title>react ssr</title>
        </head>
        <body>
          <div id="root">${content}</div>
          <script src="bundle.js"></script>
        </body>
      </html>
    `)
})

// 启动路由
// app.use(router.routes());
// 启动端口3000 的服务器
app.listen(3000, () => {
  console.log('服务器已启动，打开http://127.0.0.1:3000查看');
});