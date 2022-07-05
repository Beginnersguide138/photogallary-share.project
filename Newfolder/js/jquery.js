$(function() {
  $('html').ready(
  function() {
    alert("Click on the menu bar above then on the passage/上のメニューにタップするか文にタッチ");
  });
  var speed = 400;
  $('#about-p').css('display','none');
  $('#body,#operational,#variants,#gallery').css('display','none');
   $('#about-p-trigger,#body-trigger,#operational-trigger,#variants-trigger,#gallery-trigger').css('display','none');
//about-p
   $('#about').click(function() {
     $('#about-p-trigger').fadeIn('slow', function() {
       $('#about-p-trigger').click(function() {
         $('#about-p').fadeIn('slow',function() {
           $('#body-trigger').fadeIn('slow')
         });
       });
     });
   });
//body
       $('#body-trigger').click(function() {
         $('#about-p').fadeOut('slow',function() {
         $('#body').fadeIn('slow',function() {
           $(this)
           .css('left','100vw')
           .css('top','0vh');
           $('#origins,#design').css('display','none');
           var target = $('#body');
           var position = target.position().left;
           $('body,html').animate({scrollLeft:(position)},speed,'swing',function() {
             $('#origins').fadeIn('slow');
           });
             $('#origins').click(function() {
               $(this).fadeOut('fast');
               $('#design').fadeIn('slow',function() {
                 $('#operational-trigger').fadeIn('slow')
               });
             });
           });
         });
       });
//operational
       $('#operational-trigger').click(function() {
         $('#design').fadeOut('slow',function() {
           $('#operational').fadeIn('slow',function() {
             $(this).css('left','200vw').css('top','0vh');
             $('#us,#au,#ca,#fi').css('display','none');
             var target1 = $('#operational');
             var position1 = target1.position().left;
             $('body,html').animate({scrollLeft:(position1)},speed,'swing',function() {
               $('#us').fadeIn('slow');
               $('#us').click(function() {
                 $(this).fadeOut('fast');
                 $('#au').fadeIn('slow');
               });
               $('#au').click(function() {
                 $(this).fadeOut('fast');
                 $('#ca').fadeIn('slow');
               });
               $('#ca').click(function() {
                 $(this).fadeOut('fast');
                 $('#fi').fadeIn('slow');
               });
               $('#fi').click(function() {
                 $('#variants-trigger').fadeIn('slow',function() {});
               });
             });
           });
         });
        });
//variants
                       $('#variants-trigger').click(function() {
                         $('#fi').fadeOut('slow',function(){
                         $('#variants').fadeIn('slow');
                         $('#variants').css('left','300vw').css('top','0vh');
                         $('#ab,#cd,#ef').css('display','none');
                         var target2 = $('#variants');
                         var position2 = target2.position().left;
                         $('body,html').animate({scrollLeft:(position2)},speed,'swing',function() {
                           $('#ab').fadeIn('slow');
                           $('#ab').click(function() {
                             $(this).fadeOut('fast');
                             $('#cd').fadeIn('slow');
                             $('#cd').click(function() {
                               $(this).fadeOut('fast');
                               $('#ef').fadeIn('slow');
                               $('#ef').click(function() {
                                 $('#gallery-trigger').fadeIn('slow');
                               });
                             });
                           });
                         });
                       });
                     });
//gallery
                     $('#gallery-trigger').one('click',function () {
                       $('#about,#about-p,#body,#operational,#variants').css('display','none');
                       $('#about-p-trigger,#body-trigger,#operational-trigger,#variants-trigger').fadeOut('fast',function() {
                         $('#gallery').fadeIn('slow',function() {
                           $('#m2,#m3,#m4,#m5,#m6').css('display','none');
                           $(this).css('left','0vw').css('top','0vh');
                           var speed = 400;
                           var target3 = $('#gallery');
                           var position3 = target3.position().left;
                           // $('body,html').animate({scrollLeft:(position3)},speed,'swing',function() {
                           //   console.log("swing complete!");
                           // });
                             $('#m1').click(function(){
                               $('#m1').fadeOut('slow',function(){
                                 $('#m2').fadeIn('slow',function(){
                                   $('#m2').click(function(){
                                     $('#m2').fadeOut('slow',function(){
                                       $('#m3').fadeIn('slow',function(){
                                         $('#m3').click(function(){
                                           $('#m3').fadeOut('slow',function(){
                                             $('#m4').fadeIn('slow',function(){
                                               $('#m4').click(function(){
                                                 $('#m4').fadeOut('slow',function(){
                                                   $('#m5').fadeIn('slow',function(){
                                                     $('#m5').click(function(){
                                                       $('#m5').fadeOut('slow',function(){
                                                         $('#m6').fadeIn('slow',function(){
                                                           $('#m6').click(function(){
                                                             $('#m6').fadeOut(function(){
                                                               $('#m1').fadeIn('slow');
                                                             });
                                                           });
                                                         });
                                                       });
                                                     });
                                                   });
                                                 });
                                               });
                                             });
                                           });
                                         });
                                       });
                                     });
                                   });
                                 });
                               });
                             });
                             //m1~m5
                         });
                       });
                       //gallery trigger
                     //document.ready
                   });
                 });
