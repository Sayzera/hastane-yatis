import Cookies from "js-cookie"
import React from "react"
import { FaHospitalUser } from "react-icons/fa"
import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { selectUsers } from "../redux/mainSlice"

export default function LoginForm() {
  const users = useSelector(selectUsers)
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const user = users.find(
      (user) => user.email === email && user.password === password
    )

    if (user) {
      Cookies.set("c_user", JSON.stringify(user))
      navigate("/dashboard")
    } else {
      alert("Kullanıcı bulunamadı")
    }
  }
  return (
    <div>
      <div className="flex flex-col items-center">
        <div>
          <FaHospitalUser className="text-6xl text-center" />
        </div>
        <h1 className="text-2xl border-b pb-2 mb-3">
          Hasta Yatış Sistemi Giriş
        </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div class="mb-6">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            E Posta Adresiniz
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            autoComplete="off"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div class="mb-3">
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Şifreniz
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            autoComplete="off"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-2 flex justify-end">
          Yeni bir hesap oluşturmak için{" "}
          <Link to="/register" class="text-blue-700 hover:underline">
            &nbsp; tıklayınız
          </Link>
        </div>

        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Giriş Yap
        </button>
      </form>
    </div>
  )
}
