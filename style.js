// // let klor=document.getElementsByTagName('box')[0];
// // klor.style.background ="red";
// // klor.style.width=300+"px";
// // klor.style.height=200+"px";

// // let div2=document.getElementsByClassName('box')[0];
// // div2.style.background ="black";
// // div2.style.width=300+"px";
// // div2.style.height=200+"px";

// // let div3=document.getElementById('id1');
// // div3.style.background ='blue';
// // div3.style.width=300+"px";
// // div3.style.height=200+"px";




// let div4=document.querySelector("box");
// div4.innerHTML="hgdjhgcgh";
// div4.style.background ='blue';
// div4.style.width=300+"px";
// div4.style.height=200+"px";


// let valod=document.getElementsByTagName('box');
// valod[1].style.background ="red";
// valod[2].style.background ="red";
// valod[3].style.background ="red";


// let val=document.getElementsByClassName('.box');
// valod[5].style.background = "red";
// valod[6].style.background = "red";
// valod[7].style.background = "red";


// let valo=document.getElementById('fox');
// valod.style.background="red";
// valod.style.background="red";
// valod.style.background="red";








// let newdiv=document.createElement("h1");
// newdiv.innerHTML="vernagir";
// document.body.append("newdiv");


// let div15= document.querySelector('.container');
// let newDiv = document.createElement('h1');
// newDiv.innerHTML="vernagir";
// div15.append(newDiv);



// let div15= document.querySelector('.container');
// let newDiv = document.createElement('h1');
// newDiv.innerHTML="vernagir";
// div15.append(newDiv);
// newDiv.setAttribute("class","vernagir");
// // newDiv.hasAttribute("class");
// // newDiv.getAttribute("class");
// newDiv.classList.contains("vernagir");
// console.log(newDiv.classList.contains("vernagir"));




// let diver=document.getElementsByTagName('box');
// diver[0].style.background="pink";
// for (let i = 1; i < diver.length; i++) {
//     diver[i].style.background="blue"

// }




// let ul =document.getElementsByTagName("ul")[0];
// ul.firstElementChild.innerHTML=["tex1"];
// ul.lastElementChild.innerHTML=["text1"];
// ul.children[1].innerHTML=["text1"];







// let box = document.querySelector('box');
// box.addEventListener('click',function(){
//     box.style.background="black";
// });



// let div = document.querySelector('.box');
// div.addEventListener('click',function(){
//     box.style.background="black";
//     div.classList.toggle("box");

// });



// let box = document.querySelectorAll('.box');
// for (let i = 0; i < box.length; i++) {
//     box[i].addEventListener('click', function () {
//         for (let j = 0; j < box.length; j++) {
//             if(i==0){
//                 box[j].style.background="red";
//             }            
//             else if(i==1){
//                 box[j].style.background="blue";
//             }            
//             else if(i==2){
//                 box[j].style.background="green";
//             }            
//         }
//     });


// }


// vori vra ktcnes menak eti guynn poxi

// butn vor sax guynern jnji



// let box = document.querySelectorAll('.box');
// for (let i = 0; i < box.length; i++) {
//     box[i].addEventListener('click', function () {
//         for (let j = 0; j < box.length; j++) {
//             if(i==0){
//                 box[0].style.background="red";
//             }            
//             else if(i==1){
//                 box[1].style.background="blue";
//             }            
//             else if(i==2){
//                 box[2].style.background="green";
//             }            
//         }
//     });


// }







// let box = document.querySelectorAll('.box');
// for (let i = 0; i < box.length; i++) {
//     box[i].addEventListener('click', function () {
//         for (let j = 10; j < box.length; j++) {
//             if(i==0){
//                 box[j].style.background="red";
//             }            
//             else if(i==1){
//                 box[j].style.background="blue";
//             }            
//             else if(i==2){
//                 box[j].style.background="green";
//         let fox = document.querySelectorAll('.fox');
//         for(let a = 0;a<fox.length;a++){
//             fox[a].addEventListener('click',function(){
//                 box[j].style.background="none";

//             });
//         }        
//             }            
//         }
//     });


// }




let box = document.querySelector('.box');
let btns = document.querySelectorAll(".btn");
for (let index = 0; index < btns.length; index++) {
    btns[index].addEventListener("click", function () {
        if (index == 0) {
            box.style.display = "block";
            box.style.top = 100 + "px";
            box.style.background = "red";
        }
        else if (index == 1) {
            box.style.display = "block";
            box.style.top = 100 + "px";
            box.style.left = 50 + "px";
            box.style.background = "green";
        }
        else if (index == 2) {
            box.style.display = "block";
            box.style.top = 100 + "px";
            box.style.left = 100 + "px";
            box.style.background = "blue";
        }
    });
}


