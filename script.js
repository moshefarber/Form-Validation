document.getElementById('Submit').onclick=function(){
	var formInfo = document.getElementById('validate')
		var userName = formInfo.elements[0].value;
		var email = formInfo.elements[1].value;
		var password = formInfo.elements[2].value;
		
		if(password!='12345678'){
			alert("invalid password");
		}
	

		console.log(userName);
		if(!hasNumber(userName)){
			alert("invalid username");
		}
		return false;
}
	function hasNumber(n){
		var i = 0;
		while(i<n.length){
			if(checkForNum(n.charAt(i))) return true;
			i++;
		}
		return false;
	}

	 console.log("Success")

	 function checkForNum(n){
	 	return !isNan(parseFloat(n)) && isFinite(n);
	 }