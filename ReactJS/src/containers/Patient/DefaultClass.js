import React, { Component } from "react";
import { connect } from "react-redux";
import "./DefaultClass.scss";
import moment from "moment";
import localization from "moment/locale/vi";
import { LANGUAGES } from "../../../utils";
import { getExtraInfoDoctorById } from "../../../services/userService";
import { FormattedMessage } from "react-intl";
import NumberFormat from "react-number-format";

class DefaultClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  async componentDidMount() {}

 

  async componentDidUpdate(prevProps, prevState, snapshot) {
    
  }

  render() {
   

    return (
      <div></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(DefaultClass);
