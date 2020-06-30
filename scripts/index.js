let signupModalContainer = document.getElementById('signup-modal-container');
let signinModalContainer = document.getElementById('signin-modal-container');
let createPostModalContainer = document.getElementById('create-post-modal-container');
let nameText = document.getElementById("name-text");

window.onclick = function(event) {
    if (event.target == signupModalContainer) {
        signupModalContainer.style.display = "none";
        nameText.className = "hide";
        clearForm(document.getElementById("signup-form").elements);
    } else if (event.target == signinModalContainer) {
        signinModalContainer.style.display = "none";
        clearForm(document.getElementById("signin-form").elements);
    } else if (event.target == createPostModalContainer) {
        createPostModalContainer.style.display = "none";
        clearForm(document.getElementById("create-post-form").elements);
    } 
};


let signupOpen = function() {
    signupModalContainer.style.display = "block";
}

let signinOpen = function() {
    signinModalContainer.style.display = "block";
}

let createPostOpen = function() {
    createPostModalContainer.style.display = "block";
}



let signupClose = function() {
    signupModalContainer.style.display = "none";
}

let signinClose = function() {
    signinModalContainer.style.display = "none";
}

let createPostClose = function() {
    createPostModalContainer.style.display = "none";
}

let validateName = function() {
    let name = document.getElementById("name");
    
    if(name.value == "") {
        nameText.className = "danger";
    }
}

let notMember = function() {
    signinClose()
    signupOpen();
}

let clearForm = function(elements) {
    for (var i = 0; i < elements.length - 1; i++) {
        elements[i].value = "";
    }
}
let submitSignUp = function() {
    event.preventDefault();
    var elements = document.getElementById("signup-form").elements;
    var obj = {};
    for (var i = 0; i < elements.length; i++) {
        obj[elements[i].name] = elements[i].value;
    }
    console.log(obj);
    signupClose();
}

let submitSignin = function() {
    event.preventDefault();
    var elements = document.getElementById("signin-form").elements;
    var obj = {};
    for (var i = 0; i < elements.length; i++) {
        var item = elements.item(i);
        obj[item.name] = item.value;
    }

    console.log(obj);
    signinClose();
}


let submitCreatePost = function() {
    event.preventDefault();
    var elements = document.getElementById("create-post-form").elements;
    var obj = {};
    for (var i = 0; i < elements.length; i++) {
        var item = elements.item(i);
        obj[item.name] = item.value;
    }
    console.log(obj);
    createPostClose();
}