function validateIme()
{
    var username = document.getElementById("name");
    username.classList.remove("error");
    document.getElementById("error-ime").innerHTML = "";

  
    var regex = /^([a-zA-Z]{2,}\s[a-zA-z]{2,})/; //minimalno 5 karaktera (2 karaktera, space, 2 karaktera)...
    if (!regex.test(username.value)) {
        username.classList.add("error");
        document.getElementById("error-ime").innerHTML = "Samo slova. Min input: 5 karaktera. Razmak izmedju imena i prezimena";
        return false;
    }
    return true;
}

function validateEmail()
{
    var email = document.getElementById("email");
    email.classList.remove("error");
    document.getElementById("error-email").innerHTML = "";

    if (email.value.length<1) {
        email.classList.add("error");
        document.getElementById("error-email").innerHTML = "Niste unijeli vas email.";
        return false;
    }
    return true;
}

function validateText()
{
    var text = document.getElementById("text");
    text.classList.remove("error");
    document.getElementById("error-text").innerHTML = "";

    if (text.value.length<1) {
        text.classList.add("error");
        document.getElementById("error-text").innerHTML = "Niste unijeli vašu poruku.";
        return false;
    }
    return true;
}

function validateForm()
{
    var ime= validateIme();
    var email = validateEmail();
    var poruka = validateText();

    if(ime && email && poruka)
    {
        return true;
    }
    return false;
}
