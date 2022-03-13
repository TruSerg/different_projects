import { memo } from "react";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
} from "@mui/material";
import { withStyles } from "@mui/styles";

import userImage from "../../static/images/userImage.png";

import styles from "./styles";

const MaterialCard = ({ name, age, city, handleRemove, classes }) => {
  return (
    <Card className={classes.wrapper} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={userImage} alt="user" />
        <CardContent className={classes.contentWrapper}>
          <Typography gutterBottom variant="h5" component="div">
            {`${name} - ${age}`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            I'm from {city}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          onClick={handleRemove}
          variant="contained"
          size="small"
          color="error"
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default memo(withStyles(styles)(MaterialCard));
