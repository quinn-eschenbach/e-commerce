import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    height: 260,
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cartActions: {
    justifyContent: 'center',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
  card:{
    marginBottom: 10
  }
}));