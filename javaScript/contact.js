
        function onSubClick(event){
            event.preventDefault();
            var userInput = document.getElementById("id_input_name").value;
            var emailInput = document.getElementById("id_input_email").value;
            if(userInput.length < 2){
                alert("Your name is too short!")
            }
            else if(emailInput.indexOf("@") == -1){
                alert("Please enter valid email!");
            }
            else{
                document.getElementById("id_form").submit();
            }
        }
