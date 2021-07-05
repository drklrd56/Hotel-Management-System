import {elements} from './base';


class changeView {
    displayError(message, type) {
        console.log(message);
        if(type == 1) {
            elements.main_button.disabled = true; 
            elements.error_login.style.display =  'block';
            elements.error_login.innerHTML = '<h3 class=\'error-message\' style=\"font-size: 1.2em;color: #851515;\">'
            +message+'</h3>';
        }
        else {
            elements.signup_button.disabled = true;
            elements.error_signup.style.display =  'block';
            elements.error_signup.innerHTML = '<h3 class=\'error-message\' style=\"font-size: 1.2em;color: #851515;\">'
            +message+'</h3>';   
        }
    }

    RemoveError(type) {
        if(type == 1) {
            elements.error_login.style.display =  'none';
            elements.main_button.disabled = false;
        }
        else  {
            elements.error_signup.style.display = 'none';
            elements.signup_button.disabled = false;
        }
    }

    hideForms(whichOne) {
        if(whichOne == 1) {
            elements.signIn_form.style.display = "none";
            elements.signUp_form.style.display = "block";
        }
        else if(whichOne == 0) {
            elements.signIn_form.style.display = "block";
            elements.signUp_form.style.display = "none";
        }
    }


    AccessView() {
        elements.bookingList[0].innerHTML = "";
        elements.roomList[0].innerHTML = "";
        elements.logout.style.display = "flex";
        elements.primary.style.display = "block";
        elements.secondary.style.display = "none";
        elements.roomPage[0].style.display = 'flex';
    }

    LoginView() {
        elements.logout.style.display="none";
        elements.primary.style.display = "none";
        elements.secondary.style.display = "block"; 

    }
}
var obj = new changeView();

export default obj;