// let block = document.querySelectorAll('.block');
// for (let index = 0; index < block.length; index++) {
//     block[index].addEventListener('mouseover', function () {
//         if (block[index].style.background == 'none') {
//             block[index].style.background = "red";
//         }
//         else {
//             block[index].style.background = 'none';
//         }



//     })
// }




// let block = document.querySelectorAll('.block');
// for (let index = 0; index < block.length; index++) {
//     block[index].addEventListener('mouseover', function () {
//             block[index].style.background = "red";
//             block[index].addEventListener("mouseout",function () {
//                 block[index].style.background = 'none';
//             })
//     })
// }





// document.addEventListener("keydown",function (e) {

//     document.write(e.keyCode);
// })



// let box = document.querySelector('.box');
// let left1 = 15;
// let top1 = 15;
// document.addEventListener('keydown', function (e) {


//   if (e.keyCode == 37) {
//     left1 -= 5;
//     box.style.left = left1 + 'px';
//   }
//   else if (e.keyCode == 38) {
//     top1 -= 5;
//     box.style.top = top1 + 'px';
//   }
//   else if (e.keyCode == 39) {
//     left1 += 5;
//     box.style.left = left1 + 'px';
//   }
//    else if (e.keyCode == 40) {
//     top1 += 5;
//     box.style.top = top1 + 'px';
//   }
//   if ((left1 >= 250 && left1 <= 500) && (top1 >= 110 && top1 <= 350)) {
//     alert('game over');
//   }


// });







// let n = 0;

// setInterval(function(){
//   n++;
//   document.write(n+"<br>")
// },500);





// let n = 0;
// setTimeout(function(){
//   n++;
//   document.write(n+"<br>")
// },50);







// let n = 0;
// setTimeout(function(){
//   clearInterval(set)
// },4000);
// let set = setInterval(function(){
//   n++;
//   document.write(n+"<br>");
// },500);



// let klor = document.querySelector('.box');
// let moveLeft = 0;
// let bool = true;
// setTimeout(function () {
//   clearInterval(set)
// }, 7000);
// let set = setInterval(function () {
//   if (bool) {
//     moveLeft++;
//     klor.style.left = moveLeft + "px";

//   }
//   else if (!bool) {
//     moveLeft--;
//     klor.style.left = moveLeft + "px";

//   }
//   if (moveLeft > 500) {
//     bool = false;

//   }
//   else if (moveLeft < 0) {
//     bool = true;

//   }
// }, 5);







// setTimeout(function () {
//   clearInterval(set)
// }, 4000);

// let fox = document.querySelector(".fox");
// let hashiv = 0;


// let set = setInterval(function () {
//   let div = document.createElement("div");
//   div.classList.add("box");
//   document.body.append(div);



//   let leftPos = Math.floor(Math.random() * 90);
//   let topPos = Math.floor(Math.random() * 90);
//   let klor = Math.floor(Math.random()*10);
//   div.innerHTML=klor  
//   div.style.left = leftPos + "%";
//   div.style.top = topPos + "%";

//   div.addEventListener('click', function () {
//     div.remove();
//     hashiv+=klor;


//     fox.innerHTML=hashiv; 


//   });

// }, 200);











// setTimeout(function () {
//   clearInterval(set)
// }, 4000);

// let fox = document.querySelector(".fox");
// let hashiv = 0;
// let r = 0;
// let g = 0;
// let b = 0;

// let set = setInterval(function () {
//   let div = document.createElement("div");
//   div.classList.add("box");
//   document.body.append(div);


//   let leftPos = Math.floor(Math.random() * 90);
//   let topPos = Math.floor(Math.random() * 90);
//   let klor = Math.floor(Math.random()*10);
//   let r = Math.floor(Math.random()*255);
//   let g = Math.floor(Math.random()*255);
//   let b = Math.floor(Math.random()*255);

//   div.innerHTML=klor  
//   div.style.left = leftPos + "%";
//   div.style.top = topPos + "%";
//   div.style.background="rgb("+r+","+g+","+b+")";

//   div.addEventListener('click', function () {
//     div.remove();
//     hashiv+=klor;


