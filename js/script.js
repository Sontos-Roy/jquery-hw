$(document).ready(function (){
	// HIDE
	$('#btn_1').click(function (){
       $('h2').hide();
	});
	// SHOW
	$('#btn_2').click(function(){
		$('h2').show();
	});
	// TOOGLE
	$('#btn_3').click(function(){
		$('h2').toggle("slow");
	});
	// FADE OUT
     $('#btn_4').click(function(){
     	$('h3').fadeOut();
     });
     // FADE IN
     $('#btn_5').click(function(){
     	$('h3').fadeIn();
     });
     // FADE TOGGLE
     $('#btn_6').click(function(){
     	$('h3').fadeToggle();
     });
     // FADE TO
     $('#btn_7').click(function(){
     	$('h3').fadeTo(1000, .5);
     });
     // qiestion
     $('.question').click(function(){
     	$('.ans').slideToggle("slow");
     });

     // SLIDE UP
     $('.s_up').click(function(){
     	$('.slide_up').slideUp();
     });
     // SLIDE DOWN
     $('.c_p').click(function(){
     	$('.b').slideDown();
     });
     // DRAGABLE
     $( "#dragg" ).draggable();

     // DROPABLE

         $( "#draggable" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });
    // RESIZR
    $( "#resizable" ).resizable();

    // SELECTABLE
     $( "#selectable" ).selectable();
     // SORTABLE
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();

    // ACCOURDIAN
     $( "#accordion" ).accordion({
        collapsible: true
     });
     // AUTO COMPLETE
      var text =["apple", "asif", "rahman"];
    $( "#data" ).autocomplete({
      source: text
    });
 });