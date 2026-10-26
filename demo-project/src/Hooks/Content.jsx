
import { createContext, useContext, useState } from 'react'
const global = createContext();

export const GlobalContext = () => useContext(global);
const Content = ({ children }) => {

    const [user, setUser] = useState([
        {
            name: "John",
            age: 30
        },
        {
            name: "Jane",
            age: 25
        }
    ]);

    const data = [
        {
            title: "Title 1",
            description: "Description 1"
        }
    ]

    return(
        <global.Provider value={{user, data}} >
            {children}
        </global.Provider>
    )
}

export default Content