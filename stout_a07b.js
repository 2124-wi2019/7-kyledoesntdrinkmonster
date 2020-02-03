/*Kyle Stout
  stout_a02b
  INFO 2124WW
  Thoendel
  02-02-2020
*/

/* DO NOT MODIFY CODE BETWEEN THESE LINES */
const standardInput = process.stdin;            
standardInput.resume();
standardInput.setEncoding('utf8');
const badFoods = [];
const groceryItems = [];
clearScreen();
console.log(getPrompt(groceryItems));
/* DO NOT MODIFY CODE BETWEEN THESE LINES */

//Step 1
buildFoodsList (badFoods, "bread", "beer", "wine", "vodka", "gin");        

standardInput.on('data', function (text) {
    //This line will remove line breaks 
    //\n\r in window, \r in macOS
    text = text.replace('\n', '').replace('\r', '');
    //Step 4 Begin
    if (text == 'Q' || text == 'q') {
        clearScreen();
        console.log("Bye");
        process.exit();
    } else if (text == 'V' || text == 'v'){
        clearScreen();
        viewList();
        getPrompt();
    }
    else {
        clearScreen();
        checkitem(text);
        if (Boolean === false) {
            console.log("Item added to list!");
            groceryItems.push(text);
            getPrompt();
        } else {
            console.log(`   Error: That item is not safe for your allergies.
            It has not been added to your list.`);
            getPrompt();
        }
    }
    
    //Step 4 End
});

/* DEFINE YOUR FUNCTIONS BETWEEN THIS LINE */

//Step 2
function buildFoodsList (badFoods, food1, food2, food3, food4, food5) {
    badFoods.push(food1);
    badFoods.push(food2);
    badFoods.push(food3);
    badFoods.push(food4);
    badFoods.push(food5);
    return badFoods; 
}
// I tried to iterate through the ...foods but it added all 5 as badFoods[i] five times and I couldnt move forward I spend like 3 hours
//just on this part. 
function checkitem(text, badFoods) {
    text = text.toString().toLowerCase();
    for (var i = 0; i < 5; i++) {
        if(text === badFoods[i]){
            return true;
        }
    } return false;
}
function formatItem(text) {
    text = text.trim();
    text = text.toLowercase();
    return text.charAt(0).toUpperCase() + text.slice(1);

}
function viewList(groceryItems){

}




//Step 3
function getPrompt(groceryItems){
    var myString = `    Your grocery list contains ${groceryItems.length} items
    Please enter a grocery item
    Enter Q to quit
    Enter V to view list
    =======================`;
    console.log(myString);
}


/* AND THIS LINE */

function clearScreen() {
    console.log('\033[2J');
}