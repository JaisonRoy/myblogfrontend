function validation(username, email, password) {

    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!username) {
        errors.username = "Username is required";
    }
    if (!email) {
        errors.email = "Email is required";
    }
    else if (!regex.test(email)) {
        errors.email = "Email is invalid";
    }
    if (!password) {
        errors.password = "Password is required";
    }
    else if (password.length < 5) {
        errors.password = "Password is too short";
    }

    return errors;
}

export default validation;