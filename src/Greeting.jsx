function Greeting (props){
    const welcome = <h2>welcome {props.username}</h2>
    const login = <h2>please login</h2>
    return(props.isloggedin ? welcome
                            : login)
 
 }
 
 export default Greeting