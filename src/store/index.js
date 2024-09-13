import { createStore } from 'vuex'
import axios from 'axios'
import { toast } from "vue3-toastify"
import 'vue3-toastify/dist/index.css'

let API_URL = 'https://docconnect-tq6o.onrender.com'
API_URL =  'http://localhost:3300'


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
        const {data: {results}} = await axios.get(`${API_URL}/doctors/`);
        console.log(results);
        
        if (results) {
          commit("setDoctors", results); 
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
