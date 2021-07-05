
import {elements} from './views/base';
import SearchModel from './models/Room';
import SearchView from './views/searchView';
import * as CheckFunctions from './models/CheckFunctions';
import ChangeView from './views/changeView';
import DatabaseHelper from './models/Database';
import DetailView from './views/detailView';
import { WSAEINVALIDPROVIDER } from 'constants';

// Login Use Case

var Rooms,active = false;

var login = async () =>{
    if(elements.main_button.disabled == 0 ) {
        if(elements.email.value != "" && elements.userPass.value != "") {
            let result = await DatabaseHelper.loginHandler(elements.email.value, elements.userPass.value);
            if (result == 0 ) {
                ChangeView.displayError('Email/Password Invalid');
            }
            else {ew.AccessVi
                ChangeView();
                searchRooms();
            }
        }
    }
};



var signup = async () => {
    if(elements.signup_button.disabled == 0) {
        if(elements.Name.value == "") {
            ChangeView.displayError('Name field is empty');
        }
        else {
            if(elements.newPass.value == elements.confirmPass.value) {
                if(elements.signup_email.value !=null &&
                elements.contact_no.value != null && elements.Name.value !=""
                //&& pos.lat!=0 && pos.lng!=0
                ) {
                    ChangeView.RemoveError();
                    let result = await DatabaseHelper.signupHandler(elements.signup_email.value, elements.newPass.value);
                    if(result == 0 ) {
                        ChangeView.displayError('Email already in use');
                    }    
                    else {
                        DatabaseHelper.addUserToDatabase(elements.Name.value,elements.address.value,elements.contact_no.value,elements.id_card.value);
                        SearchView.RefreshDetails();
                        ChangeView.AccessView();
                        searchRooms();
                    }
                }
                else {
                    ChangeView.displayError('Invalid Data.Please try again.');
                }       
            }
        }
    }
    else {
        ChangeView.displayError('Password fields don\'t match');
    }
}

elements.main_button.addEventListener('click',login);
elements.signup_button.addEventListener('click',signup);
elements.logout.addEventListener('click', () => {
    DatabaseHelper.logout();
    ChangeView.LoginView();
});
//Search Rooms Use Case
var searchRooms = async () => {
    SearchView.changePage();
    var results = new SearchModel();
    await results.searchRooms();
    if(results != -1) {
        for( var room = 0 ; room< results.Rooms.length ; room++) { 
            SearchView.RenderResults(results.Rooms[room]);
        }
    }
}

window.RoomDetails = async (id,type) => {
    id = id.replace('#','');
    var results = new SearchModel();
    await results.fetchDetails(id);
    if(results != -1) {
        DetailView.displayDetails(results.RoomDetails[0], type);
    }
}

window.bookResponse = async (responseType, id) => {
    var results = new SearchModel();
    if(responseType == 1)
        await results.bookRoom(id);
    else 
        await results.CancelBooking(id);
    if(results != -1) {
        var refresh = await results.searchRooms();
        if(refresh != -1) {
            SearchView.RefreshDetails();
            for(var room = 0 ; room< results.Rooms.length ; room++) { 
                SearchView.RenderResults(results.Rooms[room]);
            }
        }
    }
}

elements.email.addEventListener('change', () => {

    var response = CheckFunctions.EmailCheck(elements.email.value);
    if(response == 0) ChangeView.displayError('Invalid Email format',1);
    else ChangeView.RemoveError(1);
});

elements.signup_email.addEventListener('change', () => {
    var response = CheckFunctions.EmailCheck(elements.signup_email.value);
    if(response == 0) ChangeView.displayError('Invalid Email format',2);
    else ChangeView.RemoveError(2);
});


elements.id_card.addEventListener('change', () => {
    var response = CheckFunctions.IDCheck(elements.id_card.value);
    if(response == 0) ChangeView.displayError('Invalid ID Card Number',2);
    else ChangeView.RemoveError(2);
});

elements.contact_no.addEventListener('change', () => {
    var response = CheckFunctions.NumberCheck(elements.contact_no.value);
    if(response == 0) ChangeView.displayError('Invalid Phone Number',2);
    else ChangeView.RemoveError(2);
});


elements.changeLogin.addEventListener('click',() => {
    ChangeView.hideForms(1);
});

elements.changeSignup.addEventListener('click',() => {
    ChangeView.hideForms(0);
});

