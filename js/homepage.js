function validate(){
var form1=document.getElementById("form1").value;
var form2=document.getElementById("form2").value;
var form3=document.getElementById("form3").value;
if(form1==101){
	alert("PLEASE SELECT LOCATION OR ENTER E-MAIL IN CASE OF SUBSCRIBE");
	return false;
}
if(form2==102){
	alert("PLEASE SELECT PROPERTY TYPE");
	return false;
}
if(form3==103){
	alert("PLEASE SELECT BUDGET");
	return false;
}


else{

	return true;
}
}

function myfunction(){
  var mail=document.getElementById("email01").value;
  if(mail.trim()==""||mail==null){
  	alert("PLEASE ENTER YOUR E-MAIL ADDRESS");
  	return false;
  }
  else{
  	return true;
  }


}
