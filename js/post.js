function validate(thisform){
	var name=document.getElementById("name").value;
	var tel=document.getElementById("tel").value;
  var personal=document.getElementById("personal").value;
  var property=document.getElementById("property").value;
  var location=document.getElementById("location").value;
  var type=document.getElementById("type").value;
  if(name.trim()==""|| name==null){
  	alert("Please Enter Your Name");
  	return false;
  }
if(tel.trim()==""||tel.trim==null){
	alert("Please Fill Your Contact Number");
	return false;
}
if(tel.length<10){
	alert("Contact Number Should Not Be Less Than 10 digit");
	return false;
}
if(isNaN(tel)){
	alert("INVALID NUMBER(CONTACT NUMBER SHOULD CONTAIND ONLY DIGIT)");
	return false;
}
  if(personal.trim()=="" || personal==0){
  	alert("Please Choose Personal Detail");
  	return false;
  }
 if(property==0){
 	alert("Choose Property Details");
 	
 	return false;
 }
 if(type==0){
 		alert("Please Select Property Type");
 		return false;
 	}

 if(location==0){
 	alert("Please Choose Location");
 	return false;
 }

  else{
  	return true;
  }


}