/* 1. function abcd()
{
    for(let i=0 ; i<12 ; i++)
    {
        console.log(i);
    }
    console.log(i);
}
abcd();*/

//2. how to copy refrence value
/*var a=[1,2,3,4,5]
var b=[...a]
var obj={name:"anshika"}
var cpyobj={...obj}*/

//3.truthy and falsy values
//falsy=null NaN(not a number) undefined document.all 0 false
//truthy=except all under falsy
/*if(7){
    console.log("ok")
}
else{
    console.log("not ok")
}
if(0){
    console.log("ok")
}
else{
    console.log("not ok")
}
if("anshika"){
    console.log("ok")
}
else{
    console.log("not ok")
}
if(undefined){
    console.log("ok")
}
else{
    console.log("not ok")
}*/

//4. for each jo lgta h sirf arrays m
/*var a=[1,2,45,67,34,90,68]
a.forEach(function(val){
    console.log(val+3);
})*/

//5.callback
/*the function m js khe ki jbh tumhara time complete ho jaye bta dena 
m function chla dunga and time hone ke baad vo jo functn chlata h use
callback function bolte h*/
/*setTimeout(function(){
    console.log("2 sec baad chlega");
},2000);*/

//6.first class function
/*function abcd(a){
    a();
}
abcd (function () {console.log("aneong jenun anshika yeo") ; })*/

//7.Negative indexing of array in js
/*var arr=[152,2554,38765,4564864,534];//this is an obj
arr={
    1:152,
    2:2554,                                 //for instance this is also object obj
    3:38765,                                  //but Array.isarray([])->returns true  
    4:4564864,                                //and Array.isarray({})->returns false     
    5:534
}
console.log(arr);*/

//8.object(delete object prop)
/*var a={
    name:"anshika",
    age:19
}
delete a.age;*/