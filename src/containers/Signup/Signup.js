import "./Signup.scss";

// ** Hooks **
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// ** Pictures **
import needYou from "../../img/Fury-web-scaled.jpeg";

// ** Components **
import InputText from "../../components/InputText/InputText";

// ** Dependencies
import axios from "axios";
import Cookies from "js-cookie";

const Signup = (props) => {
  const { bearerPresent, setBearerPresent } = props;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = {
        name: name,
        email: email,
        password: password,
      };

      const response = await axios.post(
        "https://marvelprojectback.herokuapp.com/signup",
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
    <div className="Signup">
      <h1>Join the adventure</h1>

      <div className="Signup__content">
        <form>
          <p>
            You are only 1 click away from becoming one of the greatest heroes
            in the galaxy.
          </p>
          <InputText
            type={"text"}
            placeholder={"Your name"}
            value={name}
            setValue={setName}
          />
          <InputText
            type={"email"}
            placeholder={"Your email"}
            value={email}
            setValue={setEmail}
          />
          <InputText
            type={"password"}
            placeholder={"Password"}
            value={password}
            setValue={setPassword}
          />
          <button type="submit" onClick={onSubmit}>
            Submit
          </button>
        </form>
        <div>
          <img src={needYou} alt="Ironman" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
