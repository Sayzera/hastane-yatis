import React from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import uuid from "react-uuid"
import { changeHospitalization } from "../redux/mainSlice"

export default function DischargedRow({ item }) {
  const [bitisTarihi, setBitisTarihi] = React.useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleDischarge = (id) => {
    dispatch(
      changeHospitalization({
        id: id,
        bitis_tarihi: bitisTarihi,
      })
    )

    navigate("/dashboard")
  }
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {item.hastaAdi}
      </th>
      <td className="py-4 px-6">{item.hastaYatisTarihi}</td>
      <td className="py-4 px-6">
        <input
          type="date"
          defaultValue={item.bitis_tarihi}
          onChange={(e) => setBitisTarihi(e.target.value)}
        />
      </td>
      <td
        className="py-4 px-6 underline cursor-pointer"
        onClick={() => {
          handleDischarge(item.h_id, bitisTarihi)
        }}
      >
        Güncelle
      </td>
    </tr>
  )
}
