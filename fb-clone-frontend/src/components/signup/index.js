import { useState } from "react";
import { useDispatch } from "react-redux";
import { createSignupUser } from "../../Actions/signup";
import Modal from "react-modal";
import styles from "./signup.module.scss";

const Signup = () => {
  const dispatch = useDispatch();

  const [userInfo, setUserInfo] = useState({
    firstname: "",
    lastname: "",
    email: "",
    dob: "",
    password: "",
    gender: "",
  });
  const [modalIsOpen, setIsOpen] = useState(true);

  const userInfoHandler = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const userInfoOnSubmit = (e) => {
    console.log(userInfo);

    e.preventDefault();
    dispatch(createSignupUser(userInfo));
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className={styles.modalContainer}>
      <Modal
        isOpen={modalIsOpen}
        overlayClassName={styles.overlay}
        onRequestClose={closeModal}
        className={styles.modal}
      >
        <div className={styles.signUpHeader}>
          <div>
            <h2>Sign Up</h2>
            <h5>It's quick and easy</h5>
          </div>

          <button onClick={closeModal}>X</button>
        </div>

        <span className={styles.inputSubContainer}>
          <input
            name="firstname"
            value={userInfo.firstname}
            placeholder="First name"
            onChange={(e) => userInfoHandler(e)}
          ></input>
          <input
            name="lastname"
            value={userInfo.lastname}
            placeholder="Surname"
            onChange={(e) => userInfoHandler(e)}
          ></input>
        </span>
        <div className={styles.inputContainer}>
          <input
            name="email"
            value={userInfo.email}
            placeholder="Email"
            onChange={(e) => userInfoHandler(e)}
          ></input>
        </div>
        <div className={styles.inputContainer}>
          <input
            name="password"
            value={userInfo.password}
            placeholder="Password"
            onChange={(e) => userInfoHandler(e)}
          ></input>
        </div>
        <div className={styles.inputContainer}>
          <input
            name="dob"
            value={userInfo.dob}
            placeholder="Date of Birth"
            onChange={(e) => userInfoHandler(e)}
          ></input>
        </div>
        <div className={styles.inputContainer}>
          <input
            name="gender"
            value={userInfo.gender}
            placeholder="Gender"
            onChange={(e) => userInfoHandler(e)}
          ></input>
        </div>

        <button onClick={userInfoOnSubmit} className={styles.submitBtn}>
          login
        </button>
      </Modal>
    </div>
  );
};

export default Signup;
