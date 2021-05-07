import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Header from './Header';
import charPic from '../images/char.jpeg'
import mauricePic from '../images/maurice.jpeg'
import Footer from './Footer';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles({
    card: {
        display: 'flex',
        marginBottom: 15,
        marginTop: 30,
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
});

const sections = [
    { title: 'TUTORING', url: 'https://mshalam.github.io/charcadoinc/#/tutoring' },
    { title: 'CODING BOOTCAMP', url: 'https://mshalam.github.io/charcadoinc/#/bootcamp' },
    { title: 'SAT/ACT PREP', url: 'https://www.picktime.com/charmander#booking-content:~:text=test%20prep', target: "_blank" },
    { title: 'VIOLIN LESSONS', url: 'https://www.picktime.com/charmander#booking-content:~:text=violin', target: "_blank" },
    { title: 'ABOUT US', url: 'https://mshalam.github.io/charcadoinc/#/about' },
    { title: 'CONTACT US', url: 'https://mshalam.github.io/charcadoinc/#/contact' },
];

const featuredPosts = [
    {
        title: 'Char',
        description:
            'Char is a former Paypal Engineer and Hackathon winner. She has been tutoring struggling Computer Science and Math students since she was a student at GCU. While at GCU Char graduated with a degree in Data Science and Software Engineering. She was a member of the Alpha Chi Honors College and graduated Magna Cum Laude with a 4.0 GPA. She has a passoin for learning and loves helping curious minds obtain the building blocks to knowledge.',
        image: charPic,
        imageText: 'Image Text',
        link: 'https://mshalam.github.io/charcadoinc/#/tutoring',
        linkText: 'LEARN MORE',
        in: true
    },
    {
        title: 'Maurice',
        description:
            'Maurice is a Full-Stack Software engineer, who has worked at many big tech and financial tech companies including Amazon, American Express, and E-Trade. He graduated with a Computer Science Degree from NYU and has a passion for creating interesting software projects with the newest technologies.',
        image: mauricePic,
        imageText: 'Image Text',
        link: 'https://www.picktime.com/charmander#booking-content:~:text=test%20prep',
        linkText: 'BOOK NOW',
    },
];

export default function AboutUs() {

    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header title="Charcado inc." sections={sections} />
                <main>
                    <CardActionArea>
                        <Card className={classes.card}>
                            <Hidden xsDown>
                                <CardMedia className={classes.cardMedia} image={featuredPosts[0].image} title={featuredPosts[0].imageTitle} />
                            </Hidden>
                            <div className={classes.cardDetails}>
                                <CardContent>
                                    <Typography component="h2" variant="h5">
                                        {featuredPosts[0].title}
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        {featuredPosts[0].date}
                                    </Typography>
                                    <Typography variant="subtitle1" paragraph>
                                        {featuredPosts[0].description}
                                    </Typography>
                                </CardContent>
                            </div>
                        </Card>
                    </CardActionArea>
                    <CardActionArea>
                        <Card className={classes.card}>
                            <Hidden xsDown>
                                <CardMedia className={classes.cardMedia} image={featuredPosts[1].image} title={featuredPosts[1].imageTitle} />
                            </ Hidden>
                            <div className={classes.cardDetails}>
                                <CardContent>
                                    <Typography component="h2" variant="h5">
                                        {featuredPosts[1].title}
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        {featuredPosts[1].date}
                                    </Typography>
                                    <Typography variant="subtitle1" paragraph>
                                        {featuredPosts[1].description}
                                    </Typography>
                                </CardContent>
                            </div>
                        </Card>
                    </CardActionArea>
                </main>
            </Container>
            <Footer title="Contact Us" />
        </React.Fragment>
    );
}