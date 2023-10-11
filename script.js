let openList = document.querySelector(".closebtn");
let linkList = document.getElementById('links');


openList.addEventListener('click', function(){
	linkList.classList.toggle("show-links");
	console.log('click')
})