//     fox.innerHTML=hashiv; 


//   });

// }, 200);


// let btnRed =document.querySelector('.btnRed');
// let btnGreen =document.querySelector('.btnGreen');
// let hashiv = 0;
// let r = 0;
// let g = 0;
// let b = 0;


// let tiv = Math.ceil(Math.ceil()*10);
// let r = Math.ceil(Math.ceil()*255);

// let g = Math.ceil(Math.ceil()*255);
// let b = Math.ceil(Math.ceil()*255);

// div.style.background="rgb("+r+","+g+","+b+")";
// btnRed.addEventListener('click',function(){
//     hashiv+=tiv;
//     box.innerHTML=hashiv;



// })




// document.addEventListener('click',(e)=>{
//     console.log(e.clientX,e.clientY);
//     console.log(e.pageX,e.pageY);
// })




// let fox = document.querySelector(".fox");
// let box = document.querySelector('.box');
// document.addEventListener("mousedown", (e) => {
//     document.addEventListener("mousemove", anun = (e) => {
//         box.style.left = e.pageX + 'px';
//         box.style.top = e.pageY + 'px';
//     })

//     document.addEventListener("mouseup", (e) => {
//         document.removeEventListener('mousemove', anun);
//         fox.append(box);


//     });
// });



// let p = new Promise((resolve, reject) => {
//     let a = 1 + 2;
//     if (a == 2) {
//         resolve("yes:a=2");
//     }
//     else {
//         reject(a + "!=2");
//     }
// });
// p.then((message)=>{
//     console.log(message);
// })
// .catch((error)=>{
//     console.log(error);
// })




// let userhelela = false;
// let usernayumavideo = true;
// function promiseFunctia() {
//     return new Promise((resolve, reject) => {
//         if (userhelela) {
//             resolve("user gnacela");
//         } else if (!usernayumavideo) {
//         reject("user chinayum");
//         }
//     else {
//             resolve("usern nayume video");
//         };
//     })
// }

// promiseFunctia().then((message)=>{
//         console.log(message);
//     })
//     .catch((error)=>{
//         console.log(error);
//     })





// let arr1=[20,'anun','30',NaN]
// console.log(Array.isArray(arr1));
// console.log(typeof arr1[3]);


//  let arr= []
// arr.length=100
// for(let i=0;i<arr.length;i++)
// arr[i]=i;
// console.log(arr);

// let arr= [1,5,9,17]

//  function gumar(arr){
//    let g=0;
//    for(let i=0;i<arr.length;i++)
//    g=g+arr[i];
//    console.log(g);
//  }
//  gumar(arr);


// let a=[2,5,6,7,9,11,30,55,117,754]
// function myForEach(arr,fun){
//   for(let i=0;i<arr.length;i++)
//   fun(arr[i],i);
// }
// myForEach(a,function(val,i){
//   console.log(val,i)
// })


// let a=[2,5,6]
// let s = 0
// a.forEach(function(val){
//   s+=val
// })
// console.log(s);



// console.log(Math.min(5,6,-7,150,-78))

// let arr=[];
// arr.length=50
// for(let i=0;i<arr.length;i++){
//   arr[i]=Math.round(Math.random()*(10))+20
// }
// console.log(arr);

// let a=[]
// a.length=50
// a=rondomArr(a,20,30)
// function rondomArr(arr,min,max){
//   for (let i=0;i<arr.length;i++)
//   arr[i]=Math.round(Math.random()*(max-min))+min;
//   return arr;
// }
// console.log(a);


//  console.log(Math.round(Math.random()*20)-10);

// let a=[2,5,7]
// a.forEach(function(val,i){
//   a[i]=val*2
// })
// console.log(a);


// let arr=[10,-50,37,2]
// min (arr);
// function min (arr){
//   let minVal=arr[0]
//   for(let i=1;i<arr.length;i++){
//     if(minVal>arr[i])minVal=arr[i]
//   }console.log(minVal);
// }

// let a=[-2,3,6,-7]
// function myFilter(arr){
//   let newArr=[];
//   let i=0;
//   arr.forEach(function(val){
//     if (val<0){
//       newArr[i]=val;
//       i++;

//     }
//   });

// return newArr
// }
// let b = myFilter(a);
// console.log(a,b);

// let a=[1,2,3];
// function unshift(arr,val){
// for(let i=arr.length-1;i>=0;i--)
// arr [i+1]=arr[i];
// arr[0]=val;
// return arr;
// }
// unshift(a,100);
// console.log(a);


