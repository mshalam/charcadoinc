import React, { Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './Header';
import Footer from './Footer';

const sections = [
    { title: 'TUTORING', url: 'https://mshalam.github.io/charcadoinc/#/tutoring' },
    { title: 'CODING BOOTCAMP', url: 'https://mshalam.github.io/charcadoinc/#/bootcamp' },
    { title: 'SAT/ACT PREP', url: 'https://www.picktime.com/charmander#booking-content:~:text=test%20prep', target: "_blank" },
    { title: 'VIOLIN LESSONS', url: 'https://www.picktime.com/charmander#booking-content:~:text=violin', target: "_blank" },
    // { title: 'ABOUT US', url: 'https://mshalam.github.io/charcadoinc/#/about' },
    { title: 'CONTACT US', url: 'https://mshalam.github.io/charcadoinc/#/contact' },
];

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export class ContactUs extends Component {

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
                    </main>
                </Container>
                <Footer title="Contact Us" />
            </React.Fragment>
        )
    }
}

export default ContactUs