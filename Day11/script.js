const heading = document.querySelector('.heading');
const progress = document.querySelector('.progress');
const question = document.querySelector('.question');
const options = document.querySelectorAll('.options');
const quesNo = document.querySelector('.ques-no');
const totalQues = document.querySelector('.total-ques');
console.log(options);
const button=document.querySelector('.btn');
const quiz = [
    {
		title: 'Most Popular Game In The World?',
		option1: 'Soccer',
		option2: 'Cricket',
		option3: 'Tennis',
		option4: 'Hockey',
		correctAns: 'Soccer',
	},
    {
		title: 'The Most Popular City In The World?',
		option1: 'Mumbai',
		option2: 'Paris',
		option3: 'Tokyo',
		option4: 'Bangkok',
		correctAns: 'Bangkok',
	},
    {
		title: 'What is the most popular country in the world?',
		option1: 'China',
		option2: 'USA',
		option3: 'France',
		option4: 'India',
		correctAns: 'France'
	}
];
let currentProgress = 100/(quiz.length);

function ques(quiz,n) {
    question.innerHTML = `${n}. ${quiz.title}`;
    options[0].innerHTML = quiz.option1;
    options[1].innerHTML = quiz.option2;
    options[2].innerHTML = quiz.option3;
    options[3].innerHTML = quiz.option4;

    options[0].className = 'options';
	options[1].className = 'options';
	options[2].className = 'options';
	options[3].className = 'options';

    quesNo.innerHTML=n;
	progress.style.width = `${currentProgress}%`;
}
ques(quiz[0],1);
let c=0;
let clicked=false;
options.forEach(option => {
    option.addEventListener('click',(e) =>{
        if(!clicked)
        {
        clicked = true;
        console.log(c);
        const cuQ=quiz[c]
        if(e.target.innerHTML===cuQ.correctAns) {
            e.target.classList.add('correct');
        }
        else {
            e.target.classList.add('wrong');
        }
        options.forEach(option => {
            if (option.innerText === cuQ.correctAns) {
                option.classList.add('correct');
            }});
        }
    })
})
button.addEventListener('click' , (e) => {
    clicked = false;
    if(c===quiz.length)
    {
        return;
    }
    currentProgress=currentProgress+100/(quiz.length);
    c++;
    ques(quiz[c],c+1);
});
