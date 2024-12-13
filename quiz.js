let span = document.querySelector(".span");
let counter=10;
countdown();


function countdown(){
        span.innerText=counter;
        if(counter>0){
                counter--;
        }
        else if(counter<=0){
                document.querySelector("#next-btn").click();
                // counter="Time's Up!";
        }
        
setTimeout(countdown,1000);
}

let tick = document.querySelector(".tick");


let box1= document.querySelector(".btn1");
let box2= document.querySelector(".btn2");
let box3= document.querySelector(".btn3");
let box4= document.querySelector(".btn4");
let qus = document.querySelector("#question");
let parag= document.querySelector(".para");
let num=1;
let checkk=0;

let questions=[
        {
                title:"Question 1",
                question:"Inside which HTML element do we put the JavaScript?",
                key1:'scripting  <img class="cross" src="./cross.png">',
                key2:'script <img class="tick" src="./checkmark.png">',
                key3:'js  <img class="cross" src="./cross.png">',
                key4:'javascript  <img class="cross" src="./cross.png">',
                answer:'&ltscript&gt'
        },
        {
                title:"Question 2",
                question:"How do you write 'Hello World' in an alert box?",
                key1:'msg("Hello World"); <img  class="cross" src="./cross.png">',
                key2:'alert("Hello World"); <img class="tick" src="./checkmark.png">',
                key3:'alertBox("Hello World"); <img class="cross" src="./cross.png">',
                key4:'msgBox("Hello World"); <img  class="cross" src="./cross.png">',
                answer:'alert("Hello World");'
        },
        {
                title:"Question 3",
                question:"How to write an IF statement in JavaScript?",
                key1:'if i = 5 <img class="cross" src="./cross.png">',
                key2:'if(i==5) <img class="tick" src="./checkmark.png">',
                key3:'if i==5 then <img class="cross" src="./cross.png">',
                key4:'if i=5 then <img  class="cross" src="./cross.png">',
                answer:'if(i==5)'
        },
        {
                title:"Question 4",
                question:"How does a FOR loop start?",
                key1:'for i= 1 to 5 <img class="cross" src="./cross.png">',
                key2:'for(i=0;i<=5;i++) <img class="tick" src="./checkmark.png">',
                key3:'for(i=0;i<=5) <img class="cross" src="./cross.png">',
                key4:'for(i<=5;i++) <img class="cross" src="./cross.png">',
                answer:'for(i=0;i<=5;i++)'
        },
        {
                title:"Result",
                question:"Your Total Score Is",
                key1:'for i= 1 to 5 <img class="cross" src="./cross.png">',
                answer:''
                
        }
]


function wrong(val){
    let  btn = document.querySelector(`.${val}`);
    btn.classList.add("wrong");
    if(val=='btn1'){
        box2.disabled=true;
        box3.disabled=true;
        box4.disabled=true;
    }
    else if(val=='btn3'){
        box2.disabled=true;
        box1.disabled=true;
        box4.disabled=true;
    }
    else if(val=='btn4'){
        box2.disabled=true;
        box3.disabled=true;
        box1.disabled=true;
    }
    
}
function correct(val){
    checkk++;
    let  btn = document.querySelector(`.${val}`);
    btn.classList.add("correct");
    tick.style.display= "inline";
    if(val=='btn2'){
        box1.disabled=true;
        box3.disabled=true;
        box4.disabled=true;
    }
}
function track(){    
    qus.innerText= questions[num].title;
    parag.innerText= questions[num].question;
    box1.innerHTML= questions[num].key1;
    box2.innerHTML= questions[num].key2;
    box3.innerHTML= questions[num].key3;
    box4.innerHTML= questions[num].key4;
    box2.disabled=false;
    box3.disabled=false;
    box1.disabled=false;
    box4.disabled=false;
    
    box1.classList.remove("correct");
    box1.classList.remove("wrong");
    box2.classList.remove("correct");
    box2.classList.remove("wrong");
    box3.classList.remove("correct");
    box3.classList.remove("wrong");
    box4.classList.remove("correct");
    box4.classList.remove("wrong");
    if(num>=4){
//        span.style.display="none";
       document.querySelector(".quiz").innerHTML=`<h2>Result</h><h3>Score: ${checkk} out of 4</h3>
       <button class="playagain" onclick="playAgain()">Play Again</button>`; 
    }
  num++;
  
  counter=10;
}

