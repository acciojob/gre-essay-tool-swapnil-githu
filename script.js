//your code here
function renderText(doc, text) {
    doc.innerText = text;
}

function handleWord(text) {
    const textArr = text.split(" ");
    let coutWord = 0;

    for(word of textArr) {
        if(/[a-z A-Z 0-9]/.test(word)) {
            coutWord += 1;
        }
    }

    return coutWord;      

}

function handlechar(text) {
   return text.length;     
}

function init() {
    var textArea = document.querySelector('textarea')
    //const charDOM = document.querySelector('#charNum')
    var wordNum = document.querySelector('#wordNum')

    
    textArea.addEventListener("input",event=> {
        const text = event.target.value.trim();
        
        // get word count and char count and render them
        renderText(wordNum, handleWord(text));
       // renderText(charDOM, handleChar(text));       

    });
}

init();