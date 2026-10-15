import { createInterface } from "node:readline";
import { stdin, stdout } from "node:process";
import { premCustomerData } from "./premCustomer.js";
import { standardCustomerData } from "./standardCustomer.js";

const allCustomerInfo = [...premCustomerData, ...standardCustomerData];

console.log(`${allCustomerInfo.length} Passengers Created Successfully`);
allCustomerInfo.forEach(passenger => passenger.displayPassengerInfo());

console.log("---------Filter Passengers----------");
const higherTicketPrice = allCustomerInfo.filter(passenger => passenger.ticketPrice > 700);
console.log("High Value Passengers");
higherTicketPrice.forEach(passenger => {
    console.log(`${passenger.passengername} - ${passenger.ticketPrice}`);
});

console.log("---------Passenger Booking Summary------------");
const finalSummary = higherTicketPrice.map(passenger =>
    `${passenger.passengerId} - ${passenger.passengername} - ${passenger.destination} - ${passenger.flightNumber}`
);
finalSummary.forEach(summary => console.log(summary));

console.log("------Passenger Group-------");
const [firstPassenger, ...rest] = standardCustomerData;
if (firstPassenger) {
    console.log(`First Passenger : ${firstPassenger.passengername}`);
}
console.log("Remaining Passengers:");
rest.forEach(passenger => console.log(passenger.passengername));

console.log("-------Booking Verification---------");
const readline = createInterface({ input: stdin, output: stdout });

const bookingVerification = new Promise((resolve, reject) => {
    readline.question("Enter the Passenger ID: ", userInput => {
        readline.close();

    setTimeout(()=>{
         const findCust = allCustomerInfo.find(passenger => {
            return passenger.passengerId === userInput.trim();
        });

        if (findCust) {
            resolve(findCust);
        } else {
            reject("Passenger details not found. Please enter the correct ID.");
        }
    },2000);
       
    });
});

bookingVerification.then(findCust => {
    console.log("---------Passenger Found-------------");
    console.log("Passenger found");
    findCust.displayPassengerInfo();

    console.log("-------Seat Update---------");
    console.log(`Passenger Name : ${findCust.passengername}`);
    console.log(`Current Seat : ${findCust.seatNumber}`);
    findCust.updateSeat("10A");
    console.log(`Updated Seat : ${findCust.seatNumber}`);
    console.log("Seat Updated Successfully");

    console.log("--------Destructuring---------");
    const { passengername, destination, flightNumber } = findCust;
    console.log(`Passenger: ${passengername}`);
    console.log(`Destination To : ${destination}`);
    console.log(`Flight: ${flightNumber}`);

    console.log("---------Booking Modification--------");
    const originalData = { ...findCust };
    const copyData = { ...originalData, destination: "Rome", ticketPrice: 150 };
    const {
        passengername: modifiedPassengerName,
        destination: modifiedDestination,
        ticketPrice: modifiedTicketPrice
    } = copyData;
    console.log(`Modified Booking: ${modifiedPassengerName} - ${modifiedDestination} - ${modifiedTicketPrice}`);

    const {
        passengername: originalPassengerName,
        destination: originalDestination,
        ticketPrice: originalTicketPrice
    } = originalData;
    console.log(`Original Booking: ${originalPassengerName} - ${originalDestination} - ${originalTicketPrice}`);
}).catch(error => {
    console.error(error);
});
