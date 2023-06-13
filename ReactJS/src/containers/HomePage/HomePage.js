import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import Specialty from './Section/Specialty';
import HealthFacility from './Section/HealthFacility';
import OutstandingDoctor from './Section/OutstandingDoctor';
import './HomePage.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HandBook from './Section/HandBook';
import About from './Section/About';
import HomeFooter from './HomeFooter';
import ChatBotPage from './ChatBoxPage';



class HomePage extends Component {
   
    render() {
        let settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
        };

        let handbookSetting = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
        }
        return (
            <div> 
                <HomeHeader isShowBanner={true}/> 
                <Specialty 
                   settings={settings}
                /> 
                <HealthFacility settings={settings}/>
                <OutstandingDoctor settings={settings}/>
                <HandBook settings={handbookSetting}/>
                <About />
                <HomeFooter />
                <ChatBotPage />

            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn:state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
