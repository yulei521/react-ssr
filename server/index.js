// 这里的node代码，会用babel处理
import React from 'react';
import { renderToString } from 'react-dom/server';
import Koa from 'koa';
import KoaRouter from 'koa-router';

import App from '../src/App';

const app = new Koa();
const router = new KoaRouter();

router.get('/', (ctx) => {
  // dom节点转换成字符串
  const content = renderToString(<App/>);
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
        </body>
      </html>
    `;
})

// 启动路由
app.use(router.routes());
// 启动端口3000 的服务器
app.listen(3000, () => {
  console.log('服务器已启动');
});