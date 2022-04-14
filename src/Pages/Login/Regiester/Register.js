import "./Regiester.css";
import { useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useState } from "react";
import { async } from "@firebase/util";

const Register = () => {
  const [agree, setAgree] = useState();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, {
      sendEmailVerification: true,
    });

  const [updateProfile, updating, Updateerror] =
    useUpdateProfile(auth);

  const navigate = useNavigate();

  const navigatelogin = () => {
    navigate("/login");
  };

  /* if (user) {
    navigate("/home");
  } */
  const handleRegiester = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    /*  const agree = event.target.terms.checked; */
    /* if (agree) {
      createUserWithEmailAndPassword(email, password);
    } */
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    navigate("/home");
    alert("Updated profile");
  };

  return (
    <div className="regiester-from shadow-lg">
      <h2 className="text-center p-2">Please Regiester</h2>
      <form onSubmit={handleRegiester}>
        <input
          type="text"
          name="name"
          id=""
          placeholder="your name"
        />
        <input
          name="email"
          id=""
          type="email"
          placeholder="your email"
        />
        <input
          name="password"
          type="password"
          id=""
          placeholder="your password"
        />
        <input
          onClick={() => setAgree(!agree)}
          type="checkbox"
          name="terms"
          id="terms"
        />
        {/* <label className={agree?'ps-1 text-primary':'ps-1 text-danger'} htmlFor="terms"> */}
        <label
          className={`ps-1 ${agree ? "" : "text-danger"}`}
          htmlFor="terms"
        >
          Accept genius car terms and condiational
        </label>
        <input
          disabled={!agree}
          className="btn btn-primary w-50 mx-auto mt-3"
          id=""
          type="submit"
          value="Regiester"
        />
        <p>
          New to genius car?
          <Link
            to="/login"
            onClick={navigatelogin}
            className="text-primary text-decoration-none"
          >
            already have an account
          </Link>
        </p>
      </form>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
