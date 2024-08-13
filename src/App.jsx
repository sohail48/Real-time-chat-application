import React, {lazy} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



const Home = lazy(() => import('./pages/home'));
const Login = lazy(() => import('./pages/Login'));
const Chat = lazy(() => import('./pages/chat'));
const Groups = lazy(() => import('./pages/group'));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/chat' element={<Chat/>}/>
        <Route path='/groups' element={<Groups/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;