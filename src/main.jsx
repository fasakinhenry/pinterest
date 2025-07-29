import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import Homepage from './routes/homepage/homepage';
import CreatePage from './routes/createPage/createPage';
import PostPage from './routes/postPage/postPage';
import AuthPage from './routes/authPage/authPage';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/create' element={<CreatePage />} />
        <Route path='/pin/:id' element={<PostPage />} />
        <Route path='/auth' element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
