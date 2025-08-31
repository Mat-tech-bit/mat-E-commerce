import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// ✅ Array of product images
const productImages: string[] = [
        "/menSneakers/menSneaker1.jpg",
        "/menSneakers/menSneaker2.jpg",
        "/menSneakers/menSneaker3.jpg",
        "/menSneakers/menSneaker4.jpg",
];

const FirstSneaker: React.FC = () => {
  // ✅ State with type
  const [selectedImage, setSelectedImage] = useState<string>(productImages[0]);

  const [count, setCount] = useState(0)
        const increase = () => {
            setCount(count + 1)
        }
        const decrease = () => {
            if(count > 0){
              setCount(count - 1)
            }
        }
      const addCount = () =>{
        setCount(count + 1)
      }

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Grid container spacing={4}>
        {/* ✅ LEFT SIDE: Images */}
        <Grid size={{xs: 12, md: 6}}>
          {/* Big Image */}
          <Paper
            elevation={3}
            sx={{
              p: 1,
              mb: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 2,
            }}
          >
            <Box
              component="img"
              src={selectedImage}
              alt="Selected Product"
              sx={{
                width: "100%",
                maxHeight: 400,
                objectFit: "cover",
                borderRadius: 2,
              }}
            />
          </Paper>

          {/* Thumbnails */}
          <Grid container spacing={2} justifyContent="center">
            {productImages.map((img: string, index: number) => (
              <Grid key={index} size={{xs:3}}>
                <Paper
                  elevation={selectedImage === img ? 6 : 2}
                  sx={{
                    p: 0.5,
                    cursor: "pointer",
                    borderRadius: 2,
                    border:
                      selectedImage === img
                        ? "2px solid #1976d2"
                        : "1px solid #ccc",
                  }}
                  onClick={() => setSelectedImage(img)}
                >
                  <Box
                    component="img"
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    sx={{
                      width: "100%",
                      height: 80,
                      objectFit: "cover",
                      borderRadius: 1,
                    }}
                  />
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* ✅ RIGHT SIDE: Product Info */}
            <Grid size={{xs: 12, md: 6 }} >
<Typography variant = "h6" sx={{mb: 1}}> SNEAKER COMPANY</Typography>

            <Typography variant="h3" sx={{mb: 3}}>
                Fall Limited Edidtion Sneakers
            </Typography>
                <Typography>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole. they'll withstand everything the weather can offer</Typography>
                <Box sx={{display: "flex", gap: 3}}>
            <Typography variant="h3">$125.00 </Typography>
            <Typography variant="h4" sx={{
                backgroundColor: "black",
                color: "white",
                borderRadius: 2,
                width: "80px",
                alignContent: "center",
                justifyContent: "center"
                }}>50%</Typography>
            </Box>

            <Typography sx={{textDecoration: "line-through"}}>$250.00</Typography>

            <Box>
                <Button sx={{color: "orange"}} onClick={decrease}><Remove/> </Button>
                <Button  sx={{color: "orange"}} > {count} </Button>
                <Button sx={{color: "orange"}} onClick={increase}> <Add/> </Button>
                <Button onClick={addCount} sx={{backgroundColor: "orange", color: "black"}} startIcon = {<ShoppingCartIcon/>}> Add to Cart</Button>
            </Box>

            
            </Grid>
      </Grid>
    </Container>
  );
};

export default FirstSneaker;
