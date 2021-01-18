import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    item1Header: {
        display: 'flex',   
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",   
        paddingRight: 100,
        color: '#666666',     
    },
    button1:{
        color: '#666666',
        borderColor: "#666666",
        margin: 10,
    },
   
    item2Header: {
        display: 'flex',   
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "flex-end",   
        paddingRight: 100,
        color: 'white'
    }, 
    button2:{
        color: 'white',
        borderColor: "white",
        margin: 10,
    },

    item3Header: {
        display: 'flex',   
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "flex-start",   
        paddingLeft: 100,
        color: '#B41467'
    },  
    button3:{
        color: '#B41467',
        borderColor: "#B41467",
        margin: 10,
    },
}));