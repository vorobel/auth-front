import Carousel from "components/Carousel";
import Button from "components/Button";
import SignUpForm from "pages/SignUp/components/AuthForm";

import AppleIcon from "assets/appleIcon.svg";
import GoogleIcon from "assets/googleIcon.svg";

import styles from "./styles.module.scss";

const LogIn = () => (
  <div className={styles.loginPageContainer}>
    <div className={styles.loginFormContainer}>
      <h1 className={styles.loginFormTitle}>Welcome back</h1>

      <SignUpForm />

      <Button className={styles.appleAuthButton}>
        <img alt="appleIcon" src={AppleIcon} />
        Log in with Apple
      </Button>

      <Button className={styles.googleAuthButton} mode="light">
        <img alt="googleIcon" src={GoogleIcon} />
        Log in with Google
      </Button>
    </div>

    <div className={styles.carouselContainer}>
      <Carousel />
    </div>
  </div>
);

export default LogIn;
