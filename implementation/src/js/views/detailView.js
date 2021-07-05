import {elements} from '../views/base';

class DetailView {
    displayDetails(displayObject, type) {
        var buttonText, responseType;
        document.getElementsByClassName('details__wall')[0].style.display = 'none';
        document.getElementsByClassName('details-item')[0].style.display = 'block';
        elements.RoomImage.innerHTML = "<img src=" + displayObject.RoomImage + " alt=\"roomImage\" +  id=\"roomImage\">" 
        elements.RoomNumber.innerHTML = displayObject.RoomNumber;
        elements.RoomType.innerHTML = displayObject.RoomType;
        elements.FloorNumber.innerHTML = displayObject.FloorNumber;
        elements.BedCount.innerHTML = displayObject.BedCount;
        elements.BathCount.innerHTML = displayObject.BathCount;
        if(type == 1) {
            buttonText = "Book Room";
            responseType = 1;
        }
        else {
            responseType = 2;
            buttonText = "Cancel Booking"
        }
        elements.BookButton.innerHTML = 
        " <div class=\"btn btn-btm btn-btm-submit accept-button\" onclick =  \"  bookResponse(" + responseType +","+ displayObject.RoomNumber +") \" >" + buttonText + "</div>";
    }
}

var obj = new DetailView();

export default obj;