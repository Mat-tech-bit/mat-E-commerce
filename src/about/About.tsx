import { Container, Typography, Avatar, Grid, Paper, CardMedia } from "@mui/material";

const About = () => {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        <Grid container spacing={4} alignItems="center">
          <CardMedia
          component= "img"
          height="230"
          image="/myAvatar1.jpg"
          alt="Mattscript Profile"
          />
          <Grid size= {{xs: 12, sm: 4}} sx={{ textAlign: "center" }}>
            <Avatar
              alt="Your Name"
              src="/myAvatar2.jpg" 
              sx={{ width: 180, height: 180, mx: "auto", mb: 2 }}
            />
          </Grid>

          {/* Right side: About Text */}
      <Grid  size= {{xs: 12, sm: 8}}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              About Me
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Hi 👋, my name is <b>Matthew Akinyemi</b>. I am a passionate{" "}
              <b>frontend developer</b> with experience in React, Next.js, and
              Material UI. I love building clean, responsive, and user-friendly
              websites.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Apart from coding, I enjoy learning new technologies, sharing
              knowledge, and working on creative projects that solve real-world
              problems.
            </Typography>
            <Typography variant="body1">
              🚀 Always open to collaboration and new opportunities!
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default About;
