// let div=document.querySelector('.box');

const box=document.querySelector('.box');
const bs = document.querySelector('#booked-seats > span');
const rs = document.querySelector('#remaining-seats > span');
function innerBox()
{
    let div=document.createElement('div');
    div.style.height= '90px';
    div.style.width= '180px';
    div.style.border= '5px solid #ADD8E6';
    div.style.backgroundColor= 'blue'
    div.className= 'inner-box';
    return div;
}
for(let i=0;i<36;i++)
{
    box.appendChild(innerBox());
}
var seats=0;
var remaning=36;
// box.addEventListener('mouseover', (e) => {
//     e.target.style.backgroundColor='#1f75fe';
// });
// box.addEventListener('mouseout', (e) => {
//     e.target.style.backgroundColor='blue';
// });
box.addEventListener('click', (e) => {
    let color=e.target.style.backgroundColor;
    if(color==='blue')
    {
        seats++;
        remaning--;
        e.target.style.backgroundColor='black';
    }
    else{
        seats--;
        remaning++;
        e.target.style.backgroundColor='blue';
    }
    bs.innerText = seats;
	rs.innerText = remaning;
})