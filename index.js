
//Write a program that takes an array of days like "Mon", "Tue", and "Fri" and uses a switch statement to 
// print what type of delivery is scheduled on each day.

const deliveryType = (deliveries) => {
    deliveries.forEach((delivery) => {
        switch (delivery) {
            case "monday":
                console.log("Delivery scheduled");
                break;
            case "tuesday":
                console.log("Delivery scheduled");
                break;
            case "wendsday":
                console.log("Delivery scheduled");
                break;
            case "thursday":
                console.log("Delivery scheduled");
                break;
            case "friday":
                console.log("Delivery scheduled");
                break;
            case "saturday":
                console.log("No delivery scheduled");
                break;
            case "sunday":
                console.log("No delivery scheduled");
                break;
            default:
                console.log("Invalid day of the week");
                break;
        };
    });
}
const deliveries = ["monday", "tuesday", "wendsday", "thursday", "friday", "saturday", "sunday"];
deliveryType(deliveries)



//Create a program that loops through an array of book statuses and prints "Ready to lend" 
// if the status is "available" or "Checked out" if the status is "borrowed".

const bookStatuses = (statuses) => {
    statuses.forEach((status) => {
        switch (status) {
            case "available":
                console.log("Ready to lend");
                break;
            case "borrowed":
                console.log("Checked out");
                break;
            default:
                console.log("Book not available.");
                break;
        };

    });

}
const statuses = ["available", "borrowed"];
bookStatuses(statuses)



//Given an array of customer ages, write a program that checks each 
// age and prints "Adult" if the age is 18 or above, and "Minor" otherwise.

function checkCustomerAges(ages) {
    for (let i = 0; i < ages.length; i++) {
        if (ages[i] >= 18) {
            console.log("Adult");
        }
        else {
            console.log("Minor");
        }
    };
}
const ages = [10, 30, 45, 20, 18, 16];
checkCustomerAges(ages)



//Using a do...while loop, write a program that loops through an 
// array of user feedback and prints each comment until the array is empty.

const UserFeedbacks = (feedbacks) => {
    let i = 0;
    do {
        console.log(`Feedback: ${feedbacks[i]}`);
        if (i < feedbacks.length) {
            i++;
        } else {
            console.log("No more feedback");
        }
    }
    while (i < feedbacks.length);

};
const feedbacks = ["love your product", "i enjoyed it", "it was nice", "not bad"];
UserFeedbacks(feedbacks)



//Write a program using a while loop that simulates a countdown of lives in a game starting 
// from 5 and prints "You have X lives left" on each loop until it reaches 0.

const countDownLives = () => {
    let livesInGame = 5;
    while (livesInGame > 0) {
        console.log(`You have ${livesInGame - 1} lives left `);
        livesInGame--;
    };
}
countDownLives()



//Write a program that loops through an array of user login statuses and 
// prints "Welcome back!" if the user is "logged in" or "Please log in" otherwise.

checkLoginStatus = (loginStatuses) => {
    loginStatuses.forEach((status) => {
        if (status == "logged in") {
            console.log("Welcome back!");

        }
        else {
            console.log("Please log in")
        }
    });
}
const loginStatuses = ["logged in", "not logged in"];
checkLoginStatus(loginStatuses)



//Write a program that processes an array of support ticket priorities using a 
// switch statement to print how quickly each one should be addressed 
// based on whether the priority is "low", "medium", or "high".

const supportTicketPriorities = (priorityLevel) => {

    priorityLevel.forEach((priorityLevel) => {
        switch (priorityLevel) {
            case "high":
                console.log("Immediate action!");
                break;
            case "medium":
                console.log("Relatively quicker action!");
                break;
            case "low":
                console.log("Addressed later action!");
                break;
            default:
                console.log("Unknown priority level.");
                break;
        };

    });

}
const priorityLevel = ["high", "medium", "low"];
supportTicketPriorities(priorityLevel)



//Create a while loop that simulates a quiz countdown from 10 seconds, 
// printing each number until it reaches 0.

function quizCountDown() {
    let i = 10;
    while (i >= 0) {
        console.log(`Time left ${i} seconds`);
        i--;
    }

}
quizCountDown();