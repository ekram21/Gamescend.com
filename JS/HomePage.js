

var TeamMateCard_GIF = 'https://media.giphy.com/media/2kUJwImDWQKaY/giphy.gif';
var SocialiseCard_GIf = 'https://media.giphy.com/media/mcQvOP8i6CFkk/source.gif';
var interestsCard_GIF = 'https://media.giphy.com/media/WbBvjffjiIkkU/giphy.gif';





jQuery(document).ready(function($) {

        $(".bubble-speech").hide();

      //hover function on three cards

        $(".TeamMatesTitle").hover(function(){
                $(".bubble-speech.bubble-left").show();
            }, function(){
                $(".bubble-speech.bubble-left").hide();
        });

        $(".SocialiseTitle").hover(function(){
                $(".bubble-speech.bubble-center").show();
            }, function(){
                $(".bubble-speech.bubble-center").hide();
        });

        $(".InterestsTitle").hover(function(){
                $(".bubble-speech.bubble-right").show();
            }, function(){
                $(".bubble-speech.bubble-right").hide();

        });

    //Login box animate from top
        $("#LOGIN_ID").click(function() {

               $( ".Three_Card_Container" ).animate({
                    right: "+130%"
                  }, 100, function() {
                    // Animation complete.
                    console.log('animation complete');
                });

               $( ".LOG_IN_MASTER_CONTAINER" ).animate({
                    top: "+48%"
                  }, 500, function() {
                    // Animation complete.
                    console.log('animation complete');
                });
        });

        $('.LOGIN_Submit').click(function() { 

            $( ".LOG_IN_MASTER_CONTAINER" ).animate({
                    top: "-40%"
                }, 500, function() {
                    // Animation complete.
                    console.log('animation complete');
                });  

           $( ".Three_Card_Container" ).animate({
                right: "+0%"
              }, 100, function() {
                // Animation complete.
                console.log('animation complete');
            });

        });

        $(".Cancel_Login").click(function() {

            $( ".LOG_IN_MASTER_CONTAINER" ).animate({
                    top: "-40%"
                }, 500, function() {
                    // Animation complete.
                    console.log('animation complete');
                });  

           $( ".Three_Card_Container" ).animate({
                right: "+0%"
              }, 100, function() {
                // Animation complete.
                console.log('animation complete');
            });

        });

  });



