import React, { Component } from "react";
import { connect } from "react-redux";
import { LANGUAGES } from "../../../utils";
import { locale } from "moment";


class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  initFaceBookSDK() {
    if(window.FB) {
        window.FB.XFBML.parse();
    }

    let {language} = this.props;
    let locale = language === LANGUAGES.VI ? 'vi_VN' : 'en_US';
    window.fbAsyncInit({
        appId: process.env.REACT_APP_FACEBOOK_APP_ID,
        cookie: true,
        xfbml: true,
        version: 'v2.5'
    })
  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if(d.getElementsByTagName(id)) return;
    js = d.createElement(s); js.id=id;
    js.src = `//connect.facebook.net/${locale}/sdk.js`;
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
}

  

  async componentDidMount() {
    this.initFaceBookSDK();
  }

 

  async componentDidUpdate(prevProps, prevState, snapshot) {
    
  }

  render() {
    let {width, dataHref, numPost} =  this.props;
   
    return (
      <> 
        <div className="fb-comments"
           data-href={dataHref}
           data-width={width ? width : ""}
           data-numposts={numPost ? numPost : 5}
        ></div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