function playAgain(){
        document.querySelector(".app").innerHTML=`<h1 class="heading">JavaScript Quiz <span class="span"></span></h1><hr>
        <div class="quiz one">
            <h2 id="question">Question 1</h2>
            <p class="para">Inside which HTML element do we put the JavaScript?</p>
            <div class="answer-btn">
                <button class="btn btn1" onclick="wrong('btn1')">&ltscripting&gt</button>
                <button class="btn btn2" onclick="correct('btn2')">&ltjs&gt<img class="tick" src="./checkmark.png"></button>
                <button class="btn btn3" onclick="wrong('btn3')">&ltscript&gt</button>
                <button class="btn btn4" onclick="wrong('btn4')">&ltjavascript&gt</button>
            </div>
            <button id="next-btn" onclick="track()">Next</button>`;
            document.querySelector("#playagain").style.display="none";
            checkk=0;
            counter=10;
}

// function selectAnswer(e){
//      const selectedbtn = e.target;
//      if(questions[0].key2){
//         selectedbtn.classList.add("correct");
//      }
//      else if(questions[1].key2){
//         selectedbtn.classList.add("correct");
//      }
//      else if(questions[2].key2){
//         selectedbtn.classList.add("correct");
//      }
//      else if(questions[3].key2){
//         selectedbtn.classList.add("correct");
//      }
//      else{
//         selectedbtn.classList.add("wrong");
//      }
// }
                      //New
// let  h2= document.querySelector(".hdques");
// let para = document.querySelector(".para");
// let btn1= document.querySelector(".btn1");
// let btn2= document.querySelector(".btn2");
// let btn3= document.querySelector(".btn3");
// let btn4= document.querySelector(".btn4");
// let btnnext= document.querySelector(".next");
// let num=1;
// let questionsobj= [
//         {
//           title:"Question 1",
//           question:"Inside which HTML element do we put the JavaScript?",
//           question1: '<scripting>',
//           question2: '<script>',
//           question3: '<js>',
//           question4: '<javascript>',
//           answer:  '<script>'
//         },
//         {
//           title:"Question 2",
//           question:"How do you write 'Hello World' in an alert box?",
//           question1: 'msg("Hello World")',
//           question2: 'msgBox("Hello World")',
//           question3: 'alertBox("Hello World")',
//           question4: 'alert("Hello World")',
//           answer: 'alert("Hello World")'
//         },
//         {
//           title:"Question 3",
//           question:"How to write an IF statement in JavaScript?",
//           question1: 'if(i==5) ',
//           question2: 'if i = 5',
//           question3: 'if i=5',
//           question4: 'if i==5',
//           answer: 'if(i==5) '
//         },
//         {
//           title:"Question 4",
//           question:"How does a FOR loop start?",
//           question1: 'for i= 1 to 5',
//           question2: 'for(i=0;i<=5;i++)',
//           question3: 'for(i<=5;i++',
//           question4: 'for(i=0;i<=5)',
//           answer: 'for(i=0;i<=5;i++)'
//         },
// ];

// function disable(e){
//      btn1.disabled=true;
//      btn2.disabled=true;
//      btn3.disabled=true;
//      btn4.disabled=true;
// if(e.innerText==questionsobj[0].answer){

// }

// }
// btn1.addEventListener("click",disable);
// btn2.addEventListener("click",disable);
// btn3.addEventListener("click",disable);
// btn4.addEventListener("click",disable);

// function nextques(){
//      btn1.disabled=false;
//      btn2.disabled=false;
//      btn3.disabled=false;
//      btn4.disabled=false;
//      h2.innerText= questionsobj[num].title;
//      para.innerText= questionsobj[num].question;
//   btn1.innerHTML= questionsobj[num].question1;
//   btn2.innerHTML= questionsobj[num].question2;
//   btn3.innerHTML= questionsobj[num].question3;
//   btn4.innerHTML= questionsobj[num].question4;

//   num++;
// }
// btnnext.addEventListener("click",nextques);