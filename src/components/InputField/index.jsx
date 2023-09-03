import styles from "./styles.module.scss";

const InputField = ({ onChange, name = "Name", register, validationRules, errors }) => (
    <div className={styles.inputContainer}>
      <input
        type={name === 'Password' ? 'password' : name === 'Email' ? 'email' : 'text'}
        className={styles.inputField}
        placeholder={name}
        onChange={onChange}
        {...register(name, validationRules)} 
      />
      {errors[name] && <span className={styles.error}>{errors[name].message}</span>}
    </div>
);


export default InputField;
