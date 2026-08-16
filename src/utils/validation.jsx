
// check is a charater is an alphabet or a numeber 
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

// check if an email is valid
export function isValidEmail(email){
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
    const domainAllowedChars = new Set(['.', '-', '@']);  // charaters allowed after @

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
            if(!domainAllowedChars.has(trimmedEmail[i])){
                console.log("Domain has a charater not allowed " + trimmedEmail[i]);
                return false;
            }
        }

        i += 1;
    }
    console.log("email is valid");
    return true;
}

