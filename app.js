// ***** CHAPTER 21-25 *****
// Task 1
var fName = prompt("Enter First Name: ");
var lName = prompt("Enter Last Name: ");
var fullName = fName + " " + lName;
alert(fullName);

// Task 2
var mobileModel = prompt("Enter your favorite phone");
document.write("My Favorite Phone is: " + mobileModel);
document.write("<br>Length of string is: " + mobileModel.length);

// Task 3
var str = "Pakistani";
document.write("<br><br>String: " + str);
document.write("<br>Index of 'n': " + str.indexOf('n'));

// Task 4
var str = "Hello World";
document.write("<br><br>String: " + str);
document.write("<br>Last index of 'l': " + str.lastIndexOf('l'));

// Task 5
var str = "Pakistani";
document.write("<br><br>String: " + str);
document.write("<br>Character at index 3: " + str.charAt(3));

// Task 6
var fName = prompt("Enter First Name: ");
var lName = prompt("Enter Last Name: ");
fName = fName.toString();
lName = lName.toString();
var fullName = fName.concat(" " + lName);
document.write("<br><br>Name: " + fullName);

// Task 7
var city = "Hyderabad";
var change = city.replace("Hyder", "Islam");
document.write("<br><br>City: " + city);
document.write("<br>After Replacement: " + change);

// Task 8
var msg = "Ali and Sami are best friends. They play cricket and football together.";
msg=msg.replace("and","&");
document.write("<br><br>Replaced: " + msg);

// Task 9
var str = "472";
var num = parseInt(str);
document.write("<br><br> Value: " + str);
document.write("<br> Data type: " + typeof (str));
document.write("<br> Value: " + num);
document.write("<br> Data type: " + typeof (num));

// Task 10
var input = prompt("Enter string");
var cap = input.toUpperCase();
document.write("<br><br>User Input: " + input);
document.write("<br>Upper Case: " + cap);

// Task 11
var input = prompt("Enter string");
var title = input.slice(0, 1).toUpperCase();
var word = title + input.slice(1,);
document.write("<br><br>User Input: " + input);
document.write("<br>Title Case: " + word);

// Task 12
var num = 35.36;
var str = num.toString();
var rep = str.replace('.', '');
document.write("<br><br>Number: " + num);
document.write("<br>Result: " + rep);

// Task 13
var input = prompt("Enter username: ");
if (input.indexOf('@') > -1 || input.indexOf('.') > -1 || input.indexOf(',') > -1 || input.indexOf('!') > -1) {
    alert("Please enter valid username");
}
else {
    document.write("<br><br>Username: " + input);
}

// Task 14
var array = ["cake", "apple pie", "cookie", "chips", "patties"];
var input = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
input = input.toLowerCase();
var flag = false;
for (var i = 0; i < array.length; i++) {
    if (array[i] === input) {
        alert(input + " is available at index " + i + " in our bakery.");
        flag = true;
        break;
    }
}
if (flag == false) {
    alert("We are sorry " + input + " is not available in our bakery.");
}


// Task 15
var input = prompt("Enter Password: ");
input = input.toString();
var isNum = false;
var isAlpha = false;
if (input.length < 6) {
    document.write("<br>Password should be 6 characters long");
}
if (input[0] === "0" || input[0] === "1" || input[0] === "2" || input[0] === "3" || input[0] === "4" || input[0] === "5" || input[0] === "6" || input[0] === "7" || input[0] === "8" || input[0] === "9") {
    document.write("<br>Password should not begin with a number");
}
for (var i = 0; i < input.length; i++) {
    if (input[i] === 'A' || input[i] === 'B' || input[i] === 'C' || input[i] === 'D' || input[i] === 'E' || input[i] === 'F' || input[i] === 'G' || input[i] === 'H' || input[i] === 'I' || input[i] === 'J' || input[i] === 'K' || input[i] === 'L' || input[i] === 'M' || input[i] === 'N' || input[i] === 'O' || input[i] === 'P' || input[i] === 'Q' || input[i] === 'R' || input[i] === 'S' || input[i] === 'T' || input[i] === 'U' || input[i] === 'V' || input[i] === 'W' || input[i] === 'X' || input[i] === 'Y' || input[i] === 'Z') {
        isAlpha = true;
    }
    else if (input[i] === 'a' || input[i] === 'b' || input[i] === 'c' || input[i] === 'd' || input[i] === 'e' || input[i] === 'f' || input[i] === 'g' || input[i] === 'h' || input[i] === 'i' || input[i] === 'j' || input[i] === 'k' || input[i] === 'l' || input[i] === 'm' || input[i] === 'n' || input[i] === 'o' || input[i] === 'p' || input[i] === 'q' || input[i] === 'r' || input[i] === 's' || input[i] === 't' || input[i] === 'u' || input[i] === 'v' || input[i] === 'w' || input[i] === 'x' || input[i] === 'y' || input[i] === 'z') {
        isAlpha = true;
    }
    else if (input[i] === "0" || input[i] === "1" || input[i] === "2" || input[i] === "3" || input[i] === "4" || input[i] === "5" || input[i] === "6" || input[i] === "7" || input[i] === "8" || input[i] === "9") {
        isNum = true;
    }
}
if (isAlpha === false || isNum === false) {
    document.write("<br>Password should contain alphabets and numbers");
}

// Task 16
var university = "University of Karachi";
var array = university.split("");
document.write("<br>");
for (var i = 0; i < array.length; i++) {
    document.write("<br>" + array[i]);
}

// Task 17
var input = prompt("Enter string");
input = input.toString();
var lastChar = input[input.length - 1];
document.write("<br><br>User Input: " + input);
document.write("<br>Last character of input: " + lastChar);

// Task 18
var str = "The quick brown fox jumps over the lazy dog";
str = str.toLowerCase();
var count = 0;
for (var i = 0; i < str.length; i++) {
    if (str[i] === 't') {
        if (str[i + 1] === "h") {
            if (str[i + 2] === "e") {
                count = count + 1;
            }
        }

    }
}
document.write("<br><br>Text: " + str);
document.write("<br>There are " + count + " occurrence(s) of word 'the'");

