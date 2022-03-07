import axios from "axios";

axios.defaults.baseURL = "http://192.168.1.33:3000"

export default {
    users() {
        return {
            login: (username, password) => {
                return axios.post("/users/login", { username, password })
            }
        }
    }
}