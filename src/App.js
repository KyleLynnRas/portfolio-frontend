import './App.css'
import {Route, Switch} from "react-router-dom"
//Components 
import Header from "./components/Header"
//Pages
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"

function App() {
  //Heroku
  const URL = "https://portfolio-backendkr.herokuapp.com/"

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects URL={URL} />
        </Route>
        <Route path="/about">
          <About URL={URL} />
        </Route>
      </Switch>
    </div>
  )
}

export default App
