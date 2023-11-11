import classes from "./ErrorModal.module.css";
import styles from "./Button.module.css";
const ErrorModal = (props) => {
  const errorHandler = () => {
    props.onErrorHandler();
  };
  return (
    <div className={classes.backdrop}>
      <div className={classes.modal}>
        <div className={classes.header}>
          <h2> Error!!!</h2>
        </div>
        <div className={classes.content}> Please Check the user Input.</div>
        <div className={classes.actions}>
          <button className={styles.button} onClick={errorHandler}>
            {" "}
            Okay
          </button>
        </div>
      </div>
    </div>
  );
};
export default ErrorModal;
