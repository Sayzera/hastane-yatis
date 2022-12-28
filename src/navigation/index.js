import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "../components/Layout"
import Dashboard from "../views/dashboard"
import Discharged from "../views/discharged"
import Hospitalization from "../views/Hospitalization"
import Login from "../views/login"
import Register from "../views/register"
import Taburcular from "../views/taburcular"
import Users from "../views/users"

export default function Navigation() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/hasta-yatisi-yap" element={<Hospitalization />} />
          <Route path="/taburcu-islemleri" element={<Discharged />} />
          <Route path="/taburculari-listele" element={<Taburcular />} />
          <Route path="/kullanicilar" element={<Users />} />
        </Route>
      </Routes>
    </Router>
  )
}
