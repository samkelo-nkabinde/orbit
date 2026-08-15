import styles from './Login.module.css';
import email_icon from '../../assets/email.png'
import password_icon from '../../assets/password.png'
import { useState } from 'react';
import { isValidEmail } from '../../utils/validation';
import { isValidUser } from '../../data/loginData';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    function handleLogin(event) {
        event.preventDefault();

        setEmailError(false);
        setPasswordError(false);

        // if email is not valid 
        if (!isValidEmail(email)) {
            setEmailError(true);
            return;
        }

        // if user is not registered
        let user = isValidUser(email, password);
        if(!user){
            setPasswordError(true);
            return
        }

        //if user is valid then go to profile
        

    }

    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.text}>
                    Welcome Back!
                </div>

                <div className={styles.underline}>

                </div>
            </div>

            <form className={styles.inputs} onSubmit={handleLogin}>

                <div className={styles.input}>
                    <img src={email_icon} alt="Email ICON" />

                    <input
                        type="email"
                        placeholder="email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                {emailError && (
                    <div className={styles.error}>
                        <span>Invalid email format</span>
                    </div>
                )}

                <div className={styles.input}>
                    <img src={password_icon} alt="Password ICON" />

                    <input
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                {passwordError && (
                    <div className={styles.error}>
                        <span>Incorrect password or email</span>
                    </div>
                )}

                <div className={styles.loginContainer}>
                    <button
                        type="submit"
                        className={styles.login}
                    >
                        Login
                    </button>
                </div>

            </form>
        </div>
    )
}

export default Login