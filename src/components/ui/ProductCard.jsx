/* eslint-disable react/prop-types */
import styled from "styled-components";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const StyledCard = styled(Card)`
  max-width: 345px;
  margin: 20px;
`;
const CustomCradMedia = styled(CardMedia)`
  width: 100%;
  aspect-ratio: 1/1;
`;

const ProductCard = ({ id, image, title, onAddToCart, category }) => {
  return (
    <StyledCard>
      <Link to={`/product/${id}`} style={{ textDecoration: "none" }}>
        <CustomCradMedia component="img" image={image} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {category}
          </Typography>
        </CardContent>
      </Link>
      <CardActions>
        <Button size="small" color="primary" onClick={onAddToCart}>
          Add to Cart
        </Button>
      </CardActions>
    </StyledCard>
  );
};

export default ProductCard;
