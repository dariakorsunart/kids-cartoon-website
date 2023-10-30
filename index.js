const searchInput = document.querySelector("#search");
console.log(searchInput);
const divsCartoon = document.querySelectorAll(".cartoon");
console.log(divsCartoon);

searchInput.addEventListener("keyup",function(event){
    const word = event.target.value.toLowerCase();

    divsCartoon.forEach(item=>{
    item.querySelector("p").textContent.toLowerCase().includes(word) ? (item.style.display="block") : (item.style.display="none");
})

})