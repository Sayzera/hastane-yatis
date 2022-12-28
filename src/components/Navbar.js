import Cookies from "js-cookie"
import React from "react"
import { useNavigate } from "react-router-dom"

export default function Navbar() {
  let user = Cookies.get("c_user") ? JSON.parse(Cookies.get("c_user")) : null
  const navigate = useNavigate()
  React.useEffect(() => {
    if (!user) navigate("/")
  }, [])

  const handleLogout = () => {
    Cookies.remove("c_user")
    navigate("/")
  }

  return (
    <div className="px-4   mt-4">
      <div className="flex items-center justify-between  border-b pb-2">
        <div className="flex items-center space-x-4">
          <div
            onClick={() => {
              navigate("/dashboard")
            }}
            className="underline cursor-pointer"
          >
            <h1>Hasta Yatış Sistemi</h1>
          </div>

          <div
            onClick={() => {
              navigate("/kullanicilar")
            }}
            className="underline cursor-pointer"
          >
            <h1>Misafirler</h1>
          </div>
        </div>
        <div
          onClick={() => {
            handleLogout()
          }}
        >
          <div className="underline cursor-pointer">Çıkış Yap</div>
        </div>
      </div>

      <div>
        <h1 className=" mt-4">Hoşgeldiniz {user?.email}</h1>
      </div>
    </div>
  )
}
