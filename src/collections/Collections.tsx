import { Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import Cart from "../cart/CartButton"


const Collections = () => {

type sneakerContent = {
  image: string,
  company: string,
  edition: string,
  note: string,
  price: string,
  percentage: string,
}

const cardData: sneakerContent[] = [
  
    {image: "public/menSneakers/womenSneakers/women3.jpg", company: "SNEAKER COMPANY", edition: "Fall Limited Edition Sneakers", note: "these low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer", price: "$100", percentage: "50%" },

    
    {image: "public/menSneakers/womenSneakers/women4.jpg", company: "SNEAKER COMPANY", edition: "Fall Limited Edition Sneakers", note: "these low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer", price: "$100", percentage: "50%" },

    {image: "public/menSneakers/men1.jpg", company: "SNEAKER COMPANY", edition: "Fall Limited Edition Sneakers", note: "these low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer", price: "$100", percentage: "50%" },


    {image: "public/menSneakers/men1.jpg", company: "SNEAKER COMPANY", edition: "Fall Limited Edition Sneakers", note: "these low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer", price: "$100", percentage: "50%" },

     {image: "public/menSneakers/womenSneakers/women5.jpg", company: "SNEAKER COMPANY", edition: "Fall Limited Edition Sneakers", note: "these low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer", price: "$100", percentage: "50%" },


    {image: "public/menSneakers/womenSneakers/women6.jpg", company: "SNEAKER COMPANY", edition: "Fall Limited Edition Sneakers", note: "these low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer", price: "$100", percentage: "50%" },

     {image: "public/menSneakers/men2.jpg", company: "SNEAKER COMPANY", edition: "Fall Limited Edition Sneakers", note: "these low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer", price: "$100", percentage: "50%" },

    
    {image: "public/menSneakers/men3.jpg", company: "SNEAKER COMPANY", edition: "Fall Limited Edition Sneakers", note: "these low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer", price: "$100", percentage: "50%" },

    {image: "public/menSneakers/womenSneakers/women7.jpg", company: "SNEAKER COMPANY", edition: "Fall Limited Edition Sneakers", note: "these low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer", price: "$100", percentage: "50%" },


    {image: "public/menSneakers/womenSneakers/women8.jpg", company: "SNEAKER COMPANY", edition: "Fall Limited Edition Sneakers", note: "these low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer", price: "$100", percentage: "50%" },

        {image: "public/menSneakers/men4.jpg", company: "SNEAKER COMPANY", edition: "Fall Limited Edition Sneakers", note: "these low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer", price: "$100", percentage: "50%" },


    {image: "public/menSneakers/men5.jpg", company: "SNEAKER COMPANY", edition: "Fall Limited Edition Sneakers", note: "these low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer", price: "$100", percentage: "50%" },


    
    {image: "public/menSneakers/womenSneakers/women9.jpg", company: "SNEAKER COMPANY", edition: "Fall Limited Edition Sneakers", note: "these low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer", price: "$100", percentage: "50%" },


    {image: "public/menSneakers/men9.jpg", company: "SNEAKER COMPANY", edition: "Fall Limited Edition Sneakers", note: "these low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer", price: "$100", percentage: "50%" },


     {image: "public/menSneakers/men6.jpg", company: "SNEAKER COMPANY", edition: "Fall Limited Edition Sneakers", note: "these low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer", price: "$100", percentage: "50%" },


    {image: "public/menSneakers/men7.jpg", company: "SNEAKER COMPANY", edition: "Fall Limited Edition Sneakers", note: "these low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer", price: "$100", percentage: "50%" },


      {image: "public/menSneakers/womenSneakers/womenSneaker1.jpg", company: "SNEAKER COMPANY", edition: "Fall Limited Edition Sneakers", note: "these low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer", price: "$100", percentage: "50%" },


    {image: "public/menSneakers/womenSneakers/womenSneaker2.jpg", company: "SNEAKER COMPANY", edition: "Fall Limited Edition Sneakers", note: "these low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer", price: "$100", percentage: "50%" },


    
    {image: "public/menSneakers/men8.jpg", company: "SNEAKER COMPANY", edition: "Fall Limited Edition Sneakers", note: "these low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer", price: "$100", percentage: "50%" },


    {image: "public/menSneakers/men9.jpg", company: "SNEAKER COMPANY", edition: "Fall Limited Edition Sneakers", note: "these low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer", price: "$100", percentage: "50%" },


        {image: "public/menSneakers/womenSneakers/womenSneaker3.jpg", company: "SNEAKER COMPANY", edition: "Fall Limited Edition Sneakers", note: "these low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer", price: "$100", percentage: "50%" },


    {image: "public/menSneakers/womenSneakers/womenSneaker4.jpg", company: "SNEAKER COMPANY", edition: "Fall Limited Edition Sneakers", note: "these low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer", price: "$100", percentage: "50%" },


    {image: "public/menSneakers/menSneaker1.jpg", company: "SNEAKER COMPANY", edition: "Fall Limited Edition Sneakers", note: "these low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer", price: "$100", percentage: "50%" },


    {image: "public/menSneakers/menSneaker2.jpg", company: "SNEAKER COMPANY", edition: "Fall Limited Edition Sneakers", note: "these low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer", price: "$100", percentage: "50%" },


     {image: "public/menSneakers/womenSneakers/women1.jpg", company: "SNEAKER COMPANY", edition: "Fall Limited Edition Sneakers", note: "these low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer", price: "$100", percentage: "50%" },


    {image: "public/menSneakers/womenSneakers/women2.jpg", company: "SNEAKER COMPANY", edition: "Fall Limited Edition Sneakers", note: "these low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer", price: "$100", percentage: "50%" },


    {image: "public/menSneakers/menSneaker3.jpg", company: "SNEAKER COMPANY", edition: "Fall Limited Edition Sneakers", note: "these low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer", price: "$100", percentage: "50%" },


    {image: "public/menSneakers/menSneaker4.jpg", company: "SNEAKER COMPANY", edition: "Fall Limited Edition Sneakers", note: "these low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer", price: "$100", percentage: "50%" },


]



  return (
    <Box>
    <Grid  sx={{display: "flex", flexWrap: "wrap", gap: 10}} spacing={3} >
      {cardData.map((card) => (
        <Grid key={card.company}>
            <Card sx={{ maxWidth: 345, maxHeight: 1000,  m: 2 }}>
              <CardMedia 
              component= "img"
              image={card.image}
              alt = "Product Image"
              sx={{ height: "50%", width: '100%', objectFit: 'cover' }}
              />
          <CardContent>
            <Typography sx={{fontWeight: "normal"}} variant="h6">{card.company}</Typography>

        <Typography variant="h3">
          {card.edition}
        </Typography>

        <Typography>
          {card.note}
        </Typography>
<Box sx={{display: "flex", gap: 2}}>
      <Typography variant="h3">
        {card.price}
      </Typography>
    <Typography variant="h5" sx={{backgroundColor: "black",
       color: "white",
      borderRadius: "2px",
      height: "40px",
      width: "50px",
      mt: 1,
      alignContent: "center",
      justifyContent: "center",
      }}>{card.percentage}</Typography>
</Box>

        <Typography sx={{textDecoration: "line-through"}}>{card.price}</Typography>

    <Cart/>
          </CardContent>
            </Card>
        </Grid>
      ))}
    </Grid>
    </Box>
  )
}

export default Collections