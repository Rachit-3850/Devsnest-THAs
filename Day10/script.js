const cards = document.querySelectorAll(".card");
const container =document.querySelector(".box");
const bo=document.querySelector('body');
let hasFlipCard = false;
let firstCard, secondCard;
let count=0;
function flipCard() {
  if(this === firstCard) return;
  this.classList.add("flip");
  if(!hasFlipCard)
  {//first Click
      hasFlipCard=true;
      firstCard=this;
      console.log(firstCard);
  }
  else
  {
    // this.classList.remove("flip");
    hasFlipCard =false;
    secondCard = this;
    checkIt();
  }
  if(count === 12)
  {
    setTimeout(() =>{
      const div=document.createElement('div')
      div.className='win';
      div.innerHTML='YOU WIN!';
      bo.appendChild(div);
    },2000)

  }
}
function checkIt() {
  if(firstCard.dataset.image === secondCard.dataset.image) {
    success();
  }
  else {
    fail();
  }
}
function success() {
  // console.log("success");
  setTimeout(() =>{
  firstCard.removeEventListener('click',flipCard);
  secondCard.removeEventListener('click',flipCard);
  firstCard.classList.add('hide');
  secondCard.classList.add('hide');
  reset();},1000);
  count=count+2;
}
function fail() {
  // console.log("fail");
  setTimeout(()=> {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    reset();
  },1000);
}
function reset() {
  hasFlipCard=false;
  firstCard=null;
  secondCard=null;
}

cards.forEach(card => card.addEventListener('click',flipCard));
(function shuffle() {
  cards.forEach((card) => {
    var index =Math.floor(Math.random() * 12)
    card.style.order= index;
  });
})()
