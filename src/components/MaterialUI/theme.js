import { createMuiTheme } from '@material-ui/core/styles';
// import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const Theme = createMuiTheme({
  palette: {
    primary: {
        main: '#083C5D',
    },
    secondary: {
        main: '#88a0b1',
    },
  },
  status: {
    danger: 'orange',
  },
});

export default Theme;