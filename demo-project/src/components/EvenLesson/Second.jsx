import { useState, useEffect } from "react";

const Second = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [data, setData] = useState([]);
    const [textButton, setTextButton] = useState("Submit");
    const [idEdit, setIdEdit] = useState(null);
    const [index, setIndex] = useState(1);

    // Get data from localStorage
    useEffect(() => {
        const getDataFormLocalStorage = JSON.parse(localStorage.getItem("newData")) || [];

        setData(getDataFormLocalStorage);

        // Continue ID after refresh
        if (getDataFormLocalStorage.length > 0) {
            const maxId = Math.max(
                ...getDataFormLocalStorage.map((item) => item.id)
            );

            setIndex(maxId + 1);
        }
    }, []);

    // Create
    const handleSubmit = (e) => {
        e.preventDefault();

        const newData = [
            ...data,
            {
                id: index,
                email: email,
                password: password,
            },
        ];

        setData(newData);

        localStorage.setItem(
            "newData",
            JSON.stringify(newData)
        );

        setEmail("");
        setPassword("");
        setIndex(index + 1);
    };

    // Delete
    const handleDelete = (id) => {
        const refresh = data.filter(
            (item) => item.id !== id
        );

        setData(refresh);

        localStorage.setItem(
            "newData",
            JSON.stringify(refresh)
        );
    };

    // Edit
    const handleEdit = (id) => {
        const newData = data.find(
            (item) => item.id === id
        );

        setEmail(newData?.email);
        setPassword(newData?.password);

        setTextButton("Update");

        setIdEdit(id);
    };

    // Update
    const handleUpdate = (e) => {
        e.preventDefault();

        const newData = data.map((item) => {
            if (item.id === idEdit) {
                return {
                    ...item,
                    email: email,
                    password: password,
                };
            }

            return item;
        });

        setData(newData);

        localStorage.setItem("newData",JSON.stringify(newData));

        setTextButton("Submit");

        setEmail("");
        setPassword("");
        setIdEdit(null);
    };

    return (
        <>
            <div
                className="container mt-5 bg-secondary p-5"
                style={{
                    borderRadius: "10px",
                    width: "600px",
                }}
            >
                <form>
                    <div className="mb-3">
                        <label className="form-label">
                            Email
                        </label>

                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">
                            Password
                        </label>

                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                        />
                    </div>

                    {textButton === "Submit" ? (
                        <button
                            className="btn btn-primary"
                            onClick={handleSubmit}
                        >
                            {textButton}
                        </button>
                    ) : (
                        <button
                            className="btn btn-warning"
                            onClick={handleUpdate}
                        >
                            {textButton}
                        </button>
                    )}
                </form>
            </div>

            <table
                className="table container mt-3"
                style={{
                    width: "600px",
                }}
            >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Active</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>

                            <td>{item.email}</td>

                            <td>{item.password}</td>

                            <td>
                                <div className="d-flex gap-2">
                                    <button
                                        className="btn btn-primary"
                                        onClick={() =>
                                            handleEdit(item.id)
                                        }
                                    >
                                        Edit
                                    </button>

                                    <button
                                        className="btn btn-danger"
                                        onClick={() =>
                                            handleDelete(item.id)
                                        }
                                    >
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Second;