import Header from './components/Header';
import Homepage from './components/Homepage';
// import Projects from './components/Projects';
// import Work from './components/Work';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
// import About from './components/About';
// import Connect from './components/Connect';
// import Contact from './components/Contact';
function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path='/homepage' element={<Homepage/>} ></Route>
          {/* <Route path='/projects' element={<Projects/>} ></Route> */}
          {/* <Route path='/Work' element={} ></Route> */}
        </Routes>
      </Router>
<Header/>
<Homepage/>


    </div>
  );
}

export default App;
