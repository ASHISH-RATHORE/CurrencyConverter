import React from 'react';
import GoogleLogin from 'react-google-login';

function GoogleAuth() {


  const  responseGoogle=(response)=>{
        console.log(response);
    }
    return (
        <div>
            <GoogleLogin
            clientId="907950932871-4tdb0lkt6er2gpjvi4dobr4neop0bvpm.apps.googleusercontent.com"
            buttonText="Google Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy="single_host_origin"

            />
        </div>
    )
}

export default GoogleAuth;
