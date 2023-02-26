import React from "react";
import { Button} from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

const AfterLogin = ({ isLoading,user,logout}) => {
  return (
    <>
    <div className="d-flex justify-content-end m-2">
        <Button onClick={logout}>Logout</Button>
      </div>
      <div className="d-flex justify-content-center mt-5 ">
        <h4>Welcome {user} to Kimshuka Technologies</h4>
      </div>
      <div className="d-flex justify-content-center mt-5 ">
      {isLoading ? <Spinner animation="border" className="mt-1" /> : null}
        
      </div>
    </>
  );
};

export default AfterLogin;
