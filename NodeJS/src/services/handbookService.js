import db from "../models/index";

let createHandBook = async (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            if(!data.name || !data.description || !data.descriptionHTML ||
                 !data.descriptionMarkdown || !data.imageBase64) {
                resolve({
                    errCode: 1,
                    errMessage: "Missing required parameter!",
                  });
            } else {
                await db.Handbook.create({
                    name: data.name,
                    address: data.address,
                    description: data.description,
                    descriptionHTML: data.descriptionHTML,
                    descriptionMarkdown: data.descriptionMarkdown,
                    image: data.imageBase64
                })
                resolve({
                    errCode: 0,
                    errMessage: 'Ok'
                })
            }         
        } catch (e) {
            reject(e);         
        }
    })

}

let getAllHandBook = async() => {
    return new Promise(async(resolve, reject) => {
        let data = await db.Handbook.findAll();
        try {
            if(data && data.length > 0) {
               data.map(item => {
                item.image = new Buffer(item.image, 'base64').toString('binary');
                return item;
               })
            }
            resolve({
                errMessage: 'Ok',
                errCode: 0,
                data
            })        
        } catch (e) {
            reject(e);    
        }
    })
}

let getDetailHandBookById = (inputId) => {
    return new Promise(async(resolve, reject) => {
        try {
            if(!inputId) {
                resolve({
                    errCode: 1,
                    errMessage: "Missing required parameter!",
                  });
            }else {     
                let data = await db.Handbook.findOne({
                    where : {
                        id: inputId,
                    },
                    attributes: ['name','descriptionHTML', 'descriptionMarkdown', 'description']
                    })
                    resolve({
                        errMessage: 'Ok',
                        errCode: 0,
                        data
                    })             
            }       
        } catch (e) {
            reject(e);            
        }       
    })
}



module.exports = {
    createHandBook: createHandBook,
    getAllHandBook: getAllHandBook,
    getDetailHandBookById: getDetailHandBookById
}