import { createMuiTheme } from '@material-ui/core/styles';

const bgBlue = '#0B72B9';
const bcOrange = '#FFBA60';

export default createMuiTheme({
    palette: {
        common: {
            blue: `${bgBlue}`,
            orange: `${bcOrange}`
        },
        primary: {
            main: `${bgBlue}`
        },
        secondary: {
            main: `${bcOrange}`
        }
    },
    typography: {
        h3: {
            fontWeight: 600
        }
    }
})