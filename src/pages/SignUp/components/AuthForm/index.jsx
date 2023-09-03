import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

import InputField from "components/InputField";
import Button from "components/Button";
import UnderlinedLink from "components/UnderlinedLink";

import styles from "./styles.module.scss";

const SignUpForm = ({ isSignup }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.authForm}>
      {isSignup === true && (
        <InputField
          name="Name"
          errors={errors}
          register={register}
          validationRules={{
            required: "Name is required",
          }}
        />
      )}

      <InputField
        name="Email"
        errors={errors}
        register={register}
        validationRules={{
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        }}
      />

      <InputField
        name="Password"
        register={register}
        validationRules={{
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Password should contain at least 8 characters",
          },
          pattern: {
            value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
            message:
              "Password should contain at least one special character, one capital letter, and one number",
          },
        }}
        errors={errors}
      />

      {!isSignup && <UnderlinedLink text="Forgot password?" />}

      <Button type="submit">{isSignup ? "Create account" : "Log in"}</Button>

      {isSignup ? (
        <Link to='/login'> Already have an account? <UnderlinedLink text="Log in" /></Link> 
      ) : (

          <Link to='/signup'>Don’t have an account? <UnderlinedLink text="Sign up" /></Link>
      )}
    </form>
  );
};

export default SignUpForm;
