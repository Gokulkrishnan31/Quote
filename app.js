const quote = document.getElementById('quote');
const author =document.getElementById('author');

const apiurl = "https://api.quotable.io/random";

async function getquote(url){
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);

    quote.innerHTML=data.content;
    author.innerHTML = data.author;

}
getquote(apiurl);

// function tweet(){
//     window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "----by" + author.innerHTML,"tweet window","width=500, height=200");
// }

// function tweet(){
//    document.getElementById('quote').reset();
// }
// tweet();
