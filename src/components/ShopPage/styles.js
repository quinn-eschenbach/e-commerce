import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(()=>({
  mainWrapper:{
    padding: 20,
    display: 'flex',
  },
  filterWrapper:{
    width: "20%",
    height: '100%',
    position: "sticky",
    marginRight: 10,
    top: 85
  },
  filters:{
    display:'flex',
    flexDirection: 'column',
  },
  buttonWrapper:{
    marginTop: 10,
    marginBottom:10,
    '&>*':{
      marginRight: 5
    }
  }
}))