let deletePostModalContainer = document.getElementById('delete-post-modal-container');

window.onclick = function(event) {
    if (event.target == deletePostModalContainer) {
        deletePostModalContainer.style.display = "none";
    }
};

let deletePostOpen = function(id) {
    deletePostModalContainer.setAttribute('idPost', id);
    deletePostModalContainer.style.display = "block";
}

let deletePostClose = function() {
    deletePostModalContainer.style.display = "none";
}

let deletePost = function() {
    // console.log(e);
    let id = deletePostModalContainer.getAttribute("idPost");
    var post = document.getElementById(id);
    post.remove();
    deletePostClose();
}

