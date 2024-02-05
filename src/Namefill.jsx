import React, {useState} from 'react'
function Namefill(){

    const [name, setname] = useState("Name")

    function handlename(event){
        setname(event.target.value)
    }
    return(
        <div>
            <input value ={name} onChange ={handlename}type="text" />
            <p>Name: {name} </p>
        </div>
    )
}
export default Namefill