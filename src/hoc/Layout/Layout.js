import React, {Component} from 'react';
import Aux from '../Aux/Aux';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import AppBackground from '../../containers/AppBackground/AppBackground';
import Logo from '../../components/Logo/Logo';
import Footer from '../../components/Footer/Footer';

class Layout extends Component {
    render() {
        return(
            <Aux>
                <main className={classes.Content}>
                    <Logo></Logo>
                    <AppBackground></AppBackground>
                    <Toolbar></Toolbar>
                    <Footer></Footer>
                </main>
            </Aux>
        );
    }
}

export default Layout;