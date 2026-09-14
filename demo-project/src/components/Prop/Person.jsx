const Person = ({ username, age, gender, height, profile, family }) => {
    return (
        <>
            <div style={{
                backgroundColor: "lightblue", padding: "1rem", width: "200px", borderRadius: "5px",
                display: "flex", flexDirection: "column", gap: "1rem"
            }}>
                <div style={{ width: "200px", height: "200px" }}>
                    <img style={{ width: "100%", height: "100%" }} src={profile} alt="" />
                </div>
                <div style={{ display: "flex", gap: "0.3rem", flexDirection: "column" }}>
                    <span>Name: {username}</span>
                    <span>Age: {age}</span>
                    <span>Gender: {gender}</span>
                    <span>Height: {height}</span>
                    <span>Family: {family}</span>
                </div>

                <div>
                    <button style={{
                        width: "100%", border: "none", backgroundColor: "gray", padding: "10px", borderRadius: "5px",
                        cursor: "pointer", color: "white", fontWeight: "bold"
                    }}>
                        chick here
                    </button>
                </div>
            </div>
        </>
    )
}

export default Person