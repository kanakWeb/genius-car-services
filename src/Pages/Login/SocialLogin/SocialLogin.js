import React from "react";
import Google from "../../../images/social/google.png";
import Facebook from "../../../images/social/facebook.png";
import Github from "../../../images/social/github.png";
import {useSignInWithGithub, useSignInWithGoogle} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import {useNavigate} from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);


    const navigate = useNavigate();
    let errorelement;

    if (loading || loading1) {
        return <Loading></Loading>
    }

    if (error || error1) {
        errorelement = (
            <p className="text-info bg-danger  text-center p-1 rounded">
                Error: {
                error ?. message
            }
                {
                error1 ?. message
            } </p>
        );
    }

    if (user || user1) {
        navigate("/home");
    }


    return (
        <div>
            <div className="d-flex justify-content-center align-items-center">
                <div style={
                        {height: "1px"}
                    }
                    className="w-25 bg-primary"></div>
                <p className="mt-2 mx-2">or</p>
                <div style={
                        {height: "1px"}
                    }
                    className="w-25 bg-primary"></div>
            </div>
            <div>{errorelement}</div>

            <div className="">
                <button onClick={
                        () => signInWithGoogle()
                    }
                    className="btn btn-primary d-block w-50 mx-auto">
                    <img style={
                            {width: "30px"}
                        }
                        src={Google}
                        alt=""/>
                    <span className="mx-2">
                        Google sign in</span>
                </button>

                <button className="btn btn-primary my-2 w-50 d-block mx-auto">
                    <img style={
                            {width: "30px"}
                        }
                        src={Facebook}
                        alt=""/>
                    <span className="mx-2">
                        Facebook sign in</span>
                </button>
                <button onClick={
                        () => signInWithGithub()
                    }
                    className="btn btn-primary d-block w-50 mx-auto">
                    <img style={
                            {width: "30px"}
                        }
                        src={Github}
                        alt=""/>
                    <span className="mx-2">
                        Github sign in</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
