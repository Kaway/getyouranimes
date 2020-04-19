import React, {useEffect} from 'react';
import {connect} from 'react-redux'

import {Col, Container, Jumbotron, Row} from 'reactstrap';

import './fontawesome-free-5.0.10/web-fonts-with-css/css/fontawesome-all.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import AnimeTable from './AnimeTable'
import FiltersLine from './FiltersLine'
import CounterBadge from './CounterBadge'

import {initAnimes} from './redux/actions'


const Header = () => {
    return (
        <Jumbotron fluid className="text-center" style={{"backgroundColor": "#414141"}}>
            <h1 className="" style={{"color": "white"}}>Get Your Animes !</h1>
            <p className="lead" style={{"color": "white"}}>Find your legal anime provider !</p>
        </Jumbotron>
    );
};

const App = ({animeCount, lastUpdate, init}) => {

    //const [init, setInit] = useState([]);

    useEffect(() => {
        fetch('data/all.json').then(response => {
            response.json().then(value => {
                //setInit(value);
                init(value);
            });
        });
    }, [init]);

    return (
        <Container fluid style={{"padding": "0px"}}>
            <Header/>

            <FiltersLine/>

            <Row noGutters className="mt-3">
                <Col xs={{size: "auto", offset: 1}}>
                    <CounterBadge count={animeCount}>
                        <span>animes</span>
                    </CounterBadge>
                </Col>
                <Col className="" xs={{size: 8, offset: 1}} sm={{size: "5", offset: 1}}>
                    <span>Last update: <b>{lastUpdate}</b></span>
                </Col>
            </Row>

            {/*
                 <Row noGutters className="m-3">
                    <Col className="d-block d-sm-none" xs={{size: 10, offset: 1}}>
                        <RefreshModel/>
                    </Col>
                    <Col className="ml-4 d-none d-sm-block" sm={{size: "5", offset: 0}}>
                        <RefreshModel/>
                    </Col>
                </Row>
                */}

            <Row noGutters className="mt-3 pb-5">
                <Col xs={{size: 10, offset: 1}}>
                    <AnimeTable/>
                </Col>
            </Row>

            <footer className="container-fluid">
                <nav className="navbar navbar-dark fixed-bottom bg-dark">
                    <a className="navbar-brand" target="blank" href="https://github.com/Kaway/getyouranimes">
                        <span className="sr-only">Github</span>
                        <i className="fab fa-github"/>
                    </a>
                    <span className="navbar-text">
                        <i className="fas fa-at"/> Contact: contact@getyouranimes.com
                    </span>
                </nav>
            </footer>

        </Container>

    );

};

const mapStateToProps = state => {
    return {
        animeCount: state.animes.animes.length,
        lastUpdate: state.animes.lastUpdate,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        init: animes => dispatch(initAnimes(animes))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
