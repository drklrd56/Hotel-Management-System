import { elements } from "../views/base";

export default class Search {
    async searchRooms() {
        this.Rooms = new Array();
        try {
            var data = await dataBase.collection("Room").get();
            data.docs.forEach(element => {
                this.Rooms.push({
                    roomNo : element.data().RoomNO, 
                    status : element.data().RoomStatus
                });
            })
        }catch(error) {
            return -1;
        }
    }
    async fetchDetails(roomNo) {
        this.RoomDetails = new Array();
        try {
            var data = await dataBase.collection('RoomDetails').get();
            data.docs.forEach( element => {
                if(element.data().RoomNumber == roomNo) {
                    this.RoomDetails.push( {
                        RoomNumber: element.data().RoomNumber,
                        RoomType: element.data().RoomType,
                        FloorNumber: element.data().Floor,
                        BedCount: element.data().Beds,
                        BathCount: element.data().Baths,
                        RoomImage: element.data().RomImage
                    })
                }
            })
        } catch(error) {
            return -1;
        }
    }
    async bookRoom(roomNo) {
        try {
            var data = await dataBase.collection("Room").doc(roomNo.toString()).update( {
                RoomStatus : false,
            });
            return 1;
        } catch(error) {
            return -1;
        }
    }
    async CancelBooking(roomNo) {
        try {
            var data = await dataBase.collection("Room").doc(roomNo.toString()).update( {
                RoomStatus : true,
            });
            return 1;
        } catch(error) {
            return -1;
        }
    }
}