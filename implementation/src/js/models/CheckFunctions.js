
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


export const EmailCheck =  (email) => {
    if(validateEmail(email) ==0 ) 
        return 0;
    else  
        return 1;
}

export const IDCheck = (id) => {
    if(id.length != 13 )     return 0;
    else    return 1;   
}

export const NumberCheck = (number) => {
    if(number.length != 11 )     return 0;
    else    return 1;   
}


