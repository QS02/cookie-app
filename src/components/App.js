import { useState } from "react";
import Button from "./Button";
import { cookCookie } from "../services/cookCookie";

function App() {
  const [cookies, setCookies] = useState([""]);
  const [disabled, setDisabled] = useState(false);

  const onCookNewCookie = async () => {
    try {
      const cookie = await cookCookie();
      setCookies([...cookies, cookie]);
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };

  const onDisableCooking = () => {
    setDisabled(!disabled)
  }

  return (
    <div className="app">
      <main className="main">
        <h1>Cookie App</h1>
        <div className="container">
          <Button 
            onButtonClick={onCookNewCookie} 
            disabled={disabled}
          >
            Cook Cookie
          </Button>
          <Button 
            onButtonClick={onDisableCooking}
          >
            {disabled ? 'Enable' : 'Disable'} Cooking
          </Button>

          <div className="cookies-container">
            <ul className="cookies">
              {cookies.map((cookie, index) => (
                <li key={index}>{cookie}</li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
