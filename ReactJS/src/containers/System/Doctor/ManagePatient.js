import React, { Component } from "react";
import { connect } from "react-redux";
import "./ManagePatient.scss";
import moment from "moment";
import DatePicker from "../../../components/Input/DatePicker";
import { getAllPatientForDoctor } from "../../../services/userService";
import { FormattedDate } from "react-intl";


class ManagePatient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: moment(new Date()).startOf("day").valueOf(),
      dataPatient: []
    }
  }

  async componentDidMount() {
    let {user} = this.props;
    let {currentDate} = this.state;
    let formattedDate = new Date(currentDate).getTime();
    this.getDataPatient(user, formattedDate);
  }

  getDataPatient = async(user, formattedDate) => {
    let res = await getAllPatientForDoctor({
      doctorId: user.id,
      date: formattedDate
    })
    if(res && res.errCode === 0) {
      this.setState({
        dataPatient: res.data
      })
    }
  }

  handleBtnConfirm = () => {}

  handleBtnRemedy = () => {}

  

 

  async componentDidUpdate(prevProps, prevState, snapshot) {
    
  }

  handleOnchangeDatePicker = (date) => {
    this.setState({
      currentDate: date[0],
    }, () => {
      let {user} = this.props;
      let {currentDate} = this.state;
      let formattedDate = new Date(currentDate).getTime();
      this.getDataPatient(user, formattedDate);
    });
  };

  render() {
    console.log('Check e state:', this.state);
    let {dataPatient} = this.state;
  
    return (
      <div className="manage-patient-container">
        <div className="m-p-title">
            Quan li benh nhan kham benh
        </div>
        <div className="manage-patient-body row">
            <div className="col-4 form-group mb-4">
                <label>Chon ngay kham</label>
                <DatePicker
                  onChange={this.handleOnchangeDatePicker}
                  className="form-control"
                  value={this.state.currentDate}
                />
            </div>
            <div className="col-12 table-manage-patient">
                <table style={{width:"100%"}}>
                  <tbody>
                  <tr>
                        <th>STT</th>
                        <th>Thời gian</th>
                        <th>Họ và tên</th>
                        <th>Địa chỉ</th>
                        <th>Giới tính</th>
                        <th>Actions</th>
                    </tr>

                    {dataPatient && dataPatient.length > 0 ? 
                    dataPatient.map((item, index) => {
                      return (
                        <tr key={index}>
                        <td>{index+1}</td>
                        <td>{item.timeTypeDataPatient.valueVI}</td>
                        <td>{item.patientData.firstName}</td>
                        <td>{item.patientData.address}</td>
                        <td>{item.patientData.genderData.valueVI}</td>
                        <td>
                          <button className="mp-btn-confirm" 
                          onClick={() => this.handleBtnConfirm()}>Xác nhận</button>
                          <button className="mp-btn-remedy"
                           onClick={() => this.handleBtnRemedy()}>Gửi hóa đơn</button>
                        </td>
                    </tr>
                      )

                    })
                    :
                    <tr>No data</tr>
                    }
                  </tbody>
                </table>
            </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    user: state.user.userInfo,  
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ManagePatient);
