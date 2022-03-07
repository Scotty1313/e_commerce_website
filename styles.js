import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: 'rgb(2,0,36)',
    background: 'linear-gradient(139deg, rgba(2,0,36,1) 40%, rgba(9,9,121,1) 80%, rgba(29,8,154,1) 100%)',
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
}));
