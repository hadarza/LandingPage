import React from "react";

// import ReactDOM from "react-dom";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from "./App";
import '../src/constants/fonts/Assistant-Light.ttf';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
<StrictMode>
    <App />
</StrictMode>
);