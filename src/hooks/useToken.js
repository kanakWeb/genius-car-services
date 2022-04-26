import { async } from "@firebase/util";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState('');
  useEffect(() => {
    const getToken = async () => {
      console.log(user);
      const email = user.email;
      const { data } = await axios.post(
        "https://ancient-inlet-61363.herokuapp.com/login" , {email}
      );
      setToken(data.accessToken);
      localStorage.setItem("accessToken", data.accessToken);
    };
    getToken();
  }, [user]);
  return [token];
};
export default useToken;