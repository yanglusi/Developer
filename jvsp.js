// JavaScript
// isEven() to check if a single number is even

function isEven(num){
	return num % 2 === 0;
}

// Python 
def isEven(num):
	return num % 2 == 0

// JavaScript
// factorial() takes a single number and 
// returns the factorial of that number

// Version 1 

function factorial(num){
	var result = 1;
	for (var i = 2; i <= num; i++){
		result *= i;
	}
	return result;
}

// Version 2 

function factorial(num){
	var result = 1;
	while (num  >= 1) {
		result *= num
		num = num - 1
}
return result;
}

// Python

// Version 1

def factorial(num):
    result = 1
    for i in range(1, num+1):
        result *= i
    return result

// Version 2
def factorial(num):
    result = 1
    while num >= 1:
        result *= num
        num = num - 1
    return result

// JavaScript 
// Replace "-" with "_"s in a phrase 

function kebabToSnake(str){
	var newStr = str.replace(/-/g, "_")
	return newStr;
}

// Python 
def kebabToSnake(str):
 newStr = str.replace("-", "_")
