import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import houseIcon from '../images/houseIcon.png'
import computericon from '../images/computericon.png'

const useStyles = makeStyles({
    card: {
        maxWidth: '48%',
        marginBottom: 30,
        marginTop: 30,
        minWidth: 250,
        width: '100%'
    },
    media: {
        height: 140,
    },
});

export default function TutoringCards() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Card className={classes.card}>
                <CardActionArea>
                    <div align="center">
                        <img src={computericon} />
                    </div>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" align="center">
                            <b>In-office or Online Tutoring</b>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="li">
                            Individualized attention
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="li">
                            We do everything from middle school to college
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="li">
                            Subjects available include Math, Coding, Science, Physics, and English
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button
                        size="small"
                        variant="contained"
                        color="primary"
                        href='https://www.picktime.com/charmander#booking-content:~:text=tutoring,-In'
                        target="_blank"
                    >
                        BOOK NOW
                    </Button>
                </CardActions>
                <CardActions>
                    <Typography variant="body2" color="textSecondary" component="h1" style={{ color: "black" }}>
                        <b>Or email Charcadoinc@gmail.com to schedule your session</b>
                    </Typography>
                </CardActions>
            </Card>
            <Card className={classes.card}>
                <CardActionArea>
                    <div align="center">
                        <img src={houseIcon} />
                    </div>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" align="center">
                            <b>In-home Tutoring</b>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="li">
                            Individualized attention in the comfort of your own home
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="li">
                            Only available in Arcadia, Scottsdale, and Paradise Valley
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="li">
                            We do everything from middle school to college
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="li">
                            Subjects available include Math, Coding, Science, Physics, and English
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Typography variant="body2" color="textSecondary" component="h1" style={{ color: "black" }}>
                        <b>Email Charcadoinc@gmail.com to schedule your session</b>
                    </Typography>
                </CardActions>
            </Card>
        </React.Fragment>
    );
}
