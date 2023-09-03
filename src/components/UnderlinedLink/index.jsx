import styles from './styles.module.scss';

const UnderlinedLink = ({ text = '' }) => {

    return <span className={styles.underlinedLink}>{text}</span>
};

export default UnderlinedLink;;