//click event here
function Button(){
    
        //inline css styles to avoid conflicts with external stylesheets
        //using camelCase for CSS properties in React
        const styles={
            backgroundColor: "darksalmon",
            color: "white",
            borderRadius: "10px",
            cursor:"pointer",
            padding:"2px 10px",
            fontFamily: "Arial, Helvetica, sans-serif",
            margin:"0",
        }
        let count=0;
        const handleClick=(name)=>{
            if(count<3){
                count++;
                console.log(`${name} clicked me ${count} time(s)`);
            }
            else{
                console.log(` ${name} stop clicking omg!!`);
            }

        }
        return(<button onClick={()=>handleClick("vro")} style={styles}>Click It :)</button> );

}
export default Button 