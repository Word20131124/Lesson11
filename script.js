const bgcolor = document.getElementById('div');
const color = document.getElementById('p')
const bgdiv = prompt('enter body backgroundColor');
const textcolor = prompt('enter text colar');
if(textcolor){
    document.body.style.color = textcolor; 
}
if(bgdiv){
    document.body.style.backgroundColor = bgdiv; 
}