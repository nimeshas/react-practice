//conditional rendering.
function UserGreeting(props){
    /* if(props.isLoggedIn){
        return <h2 className="user-greeting">welcome {props.username}</h2>
        
    }
    else{
        return <h2 className="user-greeting">user not logged in :(</h2>
    }  this is many lines of code */

    const welcomeMessage=<h2 className="user-greeting">welcome {props.username}</h2>
    const notLoggedIn=<h2 className="user-greeting">user not logged in :(</h2>
    return(props.isLoggedIn ? welcomeMessage : notLoggedIn);
}
//good practice to set up prop types and default props.

export default UserGreeting