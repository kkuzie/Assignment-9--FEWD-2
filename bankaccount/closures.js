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
    //?????IS THIS THE SAME AS $('document').ready(function(){});???

//click events for each button to add input field when clicked:
let name = namebtn.addEventListener('click', e => {
    e.preventDefault();
    formname.innerHTML += '<input type="text" id="name" name="yourname" placeholder="your name please"></input>';
    formname.innerHTML +='<input type="submit" value="submit">' 
    //value is what the button says in HTML
});

let dep = depbtn.addEventListener('click', () => {
    formdepbtn.innerHTML += '<input type="text" id="dep" name="depamt" placeholder="enter amount"></input>';
});
console.log(dep);//undefined because no input??
let wd = wdbtn.addEventListener('click', () => {
    formwdbtn.innerHTML += '<input type="text" id="wd" name="wdamt" placeholder="enter amount"></input>';
});

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
    console.log(formname.yourname.value);//.form is form element, .name is input id (or could be name= 'yourname'), then .value get the value inputed in that field.
    newbal.querySelector('#nome').textContent = `${formname.yourname.value}`;//grabs span tag 'nome' changes text to value inputed into name button field
    newbal.querySelector('#date').textContent = `${getToday()}`;//grabs span tag 'date' changes text to todays date
});

//CLOSURE FUNCTION:

let balance = 0;//global
    formdep.addEventListener('submit', e => 
    {
        e.preventDefault();
        let depamtinputed = Number.parseFloat(formdep.depamt.value, 10).toFixed(2);
        console.log(depamtinputed);
       let thebalance = Number.parseFloat((balance + depamtinputed),10).toFixed(2);
           if (depamtinputed === ' ')
            {
                depamtinputed = 0;
            }    
            console.log(dep);//undefined because??

            newbal.querySelector('#bal').textContent = `${Number.parseFloat(thebalance, 10).toFixed(2)}`;  
                formwd.addEventListener('submit', e => 
                {
                    e.preventDefault();
                    let wdamtinputed = Number.parseFloat(formwd.wdamt.value, 10).toFixed(2);
                    console.log(wdamtinputed);

                    console.log(thebalance);
                    this.console.log(wdamtinputed);

                    if (wdamtinputed > thebalance) {
                        window.alert("Not enough money in account, please make a deposit!");
                    } else {
                        // thebalance -= wdamtinputed;
                        newbal.querySelector('#bal').textContent = `${parseFloat(thebalance - wdamtinputed, 10).toFixed(2)}`;
                    }
                    
                }); //closing for wd event listener function
        
    });    //closing for dep event listener function

};//closing for window onload



