import passenger from "./passenger.js";

class standardCustomer extends passenger{
    mealPreference;
    checkedBags;

    constructor(passengername,passengerId,destination,ticketPrice,flightNumber,seatNumber,mealPreference,checkedBags){
        super(passengername,passengerId,destination,ticketPrice,flightNumber,seatNumber);
        this.mealPreference = mealPreference;
        this.checkedBags = checkedBags; 
    }

}

const standardCustomerData =[];


standardCustomerData.push(
  new standardCustomer("Rohan Kapoor", "P2001", "Singapore", 980, "SQ317", "3A", "Vegetarian", 2),
  new standardCustomer("Emily Clarke", "P2002", "Barcelona", 75, "VY620", "28D", "Standard", 0),
  new standardCustomer("Meera Iyer", "P2003", "Chennai", 710, "AI112", "17C", "Vegan", 1),
  new standardCustomer("Daniel Murray", "P2004", "Tenerife", 320, "BY845", "24A", "Child Meal", 3),
  new standardCustomer("Isabella Conti", "P2005", "Los Angeles", 3800, "BA283", "1K", "Gluten-Free", 2)
);


export default standardCustomer;
export { standardCustomerData };
