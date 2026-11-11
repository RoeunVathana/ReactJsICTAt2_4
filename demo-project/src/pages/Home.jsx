
import { useNavigate } from "react-router-dom"
import fetchAxios from "../fetchApi/AxiosCustom"
import { useEffect } from "react"

const Home = () => {
  const navigate = useNavigate()
  const handleLink=()=>{
    navigate("form_create")
  }

  useEffect(() =>{
    fetchAxios()
  }, [])
  return (
    <>
    <div className="d-flex justify-content-end p-5">
      <button className="btn btn-primary mt-5" onClick={handleLink}>Create Product</button>
    </div>
      {/* {<FetchApi/>} */}
      
    </>
  )
}

export default Home