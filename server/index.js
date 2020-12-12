// 这里的node代码，会用babel处理
import React from 'react';
import { renderToString } from 'react-dom/server';
import express from 'express';
import App from '../src/App';

const app = new express();

app.get('*', (req, res) => {
    // dom节点转换成字符串
    const content = renderToString(<App/>);
    res.send = `
      <!DOCTYPE html>
      <html>
        <head></head>
        <body>
          <div id="root">${content}</div>
        </body>
      </html>
    `;
});


app.listen(3000, () => {
    console.log('服务器已启动');
});