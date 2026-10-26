import useToggle from './UserToggle'
import { GlobalContext } from "./Content";
const AppPage = () => {
    
    const {show, toggle} = useToggle(true);
    const {user, data} = GlobalContext();

  return (
    <>
        <h1>{show ?  "Message..." : ""}</h1>
        <button onClick={toggle}>{show ? "show" : "hide"}</button>
        <div>
            {
                data?.map((item, index) => (
                    <>
                        <li key={index}>{item.title}</li>
                        <li>{item.description}</li>
                    </>
                ))
            }
        </div>
        <div>
            {
                user?.map((item, index) => (
                    <>
                        <li key={index}>{item.name}</li>
                        <li>{item.age}</li>
                    </>
                ))
            }
        </div>
    </>
  )
}

export default AppPage