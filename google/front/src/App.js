import './App.css';
import {GoogleLogin} from 'react-google-login';

function App() {
  const responseGoogle = response => {
    console.log(response);
  }

  const responseError = error => {
    console.log(error);
  }

  return (
    <div>
      <div>
        <GoogleLogin
          clientId='356933661068-5tdbmnlrgttafgdb1s51f74r51ulejbl.apps.googleusercontent.com'
          buttonText='connect with google calendar'
          onSuccess={responseGoogle}
          onFailure={responseError}
          cookiePolicy={'single_host_origin'}
          responseType='code'
          accessType='offline'
          scope='openid email profile https://www.googleapis.com/auth/calendar'
          />
      </div>
    </div>
  );
}

export default App;
