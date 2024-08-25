import React, {lazy, Suspense} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectRoute from './components/auth/ProtectRoute';
import {LayoutLoader} from './components/layout/loaders';

const Home = lazy(() => import('./pages/home'));
const Login = lazy(() => import('./pages/Login'));
const Chat = lazy(() => import('./pages/Chat'));
const Groups = lazy(() => import('./pages/Group'));
const Notfound = lazy(() => import("./pages/Notfound"))

let user = true;

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LayoutLoader/>}>
        <Routes>
          <Route element={<ProtectRoute user={user}/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/chat/*' element={<Chat/>}/>
            <Route path='/groups' element={<Groups/>}/>
          </Route>
        
          <Route path='/login' element={
              <ProtectRoute user={!user} redirect='/'>
                <Login/>
              </ProtectRoute>
            }
          />
          <Route path='*' element={<Notfound/>}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;