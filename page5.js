// make input field through loop:
$(document).ready(function(){
    for(let i=1; i<=10; i++){
        $('#r2').append(`<input type="text" class=" p-2 m-2"/>`);
        //get value of input tag:
        $('input').on('click' , function(){
           let i= $(this).val();
           console.log(i);
        })
        // $(this).val();
        // console.log( $(this).val());
    
    }
    // make array through loop again
    let array = ['C','D','E','A','B','F','I','J','G','H'];
    // NOW THIS ARRAY IS PRINT THROUGH EACH LOOP IN JQUERY:
    $.each(array , function(index , value){
        // console.log(value);
   $('#r3').append(`<button id="decore" type="button" class="btn btn-outline-warning p-5 m-5 btn-(index)">${value}</button>`);

     // Add click event handler for the buttons with class 'decore'
  $('button#decore').on('click', function() {
    let bV= $(this).text();
    let i = $(this).index();
    alert(index);
    console.log(bV +" "+ index);
    $('input').val(bV);
 
//   $('button#decore').on('click' , function(){
//   $('input').val(bV);
//   });

});

    });
});