import styles from './Login.module.css';
import email_icon from '../../assets/email.png'
import password_icon from '../../assets/password.png'
import { useState } from 'react';

function isAlphaNumeric(char) {
    let charCode = char.charCodeAt(0);

    if( (charCode > 47 && charCode < 58)  ||  // numeric (0-9)
        (charCode > 64 && charCode < 91)  ||  // Upper case
        (charCode > 96 && charCode < 123)    // lower case
        ){
            return true;
        }

    return false;
}

function isValidEmail(email){
    const trimmedEmail = email.trim();
    if(!trimmedEmail.includes('@')){
        console.log('Email does not have @');
        return false;
    }else if (trimmedEmail.includes(' ')){
        console.log('Email has white space');
        return false;
    }

    let i = 0;

    // first charater must be alpha numeric
    if(!isAlphaNumeric(trimmedEmail[i])){
        console.log('1st charater is not alpha-numeric ' + trimmedEmail[i]);
        return false;
    }

    // Set of allowed characters 
    const localAllowedChars = new Set(['.', '_', '-', '+']); // charaters allowed bofore @
    const domainAlloedChars = new Set(['.', '-', '@']);  // charaters allowed after @

    // have passed @ 
    let seenAtchar = 0;

    while( i + 1 < trimmedEmail.length){
        if(trimmedEmail[i] === '@'){
            seenAtchar += 1;
            // cannot have more than 1 @ char
            if(seenAtchar > 1){
                return false;
            }
        }

        // check if trailing charaters are not both non-AlphaNumeric
        if(!isAlphaNumeric(trimmedEmail[i]) && !isAlphaNumeric(trimmedEmail[i + 1])){
            console.log("Email has trailing charaters " + trimmedEmail[i] + ' ' + trimmedEmail[i+1]);
            return false;
        }

        // check if the charater is allowed in the local
        if(!seenAtchar && !isAlphaNumeric(trimmedEmail[i]) ){
            if(!localAllowedChars.has(trimmedEmail[i])){
                console.log("Local has a charater not allowed " + trimmedEmail[i]);
                return false;
            }
        }

        // check if the charater is allowed in the domain
        if(seenAtchar && !isAlphaNumeric(trimmedEmail[i]) ){
            if(!domainAlloedChars.has(trimmedEmail[i])){
                console.log("Domain has a charater not allowed " + trimmedEmail[i]);
                return false;
            }
        }

        i += 1;
    }
    console.log("email is valid");
    return true;
}

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    function handleLogin(event) {
        event.preventDefault();

        setEmailError(false);
        setPasswordError(false);

        if (!isValidEmail(email)) {
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