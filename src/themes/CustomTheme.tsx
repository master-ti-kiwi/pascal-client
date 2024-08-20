import { createTheme } from '@mui/material/styles';

const mentalHealthTheme = createTheme({
  palette: {
    primary: {
      main: '#4A90E2', // Calming blue
    },
    secondary: {
      main: '#8BC34A', // Healing green
    },
    background: {
      default: '#F5F5F5', // Light, non-intrusive background
    },
    error: {
      main: '#F44336', // Red for error messages, used sparingly
    },
    success: {
      main: '#4CAF50', // Green for positive feedback
    },
    text: {
      primary: '#333', // Dark gray for readability
      secondary: '#555', // Slightly lighter gray for secondary text
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '2.2rem',
      fontWeight: 500,
      color: '#333',
    },
    h2: {
      fontSize: '1.8rem',
      fontWeight: 500,
      color: '#333',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      color: '#555',
    },
    button: {
      textTransform: 'none', // Keep button text in normal case
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          padding: '10px 20px',
          boxShadow: 'none',
          textTransform: 'none',
          '&:hover': {
            boxShadow: '0px 2px 4px rgba(0,0,0,0.2)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 10,
            '&.Mui-focused fieldset': {
              borderColor: '#4A90E2', // Focus color
            },
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 15,
          boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
          padding: '20px',
          margin: '20px 0',
        },
      },
    },
  },
});

export default mentalHealthTheme;
