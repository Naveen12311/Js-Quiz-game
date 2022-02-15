let data = {
    allquestions:[
        {
            num : 'question1',
            id:1,
            question : 'Who is BATMAN',
            answer: 'Bruce Whyne',
            options:['Clark Kent','Bruce Whyne','Wonder Women','Naveen']
        },

        {
            num : 'question2',
            id:2,
            question : 'Who is Superman',
            answer: 'Clark Kent',
            options:['Clark Kent','Bruce Whyne','Wonder Women','Naveen']
        },

        {
            num : 'question3',
            id:3,
            question : 'Who is Hero  in  Pokemon',
            answer: 'Ash',
            options:['jackson','Willy','Ash','Naveen']
        },

        {
            num : 'question4',
            id:4,
            question : 'Who is Spiderman',
            answer: 'Peter Parker',
            options:['Jill','Peter Parker','Rally','Jack']
        },

        {
            num : 'question5',
            id:5,
            question : 'Who is IronMan',
            answer: 'Tony Stark',
            options:['Charles','Wikky','Tony Stark','Naveen']
        },

        {
            num : 'question6',
            id:6,
            question : 'Whos kingdom is Asgard',
            answer: 'Thor',
            options:['HeMan','Aquaman','ShaktiMan','Thor']
        },

        {
            num : 'question7',
            id:7,
            question : 'Whos Kingdom is Atlantis',
            answer: 'AquaMan',
            options:['Clark Kent','AquaMan','Wonder Women','Naveen']
        },

        {
            num : 'question8',
            id:8,
            question : 'Who is Hero of  Dragon ball Z',
            answer: 'Goku',
            options:['Gohan','Goku','Freiza','Vegeta']
        },

        {
            num : 'question9',
            id:9,
            question : 'Who is Fatest Man Alive',
            answer: 'Flash',
            options:['Captain America','Flash','Wonder Women','Naveen']
        },

        {
            num : 'question10',
            id:10,
            question : 'Who kills Joker',
            answer: 'Clark Kent',
            options:['Clark Kent','Bruce Whyne','Wonder Women','Naveen']
        },

        {
            num : 'question11',
            id:11,
            question : 'Who is Toms greatest enemy',
            answer: 'Jerry',
            options:['Naruto','Jerry','Woldmart','HeMan']
        },

        {
            num : 'question12',
            id:12,
            question : 'Who is Marvel Greatest enemy',
            answer: 'Thanos',
            options:['Thanos','Thor','Wonder Women','Dr.Strange']
        },

        {
            num : 'question13',
            id:13,
            question : 'Who is BATMAN',
            answer: 'Bruce Whyne',
            options:['Clark Kent','Bruce Whyne','Wonder Women','Naveen']
        },

        {
            num : 'question14',
            id:14,
            question : 'Who is BATMAN',
            answer: 'Bruce Whyne',
            options:['Clark Kent','Bruce Whyne','Wonder Women','Naveen']
        },

        {
            num : 'question15',
            id:15,
            question : 'Who is BATMAN',
            answer: 'Bruce Whyne',
            options:['Clark Kent','Bruce Whyne','Wonder Women','Naveen']
        },

        {
            num : 'question16',
            id:16,
            question : 'Who is BATMAN',
            answer: 'Bruce Whyne',
            options:['Clark Kent','Bruce Whyne','Wonder Women','Naveen']
        },

        {
            num : 'question17',
            id:17,
            question : 'Who is BATMAN',
            answer: 'Bruce Whyne',
            options:['Clark Kent','Bruce Whyne','Wonder Women','Naveen']
        },

        {
            num : 'question18',
            id:18,
            question : 'Who is BATMAN',
            answer: 'Bruce Whyne',
            options:['Clark Kent','Bruce Whyne','Wonder Women','Naveen']
        },

        {
            num : 'question19',
            id:19,
            question : 'Who is BATMAN',
            answer: 'Bruce Whyne',
            options:['Clark Kent','Bruce Whyne','Wonder Women','Naveen']
        },

        {
            num : 'question20',
            id:20,
            question : 'Who is BATMAN',
            answer: 'Bruce Whyne',
            options:['Clark Kent','Bruce Whyne','Wonder Women','Naveen']
        },
        
    ]
}
let count=0;
let answers=[];
for(let i=0;i<5;i++){
    let random = Math.trunc(Math.random()*19) + 1;
    let quest = data.allquestions[random];
    [a,b,c,d] = quest.options
   answers.unshift(quest.answer);
    let html = `
    <div class="questions">${quest.question}</div>
    <div class="alloptions"><input class="options" name="radio${count}" type="radio"> <span class="ans">${a}</span>
    <input class="options" name="radio${count}" type="radio"> <span class="ans">${b}</span>
    <input class="options" name="radio${count}" type="radio"><span class="ans">${c}</span>
    <input class="options" name="radio${count}" type="radio"> <span class="ans">${d}</span>
    </div>
    `;
    count++;
    document.querySelector('#body').insertAdjacentHTML('afterbegin',html);
}
let ans = 0;
let result = 0;
function submit(){
    for(let i=0;i<document.querySelectorAll('.options').length;i++){
    let all = document.querySelectorAll('.options')[i].checked
    if(all == true){
        console.log(document.querySelectorAll('.ans')[i].innerHTML,answers[ans])
           if(document.querySelectorAll('.ans')[i].innerHTML  == answers[ans])
           {
               console.log('correct')
               result++;
               
           } else{
               console.log('not correct')
           }
           ans++;
    }
}

document.querySelector('#body').style.opacity = 0;
document.querySelector('#score').innerHTML = `${result} / 5`
document.querySelector('#res').style.display = 'block';
}




document.querySelector('#submit').addEventListener('click',submit)
