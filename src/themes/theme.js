import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#4D81B7',
      light: '#FAFAFA'
    },
    secondary: {
      main: '#1871E8'
    },
    text: {
      primary: '#303030'
    },
    background: {
      default: '#FFFFFF',
      smoke: '#F5F8F9'
    }
  },
  typography: {
    fontFamily: '"Dosis", sans-serif',
    h0: {
      fontWeight: '500',
      fontSize: '2.5rem',
      lineHeight: '3.25rem',
      marginBottom: '3rem'
    },
    h1: {
      fontSize: '48px',
      lineHeight: '110%',
      letterSpacing: '-1px',
      marginBottom: '3rem'
    },
    h2: {
      fontSize: '40px',
      lineHeight: '110%',
      letterSpacing: '-0.5px',
      marginBottom: '1rem'
    },
    h3: {
      fontSize: '36px',
      lineHeight: '110%',
      letterSpacing: '0px',
      marginBottom: '1rem'
    },
    h4: {
      fontSize: '20px',
      lineHeight: '110%',
      letterSpacing: '0.25px',
      fontFamily: 'Nunito'
    },
    h5: {
      fontSize: '18px',
      lineHeight: '115%',
      letterSpacing: '0px',
      fontFamily: 'Nunito',
    },
    h6: {
      fontWeight: '400',
      fontSize: '16px',
      fontFamily: 'Nunito',
      color: '#5C6269'
    },
    body1: {
      fontSize: '16px',
      lineHeight: '150%',
      letterSpacing: '0px',
      fontFamily: 'Dosis'
    },
    body2: {
      fontSize: '14px',
      lineHeight: '143%',
      letterSpacing: '0px',
      fontFamily: 'Dosis'
    },
    caption: {
      fontSize: '12px',
      lineHeight: '266%',
      letterSpacing: '1px',
      fontFamily: 'Dosis'
    }
  },
  sizing: {
    button: {
      height: '56px',
      minWidth: '160px'
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        fontFamily: 'Quicksand'
      }
    }
  }
})

export default theme
