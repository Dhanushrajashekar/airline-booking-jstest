import passenger from "./passenger.js";


class premCustomer extends passenger{
    loungeAccess;
    priorityBoarding;
    rewardPoints;
    chauffeurService;

    constructor(passengername,passengerId,destination,ticketPrice,flightNumber,seatNumber,loungeAccess,priorityBoarding,rewardPoints,chauffeurService){
        super(passengername,passengerId,destination,ticketPrice,flightNumber,seatNumber);
        this.loungeAccess =loungeAccess;
        this.priorityBoarding = priorityBoarding; 
        this.rewardPoints = rewardPoints;
        this.chauffeurService = chauffeurService;
    }

    addRewardPoints(){
        this.rewardPoints += 500;
        console.log(`Current Reward points: ${this.rewardPoints}`);
    }

    updateSeat(newSeat){
        this.seatNumber = newSeat;
        return `${this.seatNumber} Seat has been updated Succesfully`;
    }

}

const premCustomerData = [];

premCustomerData.push(
     new premCustomer("Arjun Mehta", "P1001", "Dubai", 1450, "EK028", "2A", true, true, 8200, true),
     new premCustomer("Sophie Turner", "P1002", "Lisbon", 89, "FR412", "31C", false, false, 120, false),
     new premCustomer("Priya Nair", "P1003", "Bangalore", 620, "BA119", "14F", true, true, 15400, false),
     new premCustomer("Callum Reid", "P1004", "Orlando", 540, "VS015", "22B", false, true, 960, false),
     new premCustomer("Elena Rossi", "P1005", "New York", 4200, "AA101", "1A", true, true, 52000, true)
);

export default premCustomer;
export {premCustomerData};