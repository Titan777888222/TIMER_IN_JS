

let timer = () => {
	let seconds = 0;
	let minutes = 0;
	let hours = 0;
	
	const secondsInsertCode = document.getElementById("seconds"); 
	const minutesInsertCode = document.getElementById("minutes");
	const hoursInsertCode = document.getElementById("hours");
	
	let time = () => {
		
		if( seconds < 59 ) {
			
			seconds++
			
		} else {
			
			seconds = 0;
			minutes++;
		}
		if( minutes >= 60 ) {
			
			minutes = 0;
			hours++;
		}
		
		secondsInsertCode.innerText =  (seconds < 10 ? 0 + `${seconds}` : `${seconds}`) + ' s';
		minutesInsertCode.innerText = (minutes < 10 ? 0 + `${minutes}` : `${minutes}`) + ' m';
		hoursInsertCode.innerText = (hours < 10 ? 0 + `${hours}` : `${hours}`) + ' h';
		
	}
	
	setInterval( time, 1000);
}

timer();
  
