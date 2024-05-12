import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
  Stack,
  Grid,
} from "@mui/material";
import { AddShoppingCartOutlined } from "@mui/icons-material";

function ProductCard({ data }) {
  // console.log(data)
  const { id, title, price, category, description, image } = data;
  return (
    <Card className="card">
      <CardMedia
        component="img"
        alt={title}
        image={image}
        className="card-image"
        height="60%"
        sx={{
          objectFit: "scale-down",
        }}
      />
      <CardContent
        sx={{
          textAlign: "start",
          padding: "2%",
          height: "24%",
          display: "flex",
          alignItems: "stretch",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="body2"
          component="div"
          sx={{ fontSize: "80%", textOverflow: "ellipsis" }}
        >
          {title}
        </Typography>{" "}
        <Typography sx={{ fontSize: "75%" }}>${price}</Typography>
      </CardContent>
      <CardActions
        className="card-actions"
        sx={{ padding: "2%", height: "16%" }}
      >
        <Button
          variant="contained"
          fullWidth
          className="card-button"
          startIcon={<AddShoppingCartOutlined />}
          size="small"
          
          
          sx={{ color:"white", backgroundColor:"#5f9ea0"}}
        >
          ADD TO CART
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
