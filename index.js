//challenge 1................................................................................................
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
   //Chalenge 2...............................................................................................
     function NumberOfVowels(){
        //prompt user to insert word, store prompt in a variable 
        let newWord=prompt("Please insert any word with vowels, e.g talk or come"); 
        //create a variable to store result
        let numVowels = 0; 
        //iterate though every letter, add 1 if letter is a, e, i, o or u
        for(let i = 0; i<=newWord.length-1; i++){
            if((newWord[i]=='a') || (newWord[i]=='e')||(newWord[i]=='i')||(newWord[i]=='o')||(newWord[i]=='u')){
                numVowels +=1;
            }
        }
        
        //return result to console
        console.log(numVowels);
     }
       //Challenge 3..............................................................................................
      function RemoveSpace(){
        //prompt user to insert word, store prompt in a variable 
        let newWord2= prompt("Please insert any words with a space in between it e.g. Micha el or Rob ert");
        let firstword;
        let lastWord;
        //create a variable to store result
        let fullWord ="";
        firstword = newWord2.slice(0,newWord2.indexOf(" "));
        lastWord = newWord2.slice(newWord2.indexOf(" ") + 1);
        fullWord = firstword + lastWord;
        console.log(fullWord);
      }
     
    
    