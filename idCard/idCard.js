function idCard(){
	var firstName = document.getElementById('firstName').value;
	var lastName = document.getElementById('lastName').value;
	var address = document.getElementById('address').value;
	var age = parseInt(document.getElementById('age').value);
	var phoneNumber = parseInt(document.getElementById('phoneNumber').value);
		
	document.getElementById('postFullName').innerHTML =  firstName+' '+lastName;
	document.getElementById('postAddress').innerHTML = address;
	
	var numberArray = [];
	numberArray.push(age);
	numberArray.push(phoneNumber);
		
	for(i=0;i<numberArray.length;i++){
		if(numberArray[0]<100){
			document.getElementById('postAge').innerHTML = 'Age: ' + age;
		}
		if(numberArray[1]>100){
			document.getElementById('postPhoneNumber').innerHTML = 'PhoneNumber: ' + phoneNumber;
		}
	}
	console.log(numberArray);
	
}