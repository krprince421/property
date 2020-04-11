
function validate(thisform){

var first=document.getElementById("first").value;
var last=document.getElementById("last").value;
var email=document.getElementById("email").value;
var pass=document.getElementById("pass").value;
var copass=document.getElementById("copass").value;
var tel=document.getElementById("tel").value;
if(first.trim()==""||first==null){
	alert("Please Enter Your Name!");
	return false;
}
if(last.trim()==""||last==null){
	alert("Please Fill Your Name Properly");
	return false;
}
if(email.trim()==""|| email==null){
	alert("Please Fill Your E-mail");
	return false;
}
if(tel.trim()=="" || tel==null){
	alert("Please Enter Your Contact Number");
	return false;
}
if(isNaN(tel)){
	alert("INVALD NUMBER(CONTACT NO SHOULD CONTAIN ONLY DIGIT)");
	return false;
}
if(tel.length<10){
	alert("Contact Number Should Not Be Less Than 10 Digit");
	return false;
}

if(pass.trim()==""||pass==null){
	alert("Please Fill Your Password Properly");
	return false;
}
if(copass.trim()==""||copass==null){
	alert("Please Fill Your Comfirm Password");
	return false;
}
if(pass!=copass){
	alert("Confirm Password Should Be Same As Password");
	return false;	
}
if(pass.length<7){
	alert("Password Length Should Be Greater Than 7 Digit");
	return false;
}

else{
	return true;
}

}
function myfunction(){
 var email1=document.getElementById("e-mail");
 var  pass1=document.getElementById("pass");
 if(e-mail1.trim()==""||e-mail1==null){
 	alert("PLEASE FILL YOUR E-MAIL");
 	return false;
 }
 if(pass1.trim()==""||pass1==null){
 	alert("PLEASE FILL YOUR PASSWORD");
 	return false;
 }


}
