fetch('./js/comments.json')
.then(res => res.json())
.then(data => allComments(data))

function allComments(data) {
    const commentsDiv = document.getElementById("all-comments")
    data.comments.forEach(comment => {
        const commentLink = document.createElement('a');
        commentLink.classList.add("btn", "btn-secondary", "mt-2", "col-md-8")
        commentLink.href = `./comments/${comment.link}`
        commentLink.target = "_blank"
        commentLink.innerHTML = `${comment.date}: <i class="fa-solid fa-file-pdf fa-xl"></i><br>${comment.title}`
        commentsDiv.prepend(commentLink)
    });
}