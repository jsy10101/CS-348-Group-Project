import React from "react";
import Main from "./components/Main/Main"
import Login from "./components/Authentication/Login"
import { Routes, Route } from 'react-router-dom';
import EditUserProfile from "./EditUserProfile/EditUserProfile";
import TransactionList from "./components/Transaction/TransactionList"
function App() {
  return (
    <>
        <Routes>
            <Route index element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard/:id" element={<Main />} />
            <Route path="/edit-profile/:id" element={<EditUserProfile />} />
            <Route path="/transaction/:accountId" element={<TransactionList />} />
        </Routes>
    </ >
  );
}


export default App;
