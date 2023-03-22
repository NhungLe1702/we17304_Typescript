import React, {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './app';
// Bước 2: Khai báo dom

const rootElement = document.querySelector('#root');

// Bước 3: Tạo react dom(Virtual DOM)

const reactRoot = createRoot(rootElement);

// Bước 4: Render

reactRoot.render(
    <StrictMode>
        <App/>
    </StrictMode>
)