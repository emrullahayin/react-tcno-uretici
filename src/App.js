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
  },
  media: {
    height: 140,
  },
});

function App(props) {
  const { classes } = props;
  const [no, setNo] = useState(0);
  function doClick() {
    setNo(event => event + 2);
  }
  return (
    <Card className={classes.card}>
      <Tooltip title="Tıkla-Kopyala" placement="right-start">
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {no}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Tooltip>
      <CardActions>
        <Button
          color="secondary"
          variant="contained"
          onClick={setNo === 0 ? undefined : doClick}
        >
          TC No Üret
        </Button>
      </CardActions>
    </Card>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);