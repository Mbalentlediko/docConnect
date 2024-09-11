import { createStore } from 'vuex'
import axios from 'axios'
import { toast } from "vue3-toastify"
import 'vue3-toastify/dist/index.css'

const API_URL = 'http://localhost:3300'

export default createStore({
  state: {
    doctors: [],
  },
  mutations: {
    setDoctors: (state, value) => {
      state.doctors = value
    }
  },
  actions: {
    async fetchAllDoctors({commit}) {
      try {
        const { data } = await axios.get(`${API_URL}/doctors/`);
        if (data.results) {
          commit("setDoctors", data.results); // Ensure the data being committed is an array
        } else {
          toast.error("No doctors found", {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      } catch (error) {
        toast.error(`${error.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        });
      }
    }
  }
})
