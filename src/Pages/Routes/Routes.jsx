import "./routes.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Display from "../Display/display";

function YT_Routes() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Display/>}>
        </Route>
      </Routes>
    </Router> 
  );
}

export default YT_Routes;
