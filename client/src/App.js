import React from "react";
import Main from "./components/Main/Main"
import Login from "./components/Authentication/Login"
import { Routes, Route } from 'react-router-dom';
import TransactionList from "./components/Transaction/TransactionList"
import EditUserProfile from "./components/EditUserProfile/EditUserProfile";
import Admin from "./components/Admin/Admin";
import MoveMoney from "./components/MoveMoney/MoveMoney";

function App() {
  return (
    <>
        <Routes>
            <Route index element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard/:id" element={<Main />} />
            <Route path="/admin/add-user" element={<Admin />} />
            <Route path="/edit-profile/:id" element={<EditUserProfile />} />
<<<<<<< HEAD
            <Route path="/move-money/:id" element={<MoveMoney />} />
=======
            <Route path="/transaction/:accountId" element={<TransactionList />} />
>>>>>>> 9fd340fe0874fe7a1942360a8518222db258ad20
        </Routes>
    </ >
  );
}


export default App;
