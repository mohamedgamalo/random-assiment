

let paragh = [
    "“It does not do to dwell on dreams and forget to live.”",
    "“It is our choices, Harry, that show what we truly are, far more than our abilities.",
    "“The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.”",
    "“Be yourself; everyone else is already taken.”",
    "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”"

];






// console.log(paragh[Math.floor(Math.random() * paragh.length)]);



let para = document.getElementById("paragh");

let button = document.getElementById("change-para");

button.addEventListener('click', ()=> {

    let paraindex = Math.floor(Math.random() * paragh.length);

    let content = para[paraindex];

    para.textContent = paragh[paraindex];
    
}

)