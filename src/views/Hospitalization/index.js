import Cookies from "js-cookie"
import React from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import uuid from "react-uuid"
import { addHospitalization } from "../../redux/mainSlice"

export default function Hospitalization() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [hastaAdi, setHastaAdi] = React.useState("")
  const [hastaYatisTarihi, setHastaYatisTarihi] = React.useState("")
  const [hastaYatisSebebi, setHastaYatisSebebi] = React.useState("")
  const c_user = Cookies.get("c_user")
    ? JSON.parse(Cookies.get("c_user"))
    : null

  console.log(c_user)
  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(
      addHospitalization({
        hastaAdi,
        hastaYatisTarihi,
        hastaYatisSebebi,
        id: c_user.id,
        h_id: uuid(),
      })
    )

    navigate("/dashboard")
  }
  return (
    <div className="px-6 mt-8">
      <div className="mb-4 border-b pb-2 border-black">
        <h1 className="text-2xl">Hasta Yatışı Formu</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Hasta Adı
          </label>
          <input
            onChange={(e) => setHastaAdi(e.target.value)}
            type="text"
            autoComplete="off"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Yatış Tarihi
          </label>
          <input
            onChange={(e) => setHastaYatisTarihi(e.target.value)}
            type="date"
            autoComplete="off"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Yatış Sebebi
          </label>
          <input
            onChange={(e) => setHastaYatisSebebi(e.target.value)}
            type="text"
            autoComplete="off"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Yatış Yap
        </button>
      </form>
    </div>
  )
}
