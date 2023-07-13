function reverseString(){
//Prompt user for a string and Store prompted string in variable
     let givenWord = prompt("Please enter a string e.g. hello or welcome");
     //store the result in a variable
     let resultWord ="";
    //create a for loop starting at end of string till 0 and keep adding every character at each index iteration
    for(let i =givenWord.length-1; i>=0; i--){
         resultWord +=givenWord[i];
    }
    //return result
    console.log(resultWord);
     }
    