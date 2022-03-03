import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '98.css';
import './index.css';

import { createClient } from "@liveblocks/client";
import { LiveblocksProvider } from "@liveblocks/react";
import { key } from "./api";

const client = createClient({
  publicApiKey: key,
})

ReactDOM.render(
  <React.StrictMode>
    <LiveblocksProvider client={client}>
      <App />
    </LiveblocksProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
