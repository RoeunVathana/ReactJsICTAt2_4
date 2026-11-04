import { useEffect, useState } from "react";
const useCustomFetchApi = (url = "", dataRe = {}, id = "", method = "GET") => {
    const [ApiData, setApiData] = useState([]);
    useEffect(() => {
        let isMounted = true;
        const fetchData = async () => {
            try {
                if (!url) return;
                if (method === "GET") {
                    const requestUrl = id ? `${url}/${id}` : url;
                    const response = await fetch(requestUrl);
                    const data = await response.json();
                    if (isMounted) setApiData(data);
                }
                if (method === "POST") {
                    const response = await fetch(url, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(dataRe),
                    });
                    const data = await response.json();
                    if (isMounted) setApiData(data);
                }
            } catch (error) {
                alert("Error fetching data: " + error.message);
            }
        };
        fetchData();
        return () => {
            isMounted = false;
        };
    }, [url, id, method]);
    return { ApiData };
};
export default useCustomFetchApi;