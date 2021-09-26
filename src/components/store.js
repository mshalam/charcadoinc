import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Header from './Header';
import charPic from '../images/char.jpeg'
import abcsUniPic from '../images/abcsUniCover.jpg'
import storeLogo from '../images/storeLogo.png'
import Footer from './Footer';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    card: {
        maxWidth: '48%',
        marginBottom: 30,
        marginTop: 30,
        minWidth: 250,
        width: '100%'
    },
});

const sections = [
    { title: 'TUTORING', url: 'https://mshalam.github.io/charcadoinc/#/tutoring' },
    { title: 'CODING BOOTCAMP', url: 'https://mshalam.github.io/charcadoinc/#/bootcamp' },
    { title: 'SAT/ACT PREP', url: 'https://www.picktime.com/charmander#booking-content:~:text=test%20prep', target: "_blank" },
    { title: 'VIOLIN LESSONS', url: 'https://www.picktime.com/charmander#booking-content:~:text=violin', target: "_blank" },
    // { title: 'ABOUT US', url: 'https://mshalam.github.io/charcadoinc/#/about' },
    { title: 'STORE', url: 'https://mshalam.github.io/charcadoinc/#/store' },
    { title: 'CONTACT US', url: 'https://mshalam.github.io/charcadoinc/#/contact' },
];

const featuredPosts = [
    {
        title: 'ABCs of University: Coloring Book',
        image: abcsUniPic,
        link: 'https://www.amazon.com/dp/B096TLBNF3',
        description: 'This cute and silly coloring book is perfect for your creative drawing needs!',
        description2: '26 unique designs',
        description3: 'Each picture corresponds the letter of the alphabet with a University experience',
        price: '$14.99',
        in: true
    },
];

export default function Store() {

    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header title="Charcado inc." sections={sections} />
                <main align="center">
                    <img src={storeLogo} />
                    <Grid container spacing={2} justify="space-around" >
                        {featuredPosts.map((post) => (
                            <Card className={classes.card} >
                                <CardActionArea>
                                    <div align="center">
                                        <img src={post.image} />
                                    </div>
                                    <CardContent align="left">
                                        <Typography gutterBottom variant="h5" component="h2" align="center">
                                            <b>{post.title}</b>
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="li">
                                            {post.description}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="li">
                                            {post.description2}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="li">
                                            {post.description3}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Typography variant="body2" color="textSecondary" component="h1" style={{ color: "black" }}>
                                        <b>Price:</b>
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="h1" style={{ color: "green" }}>
                                        {post.price}
                                    </Typography>
                                    <Button
                                        size="small"
                                        variant="contained"
                                        color="primary"
                                        href={post.link}
                                        target="_blank"
                                    >
                                        BUY NOW
                                    </Button>
                                </CardActions>
                            </Card>
                        ))}
                    </Grid>
                </main>
            </Container>
            <Footer title="Contact Us" />
        </React.Fragment>
    );
}