let postTitle = document.getElementById("post-title");
let postBody = document.getElementById("post-body");
let editSaveButton = document.getElementById("edit-save");
let likeButton = document.getElementById("like");
let likeText = document.getElementById("like-text");

let commentButton = document.getElementById("comment");
let commentArea = document.getElementById("comment-area");
let commentText = document.getElementById("t1");
let p1 = document.getElementById("p1");

let count = 0;

let editSave = function () {

    if (postTitle.contentEditable == "true") {
        postTitle.contentEditable = "false";
        postBody.contentEditable = "false";
        postTitle.style.outline = "none";
        postBody.style.outline = "none";
        editSaveButton.innerHTML = "Edit";

    } else {
        postTitle.contentEditable = "true";
        postBody.contentEditable = "true";
        postTitle.style.outline = "2px solid pink";
        postBody.style.outline = "2px solid pink";
        editSaveButton.innerHTML = "Save";

    }

}


let like = function () {
    count++;
    likeButton.innerHTML = "liked";

    likeText.innerHTML = count + " likes this";

}

let comment = function () {
    if (commentText.value == "") alert("Please leave a comment!");
    else {
        commentArea.style.display = "block";
        var para = document.createElement("p");
        para.className = "comment";
        var node = document.createTextNode(commentText.value);
        para.appendChild(node);
        
        commentArea.insertBefore(para, commentArea.childNodes[0]);
        commentText.value = "";
    }
}