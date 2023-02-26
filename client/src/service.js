import axios from "axios";

const postRegister = async (data) => {
  try {
    const result = await axios
      .post("http://localhost:7397/api/register", data)
      .then((response) => {
        return response;
      });
    return result;
  } catch (error) {
    console.log(error);
  }
};

const postLogin = async (data) => {
  try {
    const result = await axios
      .post(`http://localhost:7397/api/login`,data)
      .then((response) => {
        return response;
      });
    return result;
  } catch (error) {
    console.log(error);
  }
};

const getLogout = async () => {
    try {
      const result = await axios
        .get(`http://localhost:7397/api/logout`)
        .then((response) => {
          return response;
        });
      return result;
    } catch (error) {
      console.log(error);
    }
  };

 

export { postRegister,postLogin,getLogout, };
