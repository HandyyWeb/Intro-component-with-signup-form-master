function validateForm(){
    var input = document.getElementsByTagName("input");
    for ( let i = 0 ; i < input.length; i++){  /* Start to loop through all input elements */
        var x = input[i].value;
        var attributeName = input[i].getAttribute("name");
        var text1;
        var text2;
        if (x === ""){ /* If there is no content within the input, modify : border / icon visibility / text below the input */
            input[i].style.border = "2px solid tomato"
            document.getElementsByTagName("input")[i].style.backgroundImage = "url(icon-error.svg)"
            if (attributeName === "Email address"){  /* Test the case for email input */
                text1 = `Looks like this is not an email`
                text2 = "email@example/com"
            }
            else {
                text1 = `${attributeName} cannot be empty`; /* Modify the text variable with the appropriate name for each input elements */
                text2 =""
            }
        }
        else { /* If there is content within the input, don't change anything */
            text1 = ""
            text2 = "Email address"
            input[i].style.border = "1px solid gray"  
            document.getElementsByTagName("input")[i].style.backgroundImage = "none"   
        }
        document.getElementsByClassName("text")[i].innerHTML = text1; /* Change the paragraph content for with the text variable that has been previously set*/
        input[i].setAttribute("placeholder", text2); /*Change what is printed inside of the input element when an error occur*/
    }
}
