const URL = "https://cat-fact.herokuapp.com/facts"
const factPara = document.querySelector("#fact");
const btnPara = document.querySelector("#btn");


const getFacts = async () =>{
    console.log("Getting data.....");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    factPara.innerText = data[2].text;
}

getFacts();

btnPara.addEventListener("click",getFacts());
