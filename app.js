


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




