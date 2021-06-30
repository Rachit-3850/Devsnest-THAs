let input=document.querySelector('.inp');
let button=document.querySelector('.btn');
let list=document.querySelector('.list');
// console.log(input);
button.addEventListener("click", doTask);
var space="       ";
var c=0;
function doTask() {
    c++;
    if(c>=12)
    {
        list.style.height = 'auto';
    }
    else
    {
        list.style.height = '500px';
    }
    console.log(c);
    let material=input.value;
    if(material==="")
    {
        return;
    }
    input.value="";
    var btn=document.createElement('button');
    let para=document.createElement('p');
    para.classList.add("todo")
    let text=document.createTextNode(space+material);
    btn.classList.add("cross");
    para.appendChild(btn);
    para.appendChild(text);
    list.appendChild(para);
    btn.innerHTML = "X";
    btn.addEventListener("click", Delete);
}
function Delete(e) {
    e.target.parentElement.remove();
}
