
// import Card from "./components/Card"
import Person from "./components/Prop/Person"
import cat from "./assets/images/cat.jpg"
function App() {
  // let isChecked = 10;
  // const result = () => {
  //   if(isChecked === 10){
  //     return "true";
  //   }
  // }

  // const empty = "Not Empty";


  return (
    <>
      {/* <div style={{display: "flex", gap: "1rem", alignItems: "center", justifyContent: "center"}}>
        {
          result() == "true" ? (
            <>
              <Card usernameOwner={"test"} ageOwner={20} genderOwner={"male"} heightOwner={1.34} />
              <Card usernameOwner={"test2"} ageOwner={40} genderOwner={"female"} heightOwner={1.90} />
            </>
          ) : (
            <>
                <div> 
                  <h1>
                    {empty}
                  </h1>
                </div>
            </>
          )
        }
      </div> */}
      <div style={{display: "flex", gap: "1rem", alignItems: "center", justifyContent: "left", flexWrap: "wrap"}}>
        <Person username={"Lin er"} age={20} gender={"female"} height={1.80} family={"single"} profile={cat}/>
        <Person username={"Lin hav"} age={22} gender={"male"} height={1.80} family={"married"} profile={cat}/>
        <Person username={"Lin hav"} age={22} gender={"male"} height={1.80} family={"married"} profile={cat}/>
        <Person username={"Lin hav"} age={22} gender={"male"} height={1.80} family={"married"} profile={cat}/>
        <Person username={"Lin hav"} age={22} gender={"male"} height={1.80} family={"married"} profile={cat}/>
        <Person username={"Lin hav"} age={22} gender={"male"} height={1.80} family={"married"} profile={cat}/>
        <Person username={"Lin hav"} age={22} gender={"male"} height={1.80} family={"married"} profile={cat}/>
      </div>
    </>
  )
}

export default App
