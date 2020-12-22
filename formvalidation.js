
  function f1()
{
	alert("hello ")
}                            
								/******************************* NAME VALIDATION *****************************************/
function userName(use) {

	//var username=document.getElementById("User").value;
	var username;
		alert("in userbane"+username);
	// body...
	var name=/^[A-Za-z]+$/;
	if(username.match(name)) 
	{
		//alert("correct username");
		return true;
	}
	else
	{
		//alert("User name must be Alphalbet only");
		
		//document.getElementById("User").focus();
		document.getElementById("User").style.borderColor ="red";
		document.getElementById("User").focus();
		alert("in else");
		return false;
	}

}
                                   /******************************* USER_ID VALIDATION *****************************************/

function userId(){

	var n=document.getElementById("txtuserId").value;
	//alert(n);
	
if (n.length>=5&&n.length<=12)
	{
		//alert("correct userid");
		return true;
	}
	else
	{
		alert("User Id must be between 5-12 character");
		return false;
	}
}

                                   /******************************* PASSWORD VALIDATION *****************************************/
function Password(paswrd){
	//var x=paswrd.value;       while using name  
	//alert(x);
	var x=
	var x=document.getElementByName("txtpassword").value;
	if(x.length>=7&&x.length<=12)
	{
		//alert("corret password");
		return true;
	}
	else
	{
		alert("password must contain Alphalbet,special symbol,digit and 7 to 12 character long");
		return false;
	}

}
                                     /******************************* ADDRESS VALIDATION *****************************************/
function addressValidation(){
	//alert("address");
	var address=document.getElementById("txtaddress").value;
	var add=/[A-Za-z0-9]/g;
	if (address.match(add)) 
	{
		//alert("corrct address");
		return true;
	}
	else{
		alert("address should be alphanumeric");
		return false;
	}
}
 										/******************************* COUNTRY VALIDATION *****************************************/
function country(count){
	//alert("country Validation");
	if(count.value=="Default")
	{
		alert("Select your country from the list");
		return false;
	}
	else{
		//alert("correct");
		return true;
	}
}



 										
 										 /******************************* ZIP CODE VALIDATION *****************************************/
 function zipCode(){
 	//alert(" zipCode");
 	var code=document.getElementById("txtzipcode").value;
 	var zcode=/^[0-9]+$/;
 	if (code.match(zcode)) 
 	{
 		//alert("correct  zipCode");
 		return true;
 	}
 	else
 	{
 		alert(" zipCode mustbe numeric");
 		return false;
 	}
 }
 										/******************************* EMAIL VALIDATION *****************************************/
  //function email(mail){
 	//alert("emailValidation");
 	/*var e=mail.value;
 	if(e.indexOf(@)==0||e.indexOf(.)==0)                                 sex validation is not working
 	{
 		alert("wrong");
 		return false;
 	}*/
 //}
 										/******************************* SEX VALIDATION *****************************************/

function sexValidation(mgender,fgender){
	
	x=0;
	if(x==0)
	{
		alert("Please select gender");
		return false;
	}
	else
	{
		//alert("gender selected");
		return true;
	}
}