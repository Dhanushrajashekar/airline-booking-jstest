class passenger{
    passengername;
    passengerId;
    destination;
    ticketPrice;
    flightNumber;
    seatNumber;

    constructor(passengername,passengerId,destination,ticketPrice,flightNumber,seatNumber){
        this.passengername = passengername;
        this.destination = destination;
        this.passengerId = passengerId;
        this.ticketPrice = ticketPrice;
        this.flightNumber = flightNumber;
        this.seatNumber = seatNumber;
    }

    updateSeat(newSeat){
        this.seatNumber = newSeat;
        return `${this.seatNumber} Seat has been updated Successfully`;
    }

    displayPassengerInfo(){
        console.log(`Passenger Id : ${this.passengerId}`);
        console.log(`Passenger Name : ${this.passengername}`);
        console.log(`Destination : ${this.destination}`);
        console.log(`Ticket Price : ${this.ticketPrice}`);
        console.log(`Flight Number : ${this.flightNumber}`);
        console.log(`Seat Number : ${this.seatNumber}`);
    }
}



export default passenger;
 
