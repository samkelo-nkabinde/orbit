import styles from './Login.module.css';
import email_icon from '../../assets/email.png'
import password_icon from '../../assets/password.png'
import { useState } from 'react';

function Login() {

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
                    <input type="email" placeholder="email address"/>
                </div>

                <div className={styles.input}>
                    <img src={password_icon} alt="Password ICON" />
                    <input type="password" placeholder="password"/>
                </div>

                <div className={styles.loginContainer}>
                    <div className={styles.login}>
                        Login
                    </div>
                
                </div>
            </div>

        </div>
    )
}

export default Login