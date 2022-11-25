import React from "react";
import Main from "./components/Main/Main"
import Login from "./components/Authentication/Login"
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
        <Routes>
            <Route index element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard/:id" element={<Main />} />
        </Routes>
    </ >
  );
}


export default App;
