import { createSlice } from "@reduxjs/toolkit"
import Cookies from "js-cookie"

const initialState = {
  // Kullanıcı varsa cookie'den al yoksa boş array döndür
  users: Cookies.get("users") ? JSON.parse(Cookies.get("users")) : [],
  isLogin: false,
  hospitalizations: Cookies.get("hospitalizations")
    ? JSON.parse(Cookies.get("hospitalizations"))
    : [],
}

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    // Kullanıcı ekleme fonksiyonu
    addUser: (state, action) => {
      let existUser = state.users.find(
        (user) => user.email === action.payload.email
      )

      if (existUser) {
        alert("Kullanıcı zaten var")
        return state
      }
      // Kullanıcı yoksa ekle
      state.users.push(action.payload)
      state.isLogin = true
      // Cookie güncelle
      Cookies.set("users", JSON.stringify(state.users))
    },
    // Hasta yatışı ekleme fonksiyonu
    addHospitalization: (state, action) => {
      state.hospitalizations.push({ ...action.payload, bitis_tarihi: null })
      Cookies.set("hospitalizations", JSON.stringify(state.hospitalizations))
    },

    changeHospitalization: (state, action) => {
      let hospitalzation = state.hospitalizations.find(
        (item) => action.payload.id === item.h_id
      )

      hospitalzation.bitis_tarihi = action.payload.bitis_tarihi

      Cookies.set("hospitalizations", JSON.stringify(state.hospitalizations))
    },
  },
})

export const { addUser, addHospitalization, changeHospitalization } =
  mainSlice.actions
export default mainSlice.reducer

// Selectors
export const selectUsers = (state) => state.main.users
export const selectIsLogin = (state) => state.main.isLogin
export const selectHospitalizations = (state) => state.main.hospitalizations
