const generateBtn = document.getElementById("generateBtn");
const gibberish = "abcdefghijklmnopqrstuvwxyz";


function generateRandomLink(){
	let domain = "";
	let length = Math.floor(Math.random() * 12) + 6;
	for(let j = 0; j < length; j++){
		domain += gibberish.charAt(Math.floor(Math.random() * gibberish.length));
	}
	return `https://www.${domain}.com`;
}


async function testLink(url){
	try {
		const response = await fetch(url, { method: 'HEAD', mode: 'no-cors' });
		return true;
	} catch(error){
		return false;
	}
}


generateBtn.addEventListener('click', async () => {
	let randomLinkResult = generateRandomLink();
	let reachable = await testLink(randomLinkResult);

	while(!reachable){
		randomLinkResult = generateRandomLink();
		reachable = await testLink(randomLinkResult);
	}
	
	
	window.location = randomLinkResult;
	

});

