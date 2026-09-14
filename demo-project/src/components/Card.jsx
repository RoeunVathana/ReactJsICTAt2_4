import cat from "../assets/images/cat.jpg";
import Variable from "./Variable";
const Card = ({usernameOwner, ageOwner, genderOwner, heightOwner}) => {
    return (
        <>
            <div style={{
                backgroundColor: "lightblue", padding: "1rem", width: "200px", borderRadius: "5px",
                display: "flex", flexDirection: "column", gap: "1rem"
            }}>
                <div style={{ width: "200px", height: "200px" }}>
                    <img style={{ width: "100%", height: "100%" }} src={cat} alt="" />
                </div>
                <div>
                    <span>
                        give me my money
                        &nbsp;
                        {/* <Variable></Variable> */}
                        <Variable username={usernameOwner} age={ageOwner} gender={genderOwner} height={heightOwner}/>
                    </span>
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

export default Card