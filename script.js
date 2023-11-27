$(".start-button").click(function() {
   $(".start-button").hide();
   $(".title").hide();
$(".text2").show();
    $(".fond1").show();
    $(".fond2").show();
});

$(".fond2").click(function() {
    $(".text2").hide();
   $(".firstImage").hide();
    $(".fond1").hide();
    $(".fond2").hide();
    $(".fb").show();
    $(".fb2").show();
    $(".back").show();
});

$(".fond1").click(function() {
    $(".text2").hide();
   $(".firstImage").hide();
    $(".fond1").hide();
    $(".fond2").hide();
    $(".fondresult").show();
    $(".text3").show();
    $(".conc1").show();
    $(".conc2").show();
});

$(".back").click(function() {
     $(".firstImage").show();
    $(".fond1").show();
    $(".fond2").show();
    $(".text2").show();
     $(".fb").hide();
    $(".fb2").hide();
    $(".back").hide();
});

$(".conc1").click(function() {
     $(".text3").hide();
    $(".conc1").hide();
    $(".conc2").hide();
    $(".text4").show();
    $(".cont1").show();
    $(".cont2").show();
    $(".concresult").show();
    $(".fondresult").hide();
});

$(".conc2").click(function() {
     $(".text3").hide();
    $(".conc1").hide();
    $(".conc2").hide();
    $(".fondresult").hide();
    $(".hi1").show();
    $(".fb2").show();
    $(".back2").show();
});

$(".back2").click(function() {
     $(".hi1").hide();
    $(".fb2").hide();
    $(".back2").hide();
    $(".fondresult").show();
    $(".text3").show();
    $(".conc1").show();
    $(".conc2").show();
});

$(".cont1").click(function() {
     $(".text4").hide();
    $(".concresult").hide();
    $(".cont1").hide();
    $(".cont2").hide();
    $(".contresult").show();
    $(".text5").show();
    $(".color").show();
    $(".neutral").show();
});

$(".cont2").click(function() {
     $(".text4").hide();
    $(".concresult").hide();
    $(".cont1").hide();
    $(".cont2").hide();
     $(".hi2").show();
    $(".fb2").show();
    $(".back3").show();
});

$(".back3").click(function() {
     $(".hi2").hide();
    $(".fb2").hide();
    $(".back3").hide();
    $(".concresult").show();
    $(".text4").show();
    $(".cont1").show();
    $(".cont2").show();
});

$(".color").click(function() {
     $(".contresult").hide();
    $(".text5").hide();
    $(".color").hide();
    $(".neutral").hide();
    $(".eye1").fadeIn();
    $(".replay").show();
});


$(".neutral").click(function() {
     $(".contresult").hide();
    $(".text5").hide();
    $(".color").hide();
    $(".neutral").hide();
    $(".eye2").fadeIn();
    $(".replay2").show();
});

$(".replay").dblclick(function() {
     $(".eye1").hide();
    $(".replay").hide();
    $(".title").show();
    $(".firstImage").show();
    $(".start-button").show();
});

$(".replay2").dblclick(function() {
     $(".eye2").hide();
    $(".replay2").hide();
    $(".title").show();
    $(".firstImage").show();
    $(".start-button").show();
});