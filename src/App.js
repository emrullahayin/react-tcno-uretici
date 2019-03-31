import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import 'normalize.css';
import 'typeface-roboto';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Snackbar from '@material-ui/core/Snackbar';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  card: {
    maxWidth: 345,
    margin: '50px auto',
    textAlign: 'center',
  },
  cardActions: {
    padding: 16,
    justifyContent: 'center',
  },
  media: {
    height: 140,
  },
  typography: {
    marginBottom: 0,
  }
});

function App(props) {
  const { classes } = props;
  const [no, setNo] = useState();
  useEffect(() => {
    !no && setNo(doClick);
  });
  function doClick() {
    let a = "" + (0 | 9e8 * Math.random() + 1e8),
      b = a.split("").map((t) => 0 | t),
      c = b[0] + b[2] + b[4] + b[6] + b[8],
      d = b[1] + b[3] + b[5] + b[7],
      e = (7 * c - d) % 10,
      number = a + ("" + e) + ("" + (d + c + e) % 10)
    setNo(number);
  }
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    setCopied(true)
  });
  function onCopy() {
    copied && console.log('copied');
    setOpenTooltip(true)
  };
  const [openTooltip, setOpenTooltip] = useState(false);
  function handleClose() {
    setOpenTooltip(false)
  };
  return (
    <div>
      <Card className={classes.card}>
        <CardActions className={classes.cardActions}>
          <Button
            size="large"
            color="secondary"
            variant="contained"
            onClick={doClick}
          >
            TC No Üret
        </Button>
        </CardActions>
        {no !== undefined &&
          <CopyToClipboard onCopy={onCopy} text={no}>
            <Tooltip  title="Tıkla-Kopyala" placement="bottom">
              <CardActionArea>
                <CardContent>
                  <Typography className={classes.typography} gutterBottom variant="h5" component="h2">
                    {no}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Tooltip>
          </CopyToClipboard>
        }
      </Card>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'left', }}
        open={openTooltip}
        onClose={handleClose}
        autoHideDuration={500}
        ContentProps={{
          'aria-describedby': 'messageCopyAlert',
        }}
        message={<span id="messageCopyAlert">Kopyalandı</span>}
      />
    </div>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);