import React from 'react';
import '../ModalForm.css';
import FacebookLogin from 'react-facebook-login';
const FacebookID = "644354747412438"

const FacebookLog = () =>{
// const responseFacebook = (response) => {
//   console.log(response);
// }
const handleLoginSuccess = (response) => {
   console.log(response.profileObj);
 };
 
 const handleLoginFailure = (error) => {
   console.log(error)
 };
return(
   <span className='fb'>
  <FacebookLogin
    appId={FacebookID}
    autoLoad={false}
    textButton=""
    fields="name,email,picture"
    cssClass="facebook-button"
    onSuccess={handleLoginSuccess}
  onFailure={handleLoginFailure} 
  
        icon="fa-facebook"
  />
  </span>
);
}
export default FacebookLog;