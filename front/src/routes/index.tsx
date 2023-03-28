import { Routes, Route } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage/LoginPage"
import { HomePage } from "../pages/HomePage/HomePage"

export const RoutesMain = () => {
   return (
      <Routes>
         <Route path="/" element={<LoginPage/>}/>
         <Route path="/home" element={<HomePage/>}/>
      </Routes>
   )
}