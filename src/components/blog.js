import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import bootcampBanner from '../images/bootcampBanner.png'
import tutoringBanner from '../images/tutoringBanner.jpg'
import satBanner from '../images/satBanner.jpg'

const sections = [
    { title: 'TUTORING', url: 'https://www.picktime.com/charmander#booking-content:~:text=tutoring,-In' },
    { title: 'CODING BOOTCAMP', url: '/#/bootcamp' },
    { title: 'SAT/ACT PREP', url: 'https://www.picktime.com/charmander#booking-content:~:text=test%20prep' },
    { title: 'VIOLIN LESSONS', url: 'https://www.picktime.com/charmander#booking-content:~:text=violin' },
    { title: 'CONTACT US', url: 'https://www.picktime.com/charmander' },
];

const mainFeaturedPost = {
    title: 'JOIN OUR CODING BOOTCAMP',
    description:
        "LEARN TO DEVELOP CODING PROJECTS FROM APPS TO VIDEO GAMES. ALL IN THIS IN DEPTH CODING BOOTCAMP FOR BEGINNERS.",
    image: bootcampBanner,
    imgText: 'main image description',
    linkText: 'SIGN UP NOW',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSd4MJ3lnEedMmNPptSeCJfdYjXCzoBm4fxVZZEkDSbJDfiBjQ/viewform?usp=sf_link',
    link2: '/#/bootcamp'
};

const featuredPosts = [
    {
        title: 'TUTORING',
        description:
            'We do everything from middle school to college. Whether it be Math, Science, or English, we can help enhance your understanding and boost your grades. ',
        image: tutoringBanner,
        imageText: 'Image Text',
        link: 'https://www.picktime.com/charmander#booking-content:~:text=tutoring,-In',
        linkText: 'BOOK NOW',
    },
    {
        title: 'SAT/ACT PREP',
        description:
            'In depth SAT/ACT prep in order to help students with their problem areas and boost their scores in order to attend their dream colleges.',
        image: satBanner,
        imageText: 'Image Text',
        link: 'https://www.picktime.com/charmander#booking-content:~:text=test%20prep',
        linkText: 'BOOK NOW',
    },
];

export default function Blog() {

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header title="Charcado inc." sections={sections} />
                <main>
                    <MainFeaturedPost post={mainFeaturedPost} />
                    <Grid container spacing={4}>
                        {featuredPosts.map((post) => (
                            <FeaturedPost key={post.title} post={post} />
                        ))}
                    </Grid>
                </main>
            </Container>
        </React.Fragment>
    );
}