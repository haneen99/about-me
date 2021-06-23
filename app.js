'use strict';
let username = prompt("what's your name?");
alert("welcome " + username);

let age=prompt("is my age 23").toLowerCase();
if (age=="yes"){alert("un correct")
//console.log("un correct")
}
else if (age=="no"){alert("that's correct");
//console.log("that's correct")
}
let food=prompt("is my favourite food is pizza" ).toLowerCase();
if (food=="yes"){alert("correct")
//console.log("correct")
}
else if (food=="no"){alert("that's un correct");
//console.log("that's un correct")
}
let color=prompt("is my favourite color black" ).toLowerCase();
if (color=="no"){alert("correct")
//console.log("correct")
}
else if (color=="yes"){alert("that's un correct");
//console.log("that's un correct")
}
let nationality=prompt("is my nationality palestanine" ).toLowerCase();
if (nationality=="yes"){alert("correct")
//console.log("correct")
}
else if (nationality=="no"){alert("that's un correct");
//console.log("that's un correct")
}

let nature=prompt("do i like nature" ).toLowerCase();
if (nature=="yes"){alert("correct")
//console.log("correct")
}
else if (nature=="no"){alert("that's un correct");
//console.log("that's un correct")
}

let i;
let answer =[];
for(i= 1; i<= 4;i++){
   let question = Number (prompt("guess my age"));
   answer.push(question);
   if(answer===22){
       alert('you are right');
       dgree++;
       break;
} else if (answer>22){
    alert ("sorry un correct")

}else if (answer <22){
    alert("no im upset")
}
alert("your answer:"+answer[0]+"/"+answer[1]+"/"+answer[2]+"/"+answer[3]);
console.log("your answer:"+answer[0]+"/"+answer[1]+"/"+answer[2]+"/"+answer[3]);
alert ("im 22");
console.log("im 22");
let myplaces =["japan","china","india","iraq","syria","egybt","eran"];
console.log(myplaces);
let q;
for(let n=1;n<=6; n++){
    q = prompt("guess my favourite places?attempt number"+n).toLowerCase();
    console.log(q);
    for(let i=0; i<myplaces.length; i++){
        if(q == myplaces[i]){
        alert("im so lucky of you");
        dgree++;
        break;
        }
    }
    /*if (myplaces.includes(q)){
        alert("im so lucky of you")
        dgree++;
        break;

    }else{
        alert("myplaces:"+myplaces);
        console.log("myplaces:"+myplaces);
        alert("you are excellent.yourscore:"+grade );
        console.log(grade);
    }*/


}