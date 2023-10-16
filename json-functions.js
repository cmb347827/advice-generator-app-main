function getJson(url,displaywhere,callback) {
	 const xhr = new XMLHttpRequest();
     xhr.onreadystatechange = () => {
       if (xhr.readyState === XMLHttpRequest.DONE) {
		 //parse returned string into a JavaScript object 
         const data = JSON.parse(xhr.responseText);
         callback(data,displayWhere);
       }
     };
     xhr.open('GET', url, true);
     xhr.setRequestHeader('Accept', 'application/json');
     xhr.send(null);
	 
}

function displayAdvice(data,displayWhere){
	
	for(const key in data) {
       if(data.hasOwnProperty(key) && (key==='slip'||key==='slips')) {
		  if(key==='slips'){
			 Object.values(data[key]).forEach((entry) => {
				 document.querySelector(displayWhere[0]).textContent=`${entry.id}`;
		         document.querySelector(displayWhere[1]).textContent=`" ${entry.advice}"`;
			 });
		  }else{
             const value = data[key];
             document.querySelector(displayWhere[0]).textContent=`${value.id}`;
		     document.querySelector(displayWhere[1]).textContent=`" ${value.advice}"`;
		  }
       }
    }
	
}