


for (let i=0; i<5; i++){
    console.log("Monday starts the work week")
};


//SEASONS EXAMPLE

//DECLARE VARIABLES
let seasons = ["fall", "winter", "summer", "spring"];
let favSeason="fall";

//DISPLAY ALL SEASONS ON THE WEB CONSOLE
for (let i=0; i<seasons.length; i++) {
    //ARRAY ELEMENTS ARE ACCESSED BY "i" TO GET INDEX
    console.log(seasons[i]);
};//END FOR LOOP

for(let i=0; i<seasons.length; i++){

    if(favSeason== seasons[i]) {
        console.log("That's my favorite season!");
        break;
    }else{
        console.log("skip");
    }//END IF AND ELSE
}//END FOR LOOP


//EXAMPLE PROBLEMS

//! List of Favorite Movies
//TODO Define an array of favorite movies
let favMovies_arr=["Sopranos", "New Girl", "Nora from Queens"];
//* Output each movie individually

for(let i=0; i<favMovies_arr.length; i++ ){
    console.log(favMovies_arr[i]);
}//END FOR LOOP
 
 
//! Sum of Array Elements
//TODO Define an array of 5 numbers
let num_arr=[1,2,3,4,5];
let sum;
//TODO Calculate sum of the numbers
for(let i=0; i<num_arr.length; i++){
    sum += num_arr[i];
}//END FOR LOOP

//* Output the result
console.log(sum);


//! Update Array Elements
 //TODO Define an array of items
let colors = ["red", "blue", "green", "yellow", "purple"];
//TODO Update
//? green to cyan
//? purple to orange
for(let i=0; i<colors.length; i++){
    if (colors[i]=="green"){
        colors[i]="cyan";
    }else if (colors[i]=="purple"){
        colors[i]="orange";
    }// END IF AND ELSE IF 
}//END FOR LOOP

//* Output the results
console.log(colors);
 
//! Grade Categorizer
//TODO Define a array of 5 grade numbers
let gradeNum_arr=[75, 80, 98]
//TODO Categorize each grade
//* output each result
for(let i=0; i<gradeNum_arr.length; i++){
    if(gradeNum_arr[i]>90){
        console.log("A")
    }else if (gradeNum_arr[i]>=80){
        console.log("B")

    }else if (gradeNum_arr[i]>=70){
        console.log("C")

    }else if (gradeNum_arr[i]>=60){
        console.log("D")

    }else if (gradeNum_arr[i]<60){
        console.log("F")

    }//END IF AND ELSE IFS
}//END FOR LOOP

 
 
//! Day of the Week Checker
//TODO Define an array of days of the week
let daysOfWeek_arr=["Sunday", "Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"]; 

//TODO Define a variable for the day to check
let checkDay="Thursday";

//TODO Check if the day is a weekday or weekend

//* output the result
 
 
//! Temperature Checker
//TODO Define a array of 5 temperature numbers
//TODO Categorize the temperatures in 3 types (HOT, COLD, just right)
//*output the result

let temp_arr=[99,55,70]

for(let i=0; i<temp_arr.length; i++){
    if(temp_arr[i]>=85){
        console.log("It's HOT");
    }
    else if (temp_arr[i]>=70){
        console.log("it's just right");
    }
    else if (temp_arr[i]<70){
        console.log("it's cold")
    }//END IF 
}//END FOR LOOP
 
//! Number Sign Checker
//TODO Define a array of 5 numbers
//TODO Check the sign of the number
//* output the result

let numSign_arr=[-1,5,-8,4];

for(let i=0; i<numSign_arr.length; i++){
    if(numSign_arr[i]<0){
        console.log("Negative number")
    }
    else{
        console.log("Posive number") 
    }
}



//AUGUST 6TH NOTES - TAUGHT BY ZACH - LOOPS CONTINUED



//PRACTICE EXERCISES 

//! For Loops Problems TWO

// !Multiples Checker
// ? Create a program that checks if the elements in an array of numbers are multiples of a specific number and displays a message accordingly.
// TODO Define an array containing a list of numbers.
// TODO Define a variable for the specific number to check multiples of.

//DECLARE VARIABLES 
//THE NUMBERS SET I HAVE 
let int_arr=[1,8,13,87]

//THE NUMBER I WANT USE TO CHECK AGAINST MY NUMBER SET
let checkNum=2;

//THIS WILL HOLD THE NUMBER THAT IS LEFT OVER AFTER DIVIDING THE NUMBERS IN THE ARRAY BY CHECKNUM(IN THIS EX: 2)
let remainder;

