import React, { Component } from "react";
import { connect } from "react-redux";
import { LANGUAGES, CRUD_ACTIONS, CommonUtils } from "../../../utils";
import "./ManageHandBook.scss";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import { createNewHandBook } from "../../../services/userService";
import { toast } from "react-toastify";

const mdParser = new MarkdownIt();


class ManageHandBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        address: '',
        imageBase64: '',
        descriptionHTML: '', 
        descriptionMarkdown: '',
        imageBase64: ''
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

  handleSaveHandBook = async () => {
    let res = await createNewHandBook(this.state);
    if(res && res.errCode === 0) {
        toast.success('Add new handbook succeed!')
        this.setState({
            name: '',
            address: '',
            description: '',
            descriptionHTML: '', 
            descriptionMarkdown: '',
            imageBase64: ''
        })
    }else {
        toast.error('Something wrongs... ')
        console.log('Check res: ', res)
    }
  }

  handleOnChangeText = (event, id) => {
    let stateCopy = {...this.state};
    stateCopy[id] = event.target.value;
    this.setState({
      ...stateCopy
    });
  };

  render() {
   

    return (
      <div className="manage-specialty-container">
        <div className="ms-title">Quản lý cẩm nang</div>
        
        <div className="add-new-specialty row">
            <div className="col-6 form-group mb-4">
                <label>Tên cẩm nang</label>
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
                <label>Nội dung chính</label>
                <textarea
                  className="form-control"
                  rows="4"
                  onChange={(event) => this.handleOnChangeText(event, 'description')}
                  value={this.state.description}
                ></textarea>
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
                <button className="btn-save-specialty" onClick={() => this.handleSaveHandBook()}>
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

export default connect(mapStateToProps, mapDispatchToProps)(ManageHandBook);
