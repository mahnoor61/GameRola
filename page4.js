//each loop is used to print array in jquery .each(arrayName, function(index , value){});

$(document).ready(function(){
    let array = ['A','B','C','D','E','F','G','H','I','J'];
    // NOW THIS ARRAY IS PRINT THROUGH EACH LOOP IN JQUERY:
    $.each(array , function(index , value){
        console.log(value);
        $('#b').append(`<button id="decore" type="button" class="btn btn-outline-warning p-5 m-5">${value}</button>`);
    });

    // $('.decore').css({
    //     height : '100px',
    //     width: '100px',
    //     padding : '50px',
    //     margin : '50px', 
    //     border: '10px solid white',
    //     color: 'white',
    //     backgroundColor: 'blue'
    
    
    // });
});



// // now we have to print button though loop:
// $(document).ready(function(){
//     for(let b=1; b<=10; b++){
//         $('#b1').prepend(`<button>buttons</button>`);  
//     }
// });