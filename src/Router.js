import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// 심동섭의 컴포넌트
import JungMain from './pages/junghyowon/Main/JungMain';
import JungLogin from './pages/junghyowon/Login/JungLogin';

// import 한 컴포넌트에 대한 경로를 각각 설정해줍니다.
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/JungMain" element={<JungMain />} />
        <Route path="/" element={<JungLogin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
