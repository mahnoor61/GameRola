let x;
document.getElementById('b1').addEventListener('click' , function(){
    x= document.getElementById('field1').value= 'password';
});
document.getElementById('b2').addEventListener('click' , function(){
    x = document.getElementById('field1').value= 1234567;
});
document.getElementById('b3').addEventListener('click' , function(){
    x= document.getElementById('field1').value= 'M435!!@';
});

document.getElementById('create').addEventListener('click', function(){
    // console.log(x);

    if(x != 'M435!!@'){
        document.getElementById('mess').innerHTML='Please select the strong Password';
        document.getElementById('mess').style.color='red';
     
    }else if(x == 'M435!!@' ){
        document.getElementById('mess').innerHTML='Your password is strong now!!!';
        document.getElementById('mess').style.color='green';
        document.getElementById('mess').style.fontWeight='bolder';
    }
});
document.getElementById('create').addEventListener('click', function(){
var a=document.getElementById('chk');

if(a.checked == true){
    // change location of page in javascript we use the function
    window.location.replace("./page4.html");
    //   document.getElementById('chk1').innerHTML='Correct';
    //   document.getElementById('chk1').style.color='green';

}else {
    //  console.log(a);
    document.getElementById('chk1').innerHTML='Select the checkbox 1st';
    document.getElementById('chk1').style.color='red';
    
} 
});



