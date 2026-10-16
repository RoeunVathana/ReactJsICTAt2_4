import { NavLink, Link } from "react-router-dom"
const Home = () => {
  return (
   <>
    {/* <a href={"/second"}>go to page second</a> */}
    {/* <Link to="/second">go to page second</Link>
     */}
     <h1>Home Page</h1>
     <NavLink to="/detail/200">go to page </NavLink>
     <br />
     <NavLink to="/detail/about/100">go to page detail about</NavLink>
   </>
  )
}

export default Home