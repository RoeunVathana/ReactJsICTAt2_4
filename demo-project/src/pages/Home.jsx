
import { useNavigate } from "react-router-dom"
import fetchAxios from "../fetchApi/AxiosCustom"
import { useEffect, useState } from "react"
import UrlPart from "../fetchApi/Url"
const Home = () => {
  const [data, setData] = useState([])

  const navigate = useNavigate()

  const handleLink = () => {
    navigate("/form_create")
  }

  const fetchCategories = async () => {
    try {
      const response = await fetchAxios("/categories", "GET")
      console.log(response.data)
      setData(response.data)
    } catch (error) {
      alert(error?.response?.data?.message || "Something went wrong!")
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <>
      <div>
        {
          data?.length > 0 ? (
            data?.map((item, index) => (
              <div className="card" key={item.id || index}>
                <p>{item?.name}</p>
                <p>{item?.description}</p>
                <img src={item?.image_url} alt="" />
              </div>
            ))
          ) : (
            <p>Not Found!</p>
          )
        }
      </div>

      <div className="d-flex justify-content-end p-5">
        <button
          className="btn btn-primary mt-5"
          onClick={handleLink}
        >
          Create Product
        </button>
      </div>
    </>
  )
}

export default Home

