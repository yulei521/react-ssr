// 这里的node代码，会用babel处理
import React from 'react';
// renderToString 转换成字符串
import { renderToString } from 'react-dom/server';
import Koa from 'koa';
import KoaRouter from 'koa-router';
import KoaStatic from 'koa-static';

import App from '../src/App';

const app = new Koa();
const router = new KoaRouter();

router.get('/', (ctx) => {
  // dom节点转换成字符串
  const content = renderToString(App);
  // ctx.type = 'text/html;charset=uf-8';
  ctx.body = `
      <!DOCTYPE html>
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
    `;
})

// 启动路由
app.use(router.routes());
// 配置前端静态资源，方便引入客户端js文件
app.use(KoaStatic('public'));
// 启动端口3000 的服务器
app.listen(3000, () => {
  console.log('服务器已启动，打开http://127.0.0.1:3000查看');
});