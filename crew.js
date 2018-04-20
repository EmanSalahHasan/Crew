var number = document.getElementById("number").value;


var splitedNumbersArray = number.toString().split("");

var firstNumber = splitedNumbersArray[0];

var secondNumber = splitedNumbersArray[1];

var thirdNumber = splitedNumbersArray [2];

var digits = [
    firstNumber, secondNumber, thirdNumber
];


console.log(digits);



for( i=0; i<= digits.length;  i++ ){
	
	
    function isEven(){
	  if( digits[0]% 2== 0){
		console.log(digits[0] + " is Even , congratulations !");
	  }else{
		console.log(digits[0]+" is not Even Sorry");
		console.log(digits[0]-1);
	}


}
isEven();
};
