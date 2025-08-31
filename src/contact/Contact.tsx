import { Box, Button, Container, Grid, Paper, TextField, Typography } from "@mui/material";

const Contact = () => {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Contact Me
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Have a question, collaboration idea, or just want to say hi?  
          Fill out the form below or reach me directly via email 📧.
        </Typography>

        <Grid container spacing={4}>
          {/* Left side: Contact Info */}
          <Grid size = {{xs: 12, md: 5}}>
            <Box sx={{ mb: 2 }}>
              <Typography variant="h6">📧 Email</Typography>
              <Typography variant="body2">matthewakinyemi24@gmail.com</Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="h6">📱 Phone</Typography>
              <Typography variant="body2">+234 902 554 6836</Typography>
            </Box>
            <Box>
              <Typography variant="h6">📍 Address</Typography>
              <Typography variant="body2">No 154, tella Street Oluwo Ibadan, Nigeria </Typography>
            </Box>
          </Grid>

          {/* Right side: Contact Form */}
          <Grid size = {{xs: 12, md: 7}}>
            <Box component="form" noValidate autoComplete="off">
              <TextField
                fullWidth
                label="Your Name"
                variant="outlined"
                margin="normal"
              />
              <TextField
                fullWidth
                label="Your Email"
                type="email"
                variant="outlined"
                margin="normal"
              />
              <TextField
                fullWidth
                label="Your Message"
                multiline
                rows={4}
                variant="outlined"
                margin="normal"
              />
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 2, borderRadius: 2 }}
              >
                Send Message
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Contact;
