import ReactDom from 'react-dom';
import React, { useState } from 'react';

import App from '../src/App';

// 注水
ReactDom.hydrate(App, document.getElementById('root'));