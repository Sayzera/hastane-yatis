import Cookies from "js-cookie"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import uuid from "react-uuid"
import DischargedRow from "../../components/DischargedRow"
import {
  changeHospitalization,
  selectHospitalizations,
} from "../../redux/mainSlice"

export default function Discharged() {
  const hospitalizations = useSelector(selectHospitalizations)
  const [search, setSearch] = React.useState("")

  const c_user = Cookies.get("c_user")
    ? JSON.parse(Cookies.get("c_user"))
    : null

  return (
    <div className="px-6 mt-8">
      <div className="mb-4 border-b pb-2 border-black">
        <h1 className="text-2xl">Taburcu İşlemleri</h1>
      </div>

      <div className="overflow-x-auto relative">
        <form className="my-3">
          <label
            for="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Aramaya Yap
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              onChange={(e) => {
                setSearch(e.target.value)
              }}
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Arama Yap
            </button>
          </div>
        </form>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-white uppercase bg-yellow-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Hasta Adı
              </th>
              <th scope="col" className="py-3 px-6">
                Tarih
              </th>
              <th scope="col" className="py-3 px-6">
                Bitiş Tarihi
              </th>
              <th scope="col" className="py-3 px-6">
                İşlemler
              </th>
            </tr>
          </thead>
          <tbody>
            {hospitalizations.map((item, index) => {
              if (
                item.id == c_user.id &&
                (item.hastaAdi.toLowerCase().includes(search.toLowerCase()) ||
                  item.hastaYatisTarihi
                    .toLowerCase()
                    .includes(search.toLowerCase()))
              ) {
                return <DischargedRow key={uuid()} item={item} />
              }
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
