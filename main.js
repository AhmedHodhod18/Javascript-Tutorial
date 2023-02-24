window.onload = function() {
    document.querySelector("h1").style.color = 'blue';
};

// window.alert("Hello from js file");
document.write("<h1>Hello <span>world</span></h1>");
console.log("hello from js file");
console.log("hello from %cjs file", "color: red; font-size: 40px");


/*
data : is antything that is meaningful the computer.
java script provides seven different data types that you can use within javascript
data types:
undefined : is something that hasn't been defined, you have a variable that you haven't set to be anything yet
null : means nothing, you haven't set this to be something and that thing is nothing
boolean : means true or false
string : is any sort of text
symbol : is an immutable primitive value that is unique
number : is a number 
object : can store a lot of different key value pairs
*/

var myname = "Beau"
// var : is going to be able to be used throughout your whole program
// var : you can set other data types later
myname = 8 // the variable of "myname" will change to 8

let ournmae = "freecodecamb"
// let : will only be used within the scope of where you declare that
const pi = 3.14 
/* Const : is a variable that should never change 
-> you can never change it
-> if you do try to change it, you will get an error
 */

var a;
// here's how you declaring a variable
a = 7;
// here's how you assign a variable
var b = 3;
// here's how declaring and assigning a variable in one line
// all lines in javascript ends with a semicolon (preferred)

console.log(5);
// allows you to see things in the console
console.table(["ahmed", 'ahmed'])



var a = 9; 
// var a is declaring it
// and the =9 is initializing it with the assignment operator, which is the =sign

var a;
/*
before we do anything to these variable they are uninitialized that means that value is undefined 
we have not set them to anything
*/
// variable names and function names in javascript are case sensitive

var sum = 10 + 10;
//adding numbers
console.log(sum)

var different = 45 - 33;
//subtracting numbers
console.log(different)

var product = 8 * 0;
//multiplying numbers
console.log(product)

var quotient = 66 / 6;
//dividing numbers
console.log(quotient)

var myVar = 87;
//incrementing numbers is add 1 to it
// myVar = myVar + 1;
myVar++;
console.log(myVar);

myVar--;
//Decrementing numbers
console.log(myVar)

var ourDecimal = 5.7;
//Decimal number

//finding a remainder
//the remainder operator looks like a % and it gives the remainder of the divition of two numbers
var remainder;
remainder = 11 % 3;
console.log(remainder);
//the remainder operator is often used to determine if number is even or odd

//compound assignment with augmented addition
var a = 3;
var b = 17;
a = a + 12;
b += 9  // +=, -=, *=, /= is a shortcut
console.log(a, b);

//declare string variables
var firstName = "Alan";
var lastName = "Turing";

//when we put \ javascript knows that this should just mean a qoutation mark
var myStr = "I am a\"double qouted\"strings inside\"double qoutes"
var myStr2 = 'I am a"double qouted"strings inside"double qoutes'
console.log(myStr);
console.log(myStr2);

/*
code output

\' single qoute
\" double qoute
\\ backslash
\n new line 
\r carriage return
\t tab
\b backspace
\f from feed

*/

var myStr3 = "firstLine\n\t\\SecondLine\nThirdLine\bFourthLine"
console.log(myStr3)


//concatenating strings with plus operator
var ourStr = "I come first. " + "I come second.";
console.log(ourStr);

//concatinating strings with plus equals operator
var myStr4 = "This is the start. " 
myStr4 += "This is the end."
console.log(myStr4)

//concatinating strings with variables
var ourName = "free code camp";
var ourStr5 = "Hello, our name is " + ourName + ", how are you";
console.log(ourStr5)

// appending variables to strings
var anAdjective ="awesome!";
var ourStr36 = "freeCodeCamp is ";

ourStr36 += anAdjective;
console.log(ourStr36);

//finding length of string
var theNameLength = 0;
var theName = "adda";

theNameLength = theName.length;
console.log(theNameLength);


// Bracket notation to find first character in string
//you can use bracket notation to find any character in string
var firstLetterOfFirstName = "";
var firstNameH = "adda";

firstLetterOfFirstName = firstNameH[0];
console.log(firstLetterOfFirstName);

//to find last character in the string
var UserName = "Ahmed Hodhod";
var lastLetterOfUserName = UserName[UserName.length-1];
console.log(lastLetterOfUserName);


//strings Immutablility "strings are immutable, meaning they cannot be altered once created"
//This does not mean that they cannot be changed, just that the individual characters of a string literal cannot be channged

