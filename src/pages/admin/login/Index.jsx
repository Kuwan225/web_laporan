import React from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const { handleSubmit, register } = useForm();
  const Navigate = useNavigate();

  const auth = getAuth();

  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        Navigate("/admin");
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
      });
  };

  return (
    <div className="container-login">
      <div className="caption">
        <h1>Peringatan!</h1>
        <p>Hanya admin yang boleh login!</p>
      </div>
      <div className="content-login">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input">
            <input
              type="text"
              placeholder="Email"
              {...register("email", {
                required: true,
              })}
            />
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: true,
              })}
            />
          </div>
          <button>Login</button>
          <Link className="links" to="/">
            <p> Kembali ke beranda</p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