// let a=[1,2,3];
// // a.shift();jnjum e demic
// // a.push(66); avelacnue verjic
// //a.unshift(100); avelacnume e demic
// //a.pop(); verchi tivn jnjel
// console.log(a);


// function isSymetric(a) {
//   let sim = true;
//   for (let i = 0; i < a.length; i++) {
//     let length = a.length - i;
//     if (a[i] != a[length - 1]){
//       sim = false;
//     }
//   }
//   return sim;
//  }
  
// let a = [1, 2, 2, 1];
// console.log(isSymetric(a));




// function f(a,b,c=10){
//   document.write(a+b+c);

// }
// f(5,4,);


// let a=5;
// document.write(`text + ${a}`);

// function n (a){
// if(a>0){
//   console.log('drakan');

// }
// else if(a<0){
//   console.log('bacasakan');
// }
// }

// n(2);


// abs (-5)
// abs (5)
//document.write(Math.abs(-15)); //stanu e drakan astichan
//document.write(Math.max(1,5,6,11,45));//stanum e amenabarcr tivn
//document.write(Math.min(1,5,6,11,45)); //stanum e amenacacr tivn
//document.write(Math.pow(2,5));// stanum e 2  5astichan
//document.write(Math.sqrt(5,3));//armat e hanum
//document.write(Math.floor(2,9));//kloracnum e poqri kom
//document.write(Math.round(3.48));//minchev .50 cuca tali 3 ntranic verev sarqum e 4

// let sum = 0;
// for (let i=1;i<10;i++){
//     sum+=i;
    
//     document.write(sum);
// }



// let a=2;
// let b=3;
// if (a>b){
//     document.write(a);
// }
// else if(b>a){
//     document.write(b);
// }
// else{
//     document.write('havasar');
// }



// let a= 9;
// if(a%2==0){
//     document.write('zuyg');
// }else{
//     document.write('kent');
// }



// let a=0;
// for(let i=1;i<=10;i++){
// if (i%2==0){
//     document.write(i);
// }
// }


// let sum=0;
// for(let i=1;i<=10;i++){
//     if(i%2==0){
//         sum+=i;

//     }
// }document.write(sum);


// let sum=0;
// for(let i=1;i<=100;i++){

//     if(i%5==0){
//         sum++;
        
//     }
// }
// document.write(sum,'<br>');



//cikl vorn gtnuma zangvaci mejic amena mec tivn


//document.write(Math.max(1,5,9,7,15,45,86));





//gtnel arr mejic kent tveri gumarn

// let arr = [3,4,5,11,13,8];
// let sum = 0;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2!=0){
//         sum+=arr[i];
//     }  
       
//     }
//     document.write(sum);  

//let div = document.getElementsByTagName('div');
//  let div = document.getElementsByClassName('d1');
//  div[0].style.background = 'red';
//  div[1].style.background = 'red';



// let table = document.getElementsByClassName('table');
// table[0].style.background = 'red';


//     let td = document.getElementsByTagName('td');
//     setInterval(function(){
//     for(let i=0;i<td.length;i++){
//         let r = Math.round(Math.random()*(255));
//         let g = Math.round(Math.random()*(255));
//         let b = Math.round(Math.random()*(255));
//         td[i].style.background =`rgb(${r},${b},${g})`;
//     }

    
// },1000);




// let age = prompt('Haw old ar you?');

// if (age<10){
//     alert('hi');
// }else if(age >= 10 && age <= 18){
//     alert('hello');
// }else{
//     ('ddddddddddddd');
// }

// let result= 0;
// while(true){
//   let answer = prompt('plize giv to namber');
//   if(answer === 'exit'){
//       alert('Result is' +result);
// break;
//   }
//   let num = +answer;
//   result = result =num;
// } 
 
let rewerse = function(arr){
    let resultArr = [];
    let i1 = 0;
    let i2 = arr.length-1;
    while(i2>=0){
        resultArr[i1]= arr[i2];
        i1 = i1+1;
        i2 = i2-1;
    }
    return resultArr;
}
alert (rewerse([4,3,2,1]));


// let a  = function(arr){
//     let b = 0;
//     let i = 0;
//     while(i<arr.length){
//         b = b + arr[i];
//      i++;

//     }
//     return b / arr.length;
// };
// alert (a( [4,3,6,10,2]));





 