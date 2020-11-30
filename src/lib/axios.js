import Axios from "axios";

export const axios = Axios.create({
    baseURL: "http://10.0.0.222:8000/api",
    headers: {
        Auth: ""
    },
    timeout: 3000
})