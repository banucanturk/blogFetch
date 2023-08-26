/*!
* Start Bootstrap - Clean Blog v6.0.9 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/
const urlPrefix = 'https://jsonplaceholder.org/';
const requestPostsUrl = urlPrefix + 'posts';
const btn = document.querySelector('.olderPost');
let posts = [];



// btn.addEventListener('click', function () {
//     fetch(requestPostsUrl)
//         .then(response => response.json())
//         .then(json => {
//             posts = json;
//             render();
//         });
// })

function renderPosts() {
    for (const post of posts) {
        console.log(post.id);

    }

}

function getFirstSentence(content) {
    const sentences = content.split('.');
    if (sentences.length > 0) {
        return sentences[0] + '.';
    }
    return content;
}


const colmd10 = document.querySelector('.posts .row .col-md-10');


function render() {
    for (let i = 0; i < 5; i++) {
        const currPost = posts[i];
        const firstSentence = getFirstSentence(currPost.content);
        colmd10.innerHTML += `
            <div class="post-preview">
                <a href="post.html">
                    <h2 class="post-title">${currPost.title}</h2>
                    <h3 class="post-subtitle">${firstSentence}</h3>
                </a>
                <p class="post-meta">
                    " Posted by "
                    <a href="#!">Start Bootstrap</a>
                    " on ${currPost.publishedAt}"
                </p>
            </div>
            <hr>
        `;
    }
    bindPostsClicks();
}

window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    window.addEventListener('scroll', function () {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if (currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                console.log(123);
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });
})
