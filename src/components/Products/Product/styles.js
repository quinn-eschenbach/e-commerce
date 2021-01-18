import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(()=>({
    root: {
        transitionProperty: 'all',
        maxWidth: '100%',
        boxShadow: 'none',
        '&:hover':{
          boxShadow:'0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
          transform: "scale(1.1)"
        }
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    cardActions: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    cardContent: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    description: {
      height: 150,
      overflow: 'auto'
    },
    categories:{
      display:"flex",
      height: "1em",
    },
    link:{
      textDecoration: 'none',
      color: 'black'
    }
    
}))