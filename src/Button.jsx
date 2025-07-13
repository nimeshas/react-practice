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
        return(<button style={styles}>
            Click It :)
        </button> );

}
export default Button