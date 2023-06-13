import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

class About extends Component {
 
    render() {
        return (
            <div className='section-share section-about'>  
              <div className='section-about-header'>
              <FormattedMessage id='homepage.about' />
              </div>
              <div className='section-about-content'>
                <div className='content-left'>
                <iframe width="100%" height="400px" 
                src="https://www.youtube.com/embed/WvjwH0fruNI" 
                title="Khoa học kỹ thuật hỗ trợ dịch vụ y tế | VTV24" 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen></iframe>

                </div>
                <div className='content-right'>
                    <a href='https://nhandan.vn/ung-dung-khoa-hoc-ky-thuat-cao-trong-kham-chua-benh-post422086.html'>
                        <b><FormattedMessage id='homepage.b' /></b>
                    </a>
                    <p><FormattedMessage id='homepage.p' /></p>                  
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
