import axios from "axios";
import UrlPart from "./Url";
const fetchAxios = async (path = "", method = "GET", data = {}) => {
    let headers = { "Content-Type": "application/json", };
    try {
        const res = await axios({
            method,
            url: UrlPart + path,
            data,
            headers,
        });

        return res.data;
    } catch (error) {
        console.log(error)
    }
}

export default fetchAxios;