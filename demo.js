//to show popup namaste world when we click namaste world button dialog box
/*let namasteBTN=document.querySelector('button');
namasteBTN.addEventListener('click',showmsg);   //jbh button click kren toh event ho
function showmsg(){
    alert("namaste world");
}*/
let namasteBTN=document.querySelector('button');  
//document se hmne dom ko select kr lia
//kisi e;ement ko select krne ke liye query selector
namasteBTN.addEventListener('click',inputmsg);   //jbh button click kren toh input le
function inputmsg(){
    //promt function se input lenge toh name variable m store hoke display hoga
    let name=promt("enter name of student");
    namasteBTN.textContent="roll no 1 : +name";
}