// THIS LOOP LOOKS THROUGH MY ARRAY
for(let i=0; i<int_arr.length; i++){

    //REMAINDER WILL HOLD ARRAY[i] DIVIDED BY CHECKNUM -- "%" WILL GIVE YOU THE AMOUNT REMAINING AFTER DIVIDING
    // (1 DIVIDED BY 2 LEAVES A REMAINDER OF .50) 
    //REMAINDER=.5
    remainder=(int_arr[i] % checkNum)
    
    //IF THERE IS NO REMAINDER IT MEANS THAT THE NUMBER DIVIDED EVENLY - SO IT IS A MULTIPLE OF THAT NUMBER
    if(remainder==0){
        console.log(`"${int_arr[i]} is a multiple of ${checkNum}"`);
    }

    //IF THE REMAINDER IS ANYTHING EXCEPT 0 IT MEANS THAT NUMBER DID NOT DIVIDE EVENELY AND IT IS NOT A MULTIPLE OF THAT NUMBER
    else{
        console.log(`"${int_arr[i]} is NOT a multiple of ${checkNum}"`);
    };//END IF/ELSE 

}//END FOR LOOP
 
 
// !Age Group Categorizer
// ? Create a program that categorizes the ages in an array as 'child', 'teen', 'adult', or 'senior' based on their values.
// TODO Define an array containing a list of ages.
let ages_arr=[10, 25,78,17];
// Output Results: Use console.log to display the age categories.
for(let i=0; i<ages_arr.length; i++){
    
    if(ages_arr[i]>=65){
        console.log("Senior")
    }else if (ages_arr[i]>17){
        console.log("adult")
    }else if (ages_arr[i]>12){
        console.log("teen")
    }else if (ages_arr[i]<13){
        console.log("child")
    }; 
}//END FOR LOOP
 
 
// ! Palindrome Checker
// ?Create a program that checks if the elements in an array of strings are palindromes and displays a message accordingly.
// TODO Define an array containing a list of strings.
 
//DECLARE ARRAY VARIABLES
const possiblePalindromes = ["level", "pool", "rotator", "nun", "camp"];

//FOR LOOP WILL LOOP THROUGH EACH ARRAY ELEMENT
 for ( let i = 0; i < possiblePalindromes.length; i++) {

    //VARIABLE  str IS CREATED TO HOLD THE ELEMENT AT THE TARGETED LOCATION- IT WILL BE UPDATED EACH TIME THE LOOP RUNS WITH THE STRING OF THE NEXT ARRAY
    let str = possiblePalindromes[i];

    //VARIABLE reversed IS SET TO AN EMPTY STRING EACH TIME LOOP RUNS TO CLEAR ANY DATA IT HELD FROM THE LAST COMPLETED LOOP
    let reversed = "";
 
    //NESTED FOR LOOP WILL LOOK THROUGH THE STRING MOVING BACKWARDS - 
    for (let j = str.length - 1; j >= 0; j-- ) {
        //VARIABLE REVERSED WILL STORE EACH CHAR TO CREATE A NEW STRING
        reversed += str[j];
    }//end for loop
 
    //THIS WILL EVALUATE TO SEE IF THE STRING AT LOCATION[i] IS STRICTLY EQUAL TO THE STRING HELD BY "REVERSED" - IF SO - IT IS A PALINDROME- ELSE IT IS NOT
    if (str === reversed) {
        console.log(`${str} is a palindrome`)
    }else {
        console.log(`${str} is NOT a palindrome`)
    }//end if else
 }//end for loop



// !Prime Number Checker
// ?Create a program that checks if the elements in an array of numbers are prime and displays a message accordingly.
// TODO Define an array containing a list of numbers.
// Output Results: Use console.log to display the results.

//A PRIME NUMBER ONLY DIVIDES EVENLY BY 1 OR BY ITSELF -- SO WE NEED TO CHECK EVERY NUMBER LESS THAN THAT NUMBER TO SEE IF IT DIVISIBLE. 

//DECLARE VARIABLES
let numToCheck=[1,7,8,6,13,50];

//FOR LOOP LOOKS THROUGH ARRAY
for(let i=0; i<numToCheck.length; i++){
    let isPrime=true; 
    
    //isPrime IS DECLARED INSIDE OF FOR LOOP SO THAT IT WILL BEGIN AS TRUE EACH TIME THE LOOP RUNS-
     //OTHERWISE ONCE IT IS SET TO FALSE IT WILL NOT RESET TO TRUE BEFORE THE NEXT PASS AND WE CAN RECEIVE BAD DATA

    //IF THE NUMBER AT TARGET LOCATION IS LOOSELY EQUAL TO 1 - LOG THAT 1 IS NOT A PRIME NOR COMPOSITE
    if (numToCheck[i] == 1) {
        console.log("1 is neither prime nor composite number.");
    }//END IF NUM == 1
    
    //ELSE IF THE NUMBER AT TARGET LOCATION IS GREATER THAN ONE WE ENTER A NESTED FOR LOOP
    else if (numToCheck[i] > 1) {

        // WE START J AT 2 - THE LOWEST NUMBER AFTER KNOWING THAT IT IS GREATER THAN 1. THE LOOP WILL CONTINUE TO CHECK EACH NUMBER
        //UNTIL IT IS LESS THAN THE NUMBER WE ARE TARGETING.
        for (let j = 2; j < numToCheck[i]; j++) {

           // IF THE REMAINDER EQUALS 0 AT ANY OF THE NUMBERS LESS THAN ITSELF WE KNOW IT IS NOT PRIME AND isPrime WILL SWITCH TO FALSE
            if (numToCheck[i] % j == 0) {
                isPrime = false;
                break;
            }//END IF %==0

        }//END INNER FOR LOOP
    
        //IF AFTER EVALUATION  isPrime IS TRUE IT WILL LOG PRIME NUMBER -- IF FALSE IT WILL LOG NOT PRIME
        if (isPrime===true) {
            console.log(`${numToCheck[i]} is a prime number`);
        } else {
            console.log(`${numToCheck[i]} is a not prime number`);
        }//END IF/ELSE isPrime === TRUE

    }//END ELSE IF GREATER THAN 1
    
}//END OUTER FOR LOOP 



 
// !Uppercase Checker
// ?Create a program that checks if the elements in an array of strings are in uppercase and displays a message accordingly.
// TODO Define an array containing a list of strings.
// Output Results: Use console.log to display the results.
 
