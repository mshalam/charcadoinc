import React, { Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './Header';
import TutoringCards from './tutoringCards';
import Grid from '@material-ui/core/Grid';
import bootcampBanner from '../images/bootcampBanner.png'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Footer from './Footer';

const sections = [
    { title: 'TUTORING', url: 'https://mshalam.github.io/charcadoinc/#/tutoring' },
    { title: 'CODING BOOTCAMP', url: 'https://mshalam.github.io/charcadoinc/#/bootcamp' },
    { title: 'SAT/ACT PREP', url: 'https://www.picktime.com/charmander#booking-content:~:text=test%20prep', target: "_blank" },
    { title: 'VIOLIN LESSONS', url: 'https://www.picktime.com/charmander#booking-content:~:text=violin', target: "_blank" },
    // { title: 'ABOUT US', url: 'https://mshalam.github.io/charcadoinc/#/about' },
    { title: 'STORE', url: 'https://mshalam.github.io/charcadoinc/#/store' },
    { title: 'CONTACT US', url: 'https://mshalam.github.io/charcadoinc/#/contact' },
];

const mainFeaturedPost = {
    title: 'JOIN OUR CODING BOOTCAMP',
    description:
        "LEARN TO DEVELOP CODING PROJECTS FROM APPS TO VIDEO GAMES. ALL IN THIS IN DEPTH CODING BOOTCAMP FOR BEGINNERS.",
    image: bootcampBanner,
    imgText: 'main image description',
    linkText: 'REGISTER NOW',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSd4MJ3lnEedMmNPptSeCJfdYjXCzoBm4fxVZZEkDSbJDfiBjQ/viewform?usp=sf_link'
};

export class Tutoring extends Component {

    async componentDidMount() {
        //console.log("i'm over here: ")
    }

    render() {

        return (
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="lg">
                    <Header title="Charcado inc." sections={sections} />
                    <main>
                        <Grid container spacing={2} justify="space-around" >
                            <TutoringCards />
                        </Grid>
                        <Card >
                            <div >
                                <CardContent>
                                    <Typography component="h2" variant="h5">
                                        <b>Request Group Pricing</b>
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="li">
                                        Available for In-home, In-office, and Online Tutoring
                                    </Typography>
                                    <br />
                                    <Typography variant="body2" color="textSecondary" component="h1" style={{ color: "black" }}>
                                        <b>Email Charcadoinc@gmail.com to get a quote for your specific situation</b>
                                    </Typography>
                                </CardContent>
                            </div>
                        </Card>
                    </main>
                </Container>
                <Footer title="Contact Us" />
            </React.Fragment>
        )
    }
}

export default Tutoring