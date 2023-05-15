import { ChangeEvent, FormEvent, useState, useRef } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.css";
import "./form.css";

const Form = () => {
  const pwCss = {
    padding: "10px",
    width: "50%",
  };

  const labelInLCss = {
    padding: "10px",
    width: "50%",
  };

  // const formRef = useRef();
  //^^
  //'formRef.current' is possibly 'undefined'.ts(18048)
  // had this error here caused by line 20 style of formatting, the site works but typescript was annoyed by this error
  //https://www.reddit.com/r/typescript/comments/11380v5/value_is_possibly_undefined/
  // i found the solution from this post on reddit and in doing so i understood react and TS slightly better.

  const formRef = useRef<any | null>();

  const handleClick = () => {
    formRef.current.reset();
  };

  // had an undefined error here for useref/useeffect
  // used this guide to resolve https://www.designcise.com/web/tutorial/how-to-fix-object-is-possibly-null-typescript-error-when-using-useref-react-hook

  const [state, setState] = useState({
    username: "",
    name: "",
    email: "",
    chipID: "",
    password: "",
    confirmPassword: "",
    conditionsAccepted: false,
  });

  const onFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    let value: (typeof state)[keyof typeof state] = event.target.value;
    if (event.target.type === "checkbox") {
      value = event.target.checked;
    }

    setState({ ...state, [event.target.id]: value });
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {};

  const formSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is mendatory")
      .min(3, "Password must be at 3 char long"),
    confirmPwd: Yup.string()
      .required("Password is mendatory")
      .oneOf([Yup.ref("password")], "Passwords does not match"),
  });
  const formOptions = { resolver: yupResolver(formSchema) };
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  return (
    <div>
      <div className="register-info">
        <h3>𝓿𝓮𝓽 𝓬𝓸𝓶𝓶𝓾𝓷𝓲𝓽𝔂 - 𝓻𝓮𝓰𝓲𝓼𝓽𝓻𝓪𝓽𝓲𝓸𝓷</h3>
      </div>

      <div className="totalform">
        <form className="form" onSubmit={handleSubmit(onSubmit)} ref={formRef}>
          <div className="fieldBorder">
            <p style={{ textAlign: "center" }}>
              Please note that you will need to enter a valid e-mail address
              before your account is activated. You will receive an e-mail at
              the address you provide that contains an account activation link.
            </p>
            <div className="fieldBorder"></div>
            <label htmlFor="name" className="control-label" style={labelInLCss}>
              Username:
            </label>
            <p>
              Username must be between 3 and 20 chars long and use only
              alphanumeric characters.
            </p>
            <input
              name="username"
              id="userName"
              type="text"
              placeholder="Ex: John Doe"
              onChange={onFieldChange}
              className="LabelCss"
              style={labelInLCss}
            />
          </div>
          <div className="fieldBorder">
            <label htmlFor="email" className="control-label">
              E-mail address:
            </label>
            <p>Please enter a valid Email Address</p>
            <input
              name="email"
              type="email"
              id="email"
              onChange={onFieldChange}
              placeholder="Ex: John@mail.com"
              className="LabelCss"
              style={labelInLCss}
            />
          </div>
          <div className="fieldBorder">
            <label htmlFor="email" className="control-label">
              Confirm e-mail address:
            </label>
            <p>Please cofirm the Email Address</p>
            <input
              name="email"
              type="email"
              id="confirmemail"
              onChange={onFieldChange}
              placeholder="Ex: John@mail.com"
              className="LabelCss"
              style={labelInLCss}
            />
          </div>

          <div className="fieldBorder">
            <label htmlFor="password" className="control-label"></label>
            <p>Must be between 6 and 30 characters.</p>
            <input
              name="password"
              type="password"
              {...register("password")}
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              id="password"
              onChange={onFieldChange}
              title="New password"
              placeholder="Ex:uwhdwuHTFDSRW54343"
              aria-autocomplete="list"
              style={pwCss}
            />
          </div>
          <div className="fieldBorder">
            <label htmlFor="confirmPassword" className="control-label">
              Confirm password:
            </label>
            <p>Please confirm the password</p>

            <div className="LabelCss">
              <input
                placeholder="Ex:uwhdwuHTFDSRW54343"
                name="password"
                type="password"
                {...register("confirmPwd")}
                className={`form-control ${
                  errors.confirmPwd ? "is-invalid" : ""
                }`}
                id="confirmPassword"
                onChange={onFieldChange}
                style={pwCss}
              />
              <div className="invalid-feedback">
                {errors.confirmPwd?.message}
              </div>
            </div>
          </div>
          <div className="fieldBorder">
            <label htmlFor="animaltype" className="control-label">
              Pet type:
            </label>
            <p>Please choose the specie of your pet. </p>
            <div className="SelectBoxCSs">
              <select style={labelInLCss}>
                <optgroup label="Home Pets">
                  <option value="Dog">Dog</option>
                  <option value="Cat">Cat</option>
                  <option value="Lizard">Lizard</option>
                </optgroup>
                <optgroup label="Barn Animals">
                  <option value="Horse">Horse</option>
                  <option value="Mule">Mule</option>
                  <option value="Camel">Camel</option>
                </optgroup>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="animaltype" className="control-label">
              Pet Name:
            </label>
            <p>Please enter the name of your pet. </p>
            <input
              name="name"
              id="userName"
              type="text"
              placeholder="Enter pet name"
              onChange={onFieldChange}
              className="LabelCss"
              style={labelInLCss}
            />
          </div>
          <div>
            <label htmlFor="animaltype" className="control-label">
              Pet ID:
            </label>
            <p>Please enter the 15 digit chipID of your pet. </p>
            <input
              name="chipID"
              id="userName"
              type="text"
              placeholder="Enter chipID of your pet"
              onChange={onFieldChange}
              className="LabelCss"
              style={labelInLCss}
            />
          </div>

          <div className="fieldBorder">
            <input type="checkbox" id="conditions" onChange={onFieldChange} />
            <label htmlFor="conditions">
              I agree to the terms and conditions
            </label>
          </div>
          <div>
            <button type="submit" style={labelInLCss}>
              Sign up
            </button>
            <button onClick={handleClick} type="button" style={labelInLCss}>
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Form;
