import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(()=>({
    image:{
        maxHeight: "70vh",
        width: "100%"
    },
    icons:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    buttonWrapper: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    badgeWrapper:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    mainWrapper:{
        padding: 10
    }
}))