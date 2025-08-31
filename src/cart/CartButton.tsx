import { Add, Remove } from '@mui/icons-material';
import { Box, Button } from '@mui/material';

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from 'react';

const CartButton = () => {

      const [count, setCount] = useState(0);
      const increase = () => {
        setCount(count + 1);
      };
      const decrease = () => {
        if (count > 0){
            setCount(count - 1)
        }
        
      };

      const addCart = () => {
           setCount(count + 1);
      }
    

  return (
    <div>
                  <Box>
            <Button sx={{ color: "orange" }} onClick={decrease}>
              <Remove />{" "}
            </Button>
            <Button sx={{ color: "orange" }}> {count} </Button>
            <Button sx={{ color: "orange" }} onClick={increase}>
              {" "}
              <Add />{" "}
            </Button>
            <Button
                onClick={addCart}
              sx={{ backgroundColor: "orange", color: "black" }}
              startIcon={<ShoppingCartIcon />}
            >
              Add to Cart
            </Button>
          </Box>

    </div>
  )
}

export default CartButton