import * as React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <Container component="main" maxWidth="lg" sx={{ mt: 8, mb: 4 }}>
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {/* Introduction Section */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <Typography component="h1" variant="h3" color="primary" gutterBottom>
              Welcome to PASCAL
            </Typography>
            <Typography variant="h6" color="text.secondary" paragraph>
              Your personal AI-powered mental health companion. PASCAL is here to listen, support, and guide you through your emotional journey, anytime, anywhere.
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Whether you’re feeling overwhelmed, anxious, or just need someone to talk to, PASCAL is always ready to provide a compassionate ear and thoughtful advice. Take the first step towards better mental health.
            </Typography>
            <Button
              component={Link}
              to="/chat"
              variant="contained"
              color="primary"
              size="large"
              sx={{ mt: 3, borderRadius: 20 }}
            >
              Start Chatting with PASCAL
            </Button>
          </Box>
        </Grid>

        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <Avatar
            alt="PASCAL Chatbot"
            src="https://via.placeholder.com/400x400" // Replace with your own image or illustration
            sx={{ width: '100%', height: 'auto', borderRadius: '15px' }}
          />
        </Grid>
      </Grid>

      {/* Additional Information Section */}
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" color="primary" gutterBottom align="center">
          How PASCAL Can Help You
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Avatar
                src="https://via.placeholder.com/150" // Replace with appropriate icons
                sx={{ width: 80, height: 80, mb: 2, margin: '0 auto' }}
              />
              <Typography variant="h6" color="text.primary">
                Instant Support
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Get immediate support when you need it, right at your fingertips. PASCAL is available 24/7 to provide guidance and comfort.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Avatar
                src="https://via.placeholder.com/150" // Replace with appropriate icons
                sx={{ width: 80, height: 80, mb: 2, margin: '0 auto' }}
              />
              <Typography variant="h6" color="text.primary">
                Personalized Advice
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Receive tailored advice based on your emotional state and personal experiences, helping you navigate life's challenges.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Avatar
                src="https://via.placeholder.com/150" // Replace with appropriate icons
                sx={{ width: 80, height: 80, mb: 2, margin: '0 auto' }}
              />
              <Typography variant="h6" color="text.primary">
                Confidential and Secure
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Your conversations with PASCAL are private and secure, ensuring a safe space for you to express yourself freely.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
