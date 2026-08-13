import styles from './Login.module.css';
import email_icon from '../../assets/email.png'
import password_icon from '../../assets/password.png'

function Login() {
    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.text}>
                    Login
                </div>

                <div className={styles.underline}>

                </div>
            </div>

            <div className={styles.inputs}>
                <div className={styles.input}>
                    <img src={email_icon} alt="Email ICON" />
                    <input type="email"/>
                </div>

                <div className={styles.input}>
                    <img src={password_icon} alt="Password ICON" />
                    <input type="password"/>
                </div>

                <div className={styles.login-container}>
                    <div className={styles.Login}>
                        Login
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login