var ahmedhodhod = "jello Ahmed";
// ahmedhodhod[0] = "H" // there's going to be an error
ahmedhodhod = "Hello Ahmed Hodhod";
console.log(ahmedhodhod);

// word Blanks
function wordBlank(myNoun, myAdjective, myVerb, myAdverb)
{
    var result = ""
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb
    return result;
}
console.log(wordBlank("dog", "big", "ran", "quikly"));

// store Multiple values with arrays
var ourArray = ["john", 23];
var myArray = ["quincy", 1];

//Nested Array
var ourArray = [["the universe", 42], ["everything", 101010]];

//Access Array Data with Indexes
var Array1 = [50, 60, 70];
var Data = Array1[0]; // equals 50

// Modify Array Data With Indexes

var Array2 = [18, 64, 99];
Array2[1] = 45; // Array2 now equals [18, 45, 99]

// Access Multi-Dimensional Arrays with Indexes
var Array3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9],[[1, 2, 3],10, 11]];
var Data3 = Array3 [0][0]; // Data3 equals 1
var Data4 = Array3 [2][1]; // Data4 equals 4
console.log(Data4)

// Manipulate Arrays with push()
// We can pinned data to the end of an array with the push function
var Array4 = ["ahmed", "mahmoud"];
Array4.push(["mohamed", "moustafa"]);
console.log(Array4);

// Manipulate Arrays with pop()
// we can remove an item from an array with the pop() function here

var Array5 = [1, 2, 3];
var removeFromArray5 = Array5.pop(); // it's going to remove the last element which is 3
console.log(Array5);

var Array6 = [[1, 2, 3], [2, 5]];
var removeFromArray6 = Array6.pop(); 
console.log(Array6);

// Manipulate Arrays with shift() it removes the first element of the array

var Array7 = ["ahmed", "mahomud", "morad"];
Array7.shift(); 
// unshift();  adds at element to the beginning of the array
Array7.unshift(["maichle", 35]);
console.log(Array7);

// write reusable code with functions
function reusableFunction() // you can path information into the parenthesis
{
    console.log("Hello, World");
}

reusableFunction(); // Here the function is being called by just putting the function name with parenthesis after name 


// passing values to functions with arguments
function FunctionwithArgs(a, b)  // that means that when this function is called we're giong to pass data into the function or input data into the function
// you can path information into the parenthesis
// parameters are variables that act as place holders for the values that are to be input to a function when it is called
{
    console.log(a + b);
}

FunctionwithArgs(10, 5); // Here the function is being called by just putting the function name with parenthesis after name 




// Global scope and function // scope refers to the visibility of variables
// variable which are defined outside of a function block have global scope
// global scope that means they can be seen everywhere in your javascript code

var myGlobal = 10; // Global scope 

