export default function validate(obj) {
    const errors = {};
    // console.log(obj);
    const emailRegExp = /^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/;
    const passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
  
    if (obj.username) {
        if (obj.username.length < 2) {
            errors.isUserNameValid = false;
        } else {
            errors.isUserNameValid = true;
        }
    } else if (obj.username === '') {
        errors.isUserNameValid = false;
    }

    if (obj.email) {
        if (obj.email.match(emailRegExp)) {
            errors.isEmailVaild = true;
        } else {
            errors.isEmailVaild = false;
        }
    } else if (obj.email === '') {
        errors.isEmailVaild = false;
    }

    if (obj.password) {
        if (obj.password.match(passwordRegExp)) {
            errors.isPasswordVaild = true;
        } else {
            errors.isPasswordVaild = false;
        }
    } else if (obj.password === '') {
        errors.isPasswordVaild = false;
    }

    return errors;
}