import React from 'react'
import '../ModalForm.css';
import GoogleLogin from 'react-google-login'
const ClientID = "920651298987-qchto7d6vgvjlauv084lcb48ta123id8.apps.googleusercontent.com"
export default function Login() {
   const handleLoginSuccess = (response) => {
      console.log(response.profileObj);
    };
    
    const handleLoginFailure = (error) => {
      console.log(error)
    };
    
  return (
    <span className='google-button'>
      <GoogleLogin
  clientId={ClientID}
  buttonText=""
  className='google-button'
  onSuccess={handleLoginSuccess}
  onFailure={handleLoginFailure}
 
/>

    </span>
  )
}
