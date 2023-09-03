import Button from "components/Button";
import SignUpForm from "./components/AuthForm";

import AppleIcon from "assets/appleIcon.svg";
import GoogleIcon from "assets/googleIcon.svg";
import Carousel from "components/Carousel";

import styles from "./styles.module.scss";

const SignUpPage = () => (
  <div className={styles.signUpPageContainer}>
    <div className={styles.signUpFormContainer}>
      <h1 className={styles.authFormTitle}>Create account</h1>

      <div className={styles.authFormTip}>
        Let’s get started with your 30 days trial
      </div>

      <SignUpForm isSignup/>

      <Button className={styles.appleAuthButton}>
        <img alt="appleIcon" src={AppleIcon} />
        Sign up with Apple
      </Button>

      <Button className={styles.googleAuthButton} mode="light">
        <img alt="googleIcon" src={GoogleIcon} />
        Sign up with Google
      </Button>
    </div>

    <div className={styles.carouselContainer}>
      <Carousel />
    </div>
  </div>
);

export default SignUpPage;
