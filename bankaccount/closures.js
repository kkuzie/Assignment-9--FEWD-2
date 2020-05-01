/*eslint-env browser*/

let formname = document.querySelector('#formnamebtn');//grabs the form for name
console.log(formname);
let formdep = document.querySelector('#formdepbtn');//grabs the form for dep
console.log(formdep);
let formwd = document.querySelector('#formwdbtn');//grabs the form for withdrawal
console.log(formwd);

//grabs each button:
let namebtn = document.querySelector('#nameBtn');//grabs name button element
let depbtn = document.querySelector('#depBtn'); //grabs deposit button element
let wdbtn = document.querySelector('#wdBtn'); //grabs withdrawal button element
console.log(wdbtn);

window.onload = function () {//so will load page before executing code
//click events for each button to add input field when clicked:
let name = namebtn.addEventListener('click', e => {
    e.preventDefault();
    formname.innerHTML += '<input type="text" id="name" name="yourname" placeholder="your name please"></input>';
    formname.innerHTML +='<input type="submit" value="submit">' 
    //value is what the button says in HTML
});

let dep = depbtn.addEventListener('click', () => {
    formdepbtn.innerHTML += '<input type="text" id="dep" name="depamt" placeholder="0.00 format please"></input>';
});

let wd = wdbtn.addEventListener('click', () => {
    formwdbtn.innerHTML += '<input type="text" id="wd" name="wdamt" placeholder="0.00 format please"></input>';
});

// let inputname = document.querySelector('#name');
// console.log(inputname);

//GET DATE: 
function getToday() {
        let d = new Date();
        let year = d.getFullYear();
        let day = d.getDate();//CHANGE TO DAY DATE not day of week 
        let month = d.getMonth() + 1;
        let today = month + "/" + day + "/" + year;
        return today;
    }
    
//SUBMIT events:
let newbal = document.querySelector('div');//grabs the div with the span tag

formname.addEventListener('submit', e => {//event param is the callback function
    e.preventDefault();
    // console.log(inputname.value);
    console.log(formname.yourname.value);//.form is form element, .name is input id (or could be name= 'yourname'), then .value get the value inputed in that field.
    newbal.querySelector('#nome').textContent = `${formname.yourname.value}`;//grabs span tag 'nome' changes text to value inputed into name button field
    // newbal.querySelector('#bal').textContent = `${form.depamt.value}`;
    newbal.querySelector('#date').textContent = `${getToday()}`;//grabs span tag 'date' changes text to todays date
});

//CLOSURE FUNCTION:

let balance = 0;//global
// function funcA (){//can access A and global
    formdep.addEventListener('submit', e => {
        e.preventDefault();
        let depamtinputed = Number.parseFloat(formdep.depamt.value, 10).toFixed(2);
        console.log(depamtinputed);
        // newbal.querySelector("#bal").textContent = `${balance + depamtinputed}`;
        // let addToBal = new addTo(depamtinputed);
        // console.log(addToBal);
       let thebalance = balance + depamtinputed;
        if (depamtinputed !== ' '){
            // depamtinputed = 0;
            // newbal.querySelector('#bal').textContent = `${parseFloat(thebalance, 10)}`; 
            console.log(depamtinputed);
            console.log(thebalance);
        // } else {
            newbal.querySelector('#bal').textContent = `${parseFloat(thebalance, 10).toFixed(2)}`;  
        }
    

                // function funcB(){   //can access B, A, and global
                formwd.addEventListener('submit', e => {
                    e.preventDefault();
                    let wdamtinputed = Number.parseFloat(formwd.wdamt.value, 10).toFixed(2);
                    console.log(wdamtinputed);
                    // newbal.querySelector("#bal").textContent = `${balance - wdamtinputed  + depamtinputed}`;
                    // let thebalance2 = balance + depamtinputed - wdamtinputed;
                    newbal.querySelector('#bal').textContent = `${parseFloat(thebalance - wdamtinputed, 10).toFixed(2)}`;
                }); //closing for wd event listener function
            // }
            // console.log(funcB());
         });    //closing for dep event listener function

         
                // funcB();
// newbal.querySelector("#bal").textContent = `${balance - wdamtinputed  + depamtinputed}`;

// let thebalance = newbal.querySelector('#bal').textContent = `${balance + depamtimputed - wdamtinputed}`;

                // }//closing for funcB
// }//closing for funcA
// console.log(funcA());

};//closing for window onload




// let addTo = function (passed){
//     let add = function (inner) {
//         return passed + inner;
//     }
//     return add;
// };
// let addThree = new addTo(3);
// let addFour = new addTo(-4);








//stuff that didnt quite work - thought processes...

//input value of name into HTML "new balance for NAME"
// let newbal = document.querySelector('form');//grabs div with span tags (does same as let form = on line 1)
// console.log(newbal);

// let nameinput = document.querySelector('#name').val;
// console.log(nameinput);

// *****const addName = form.querySelector('input #name').value.trim();
//     console.log(addName);

// newbal.querySelector('span #nome').textContent = `${addName.val}`;


// let date = 






// BRIEF EXPLANATION OF CLOSURE: 
// var G = 'G';//global

// // Define a function and create a closure
// function funcA() {
//   var A = 'A'//global to B, local to A, A has access to G

  
//   // Define a function and create a closure
//             function funcB() {
//                 var B = 'B'
//                 console.log(A, B, G);
//             }
//   funcB();
//   A = 42;
//   G = 6;
//   funcB();
  
// }

// funcA();

// let a = 1;

// const closure1 = function() {
//   console.log(a);
//   a = 2
// }

// a = 3;

// const closure2 = function() {
//   console.log(a);
// }

// closure1();//returns 3
// closure2();//returns 2