import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { useState } from 'react';
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import RemoveCircleTwoToneIcon from '@mui/icons-material/RemoveCircleTwoTone';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';

export function ContentCards({ item, items, setItems }) {

  //using usestate  for checking item is added or not
  const [IsAdded, setIsAdded] = useState(false);

  //on click event
  let changeState = () => {
    //change of add state
    setIsAdded(!IsAdded);
    
    //incre/decre -ment of total items in the cart
    setItems(IsAdded ? items-1 : items+1)
  };

  return (
    <Card sx={{ minWidth: 300, maxWidth: 300, margin: 2}} raised="true">
      <CardActionArea>
        <div className="card_align">
          <CardMedia
            component="img"
            height="240"
            image={item.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <b>{item.title}</b>
            </Typography>
            <Rating name="read-only" value={item.rating} readOnly precision={0.5}/>
            <Typography variant="subtitle1" gutterBottom component="div">
              {item.finalPrice}
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div">
              <strike>{item.price}</strike>
            </Typography>
          </CardContent>
          <CardActions>
            <Button color="inherit" variant="outlined" onClick={changeState} startIcon={<AddCircleTwoToneIcon />} disabled={IsAdded ? true : false}>{IsAdded ? "Added" : "Add to Cart"}</Button>
            {IsAdded ? <Button color="inherit" variant="outlined" onClick={changeState} startIcon={<RemoveCircleTwoToneIcon />}> Remove </Button>: <></>}
          </CardActions>
        </div>
      </CardActionArea>
    </Card>
  )
}
