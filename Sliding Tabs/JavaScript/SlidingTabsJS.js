function selectedFirstButton()
        {
            var firstButton=document.getElementById('first-button');
            var secondButton=document.getElementById('second-button');
            var thirdButton=document.getElementById('third-button');
            var selector=document.getElementById('selector');
            var circle=document.getElementById('circle');
            firstButton.style.color="#0b57ba";
            secondButton.style.color="black";
            thirdButton.style.color="black";
            selector.style.left="10px";
            circle.style.backgroundColor="#070ede";
            circle.style.color="white";   
        }
        function selectedSecondButton()
        {
            var firstButton=document.getElementById('first-button');
            var secondButton=document.getElementById('second-button');
            var thirdButton=document.getElementById('third-button');
            var selector=document.getElementById('selector');
            var circle=document.getElementById('circle');
            firstButton.style.color="black";
            secondButton.style.color="#0b57ba";
            thirdButton.style.color="black";
            selector.style.left="130px";
            circle.style.backgroundColor="white";
            circle.style.color="black";
        }
        function selectedThirdButton()
        {
            var firstButton=document.getElementById('first-button');
            var secondButton=document.getElementById('second-button');
            var thirdButton=document.getElementById('third-button');
            var selector=document.getElementById('selector');
            var circle=document.getElementById('circle');
            firstButton.style.color="black";
            secondButton.style.color="black";
            thirdButton.style.color="#0b57ba";
            selector.style.left="250px";
            circle.style.backgroundColor="white";
            circle.style.color="black";
        }