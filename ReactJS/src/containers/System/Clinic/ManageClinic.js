import React, { Component } from "react";
import { connect } from "react-redux";
import { LANGUAGES, CRUD_ACTIONS, CommonUtils } from "../../../utils";
import "./ManageClinic.scss";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import { createNewClinic } from "../../../services/userService";
import { toast } from "react-toastify";

const mdParser = new MarkdownIt();


class ManageClinic extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        address: '',
        imageBase64: '',
        descriptionHTML: '', 
        descriptionMarkdown: '',
    }
  }

  async componentDidMount() {}

 

  async componentDidUpdate(prevProps, prevState, snapshot) {
    
  }

  handleOnchangeInput = (event, id) => {
    let stateCopy = {...this.state};
    stateCopy[id] = event.target.value;
    this.setState({
        ...stateCopy
    })

  }

  handleEditorChange = ({html, text}) => {
    this.setState({
       descriptionHTML: html,
       descriptionMarkdown: text,
    })
  }

  handleOnchangeImage = async (event) => {
    let data = event.target.files;
    let file = data[0];
    if (file) {
      let base64 = await CommonUtils.getBase64(file);
      this.setState({
        imageBase64: base64,
      });
    }
  };

  handleSaveNewClinic = async () => {
    let res = await createNewClinic(this.state);
    if(res && res.errCode === 0) {
        toast.success('Add new specialty succeed!')
        this.setState({
            name: '',
            address: '',
            imageBase64: '',
            descriptionHTML: '', 
            descriptionMarkdown: '',
        })
    }else {
        toast.error('Something wrongs... ')
        console.log('Check res: ', res)
    }
  }

  render() {
   

    return (
      <div className="manage-specialty-container">
        <div className="ms-title">Quan li phong kham</div>
        
        <div className="add-new-specialty row">
            <div className="col-6 form-group mb-4">
                <label>Ten phong kham</label>
                <input className="form-control" type="text" value={this.state.name} 
                onChange={(event) => this.handleOnchangeInput(event, 'name')}
                />
            </div>
            <div className="col-6 form-group mb-4">
                <label>Anh phong kham</label>
                <input className="form-control-file" type="file" 
                onChange={(event) => this.handleOnchangeImage(event)}
                />
            </div>
            <div className="col-6 form-group mb-4">
                <label>Dia chi phong kham</label>
                <input className="form-control" type="text" value={this.state.address} 
                onChange={(event) => this.handleOnchangeInput(event, 'address')}
                />
             </div>
            <div className="col-12 form-group">
            <MdEditor
            style={{ height: "300px" }}
            renderHTML={(text) => mdParser.render(text)}
            onChange={this.handleEditorChange}
            value={this.state.descriptionMarkdown}
            />
            </div>
            <div className="col-12 form-group">
                <button className="btn-save-specialty" onClick={() => this.handleSaveNewClinic()}>
                    Save
                </button>
            </div>
            
        </div>

        
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ManageClinic);
