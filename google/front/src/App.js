import './App.css';
import axios from 'axios';


function App() {

  return (
    <html>
      <head><script src ="https://account.google.com/gsi/client" aync defer></script></head>
      <body>
      <div id="g_id_onload"
      data-client_id="356933661068-5tdbmnlrgttafgdb1s51f74r51ulejbl.apps.googleusercontent.com"
      data-context="signin"
      data-ux_mode="popup"
      data-login_uri="http://localhost:4000/access"
      data-auto_prompt="false">
      </div>

      <div class="g_id_signin"
          data-type="standard"
          data-shape="rectangular"
          data-theme="outline"
          data-text="signin_with"
          data-size="large"
          data-logo_alignment="left">
      </div>
      </body>
  </html>


  );
}

export default App;
