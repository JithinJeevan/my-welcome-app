import { useEffect, useState } from "react";
import { getLogout, postLogin, postRegister } from "../service";
import { useNavigate } from "react-router-dom";

export const useLoginRegister = () => {
  const [inputLogin, setInputLogin] = useState({ username: "", password: "" });
  const [inputRegister, setInputRegister] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState("");

  const navigate = useNavigate();

  const handleInputLogin = (event) => {
    const { value, name } = event.target;
    setInputLogin({ ...inputLogin, [name]: value });
    setError("");
  };
  const handleInputRegister = (event) => {
    const { value, name } = event.target;
    setError("");
    setInputRegister({ ...inputRegister, [name]: value });
  };

  const handleSubmitLogin = async () => {
    setIsLoading(true);

    if (inputLogin.username !== "" && inputLogin.password !== "") {
      if (inputLogin.password.length < 6) {
        setIsLoading(false);
        setError("Password length-minimum 6");
      } else {
        const data = {
          username: inputLogin.username,
          password: inputLogin.password,
        };
        const list = await postLogin(data).then((res) => {
          setIsLoading(false);
          if (res.data.status === 200) {
            localStorage.setItem("token", res?.data?.data?.token);
            setUser(res?.data?.data?.data.username);
            navigate("/after-login");
            setInputLogin({ username: "", password: "" });
          } else {
            setError(res?.data?.data);
          }
          return res?.data?.data;
        });
      }
    } else {
      setIsLoading(false);
      setError("Please fill all the fields");
    }
  };
  const handleSubmitRegister = async () => {
    setIsLoading(true);

    if (inputLogin.username !== "" && inputLogin.password !== "") {
      if (inputLogin.password.length < 6) {
        setIsLoading(false);
        setError("Password length-minimum 6");
      } else {
        const data = {
          username: inputRegister.username,
          password: inputRegister.password,
        };
        const list = await postRegister(data).then((res) => {
          setIsLoading(false);
          if (res?.data?.status === 200 || res?.data?.status === 208) {
            setError(res.data?.data);
            setInputRegister({ username: "", password: "" });
          } else {
            setError(res.data?.data);
          }
          return res?.data?.data;
        });
      }
    } else {
      setIsLoading(false);
      setError("Please fill all the fields");
    }
  };

  const logout = async () => {
    setIsLoading(true);
    const result = await getLogout().then((res) => {
      setIsLoading(false);
      if (res?.data?.status === 200) {
        localStorage.removeItem("token");
        navigate("/");
      }
      else{
        setError(res.data?.data);

      }
    });
  };

  return {
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
    logout
  };
};
