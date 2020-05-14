import { createMuiTheme } from '@material-ui/core/styles';

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