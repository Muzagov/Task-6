function findTheRemainder(number) {
  let num = number % 2;
  if (num === 0) {
   console.log('число четное');
  } else {
  	console.log('число нечетное')
  }
}


function compareNumbers(a, b, c) {
    if (a > b) {
    	if (a > c) {
    		console.log(a);
    	} else {
    		console.log(c);
    	}
      } else if (c > b) {
    		console.log(c);
      } else {
    		console.log(b);
    	}
    }



function dayOfTheWeek(day) {
	switch(day) {
		case 1:
			console.log ("Оршот")
			break;
		
		case 2: 
			console.log ("Шинара")
			break;
		
		case 3: 
			console.log ("Кхаара")
			break;
		
		case 4: 
			console.log ("Еара")
			break;
		
		case 5: 
			console.log ("П1ераска")
			break;
		
		case 6: 
			console.log ("Шот")
			break;
		
		case 7: 
			console.log ("К1иран де")
			break;
		
		default: 
		console.log ("Кхин денош дац")
		
  	}
}