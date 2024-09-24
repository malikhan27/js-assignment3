//chapter no. 12-13

//q#1


document.write(`<h1> Question no. 1 <br> Ascii code </h1>`)

var a = prompt("Question no. 1 \n Enter Your Input")
var acsii

if(a.charCodeAt() <= 90 && a.charCodeAt() >= 65){ acsii= "Your Input is an Uppercase Letter"}
else if (a.charCodeAt() <= 57 && a.charCodeAt() >= 48){acsii= "Your Input is a Number"}
else if(a.charCodeAt() <= 122 && a.charCodeAt() >= 97){acsii= "Your Input is a Lowercase Letter"}
else{acsii="Enter A Correct Input"}

document.write(`Answer = <h2> ${acsii} </h2>`)



//q#2
document.write(`<h1> Question no. 2  <br/> Two integers comparison </h1>`)

var num1= +prompt("Question no.2 \n Enter First Digit")
var num2= +prompt("Enter Second digit")
var remarks

if(num1 > num2){remarks= num1 + " " + "is greater than" + " " + num2}
else if (num2>num1){remarks= num2 + " " + "is greater than" + " " + num1}
else if (num2===num1){remarks= num2 + " " + "is equal to" + " " + num1}
else{remarks="enter a valid"}

document.write(`Answer = <h2> ${remarks} </h2>`)



//q#3

document.write(`<h1> Question no. 3  <br/> Negative Positive Zero</h1>`)

var input1= +prompt("Question no. 3 \n Enter your Value")

if(input1 < 0 ){remarks="Your Value is Negative"}
else if (input1 > 0){remarks="Your Value is Positive"}
else if (input1 == 0){remarks="Your Value is zero"}

else(remarks="enter a valid value")

document.write(` Answer = <h2> ${remarks} </h2>`)

//q#4
document.write(`<h1> Question no. 4 <br/> Vowels and Consonant</h1>`)

var alphabet = prompt("Question no. 4 \n Enter any Alphabet")

if(alphabet.toLocaleLowerCase()==="a" || alphabet.toLocaleLowerCase()==="e" || alphabet.toLocaleLowerCase()==="i" || 
    alphabet.toLocaleLowerCase()==="o" || alphabet.toLocaleLowerCase()==="u" ){remarks= `${alphabet} is a Vowel`}
    else{remarks= `${alphabet} is a consonant`}

document.write(`Answer = <h2> ${remarks} </h2>`)

//q#5

var password = "admin123"
var userpassword= prompt("Question no.5 \n Enter your password")

if(password===userpassword){remarks="Bingo! your password is correct"}
else if (userpassword===""){remarks="Please enter a password"}
else{remarks="Your Password is incorrect"}

alert(remarks)

//q#6

var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";}
else{
greeting = "Good evening";
}

//q # 7

document.write(`<h1> Question no. 7 <br/> Time Conversion</h1>`)

var inputTime= prompt("Question no. 7 \n Enter the time you want to convert")

if(inputTime === "0000" ){remarks="The Time is 12:00 am"}
else if(inputTime === "0100" ){remarks="The Time is 1:00 am"}
else if(inputTime === "0200" ){remarks="The Time is 2:00 am"}
else if(inputTime === "0300" ){remarks="The Time is 3:00 am"}
else if(inputTime === "0400" ){remarks="The Time is 4:00 am"}
else if(inputTime === "0500" ){remarks="The Time is 5:00 am"}
else if(inputTime === "0600" ){remarks="The Time is 6:00 am"}
else if(inputTime === "0700" ){remarks="The Time is 7:00 am"}
else if(inputTime === "0800" ){remarks="The Time is 8:00 am"}
else if(inputTime === "0900" ){remarks="The Time is 9:00 am"}
else if(inputTime === "1000" ){remarks="The Time is 10:00 am"}
else if(inputTime === "1100" ){remarks="The Time is 11:00 am"}
else if(inputTime === "1200" ){remarks="The Time is 12:00 am"}
else if(inputTime === "1300" ){remarks="The Time is 1:00 pm"}
else if(inputTime === "1400" ){remarks="The Time is 2:00 pm"}
else if(inputTime === "1500" ){remarks="The Time is 3:00 pm"}
else if(inputTime === "1600" ){remarks="The Time is 4:00 pm"}
else if(inputTime === "1700" ){remarks="The Time is 5:00 pm"}
else if(inputTime === "1800" ){remarks="The Time is 6:00 pm"}
else if(inputTime === "1900" ){remarks="The Time is 7:00 pm"}
else if(inputTime === "2000" ){remarks="The Time is 8:00 pm"}
else if(inputTime === "2100" ){remarks="The Time is 9:00 pm"}
else if(inputTime === "2200" ){remarks="The Time is 10:00 pm"}
else if(inputTime === "2300" ){remarks="The Time is 11:00 pm"}
else{remarks= "Enter the correct time"}

document.write(`Answer = <h2> ${remarks} </h2>`)

