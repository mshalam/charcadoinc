import React, { Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import BootcampCards from './bootcampCards';
import Grid from '@material-ui/core/Grid';
import bootcampBanner from '../images/bootcampBanner.png'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Footer from './Footer';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`nav-tabpanel-${index}`}
            aria-labelledby={`nav-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `nav-tab-${index}`,
        'aria-controls': `nav-tabpanel-${index}`,
    };
}

function LinkTab(props) {
    return (
        <Tab
            component="a"
            onClick={(event) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

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

export function Bootcamp() {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header title="Charcado inc." sections={sections} />
                <main>
                    <MainFeaturedPost post={mainFeaturedPost} />
                    <div className={classes.root}>
                        <AppBar position="static">
                            <Tabs
                                variant="fullWidth"
                                value={value}
                                onChange={handleChange}
                                aria-label="nav tabs example"
                            >
                                <LinkTab label="Fall" href="/drafts" {...a11yProps(0)} />
                                <LinkTab label="Spring" href="/trash" {...a11yProps(1)} />
                                <LinkTab label="Summer" href="/spam" {...a11yProps(2)} />
                            </Tabs>
                        </AppBar>
                        <TabPanel value={value} index={0}>
                            <Grid container spacing={2} justify="space-around" >
                                <BootcampCards session="fall" />
                            </Grid>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <Grid container spacing={2} justify="space-around" >
                                <BootcampCards session="spring" />
                            </Grid>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <Grid container spacing={2} justify="space-around" >
                                <BootcampCards session="summer" />
                            </Grid>
                        </TabPanel>
                    </div>

                    <Card >
                        <div >
                            <CardContent>
                                <Typography component="h2" variant="h5">
                                    <b>Private Coding Lessons</b>
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="li">
                                    Individualized attention
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="li">
                                    Custom curriculum to your specific needs
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="li">
                                    Group rates available upon request
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="li">
                                    $75/hour for in office and online lessons
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="li">
                                    $100/hour for in-home lessons
                                </Typography>
                                <br />
                                <Button
                                    size="large"
                                    variant="contained"
                                    color="primary"
                                    href='https://docs.google.com/forms/d/e/1FAIpQLSf9Gxhh606RVOllKQFegonhfQptjN7llQbS5pzrrLyFGlpNmQ/viewform?usp=sf_link'
                                    target="_blank"
                                >
                                    REGISTER NOW
                                </Button>
                            </CardContent>
                        </div>
                    </Card>
                </main>
            </Container>
            <Footer title="Contact Us" />
        </React.Fragment>
    )

}

export default Bootcamp