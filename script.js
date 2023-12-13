function findLargest(a, b, c) {
  //your code here
	let l=0;
	if(a>=b && a>=c){
		l=a;
	} if(b>=a && b>=c){
		l=b;
	} else {
		l=c;
	}
	
	return l;
}

const num1 = parseInt(prompt("Enter First Number."));
const num2 = parseInt(prompt("Enter Second Number."));
const num3 = parseInt(prompt("Enter Third Number."));
alert(findLargest(num1, num2, num3));
