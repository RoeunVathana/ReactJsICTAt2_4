import useToggle from './UserToggle'
const AppPage = () => {
    
    const {show: alert, toggle} = useToggle(true);

  return (
    <>
        <h1>{alert ?  "Message..." : ""}</h1>
        <button onClick={toggle}>{alert ? "hide" : "show"}</button>

    </>
  )
}

export default AppPage