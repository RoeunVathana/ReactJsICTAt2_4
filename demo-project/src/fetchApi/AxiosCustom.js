import axios from "axios";
import UrlPart from "./Url";

const fetchAxios = async (path = "", method = "GET", data = null) => {
    const isFormData = data instanceof FormData;

    const headers = isFormData
        ? {} // Let the browser automatically set multipart/form-data with boundary
        : { "Content-Type": "application/json" };

    try {
        const config = {
            method,
            url: UrlPart + path,
            headers,
        };

        // Only attach a request body if data is passed
        if (data !== null) {
            config.data = data;
        }

        const res = await axios(config);
        return res.data;
    } catch (error) {
        console.error("API Error:", error);
        // Re-throw so calling components (Home, FormCreate) can catch and alert/display errors
        throw error;
    }
};

export default fetchAxios;