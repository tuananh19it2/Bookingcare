import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

class About extends Component {
 
    render() {
        return (
            <div className='section-share section-about'>  
              <div className='section-about-header'>
                   Khoa học kỹ thuật hỗ trợ dịch vụ y tế 
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
                        <b>Ứng dụng khoa học-kĩ thuật cao trong khám chữa bệnh</b>
                    </a>
                    <p>Trong những năm qua, ngành Y tế Việt Nam đã đạt được những thành tựu đáng khích lệ trên tất cả các lĩnh vực
                       khám và điều trị bệnh. Từ việc đầu tư, ứng dụng các trang, thiết bị, kỹ thuật công nghệ cao như: phẫu thuật
                       nội soi, tán sỏi, phẫu thuật lấy thể thủy tinh ngoài bao (phương pháp Pha-co) đến các kỹ thuật vi phẫu tạo hình,
                       ứng dụng công nghệ la-de vào y học, máy gia tốc trong điều trị ung thư. Thành công của việc thụ tinh trong ống 
                       nghiệm; Ứng dụng thành công nhiều kỹ thuật tim mạch can thiệp như: mổ tim hở, thay van tim, chụp buồng tim, 
                       nong động mạch vành, bắc cầu nối động mạch vành, điều trị loạn nhịp tim, v.v. Gần đây nhất, thành công bước đầu
                       của ca ghép gan được cấy ghép từ người "chết não" đầu tiên ở Việt Nam, tại Bệnh viện Việt Ðức đã tiếp thêm hy
                       vọng cho những người bệnh hiểm nghèo...</p>                  
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
