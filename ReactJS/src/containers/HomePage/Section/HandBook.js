import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';
import { getAllHandBook } from '../../../services/userService';
import { withRouter } from "react-router";
import './HandBook.scss';


class HandBook extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataHandBooks: [],          
        }
    }

    async componentDidMount() {
        let res = await getAllHandBook();
        if(res && res.errCode === 0) {
            this.setState({
                dataHandBooks: res.data ? res.data : []
            })
        }
    }

    handleViewDetailHandBook = (handbook) => {
            this.props.history.push(`/detail-handbook/${handbook.id}`);
    }
        
    render() {
        let settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
        };
        let {dataHandBooks} = this.state;
        return (
            
            <div className='section-share section-handbook'>  
                 <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'><FormattedMessage id='homepage.handbook' /></span>
                        <button className='btn-section'><FormattedMessage id='homepage.more-info' /></button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            {dataHandBooks && dataHandBooks.length > 0 &&
                            dataHandBooks.map((item, index) => {
                                return (
                                    <div className='section-customize handbook-child' key={index}
                                    onClick={() => this.handleViewDetailHandBook(item)}>
                                      <div className='bg-image section-handbook'
                                       style={{backgroundImage: `url(${item.image})`}}> 
                                      </div>
                                      <div className='handbook-name'>{item.name}</div>
                                    </div>    
                                )

                            })
                            }
                        </Slider>
                    </div>
                 
                 </div>

                      
            </div>

        );
       
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn:state.user.isLoggedIn,
       language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
       
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HandBook));
