const container = document.getElementById("container");
const alleles1Input = document.getElementById("alleles1Input");
const alleles2Input = document.getElementById("alleles2Input");
const hybridSelection = document.getElementById("hybridSelection");
const generatePunnettSquareBtn = document.getElementById("generatePunnettSquareBtn");


generatePunnettSquareBtn.addEventListener("click", function(){
	let alleles1 = alleles1Input.value;
	let alleles2 = alleles2Input.value;
	
	alleles1 = alleles1.trim();
	alleles2 = alleles2.trim();
	
	if(alleles1.length <= 1 || alleles1.length % 2 != 0) return;
	if(alleles2.length <= 1 || alleles2.length % 2 != 0) return;

	const offspringDiv = document.createElement("div");

	let alleles1Split = alleles1.split('');
	let alleles2Split = alleles2.split('');
	
	let alleles1Split2 = [];
	let alleles2Split2 = [];
	
	let alleles1Split3 = [''];
    let alleles2Split3 = [''];
	

	for(let i = 0; i < alleles1Split.length; i += 2){
		alleles1Split2.push([alleles1Split[i], alleles1Split[i + 1] ]);
	};
	
	for(let i = 0; i < alleles2Split.length; i += 2){
		alleles2Split2.push([alleles2Split[i], alleles2Split[i + 1] ]);
	};


	
	alleles1Split2.forEach(pair => {
		let geneGroup1 = [];
		pair.forEach(allele => {
			alleles1Split3.forEach(g => {
				geneGroup1.push(g + allele)
			});
		});
		alleles1Split3 = geneGroup1;
	});
	
	alleles2Split2.forEach(pair => {
		let geneGroup1 = [];
		pair.forEach(allele => {
			alleles2Split3.forEach(g => {
				geneGroup1.push(g + allele)
			});
		});
		alleles2Split3 = geneGroup1;
	});

	
	
	container.innerHTML = "";

	const empty = document.createElement("div");
	empty.classList.add("alleleDisplay");
	container.appendChild(empty);
	
	container.style.gridTemplateColumns = `repeat(${alleles2Split3.length + 1}, 110px)`;
	

	
	alleles2Split3.forEach(el2 => {
		const offspringDiv1 = document.createElement("div");
		offspringDiv1.classList.add("alleleDisplay");
		offspringDiv1.textContent = el2.split('').sort().join('');
		container.appendChild(offspringDiv1);
	});
	

	alleles1Split3.forEach(el => {
		const offspringDiv2 = document.createElement("div");
		offspringDiv2.classList.add("alleleDisplay");
		offspringDiv2.textContent = el;
		container.appendChild(offspringDiv2);
	
		alleles2Split3.forEach(el2 => {
			const offspringDiv3 = document.createElement("div");
			offspringDiv3.classList.add("offspring");
			offspringDiv3.textContent = (el + el2).split('').sort().join('');
			container.appendChild(offspringDiv3);
		});
		
	});
	
	let r = 255;
	
	for(let i = 0; i < container.children.length; i++){
		if(container.children[i].classList.contains("offspring")){
			r -= 255 / container.children.length;
			container.children[i].style.backgroundColor = `rgb(${r}, ${255 - r}, ${255 - r})`;
			container.children[i].style.fontSize = (90 / (container.children[i].textContent.length / 1.3)) + "px";
			
			function sortCapitalAlphabet(a, b) {
				return a.toLowerCase().localeCompare(b.toLowerCase());
			}

			container.children[i].textContent = container.children[i].textContent.split('').sort(sortCapitalAlphabet).join('');
		}
	}
});

