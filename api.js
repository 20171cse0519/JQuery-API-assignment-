$(document).ready(function () {

    $.ajax({
        type: 'GET',
        url: 'https://newsapi.org/v2/everything?q=apple&from=2021-10-13&to=2021-10-13&sortBy=popularity&apiKey=6aa2c474003e460b94dc2e4479d45fd2',
        success: function (response) {

                $("#NBA").append("<h2>NBA 2K22 Arcade Edition' hits Apple Arcade on October 19th</h2>")

                img = $(this).find('image').text();
                title = $(this).find('title').text();
                alt = $(this).find('alt').text();

                $('<img />')
                    .attr('src', "https://s.yimg.com/os/creatr-uploaded-images/2021-10/8ccde650-2c2c-11ec-bbfb-cd4d34b6f843" + img + "")         
                        .attr('title', title)
                        .attr('alt', alt)
                        .width('50%').height('auto')        
   
                
                    .appendTo($('#content'))

                $("#content").append("<p>NBA 2K22 Arcade Edition is one of several games that's bound for Apple Arcade in the coming weeks. The follow-up to NBA 2K21, which is also available on Apple's game subscription service, includes a new mode called The Association. You can become the general manager or head coach of an NBA franchise and put together your own team by scouting rookies, making trades and scooping up free agents while managing the budget.</p>").css("font-family","cursive")   
                $("#content").append("<p>The game features current NBA rosters and modes including quick match, online multiplayer and Blacktop, a 3v3 street basketball option. In MyCAREER mode, you can create your own player with a custom look, position, jersey number and play style. You can run drills on a custom court to practice and level up your player in the MyCOURT mode. NBA 2K22 Arcade Edition will debut on the same date as the NBA's 75th season tips off: October 19th.</p>").css("font-family","cursive")    
                $("#content").append("<p>The game features current NBA rosters and modes including quick match, online multiplayer and Blacktop, a 3v3 street basketball option. In MyCAREER mode, you can create your own player with a custom look, position, jersey number and play style. You can run drills on a custom court to practice and level up your player in the MyCOURT mode. NBA 2K22 Arcade Edition will debut on the same date as the NBA's 75th season tips off: October 19th.</p>").css("font-family","cursive")    
        
            
                $("#USB").append("<h2>The Morning After: Someone made a USB-C iPhone</h2>")
                $("#usb-img").attr("src","https://s.yimg.com/os/creatr-uploaded-images/2021-10/52ab9c50-2b4c-11ec-9b95-b31298297f21").css("width","50%","height","auto")
                $("#usb-content").append("<p>Years ago, I wrote this piece about how I really wanted the iPhone to adopt USB-C and retire its Lightning connector. This was just after the advent of the company’s first iPhone Pro models with pro level features, like surgical-grade stainless steel and, er, three cameras. Fast-forward to now, just after the launch of the iPhone 13 series, and I still don’t have my USB-C iPhone. Fortunately, there are engineers that like a challenge. </p>").css("font-family","cursive")
                $("#usb-content").append("<p>On his YouTube channel, Swiss Federal Institute of Technology student Ken Pillonel teased an iPhone X with a USB-C port, promising a full video later on how it was done. In an earlier video, he also explained how he reverse-engineered the Lightning connector, pulling out an integrated circuit from a third-party cable and hooking it all up to a USB-C connector. Yes, this is not something most of us should attempt.  </p>").css("font-family","cursive")
                $("#usb-content").append("<p>It’s certainly possible for Apple to do the same, given the iPad Pro and new mini have USB-C ports. Europe recently proposed USB-C charging as standard for all phones and electronic devices — which may speed up Apple’s adoption.  </p>").css("font-family","cursive")

                $("#Watch").append("<h2>Apple Watch Series 7 review: time and time again</h2>")
                $("#watch-img").attr("src","https://cdn.vox-cdn.com/thumbor/jO3XOGtd6YX1iE7O4Z0j_4njDKo=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22908906/vpavic_211006_4796_0061.jpg").css("width","50%","height","auto").css("font-family","cursive")
                $("#apple-watch").append("<p>That’s a gentle way of saying that if there’s nothing wrong with your current watch, there’s nothing in the Series 7 that should compel you to upgrade. If you’ve been waiting for some key feature before buying your first Apple Watch,</p>").css("font-family","cursive")
                $("#apple-watch").append("<p> I don’t know that it’s here, either. I wrote very nearly the same thing last year about the Series 6 and I think that’s just what we should expect from the Apple Watch series going forward: iterative updates that will be great when you replace your current watch, but not a reason to upgrade.</p>").css("font-family","cursive")
                $("#apple-watch").append("<p>The Apple Watch Series 7 is great. The larger screen and faster charging are the two headline features and both are welcome. The Apple Watch is in a class entirely of its own right now. Nothing else is as good for iPhone users and nothing like it is available for Android users.</p>").css("font-family","cursive")

                $("#Airpods").append("<h2>Apple exploring AirPods that take your temperature and monitor posture: report</h2>")
                $("#airpods-img").attr("src","https://cdn.vox-cdn.com/thumbor/qJsnUPWIE2B2BxIyZH7rBx2aO6Q=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/8321539/akrales_161216_1332_A_0259_v1.jpg").css("width","50%","height","auto")
                $("#apple-airpods").append("<p>Apple is reportedly exploring new health-focused features for its AirPods, according to The Wall Street Journal. Features might include using the earbuds to take wearers’ temperature, monitor their posture, and improve their hearing. The WSJ notes that it’s not clear if the latter function differs significantly from AirPods’ existing “Conversation Boost” feature.</p>").css("font-family","cursive")
                $("#apple-airpods").append("<p>According to the WSJ, these functions “aren’t expected by next year and might never be rolled out to consumers or the timing could change.” In other words, it sounds like the iPhone maker is just exploring these new health features, rather than actively working on integrating them with products due out in the next year or two.</p>").css("font-family","cursive")
                $("#apple-airpods").append("<p>Adding these sensors would make sense for Apple. The company has increasingly marketed its products on the strength of their health and fitness applications, though so far, most of this attention has been focused on the Apple Watch. Reports last month suggested the company was looking into adding various sensors to the wearable, including monitoring blood pressure, temperature, sleep quality, blood oxygen, and blood sugar.</p>").css("font-family","cursive")

               




                
                
                                    
           
        }
    });
});