import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: '5%',
  },
  emptyButton: {
    minWidth: '150px',
    marginBottom: 5
  },
  checkoutButton: {
    minWidth: '150px',
    marginBottom: 5
  },
  link: {
    textDecoration: 'none',
  },
  cardDetails: {
    display: 'flex',
    marginTop: '10%',
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: "column",
    alignItems: "center",
    marginTop: "auto",
    marginBottom: 20
  },
  buttonWrapper:{
    marginTop: 10,
      width: "100%",
      display: "flex",
      justifyContent: "space-evenly",
  },
  drawer:{
    width: 400,
    display: 'flex',
    flexDirection: 'column',
    height: "100%",
  },
  grid:{
    overflowX: "hidden",
    marginBottom: 20
  },
  buttonBack:{
    height: 65,
    width: 65
  }
}));