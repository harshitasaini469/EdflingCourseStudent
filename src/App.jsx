import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Page18 from "./pages/page18";
import Page20 from "./pages/Page20";
import Page57 from "./pages/page57";
import Page6364 from "./pages/Page6364";
import FormSubmittedSuccessfully from "./components/FormSubmittedFrame/FormSubmittedSuccessfully";
import Enrollment from "./components/TeacherSide/Enrollment";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Page20 />}></Route>
          <Route exact path="/18" element={<Page18 />}></Route>
          <Route exact path="/57" element={<Page57 />}></Route>
          <Route exact path="/63" element={<Page6364 />}></Route>
        </Routes>
      </Router>
      {/* <Enrollment/> */}
      {/* <FormSubmittedSuccessfully/> */}
    </div>
  );
}

export default App;
