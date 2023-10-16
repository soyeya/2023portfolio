
// lock_page

let today = new Date();
console.log(today);

const dates = today.getDate();
const month = today.getMonth()+1;

console.log(dates);
console.log(month);

let cont1 = 0;
let month_plus = [cont1] + [month];
let dates_plus = [cont1] + [dates];


if( dates > 9 ){

    dates_plus = dates;

}

if( month > 9){

    month_plus = month;

}

let result_today = [month_plus] + [dates_plus];
console.log(result_today);
// console.log(String(result_today)); //문자열로 반환

let numberBtn = document.querySelectorAll('.lockNum li p');
let numBox = document.querySelector(".pushNum");


let getBtn = [];
let contentBox = [];
let deleteBtn = document.querySelector(".delete");

function clickLimit(){

    if(contentBox.length > 3){
    
        contentBox = [];
        closeLock();

        setTimeout( () => {

            numBox.textContent = '';

        },300)

     }
}

function clickStart(){

    for(let i = 0; i < 10; i++){

        getBtn[i] = document.getElementById(i);
    
        if(i === 0){

            getBtn[i].addEventListener("click" , () => {
    
                contentBox.push('0');
                const result = contentBox.join('');
                numBox.textContent = result;
                console.log(contentBox);
    
                clickLimit();
    
            })
         }
         else if(i === 1){
    
            getBtn[i].addEventListener("click" , () => {
    
                contentBox.push('1');
                const result = contentBox.join('');
                numBox.textContent = result;
                console.log(contentBox);

                clickLimit();
               
            })
         }
         else if(i === 2){
    
            getBtn[i].addEventListener("click" , () => {
    
                contentBox.push('2');
                const result = contentBox.join('');
                numBox.textContent = result;
                console.log(contentBox);

                clickLimit();
               
            })
         }
         else if(i === 3){
    
            getBtn[i].addEventListener("click" , () => {
    
                contentBox.push('3');
                const result = contentBox.join('');
                numBox.textContent = result;
                console.log(contentBox);

                clickLimit();
               
            })
         }
         else if(i === 4){
    
            getBtn[i].addEventListener("click" , () => {
    
                contentBox.push('4');
                const result = contentBox.join('');
                numBox.textContent = result;
                console.log(contentBox);

                clickLimit();
               
            })
         }
         else if(i === 5){
    
            getBtn[i].addEventListener("click" , () => {
    
                contentBox.push('5');
                const result = contentBox.join('');
                numBox.textContent = result;
                console.log(contentBox);

                clickLimit();
               
            })
         }
         else if(i === 6){
    
            getBtn[i].addEventListener("click" , () => {
    
                contentBox.push("6");
                const result = contentBox.join('');
                numBox.textContent = result;
                console.log(contentBox);

                clickLimit();
               
            })
         }
         else if(i === 7){
    
            getBtn[i].addEventListener("click" , () => {
    
                contentBox.push('7');
                const result = contentBox.join('');
                numBox.textContent = result;
                console.log(contentBox);

                clickLimit();
               
            })
         }
         else if(i === 8){
    
            getBtn[i].addEventListener("click" , () => {
    
                contentBox.push('8');
                const result = contentBox.join('');
                numBox.textContent = result;
                console.log(contentBox);

                clickLimit();
               
            })
         }
         else if(i === 9){
    
            getBtn[i].addEventListener("click" , () => {
    
                contentBox.push('9');
                const result = contentBox.join('');
                numBox.textContent = result;
                console.log(contentBox);

                clickLimit();
               
            })
         }else{

            alert ('숫자를 입력해주세요');
        }
    }

    deleteBox();
 

};

clickStart();

function deleteBox(){


    deleteBtn.addEventListener("click" , () => {
 
        contentBox.pop();
        const result = contentBox.join('');
        numBox.textContent = result;
        console.log(contentBox);
        console.log('delete');

        clickLimit();

    })
}

const lock_page = document.querySelector("#lock_page");
const lock_btn = document.querySelector(".lock");
const portfolioWrap = document.getElementById("portfolioWrap");

function closeLock(){

   console.log('작동중');

   var contentBox_Result = numBox.textContent;
   console.log(contentBox_Result);
   
   if(contentBox_Result == result_today){

          lock_page.classList.add("active");
          portfolioWrap.classList.add("open");

       }else{

        lock_page.classList.add("wrong");
        lock_btn.classList.add("wrong");

        setTimeout(() => {

            lock_page.classList.remove("wrong");
            lock_btn.classList.remove("wrong");

        },300)

       }

    }

/* open portfolio */

let gotoBtn = document.getElementById("gotoSkill");
const randomWrap = document.getElementById("randomBox");


gotoBtn.addEventListener("click" , () => {

    randomWrap.style.display = "flex";
    


});

/* randomBox */

let switchBtn = document.querySelector(".randomBtn");
let randomball = document.querySelectorAll(".randomBall");
let randomLink = document.getElementById("randomTxt")
let switchClose = document.querySelector(".switchClose");

const webBtn = document.getElementById("Web");
const reaBtn = document.getElementById("Rea");
const jsBtn = document.getElementById("JS");

let letterCont = [

    ["#Web", "Website"],
    ["#Rea", "React"],
    ["#JS" , "Javascript"]
]
console.log(letterCont.length); //3

let randomarry = [];
console.log(randomarry);