function fun1(){

    oopsGlobal = 5; // you can access it anywhere else in the program because you didn't declare it with var keyword
// so it is possible to set a variable without using the var keyword
// if we have the var keyword here, this would be scoped to this function so you would not be able to see it in anyother function
}
function fun2(){
    var output = "";
    if (typeof myGlobal != "undefined")
    {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined")
    {
        output += "oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

fun1();
fun2();

// local scope and function // that means they're only visible from within the function

function myLocalScope() 
{
    var MYVARIABLE = 5; // that variable is only visiable inside this function
    console.log(MYVARIABLE);
}
myLocalScope();

// console.log(MYVARIABLE); // it will output an error // you try to access MYVARIABLE outside of the function

// Global vs Local scope in functions
// It is possible to have both local and global variables with the same name when you do this, the local variable takes precesent over the global variable

var outerWear = "T-Shirt";

function myOutfit() 
{
    var outerWear = "sweater";
    return outerWear;
}

console.log(myOutfit()); // here you call the function // the local variable
console.log(outerWear); // here you call the global variable

// return a value from a function with return

function minusSeven(num)
{
    return num - 7;
}
console.log(minusSeven(10));

// understanding undefined value returned from a function
var sum1 = 0;
function addThree ()
{
    sum1 += 3;
}

function addFive ()
{
    sum2 += 5;  // if we log this out, it would be undefined
}

// Assignment with a returned value

var changed = 0;
function change(num)
{
    return (num + 5) / 3;
}
changed = change(10); // Now changed equal the result of the mathematical expression
console.log(changed);

// stand in line

function nextInLine(arr, item)
{
    arr.push(item);
    return arr.shift();
}

var testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
// this JSON.stringify is just a way to change an array into a string that can easily be printed out to the screen
// in computer science a cue is an abstract data structure where items are kept in order



// Boolean Values

function welcomeToBooleans() 
{
    return true; // or false;
}

// Use Conditional Logic with If Statements
function TrueOrFalse(isItTrue)
{
    if (isItTrue) // here's the condition
    {
        return "Yes, it's true"; // this code will be evaluated or run if it's true
    }
    return "No, it's false"; // this code will be evaluated or run if it's false
}
console.log(TrueOrFalse(false));

// comparison with thr equality operator

function testEqual(val)
{ 
    if (val == 12) // the single equal sign is the assignment operator
    {
        return "Equal";
    }
    return "Not Equal";
}

console.log(testEqual(10));

// comparison with the strict equality operator
/* the double equals sign attempts to convert both values being compared to a common type
while the strict equality operator does not do the type conversion 
3 === 3   this is going to evaluate to true
3 === '3' with the string on the side is going to evaluate to false
// Both of these would be true if we were using the double equals sign ==
bacause the string would be converted to a number and it would be equal to true
*/
// check this link ( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality )
function testStrict(val)
{
    if (val === 7 )
    {
        return "Equal";
    }
    return "Not Equal";
}

console.log(testStrict('7')); // Not Equal

// Practice Comparing Different values

function compareEquality(h, j)
{
    if (h == j)
    {
        return "Equal";
    }
    return "Not Equal";
}

console.log(compareEquality(10, "10")); // Equal


// Comparison with the Inequality operator

function testNotEqual(val)
{
    if (val != 99)
    {
        return "Not Equal";
    }
    return "Equal";
}

console.log(testNotEqual('99'));

// comparison with the strict not equality operator
// the strict inequality operator is basically the opposite of the strict equality operator
function testStrictNotEqual(val)
{
    if (val !== 17 ) // it's not going to covert types
    {
        return "Not Equal";
    }
    return "Equal";
}

console.log(testStrictNotEqual('17'));


//comparison with the logical and operator

function testGreaterThan (val)
{
    if (val >= 100)
    {
        return "100 or Over";
    }
    if (val > 10)
    {
        return "Over 10";
    }
    return "10 or Under";
}

console.log(testGreaterThan(9));

//comparisons with the logical and operator 

function testLogicalAnd(val)
{
    if (val <= 50 && val >= 25)
    {
        return "Yes";
    }
    return "No";
}
console.log(testLogicalAnd(26));

//comparisons with the logical or operator

function testLogicalOr(val)
{
    if (val < 10 || val > 20)
    {
        return "outside";
    }
    return "Inside";
}
console.log (testLogicalOr(15));

// Else statements && Else If statements

function testElse(val)
{
    var result = "";
    if (val > 5)
    {
        result = "Bigger Than 5";
    }
    else if (val < 5)
    {
        result = "Smaller Than 5";
    }
    else
    {
        result = "Equal 5";
    }
    return result;
}

console.log(testElse(5.5));

/* 
Logical Order in If Else Statements
#Once the first condition is met, it doesn't even check for the rest of the conditions
*/
// Chaining If Else statement

// Golf Code

var names = ["Hole-in-one!", "Eagle", "Bridie", "Par", "Bogey", "Double Bogey", "Go Home"];
function golfscore(par, strockes)
{
    if (strockes == 1)
    {
        return names[0]
    }
    else if (strockes <= par - 2)
    {
        return names[1]
    }
    else if (strockes == par - 1)
    {
        return names[2]
    }
    else if (strockes == par)
    {
        return names[3]
    }
    else if (strockes == par + 1)
    {
        return names[4]
    }
    else if (strockes == par + 2)
    {
        return names[5]
    }
    else if (strockes == par + 3)
    {
        return names[6]
    }
    return "Change Me";
}

console.log(golfscore(5, 3));

//switch statements
// tests val and sets the answer to the following conditions

function caseInSwitch(val)
{
    var answer = "";
    switch(val)
    {
        case 1:  // it's using the strict equality operator, so it's like the === it's going to make sure that the type of the variable are the same
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
        default:  // Default Option in switch statements
            answer = "stuff";
            break;
    }
    return answer;
}

console.log(caseInSwitch(5));

// Multiple Identical Options In Switch Statements

function sequentialSizes(val)
{
    var answer = "";
    switch (val)
    {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }
    return answer;
}

console.log(sequentialSizes(5));

// Replacing If Else Chains with Switch


//returning boolean values from function

function isless(a, b)
{
    if (a < b)
    {
        return true;
    }
    else 
    {
        return false;
    }
}
console.log (isless(15, 10));
//....................................
function isless(a, b)
{
    return a < b;
}
console.log(isless(10, 15));

//returning early pattern from functions

function abTest(a, b)
{
    if (a < 0 || b < 0)
    {
        return undefined;
    }

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(2, -2));
// .............................................................

// Counting Cards
// when you see a low card, the count goes up && when you see a high card, the count goues down 
// if it's a middle value card, the count stays the same
// when the count is positive, the player should bet high
// when the count is zero or negative, the player should bet low
// we are going to use switch statement to figure out what card has been passed in and what to do about it
// every time you call the cc function it's going to change this count value and return the total count
var count = 0;

function cc(cards)
{
    switch(cards)
    {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 7:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }
    var holdbet = 'Hold'
    if (count > 0)
    {
        holdbet = 'Bet'
    }
    return count + " " + holdbet;
}
cc("A"); cc(10); cc("J"); cc("k"); cc(2);
console.log(cc(4));

// Build javascript object
// Objects are similar to arrays ecept that instead of using indexes to access data, you use properties

var ourDog = 
{
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends":["everything!"]
};

// the properties are everything before the colons && the values are the things after the colons here
// properties can be any datatype in javascript

// Accessing Object Properties with Dot Notation

var testObj = 
{
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends":["everything!"]
};

var nameValue = testObj.name; // the value of nameValue is going to be Camper
var legsValue = testObj.legs; // the value of legsValue is going to be 4
console.log(nameValue);
// Accessing Object properties with braket notation
/* use bracket notation to access a property in an object anytime, 
but it is required if the name of a property has a space in it
*/
var testObj = 
{
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water",
};

var entreeValue = testObj ["an entree"]; // the value of entreeValue is going to be hamburger
var drinkValue = testObj['the drink']; // the value of drinkValue is going to be water
console.log(drinkValue);

// Accessing object propreties with variables

var testObj1 = 
{
    12: "namath",
    16: "Montana",
    19: "Unitas",
};

var playerNumber = 16;
var player = testObj1[playerNumber];
console.log(player);

// updating object properties

var myDog = 
{
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends":["everything!"]
};

myDog.name = "Happy Camper";
console.log(myDog.name);
// Add new properties to an object using dot notation
myDog.bark = "bow-wow";
// Add new properties to an object using bracket notation
myDog['bark1'] = "woof"
console.log(myDog.bark);

//delete properties from an object
delete myDog.name;

// using objects for lookups
/* we can replace this switch statement with an object
and use the object for lookups instead of the switch statement
*/

function phoneticlookup(val)
{
    var result = "";

    var lookup =
    {
        "alpha"   : "Adams",
        "brave"   : "Boston",
        "charlie" : "Chicago",
        "delta"   : "Denver",
        "echo"    : "Esay",
        "foxtrot" : "Frank",
    };
    result = lookup[val];

    return result;
/*
we can replace this switch statement with an object
and use the object for lookups instead of the switch statement
    switch(val)
    {
        case "alpha":
            result = "adams"  
            break;
        case "brave":
            result = "Boston"
            break;
        case "charlie":
            result = "Chicago";
            break;
        case "delta":
            result = "Denver";
            break;
        case "echo":  
            result = "Esay";
            break;
        case "foxtrot":
            result = "Frank";
    }
    return result;
    */
}

console.log(phoneticlookup("charlie"));

// Testing objects for properties
var myObj =
    {
        gift : "pony",
        pet  : "kitten",
        bed  : "sleigh"
    };

    function checkObj (checkProp)
    {
        if (myObj.hasOwnProperty(checkProp)) // you can check if an object has a property with the hasOwn property method
        {
            return myObj[checkProp];
        }
        else
        {
            return "Not Found"
        }
    }

    console.log(checkObj("gift"));

    // Manipulating Complex Objects
/*
a javascript object is a way to store flexible data so you can stor strings, numbers and arrays and even other objects
*/
var myMusic = 
[
    {
        "artist" : "Billy Joel",
        "title" : "piano Man",
        "release_year" : 1973,
        "formats" :
        [
            "cd",
            "8T",
            "LP"
        ],
        "gold" : true
    },
    {
        "artist" : "beau Carnes",
        "title" : "Careal Man",
        "release" : 2003,
        "formats" : 
        [
            "youtube video"
        ]
    }
]

// Accessing Nested Objects

var myStorage =
{
    "car" :
    {
        "inside":
        {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside":
        {
            "trunk": "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);


// Accessing Nested Arrays
var myPlants = 
[
    {
        type: "flowers",
        list:
        [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: 
        [
            "fir",
            "pine",
            "birch"
        ]
    }
];

var secondTree = myPlants[1].list[1]; // using index in arrays
console.log(secondTree);

// Record Collection
/*
this object here which is a record collection, Each record has an ID and then also has different pieces of information
about the record   ( https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects )
 */

var collection =
{
    "2248" :
    {
        "album" : "slippery when wet",
        "artist" : "Bon Jovi",
        "tracks" : 
        [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2268" :
    {
        "album" : "1999",
        "artist" : "Prince",
        "tracks" : 
        [
            "1999",
            "little Red Corvette"
        ]
    },
    "1245" :
    {
        "artist" : "Robert Plamer",
        "tracks" : [ ]
    },
    "5439" :
    {
        "Album" : "ABBA Gold"
    }
};


var collectionCopy = JSON.parse(JSON.stringify(collection));
// this is just a fancy way in javascript to make a copy of the object
// in our function we are going to be changing the collection object, But we want to have a copy of the original object before anything was changed 
function updateRecords(id, prop, value) 
// updateRecords function where we can pass in the ID, the property, and the value
// if we have an empty string for the value, it should just completely delete that property
// because the first condition we are going to test for is if we need to delete the property 
//if the value is set to blank we delete that property
{
    if (value === "") 
    {
        delete collection[id][prop];
    }
    else if (prop === "tracks")
    {
        collection [id][prop] = collection[id][prop] || [];
        collection [id][prop].push(value);    
    }
    else
    {
        collection[id][prop] = value;
    }

    return collection;
}
console.log(updateRecords(5439, "artist", "ABBA"));

// Iterate with while loop
/*
Loops allow you to run the same code multiple times
*/
var myArr = [];

var i = 0;
while (i < 5) 
{
    myArr.push(i);
    i++;
}
console.log(myArr);

// Iterate with for Loops

var ourArr = [];

for (var i = 0; i < 5; i++)
// for (the initialization; Then we have the condition;then we have the final expression)
{
    ourArr.push(i);
}

console.log(ourArr);

// Iterate Odd Numbers with a For Loop

var ourArr = [];

for (var i = 0; i < 10; i += 2)
{
    ourArr.push(i);
}

console.log(ourArr);

// count Backwards with a for loop

var ourArr = [];

for (var i = 10; i > 0; i -= 2)
// for (the initialization; Then we have the condition;then we have the final expression)
{
    ourArr.push(i);
}

console.log(ourArr);

// Iterate Through an Array with  For Loop

var ourArr = [1, 2, 3, 4, 5];
var ourTotal = 5;

for (var i = 0; i < ourArr.length; i++)
{
    ourTotal += ourArr[i];
}

console.log(ourTotal);


// Nesting For Loops

function multiplyAll(arr)
{
    var product = 1;
    for (var i = 0; i < arr.length; i++)
    {
        for (var j = 0; j < arr[i].length; j++)
        {
            product *= arr[i][j];
        }
    }
    return product;
}
var product = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
console.log(product);

// Iterate with Do...While Loops

/*
While Loop: first checks the condition before it runs any code within the loop
Do While Loop: will always run at least one time and then check the condition
 */

var myArray = [];
var i = 10;
do
{
    myArray.push(i);
    i++;
}
while (i < 11)
console.log(i, myArray)





// Profile Lookup

var contacts =
[
    {
        "firstName" : "Ahmed",
        "MiddleName" : "said",
        "Likes" : ["Pizza", "Coding"]
    },
    {
        "firstName" : "Mahmoud",
        "MiddleName" : "samir",
        "Likes" : ["Magic", "Hagrin"]
    },
    {
        "firstName" : "Morad",
        "MiddleName" : "Fekry",
        "Likes" : ["Gaming", "Chess"]
    },
];

function lookUpProfile(name, prop)
{
    for (var i = 0; i < contacts.length; i++)
    {
        if (contacts[i].firstName === name)
        {
            return contacts[i][prop] || "No such property";
        }
    }
    return "No such contact";
}

var data = lookUpProfile("Morad", "Likes");
console.log(data);


// Generate Random Functions
// create a random decimal number with Math.random Function
function randomFraction()
{
    return Math.random();

}

console.log(randomFraction());

// Generate Random Whole Number
// Math.floor : rounds down to the nearest whole number
// Math.random : it can never be 1 // it can be 0
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNumber()
{
    return Math.floor(Math.random() * 10); // that's going to give us a random number between 0 and 9
}
console.log(randomWholeNumber());
// every time you load it, it's a different random number

//Generate Random Whole Numbers within a Range

function ourRandomRange(ourMin, ourMax)
{
    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

console.log(ourRandomRange(1, 9));

// Use the parseInt Function, It Takes a string and return an integer
// we're going to return the string except we're going to convert it into an integer first
function convertToInteger(str)
{
    return parseInt(str)

}
console.log(convertToInteger("56"));

/* Use the parseInt Function with a Radix, The Radix specifies the base of the number in the string such as base 2
or base 7, or base 8, A base 2 would be binary so that's one of the most common ones to use, Now the default is base 10
that's what we use normally every day
## pass in the string, and the second argument which is going to be the number 2 so instead of the default of base 10
we'll be passing it as base 2m so the computer knows that this is a binary number
*/
function convertToInteger1 (str)
{
    return parseInt(str, 2)
}
console.log(convertToInteger1("10011"));

// use the conditional (Ternary) Operator ## It's like a one line if else expression
// condition ? statement-if-true : statement-if-false;
function checkEqual(a, b)
{
    if (a === b)
    {
        return true;
    }
    else
    {
        return false;
    }
}
console.log(checkEqual(1, 2));
// (Ternary) Operator
function checkEqual(a, b)
{
    return a === b ? true : false
}
console.log(checkEqual(1, 1));

// Use Multiple Conditional (Ternary) Operators
/*
we can nest ternary operator within each other which gives them even more power
*/
function checkSign(num)
{
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}
console.log(checkSign(-10));

// Differences between the var and let keywords
// Starting with ES6 in 2015 we can now declare variables with let and const as well

/* Duplicate declaration "catName"
# you usually don't want to declare a variable two times in the same scope
# let does not let you declare a variable twice 
# enable strict mode which catches common coding mistakes and unsafe actions so alot of people will use 
"use strict" at the top of a full javascript file or maybe just in a function to catch coding mistakes such as 
if you declare a variable and don't deca;re it with var or let or const
*/

// Compare scopes of the var and let Keywords
/* if you declare variable with var, it is declare globally or locally if declare inside a function
However, let - the scope of let is limited to the block statement or expression that it was declared in
people use let instead of var is so that they make sure that variable is only defined in the area they want it to be defined in
*/
function checkScope()
{
    "use strict";
    var i = "function scope";
    if (true)
    {
        var i = "block scope";
        console.log("Block Scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i
}

checkScope();

function checkScope()
{
    "use strict";
    let i = "function scope";
    if (true)
    {
        let i = "block scope";
        console.log("Block Scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i
}

checkScope();

// declare a Read- Only variable with the const Keyword
// const has all the features of let but it's also read-only, you can not reassign a const
// This can be very helpful to prevent you from accidentally making mistakes later
// when you're using const it's very common to use all capital letters

function printManyTimes (str)
{
    "use strict";
    const SENTENCE = str + " is cool!";

    for (let i = 0; i < str.length; i += 2)
    {
        console.log(SENTENCE);
    }
}
printManyTimes("FreeCodeCamp");

// Mutate an Array Declare with const
// you can not reassign a variable declare with const but you can mutate an array
const s = [5, 7, 2];
function editInPlace() 
{
    "use strict";
    // s = [9, 8, 6]  It w'll make an Error

    s[0] = 2;
    s[1] = 6;
    s[2] = 9;
}
editInPlace();
console.log(s);

// prevent Object Mutation
/* if you have an array, you can still mutate it even if it's declared with const, there is something called 
object.freeze that will prevent data mutation
*/

function freezeObj()
{
    "use strict";
    const MATH_CONSTANTS =
    {
        PI : 3.14
    };
    Object.freeze(MATH_CONSTANTS); 
/*Now I've frozen MATH_CONSTANTS, so when it tried to change MATH_CONSTANTS.PI here it's not going to work, and it's
going to go into catch block and going to log out the error or the exception

*/
    try
    {
        MATH_CONSTANTS.PI = 99;
    }
    catch(ex)
    {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
console.log(PI);

// Use Arrow functions to write concise anonymous functions
/* This funcion here is called an anonymous function, It doesn;t have a name, it is assigned to the variable magic
but there is no word right before the function keyword to assign the name to the function,
whenever you have an anonymous function you can convert it into an arrow function that makes it a little quicker to write

*/
var magic = function()
{
    return new Data();
};
// if we're just returning one value here we don't even need the return keyword or curly braces
// const magic = () => new Date();
// this is the full function from before, but it's just really shortened up

//Write Arrow Functions with parameters
/**
Just like in a normal function, you can pass arguments to arrow function
 */

var myConcat = function(arr1, arr2)
{
    return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3,  4, 5]));


// convert previous function into an arrow function

var myConcat = (arr1, arr2) => arr1.concat(arr2);
// for good measure we'll change var to const
// const myConcat = (arr1, arr2) => arr.concat(arr);
console.log(myConcat([1, 2], [3,  4, 5]));

// write Higher Order Arrow Functions
/**
Arrow functions work really well within higher order function such as (map, filter, reduce)
the main thing to know that (map, filter, reduce) take functions as arguments for processing collections of data.
whenever one function takes another function as an argument, that's a good time for an arrow function.
if you only have a single argument like the number argument you don't need parenthesis around the argument,
you can just put the argument and then the arrwow 
*/


const realNumberArray = [4, 5, -8, 21, -12, -56, 0]

const squareList = (arr) => 
{
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);


//write higher order arrow functions
/**
In order to create more flexible functions you can use default parameters,
the default parameters is not specified or is undefined
 */

const increment = (function()
{
    return function increment(number , value = 1)
    {
        return number + value;
    };
}) ();
console.log(increment(5, 2));
console.log(increment(5));
// if you want to increment by 1 pass one argument 5


// Use the rest operator with function parameters
// The rest operator allows you to create a function that takes a variable nuumber of arguments, the rest operator is three dots
const sum123 = (function()
{
    return function sum123(x, y, z)
    {
        const args = [x, y, z];
        return args.reduce((a, b) => a + b, 0);
    };
}) ();
console.log(sum123(1, 2, 3));

// we can change that to use the rest operator

const sum12 = (function()
{
    return function sum12(...args)
    {
        return args.reduce((a, b) => a + b, 0);
    };
}) ();
console.log(sum12(1, 2, 3, 4));
// Now we can have any number of arguments


// Use The Spread Operator to evaluate Arrays In-Place
/**
the spread operator looks just like the rest operator three dots but it expands an already existing array or spreads out an array
so, it takes an array and spreads it out into its individual parts
we not actually coping it, because if we change arr12, if we set the index of arr12 to 'potato' and we log arr34,
you will see that index[0] is 'potato' even though we are logging arr34 and we only change arr12 because these are equal.
arr12 and arr34 are the same
 */

const arr12 = ['jan', 'feb', 'mar', 'apr', 'may'];
let arr34;
(function()
{
    arr34 = arr12; // we not actually coping it
    arr12[0] = 'potato'
})();
console.log(arr34)
// But if we want arr34 to be a copy of arr12// you can use the spread operator

const arr123 = ['jan', 'feb', 'mar', 'apr', 'may'];
let arr345;
(function()
{
    arr345 = [...arr123]
    arr123[0] = 'potato'
})();
console.log(arr345)

// using Destruscturing Assignment to assign variables from objects
/**
this is a special syntax for neatly assigning values taken directly from an object to a variable 
 */

// var voxel = {x: 3.6, y: 7.4, z: 6.54};
// take each individual element in this object and assign it to its own variable.
// var x = voxel.x;
// var y = voxel.y;
// var z = voxel.z;
//this is the old way to doing it..
// with destructuring, there's a simpler and quicker way to assign variables for each element  in an object

// const { x : a, y : b, z : c } = voxel; // destructuring syntax
// we are creating variables a,b,c and assigning them to a values from the object x,y,z
const AVG_TEMPERATURES ={
    today: 77.5,
    tomorrow: 79
};
function getTempOfTmrw(avgTemperatures)
{
    "use strict";
    const {tomorrow : tempOfTomorrow } = avgTemperatures;
    return tempOfTomorrow;
}
console.log(getTempOfTmrw(AVG_TEMPERATURES));
// line 1465 says get the tomorrow field from the AVG_TEMPERATURES object and assign it to the tempOfTomorrow variable


// using Destruscturing Assignment with nested objects 

const LOCAL_FORECAST =
{
    today: { min: 72, max: 83},
    tomorrow: { min: 73.3, max: 84.6}
};


function getMaxOfTmrw(forecast)
{
    "use strict";

    const { tomorrow : { max : maxOfTomorrow }} = forecast;
    return maxOfTomorrow;
}
console.log(getMaxOfTmrw(LOCAL_FORECAST));

// use Destruscturing Assignment to assign variables from arrays
/* the difference between destructuring from arrays and destructuring from objects is that 
you can not specify which element from the array to go into a variable it just goes in order

*/
const [z, x, , y] = [1, 2, 3, 4, 5, 6];
console.log(z, x, y);
// , , to skip the element in the array y = 4 now


// another way you can use destructuring of arrays to switch the places of variables
let g = 8, h = 6;
(() => 
{
    "use strict";
    [g, h] = [h, g]
})();
console.log(g);
console.log(h);


// use Destruscturing Assignment with the rest operator to reassign array elements

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) 
{
    const [ , , ...arr] = list;
// do nothing for the first element, do nothing for second element, everything else put into the arr variable 
    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);

// use destructuring assignment to pass an object as a function's parameters

const stats =
{
    max : 65.78,
    standards_deviation : 4.34,
    median : 34.54,
    mode : 23.87,
    min : -0.75,
    average : 35.85
};
const half = (function()
{
    return function half({ max, min})
    {
        return (max + min) / 2.0;
    };
})();
console.log(stats); 
console.log(half(stats));

// Create Strings Using Template Literals
const pers = 
{
    name : "Zodiac Hasbro",
    age : 56
};

const greeting = `Hello, my name is ${pers.name}!
I am ${pers.age} years old.`;
console.log(greeting);
// backticks ... you can make multiline strings

//write Concise Object Literal Declarations Using Simple Fields

const createPerson = (name, age, gender) => ({ name, age, gender});
// {
//     return 
//     {
//         name : name,
//         age : age,
//         gender : gender,
//     };
// };
console.log(createPerson("Zodiac Hasbro", 56, "male"));

//write concise Declarative functions
/** 
An object can contain a function

const bicycle = 
{
    gear: 2,
    setGear:function(newGear)
    {
        "use strict"
        this.gear = newGear;
    }
};

bicycle.setGeat(3);
console.log(bicycle.gear);

this is the long way to put a function within an object
there is a simpler way
*/

const bicycle = 
{
    gear: 2,
    setGear(newGear)
    {
        "use strict"
        this.gear = newGear;
    }
};

bicycle.setGear(3);
console.log(bicycle.gear);

// use class syntax to define a constructor function
/**
ES6 provides a syntax to create objects using the class keyword
 */

var spaceShuttle = function(targetPlanet)
{
    this.targetPlanet = targetPlanet;
}
var zeus = new spaceShuttle('Jupiter');
console.log(zeus.targetPlanet)


class space
{ constructor (targetPlanet)
    {
        this.targetPlanet = targetPlanet;
    }
}
var zeus = new space('Jupiter');
console.log(zeus.targetPlanet)

function makeClass()
{
    class vegetables
    {
        constructor(name)
        {
            this.name = name;
        }
    }
    return vegetables;
}
const vegetables = makeClass();
const carrot = new vegetables('carrot');
console.log(carrot.name);

// use getters and setters to control access to an object
/**
With the class object you often want to obtain values from the object and set a value of a property within an object
this are often called getters and setters
getter functions : are meant to simply return or get the value of an object's private variables to the user without
the user directly accessing the private variable.
the private variable is this._author that gets set when you construct the object.
you never actually interact directly with this variable, but it's going to get the writer which is the author here.
# the word this i (this._author)(this._temp) just means that this variable is only accessible within this class here
whenever you start a variable with an _ that's giong to generally signify that it's private variable, that you're not
supposed to access it outside of that scope or outside of that class
*/


class Book 
{
    constructor(author)
    {
        this._author = author;
    }
    get writer()
    {
        return this._author;
    }
    set writer(updatedAuthor)
    {
        this._author = updateedAuthor;
    }
}
function makeClass()
{
    class Thermostat
    {
        constructor(temp)
        {
            this._temp = 5/9 * (temp - 32);
        }
        get temperature()
        {
            return this._temp;
        }
        set temperature(updatedTemp)
        {
            this._temp = updatedTemp;
        }
    }
    return Thermostat;
}
const Thermostate = makeClass();
const thermos = new Thermostate(76);
let temp = thermos.Temperature;
thermos.Temperature = 26;
temp = thermos.Temperature;
console.log(temp);


// understand the differences between import and require
/**
in the past people would use the require function to import functions and code from other files, but now we have
import and export, you can export code in one file and then import it in another file, It also allows you to only
import certain functions from a file or certain variables
 */

// import { capitalizeString } from "./string_sunction"
// const cap = capitalizeString("hello !");
// console.log(cap);