// set variables
var crystal_1 = 0;
var crystal_2 = 0;
var crystal_3 = 0;
var crystal_4 = 0;
var your_score = 0;
var target_score = 0;
var youWin = 0;
var youLose = 0;
var last_turn_win = false;

//set crystal images
function set_images (){
        
    $("#crystal_1img").attr("src","assets/images/red.png");
    // $("#crystal_1img").attr("src","assets/images/gifgem1.gif");
    $('#crystal_1img').width(70); // Units are assumed to be pixels
    $('#crystal_1img').height(70);

    $("#crystal_2img").attr("src","assets/images/green.png");
    // $("#crystal_2img").attr("src","assets/images/gifgem2.gif");
    $('#crystal_2img').width(70); // Units are assumed to be pixels
    $('#crystal_2img').height(70);

    $("#crystal_3img").attr("src","assets/images/blue.png");
    // $("#crystal_3img").attr("src","assets/images/gifgem3.gif");
    $('#crystal_3img').width(70); // Units are assumed to be pixels
    $('#crystal_3img').height(70);

    $("#crystal_4img").attr("src","assets/images/cluster.png");
    // $("#crystal_4img").attr("src","assets/images/gifgem4.gif");
    $('#crystal_4img').width(70); // Units are assumed to be pixels
    $('#crystal_4img').height(70);
}
//set exrta crystal images if the user wins
function set_images_win (){
        
    // $("#crystal_1img").attr("src","assets/images/red.png");
    $("#crystal_1img").attr("src","assets/images/gifgem1.gif");
    $('#crystal_1img').width(70); // Units are assumed to be pixels
    $('#crystal_1img').height(70);

    // $("#crystal_2img").attr("src","assets/images/green.png");
    $("#crystal_2img").attr("src","assets/images/gifgem2.gif");
    $('#crystal_2img').width(70); // Units are assumed to be pixels
    $('#crystal_2img').height(70);

    // $("#crystal_3img").attr("src","assets/images/blue.png");
    $("#crystal_3img").attr("src","assets/images/gifgem3.gif");
    $('#crystal_3img').width(70); // Units are assumed to be pixels
    $('#crystal_3img').height(70);

    // $("#crystal_4img").attr("src","assets/images/cluster.png");
    $("#crystal_4img").attr("src","assets/images/gifgem4.gif");
    $('#crystal_4img').width(70); // Units are assumed to be pixels
    $('#crystal_4img').height(70);
}


//use an object to handle the random numbers
var gameNumbers = {

    gamenum:  function getRandomGameNum() {
        min = Math.ceil(19);
        max = Math.floor(120);
        return Math.floor(Math.random() * (max - min + 1)) + min;
        
        },

    set_target_number: function set_t_num_function(){
        target_score = this.gamenum()
    },

    displayGN: function displayGameNum(){
        $('.number_a').html(target_score);
        // $('.number_a').html(this.gamenum());
        },

    crystalnum:  function getRandomCrystalNum() {
        min = Math.ceil(1);
        max = Math.floor(12);
        return Math.floor(Math.random() * (max - min + 1)) + min;
        }

   
}       

//give each crystal a random number
function set_crystal_val(){    
    crystal_1 = gameNumbers.crystalnum();
    crystal_2 = gameNumbers.crystalnum();
    crystal_3 = gameNumbers.crystalnum();
    crystal_4 = gameNumbers.crystalnum();

}


//find out if the user won then do stuff
function win_lose(target_score,your_score){
    if(target_score === your_score){
        console.log("win")
        last_turn_win = true;
        // alert("You win")
        // $('.title').append("You win!" );
        // $('.title').append("</br>" )
        $('.You_win_lose').html("<h1>You Win!</h1>" )
        reset()
        youWin ++;
        $('.W_text').html("Wins: "+youWin )
        console.log("AAAA", youWin)
    }else if (your_score >target_score){
        console.log("lose")
        last_turn_win = false;
        // alert("You lose")
        // $('.title').append("You lose!");
        // $('.title').append("</br>" )
        $('.You_win_lose').html("<h1>You Lose!</h1>" )
        reset()
        youLose ++;
        $('.L_text').html("Loses: " + youLose )
        console.log("AAAA" , youLose)
    }

}

//reset the game
function reset(){
    gameNumbers.set_target_number();
    gameNumbers.displayGN();
    set_crystal_val()
    // $('.You_win_lose').html("<h1></h1>" )
    your_score = 0;
    $('.your_score_number_text').html( your_score);
    console.log("Reset")

    if(last_turn_win){
        set_images_win ();
    }else{
        set_images();
    }
}
//load the page add jquery visual changes
$(document).ready(function() {

    // $('.instuctions').css('background-color', 'black');
    $(".title").css("fontSize", "30px");
    $('.inst_txt').css('background-color', 'rgba(0, 0, 0, 0.6)');
    $('.display').css('background-color', 'rgba(0, 0, 0, 0.6)');
    $('.crystal').css('background-color', 'rgba(0, 0, 0, 0.6)');
    $('.your_score').css('background-color', 'rgba(0, 0, 0, 0.6)');
    $('.your_score_number').css('border-bottom', '2px solid rgb(0,0,0,.3)'); 

    $('.your_score_number').css('background-color', 'rgba(0, 0, 0, 0.6)');
    // $('.your_score_number').html('0');
//give the crystals a hover effect
    $(function(){
        $("#crystal_1img").hover(
            function(){
                $(this).animate({ "width" : "70%", "height" : $("#crystal_1img").height() + "px" }); 
            },
            function(){
                $(this).animate({ "width" : "50%", "height" : "70px" });
            }
        );                             
    });
    $(function(){
        $("#crystal_2img").hover(
            function(){
                $(this).animate({ "width" : "70%", "height" : $("#crystal_2img").height() + "px" }); 
            },
            function(){
                $(this).animate({ "width" : "50%", "height" : "70px" });
            }
        );                             
    });
    $(function(){
        $("#crystal_3img").hover(
            function(){
                $(this).animate({ "width" : "70%", "height" : $("#crystal_3img").height() + "px" }); 
            },
            function(){
                $(this).animate({ "width" : "50%", "height" : "70px" });
            }
        );                             
    });
    $(function(){
        $("#crystal_4img").hover(
            function(){
                $(this).animate({ "width" : "70%", "height" : $("#crystal_4img").height() + "px" }); 
            },
            function(){
                $(this).animate({ "width" : "50%", "height" : "70px" });
            }
        );                             
    });




//set variables
    gameNumbers.set_target_number();
    set_images ();
    gameNumbers.displayGN();
    set_crystal_val()
//do stuff when the crystals are clicked
    $('.clicked').on('click',function(){
        var clicked_id = $(this).attr("id")
        console.log(clicked_id)

        if(clicked_id=="crystal_1img"){
            your_score += crystal_1;
            $('.your_score_number_text').html( your_score);
            console.log(crystal_1)
        }else if(clicked_id=="crystal_2img"){
            your_score += crystal_2;
            $('.your_score_number_text').html( your_score);
            console.log(crystal_2)
        }else if(clicked_id=="crystal_3img"){
            your_score += crystal_3;
            $('.your_score_number_text').html(your_score);
            console.log(crystal_3)            
        }else if(clicked_id=="crystal_4img"){
            your_score += crystal_4;
            $('.your_score_number_text').html( your_score);
            console.log(crystal_4)  
        }
        console.log("target_score  " ,target_score)  


        win_lose(target_score,your_score)

        if(your_score !== 0){
            $('.You_win_lose').html("<h1></h1>" )
        }
 
        
        });
   





});


