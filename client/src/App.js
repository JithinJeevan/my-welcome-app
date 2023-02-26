import "bootstrap/dist/css/bootstrap.min.css";
import LoginResgister from "./components/LoginResgister";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useLoginRegister } from "./hook/useLoginRegister";
import AfterLogin from "./components/AfterLogin";
import InvalidLogin from "./components/InvalidLogin";

function App() {
  const {
    handleInputLogin,
    handleInputRegister,
    isLoading,
    handleSubmitLogin,
    handleSubmitRegister,
    inputLogin,
    inputRegister,
    setInputLogin,
    setInputRegister,
    error,
    setError,
    user,
    logout,
  } = useLoginRegister();
  const token = localStorage.getItem("token");
  return (
    <div className="App">
      {/* <Router> */}
      <Routes>
        <Route
          path="/"
          element={
            <LoginResgister
              handleInputLogin={handleInputLogin}
              handleInputRegister={handleInputRegister}
              inputLogin={inputLogin}
              inputRegister={inputRegister}
              setInputLogin={setInputLogin}
              setInputRegister={setInputRegister}
              handleSubmitLogin={handleSubmitLogin}
              handleSubmitRegister={handleSubmitRegister}
              isLoading={isLoading}
              error={error}
              setError={setError}
            />
          }
        />
        {token && (
          <Route
            path="/after-login"
            element={
              <AfterLogin user={user} isLoading={isLoading} logout={logout} />
            }
          />
        )}
        <Route path="*" element={<InvalidLogin />} />
      </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;
