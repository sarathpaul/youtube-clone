import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Videos from './pages/videos/Videos';
import VideoDetails from './pages/videos/VideoDetails';
import Login from './pages/login/Login';
// import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Videos />}></Route>
            <Route path='/Login' element={<Login />}/>
            <Route path='/Videos/:id' element={<VideoDetails />}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
