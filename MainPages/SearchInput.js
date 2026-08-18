let listMap = new Map();
let sortedMap = new Map();



Array.from(SearchInputVacuum.children).forEach((li, index) => {
	listMap.set(
		li.querySelector("a").getAttribute("href"),
		li.textContent
			.replaceAll("\n", "")
			.replaceAll("\t", "")
	);
});

listMap.delete(Array.from(listMap.keys()).pop());


sortingSetting.value = "alphabeticalLength";



function sort(searchToggle){
	let type = sortingSetting.value;
	SearchInputVacuum.innerHTML = "";
	if(searchToggle){
		console.log("HE");
		search();
	}
	if(type == "alphabetical"){
		sortedMap = new Map( [...listMap.entries()].sort((a, b) => a[1].localeCompare(b[1])));
	} else if(type == "length"){
		sortedMap = new Map( [...listMap.entries()].sort((a, b) => a[1].length - b[1].length));
	} else if(type == "alphabeticalLength"){
		sortedMap = new Map( [...listMap.entries()].sort((a, b) => {
			const alphabetOrder = a[1][0].localeCompare(b[1][0]);
			if(alphabetOrder !== 0){
				return alphabetOrder;
			}
			
			return a[1].length - b[1].length;
		}));
	} else {
        sortedMap = new Map(listMap);
    }
	

	sortedMap.forEach( (value, key) => {
		const li = document.createElement("li");
		const a = document.createElement("a");
	
		a.textContent = value;
		a.href = key;
	
		li.appendChild(a);
		SearchInputVacuum.appendChild(li);
	});
	
	const li = document.createElement("li");
	const a = document.createElement("a");
	
	a.textContent = "Back to Main Page";
	a.href = "../MainPages/Lightweb%20MainPage.html";
	li.appendChild(a);
	SearchInputVacuum.appendChild(li);
	
	
}

sort(false);

function search(){
	let searchTerm = searchInput.value;
    let visibleCount = 0;
    document.querySelectorAll('#SearchInputVacuum li').forEach((li) => {
		const text = li.textContent;
		const isVisible = text.includes(searchTerm);
		li.style.display = isVisible ? '' : 'none';
		if (isVisible) visibleCount++;
    });	

    noArticles.style.display = visibleCount === 0 ? 'block' : 'none';
}

searchInput.addEventListener('input', search);
sortingSetting.addEventListener("change", () => sort(true));
sortingSetting.addEventListener('change', search);