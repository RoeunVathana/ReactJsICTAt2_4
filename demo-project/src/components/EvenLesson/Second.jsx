import { useState, useEffect } from "react"

const Second = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [data, setData] = useState([])
    const [textButton, setTextButton] = useState("Submit")
    const [idEdit, setIdEdit] = useState(null);
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState("");
    const [StoreData, setStoreData] = useState(JSON.parse(localStorage.getItem("newData")));
    const [index, setIndex] = useState(1);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // setData([...data, { email, password }]);
        let setDataLocalStorage = JSON.stringify([...data, {id: index , email, password }])

        localStorage.setItem("newData", setDataLocalStorage);
        setLoading(data);
        setEmail("");
        setPassword("");
        setIndex(index + 1);
    }

    useEffect(() => {
      
        const fetchData = async () => {
            const getDataFormLocalStorage = JSON.parse(localStorage.getItem("newData")) || [];
            await setData(getDataFormLocalStorage); 
        };

        fetchData(); 
    }, [loading, StoreData]);



    const handleDelete = (id) => {
        // if (index == -1) {
        //     return setMessage("index not found");
        // }
        // // let newData = data.filter((item, index) => index != index);
        // let newData = [...data];
        // newData.splice(index, 1);

        // setData(newData);
        let newData = StoreData.filter((item, index) => item.id != id)

        let refresh = localStorage.setItem("newData", JSON.stringify(newData));
        setLoading(refresh);
    }

    const handleEdit = (id) => {
        let newDataUpdata = data.find((item, index) => index == id);
        setEmail(newDataUpdata.email);
        setPassword(newDataUpdata.password);
        setTextButton("Update");
        setIdEdit(id);
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        let newData = data.map((item, index) => {
            if (index == idEdit) {
                return { email: email, password: password };
            }
            return item;
        })
        setData(newData);

        setTextButton("Submit")
        setEmail("");
        setPassword("");
        setIdEdit(null);
    }

    return (
        <>
            <div className="container mt-5 bg-secondary p-5" style={{ borderRadius: "10px", width: "600px" }}>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" value={email}
                            onChange={(prev) => setEmail(prev.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" value={password}
                            onChange={(prev) => setPassword(prev.target.value)}
                        />
                    </div>
                    {
                        textButton == "Submit" ? (
                            //submit button
                            <button className="btn btn-primary" onClick={handleSubmit}>{textButton}</button>
                        ) : (
                            //update button
                            <button className="btn btn-primary" onClick={handleUpdate}>{textButton}</button>
                        )
                    }
                </form>
            </div>
            <table className="table container mt-3" style={{ width: "600px" }}>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Active</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((item, index) => (
                        <tr key={index}>
                            <td>{item?.email}</td>
                            <td>{item?.password}</td>
                            <td>
                                <div className="d-flex gap-2">
                                    <button className="btn btn-primary" onClick={() => handleEdit(item?.id)}>Edit</button>
                                    <button className="btn btn-danger" onClick={() => handleDelete(item?.id)}>Delete</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Second
