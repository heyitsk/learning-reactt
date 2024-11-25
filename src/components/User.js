import { useState } from "react"
const User = (props) =>{
    const [count] = useState(0)
    const [count2] = useState(2)

    const{name,location} = props
    return(
        <div className="user-card">
            <h3>Name: {name}</h3>
            <h4>Location :  {location}</h4>
            <h5>Count : {count}</h5>
            <h5>Count2 : {count2}</h5>
            <h5>Contact : asdadas@asdas</h5>
        </div>
    )
}
export default User;