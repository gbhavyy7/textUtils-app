import React, { useState } from 'react';
import Nav from './components/nav';
import TextForm from './components/textForm';
import About from './components/about';
import Alert from './components/alert';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');//keeps track of mode
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    },
      1500
    )
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode enabled!", "success")
    }

    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Default mode enabled!", "success")
    }
  }

  return (
    <React.Fragment>
      <Router>
        <Nav
          navBrand="textUtils"
          link2="About"
          mode={mode}//will return either true or false
          toggleMode={toggleMode}
        />
        <Alert
          alert={alert}
        />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
            <Route path="/">
              <TextForm heading="Enter Some Text" mode={mode} showAlert={showAlert} />
            </Route>
          </Switch>
        </div>
      </Router>

    </React.Fragment>
  );
}

export default App;
