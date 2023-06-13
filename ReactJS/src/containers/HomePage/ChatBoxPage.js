import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
export default function ChatBotPage(){
    // all available config props
    const config ={
      width: "400px",
      height: "500px",
      floating: true,
      headerTitle:"BOOKING MEDI",
    
    };
  // all available props
    const theme = {
        background: '#f5f8fb',
        fontFamily: 'Helvetica Neue',
        headerBgColor: '#EF6C00',
        headerFontColor: '#fff',
        headerFontSize: '18px',
        botBubbleColor: '#EF6C00',
        botFontColor: '#fff',
        userBubbleColor: '#fff',
        userFontColor: '#4a4a4a',
    };
    return(
        <ThemeProvider theme={theme}>
        <ChatBot
            steps={[
                {
                id: '1',
                message: 'Cảm ơn bạn đã sử dụng dịch vụ của Doctor Care!',
                trigger: '2',
                },
                {
                    id: '2',
                    options: [
                      { value: 1, label: 'Tôi đặt lịch khám bệnh như thế nào ?', trigger: '3' },
                      { value: 2, label: 'Giá khám bệnh có đắt không ?', trigger: '4' },
                      { value: 3, label: 'Các bác sĩ có uy tín không ?', trigger: '5' },
                      { value: 4, label: 'Liên hệ với nhân viên chúng tôi bằng cách nào ?', trigger: '6' },
                    ],
                },
                {
                    id: '3',
                    message: 'Bạn có thể truy cập vào website Doctor Care để xem thông tin và đặt lịch ',
                    trigger: '2',
                  },
                  {
                    id: '4',
                    message: 'Giá khám bệnh hợp lí, có giá khám rõ ràng của bác sĩ trên website, mọi người có thể tham khảo giá tiền và đặt khám bác sĩ cho phù hợp',
                    trigger: '2',
                  },
                  {
                    id:'5',
                    message: 'Các bác sĩ của chúng tôi có kinh nghiệm dày dặn trong lĩnh vực của mình, đã đạt được những thành tựu nhất định và mọi thông tin về bác sĩ đã có trên website, mọi người có thể vào và tham khảo ',
                    trigger: '2'
                  },
                  {
                    id:'6',
                    message: 'Bạn có thể liên hệ đến email doctorcare@gmail.com hoặc số điện thoại 0705982473,0795646909 từ 7:00 đến 17:00 hằng ngày.',
                    trigger: '2'
                  }
            ]}
            {...config}
            placeholder="Nhập tin nhắn..."
        />
        </ThemeProvider>
    )
}



