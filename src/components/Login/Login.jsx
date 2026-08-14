import styles from './Login.module.css';
import email_icon from '../../assets/email.png'
import password_icon from '../../assets/password.png'
import { useState } from 'react';


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);


    function handleLogin() {
        setEmailError(false);
        setPasswordError(false);

        if (!email.includes("@")) {
            setEmailError(true);
            return;
        }

        if (password !== "password123") {
            setPasswordError(true);
            return;
        }
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

            <div className={styles.inputs}>
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
                    <div className={styles.login}
                        onClick={handleLogin}>
                        Login
                    </div>
                
                </div>
            </div>

        </div>
    )
}

export default Login