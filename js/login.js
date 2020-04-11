function validate(){
   var email=document.getElementById("mail").value;
   var pass=document.getElementById("pass").value;

   if(email.trim()==""||email==null){
   	alert("PLEASE ENTER YOUR E-MAIL");
   	return false;
   }
   if(pass.trim()==""||pass==null){
   	alert("PLEASE ENTER YOUR PASSWORD");
   	return false;
   }
   if(pass.length<7){
   	alert("PASSWORD LENGTH SHOULD NOT BE LESS THAN 7");
   	return false;
   }

   else{
   	return true;
   }

}