import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PictureoftheDay from './routes/PictureoftheDay';
import MarsPhotos from './routes/MarsPhotos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path ="pod" element = {<PictureoftheDay/>} />
         <Route path="mars" element={<MarsPhotos/>} />
      </Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
