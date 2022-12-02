import React from "react";
import Main from "./components/Main/Main"
import Login from "./components/Authentication/Login"
import { Routes, Route } from 'react-router-dom';
import TransactionList from "./components/Transaction/TransactionList"
import EditUserProfile from "./components/EditUserProfile/EditUserProfile";
import Admin from "./components/Admin/Admin";

function App() {
  return (
    <>
        <Routes>
            <Route index element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard/:id" element={<Main />} />
            <Route path="/admin/add-user" element={<Admin />} />
            <Route path="/edit-profile/:id" element={<EditUserProfile />} />
            <Route path="/transaction/:accountId" element={<TransactionList />} />
        </Routes>
    </ >
  );
}


export default App;
