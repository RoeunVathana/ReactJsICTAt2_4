import { NavLink, Link } from "react-router-dom"
const Home = () => {
  return (
   <>
    {/* <a href={"/second"}>go to page second</a> */}
    {/* <Link to="/second">go to page second</Link>
     */}
     <h1>Home Page</h1>
     {/* <NavLink to="/detail/200">go to page </NavLink> */}
     <br />
     {/* <NavLink to="/detail/about/100">go to page detail about</NavLink> */}
     <NavLink to="/hook_one">Go to Hook One</NavLink>
     <br /><br />
     <NavLink to="/app_page">go to customer hooks</NavLink>
   </>
  )
}

export default Home