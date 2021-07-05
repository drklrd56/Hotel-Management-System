import { elements} from './base';

class searchView {
    changePage() {
        elements.primary.style.display = "block";
        elements.secondary.style.display = "none";
    } 
    RenderResults(room) {
        
        var newHtml = "<li class=\"list__item \"  onclick = RoomDetails(id," + room.status + ")  id=#"+ room.roomNo +">";
        newHtml += "<img class=\"item-icon\" src=\"img/bed.png\"><div class=\"item-main\"> Room"
        + room.roomNo + "</div></li>";
        if(room.status == 1)
            document.querySelector('.room__list').insertAdjacentHTML('beforeend', newHtml);   
        else 
            document.querySelector('.book__list').insertAdjacentHTML('beforeend',newHtml);
    }
    RefreshDetails() {
        elements.roomList[0].innerHTML = "";
        elements.bookingList[0].innerHTML = "";
        document.getElementsByClassName('details__wall')[0].style.display = 'block';
        document.getElementsByClassName('details-item')[0].style.display = 'none';
    }
} 

var search = new searchView();

export default search;