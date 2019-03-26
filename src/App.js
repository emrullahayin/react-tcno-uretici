import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  card: {
    maxWidth: 345,
    margin: 'auto',
    textAlign: 'center',
  },
  CardActions: {
    justifyContent: 'center',
  },
  media: {
    height: 140,
  },
});

function App(props) {
  const { classes } = props;
  const [no, setNo] = useState();

  function doClick() {
    var a = "" + (0 | 9e8 * Math.random() + 1e8),
      b = a.split("").map(function (t) { return 0 | t }),
      c = b[0] + b[2] + b[4] + b[6] + b[8],
      d = b[1] + b[3] + b[5] + b[7],
      e = (7 * c - d) % 10,
      number = a + ("" + e) + ("" + (d + c + e) % 10)
    setNo(number);
  }
  console.log(no)
  return (
    <Card className={classes.card}>
      <CardActions className={classes.CardActions}>
        <Button
          color="secondary"
          variant="contained"
          onClick={doClick}
        >
          TC No Üret
        </Button>
      </CardActions>
      {no !== undefined &&
        <Tooltip title="Tıkla-Kopyala" placement="right-start">
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {no}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Tooltip>
      }
    </Card>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);