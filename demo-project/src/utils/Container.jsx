import Person from '../components/Prop/Person'
import cat from '../assets/images/cat.jpg'
const Container = () => {
  return (
    <div style={{display: "flex", gap: "1rem", alignItems: "center", justifyContent: "left", flexWrap: "wrap"}}>
        <Person username={"Lin er"} age={20} gender={"female"} height={1.80} family={"single"} profile={cat}/>
        <Person username={"Lin hav"} age={22} gender={"male"} height={1.80} family={"married"} profile={cat}/>
    </div>
  )
}

export default Container