function randomBox(){


    let random = Math.floor(Math.random() * letterCont.length);
    console.log(random);
    var random_arry = randomLink.innerHTML = letterCont[random][1];
    randomLink.setAttribute("href" , letterCont[random][0]);

        setTimeout(()=>{
    
            randomLink.classList.add(letterCont[random][1]);

        },500)

    if(randomarry.indexOf(random) === -1){

        var random_arry = randomLink.innerHTML = letterCont[random][1];
        randomLink.setAttribute("href" , letterCont[random][0]);
        randomarry.push(random);
        console.log(randomarry);

    }else{
     

}

};


const sliderWrap = document.getElementById("sliderWrap");
const webSitePage = document.querySelector(".Website");
const reactPage = document.querySelector(".React");
const javaPage = document.querySelector(".Javascript");

function sliderBox(){

    randomLink.classList.remove("Website");
    randomLink.classList.remove("React");
    randomLink.classList.remove("Javascript");

    randomLink.addEventListener("click" , function(){

    
        if(randomLink.classList.contains("Website")){

            webBtn.classList.add("open");
            reaBtn.classList.remove("open");
            jsBtn.classList.remove("open");
            console.log('website작동');
        }
        else if(randomLink.classList.contains("React")){

            reaBtn.classList.add("open");
            webBtn.classList.remove("open");
            jsBtn.classList.remove("open");
            console.log('react작동');
           }

       else if(randomLink.classList.contains("Javascript")){

        jsBtn.classList.add("open");
        webBtn.classList.remove("open");
        reaBtn.classList.remove("open");
        console.log('javascript작동');

       }else{

        webBtn.classList.remove("open");
        reaBtn.classList.remove("open");
        jsBtn.classList.remove("open");

       }


    });


    }
    const WebprevBtn = document.querySelector("#Web #arrowBox .prevBtn");
    const WebnextBtn = document.querySelector("#Web #arrowBox .nextBtn");
    const Webslide = document.querySelector("#Web .slider");

function WebstiePack(){

    WebprevBtn.addEventListener("click" , () => {

        console.log('prev click');
        let last = document.querySelector("#Web .slider li:first-child");

                Webslide.classList.add("prev");
    
            setTimeout(function(){

                Webslide.classList.remove("prev");
                Webslide.append(last);
                console.log('prev삭제');
    
            },800);
    
    
    });
    
    WebnextBtn.addEventListener("click", () => {
    
        console.log('next click');
        let first = document.querySelector("#Web .slider li:last-child");
         
                Webslide.classList.add("next");

    
            setTimeout(function(){
    
                    Webslide.classList.remove("next");
                    Webslide.prepend(first);
                    console.log('next삭제');

            },800);
    
    
    });

};
    
    
const ReactprevBtn = document.querySelector("#Rea #arrowBox .prevBtn");
const ReactnextBtn = document.querySelector("#Rea #arrowBox .nextBtn");
const Reactslide = document.querySelector("#Rea .slider");
    
function ReactPack(){
    
    ReactprevBtn.addEventListener("click" , () => {
        
        console.log('prev click');
        let last = document.querySelector("#Rea .slider li:first-child");


              Reactslide.classList.add("prev");
    
            setTimeout(function(){

                Reactslide.classList.remove("prev");
                Reactslide.append(last);
                console.log('prev삭제');
    
            },800);
    
    
    });
    
    ReactnextBtn.addEventListener("click", () => {
    
        console.log('next click');
        let first = document.querySelector("#Rea .slider li:last-child");
         
                 Reactslide.classList.add("next");

    
            setTimeout(function(){
    
                Reactslide.classList.remove("next");
                Reactslide.prepend(first);
                console.log('next삭제');

            },800);
    
    
    });

    };
    
    
    
    
const JsprevBtn = document.querySelector("#JS #arrowBox .prevBtn");
const JsnextBtn = document.querySelector("#JS #arrowBox .nextBtn");
const JSslide = document.querySelector("#JS .slider");

function JsPack(){
    
    JsprevBtn.addEventListener("click" , () => {

        console.log('prev click');
        let last = document.querySelector("#JS .slider li:first-child");


              JSslide.classList.add("prev");
    
            setTimeout(function(){

                JSslide.classList.remove("prev");
                JSslide.append(last);
                console.log('prev삭제');
    
            },800);
    
    
    });
    
    JsnextBtn.addEventListener("click", () => {
    
        console.log('next click');
        let first = document.querySelector("#JS .slider li:last-child");
         
                 JSslide.classList.add("next");

    
            setTimeout(function(){
    
                JSslide.classList.remove("next");
                JSslide.prepend(first);
                console.log('next삭제');

            },800);
    
    
    });
    
    };
    

function switchClick(){

    switchBtn.addEventListener("click" , () => {

       let skillName = document.querySelectorAll(".skillName");
        
        for(var i = 0; i < skillName.length; i++){

            skillName[i].textContent = ``;
            randomball[i].style.opacity = "100%";

        };

        switchBtn.classList.add("switchClose");
        switchBtn.innerHTML = ``;
        randomball[0].classList.add("moving");
        randomball[2].classList.add("moving");

    
        setTimeout(()=> {
    
            randomball[0].classList.add("close");
            randomball[2].classList.add("close");
            randomball[0].classList.remove("moving");
            randomball[2].classList.remove("moving");
            switchBtn.innerHTML = `Click Again`;
            randomBox();
            sliderBox(); 

    
        },1000);

        WebstiePack();
        ReactPack();
        JsPack();   

    });




}

switchClick();

    



