import "./Login.scss";

// ** Hooks **
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// ** Components **
import InputText from "../../components/InputText/InputText";

// ** Dependencies
import axios from "axios";
import Cookies from "js-cookie";

const Login = (props) => {
  const { setBearerPresent, bearerPresent } = props;

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = {
        email: email,
        password: password,
      };

      const response = await axios.post(
        "https://marvelprojectback.herokuapp.com/login",
        data
      );

      const token = await response.data.token;

      Cookies.set("bearerToken", token, { expires: 360 });

      setBearerPresent(!bearerPresent);
      navigate("/");
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="Login">
      <h1>Welcome back to us heroes</h1>
      <form>
        <InputText
          type={"email"}
          placeholder={"Your email"}
          value={email}
          setValue={setEmail}
        />
        <InputText
          type={"password"}
          placeholder={"Your password"}
          value={password}
          setValue={setPassword}
        />

        <button type="submit" onClick={onSubmit}>
          Connect
        </button>
      </form>
    </div>
  );
};

export default Login;
