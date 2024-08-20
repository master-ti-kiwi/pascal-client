import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from './Copyright';


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function About() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Grid container spacing={4} justifyContent="center" alignItems="center">
            <Grid item xs={12} md={4} display="flex" justifyContent="center">
              <Avatar
                alt="Large Avatar"
                src="https://via.placeholder.com/300"
                sx={{ width: 300, height: 300, borderRadius: '50%' }}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography component="h1" variant="h5" gutterBottom>
                About Us
              </Typography>
              <Typography variant="body1" paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan bibendum sem, in 
                pellentesque nulla ultricies id. Integer ultricies diam a nisi condimentum, at bibendum 
                ipsum luctus. Quisque aliquam lectus non purus tristique, non fermentum nisl egestas. 
                Proin facilisis neque a ligula dapibus, at lacinia odio laoreet. Nam non augue nec erat 
                bibendum pretium. Sed sed risus eget lorem vehicula ultricies. Fusce varius nec magna 
                non laoreet. Ut laoreet, eros ac aliquet bibendum, nulla justo dictum arcu, nec gravida 
                lectus felis ut odio. Pellentesque auctor ultricies risus a finibus.
              </Typography>
              <Typography variant="body1" paragraph>
                Nulla facilisi. Praesent mollis dolor at urna ultricies, at tempus urna facilisis. 
                Etiam dignissim magna non tortor pharetra feugiat. Duis non lorem vehicula, facilisis 
                magna id, pharetra sapien. Nam dapibus tincidunt urna, non scelerisque nulla vehicula 
                quis. Nullam aliquam elit id lacinia auctor. Mauris fermentum est in odio tincidunt, 
                in volutpat neque sagittis.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
