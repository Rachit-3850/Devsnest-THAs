import { useSelector } from "react-redux"

const  Data = () => {
    const state = useSelector((state) => state.userReducer)
    return (
        <div>
            <h1>Data</h1>
            <h3>Name: {state.name}</h3>
            <h3>Email: {state.email}</h3>
        </div>
    )
}
export default Data