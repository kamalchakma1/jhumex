
import emailjs from "@emailjs/browser";

export const mailMeFun=( from_name:any, message:any)=>{

    const templateParams = {
        from_name: from_name,
        message: message    
      };
      
    const promiseResult = new Promise((resolve,reject)=>{
       emailjs
         .send("service_rbqwxal", "template_szda2qj", templateParams, {
           publicKey: "8kjqA2NKVMPO9dkc5",
         })
         .then(
           (response) => {
            resolve(true)
           },
           (err) => {
            reject(false)
           }
         );
    })
    return promiseResult
}