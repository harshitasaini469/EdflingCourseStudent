import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Page18 from "./pages/page18";
import Page20 from "./pages/Page20";
import Page57 from "./pages/page57";
import Page6364 from "./pages/Page6364";
import FormSubmittedSuccessfully from "./components/StudentSide/FormSubmittedFrame/FormSubmittedSuccessfully";
import TeacherSide from "./pages/TeacherSide";
import Header from "./components/commons/Header";
import Signup from "./components/TeacherSide/Signup";
import { Provider } from "react-redux";
import store from "./redux/store";
import Page65 from "./pages/Page65";
import Page66 from "./pages/Page66";
import Footer from "./components/commons/Footer";
import AdminSide from "./pages/AdminSide";
function App() {
  return (
    <Provider store={store}>
      <div className="flex flex-col min-h-screen justify-between">
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Page20 />} />
            <Route exact path="/18" element={<Page18 />} />
            <Route exact path="/57" element={<Page57 />} />
            <Route exact path="/63" element={<Page6364 />} />
            <Route exact path="/65" element={<Page65 />} />
            <Route exact path="/66" element={<Page66 />} />
            <Route exact path="/sign-up" element={<Signup />} />
            <Route
              exact
              path="/form-submission"
              element={<FormSubmittedSuccessfully />}
            />
            <Route exact path="/teacher/*" element={<TeacherSide />} />
            <Route exact path="/admin/*" element={<AdminSide/>} />
          </Routes>
          <Footer />
          {/* <AdminSide/> */}
        </Router>
      </div>
    </Provider>
  );
}

export default App;
