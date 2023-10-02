const nameEl = document.querySelector('.name-class');
const timeEl = document.querySelector('.time-class');
const paragraphEl = document.querySelector('.para-class');
const buttonEl = document.querySelector('.button-number');
const imgEl = document.getElementById('img-logo-id-1');



const nameEl2 = document.querySelector('.name-class-2');
const timeEl2 = document.querySelector('.time-class-2');
const paragraphEl2 = document.querySelector('.para-class-2');
const buttonEl2 = document.querySelector('.button-number-2');
const imgEl2 = document.getElementById('img-logo-id-2');



const nameEl3 = document.querySelector('.name-class-3');
const timeEl3 = document.querySelector('.time-class-3');
const paragraphEl3 = document.querySelector('.para-class-3');
const buttonEl3 = document.querySelector('.button-number-3');
const imgEl3 = document.getElementById('img-logo-id-3');



const nameEl4 = document.querySelector('.name-class-4');
const timeEl4 = document.querySelector('.time-class-4');
const paragraphEl4 = document.querySelector('.para-class-4');
const buttonEl4 = document.querySelector('.button-number-4');
const imgEl4 = document.getElementById('img-logo-id-4');






document.addEventListener('DOMContentLoaded', () => {
  fetch('data.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      updateDynamically(data);
    })
    .catch(error => {
      console.error('Error loading or processing JSON data:', error.message);
    });

  

    function updateDynamically(data) {
  const commentId1 = data.comments.find(comment => comment.id === 1);

  if (commentId1) {
    imgEl.src = commentId1.user.image.png;
    nameEl.textContent = commentId1.user.username;
    timeEl.textContent = commentId1.createdAt;
    paragraphEl.textContent = commentId1.content;
    buttonEl.textContent = commentId1.score;
  } else {
    console.log('Comment with ID 1 not found.');
  }

  const commentId2 = data.comments.find(comment => comment.id === 2);

  if (commentId2) {
    imgEl2.src = commentId2.user.image.png;
    nameEl2.textContent = commentId2.user.username;
    timeEl2.textContent = commentId2.createdAt;
    paragraphEl2.textContent = commentId2.content;
    buttonEl2.textContent = commentId2.score;

    // Check if commentId2 has any replies
    if (commentId2.replies.length > 0) {
      const replyId3 = commentId2.replies.find(reply => reply.id === 3);

      if (replyId3) {
        imgEl3.src = replyId3.user.image.png;
        nameEl3.textContent = replyId3.user.username;
        timeEl3.textContent = replyId3.createdAt;
        paragraphEl3.textContent = replyId3.content;
        buttonEl3.textContent = replyId3.score;
      } else {
        console.log('Reply with ID 3 not found in comment with ID 2.');
      }
    }
  } else {
    console.log('Comment with ID 2 not found.');
  }

  if (commentId2.replies.length > 0) {
    const replyId4 = commentId2.replies.find(reply => reply.id === 4);

  if (replyId4) {
    // Update container-4 elements here
    imgEl4.src = replyId4.user.image.png;
    nameEl4.textContent = replyId4.user.username;
    timeEl4.textContent = replyId4.createdAt;
    paragraphEl4.textContent = replyId4.content;
    buttonEl4.textContent = replyId4.score;
  } else {
    console.log('Comment with ID 4 not found.');
   }
  }
 }
});


// Function to handle the reply button click event
  function replyClick(commentId) {
    const commentClone = document.getElementById(`commentClone-${commentId}`);
    if (commentClone) {
      commentClone.style.display = commentClone.style.display === 'block' ? 'none' : 'block';
    } else {
      console.error(`Comment container with ID ${commentId} not found.`);
    }
  }
  

  // Function to handle adding a new comment
  function addComment(commentId) {
    const inputField = document.getElementById(`input-field-${commentId}`);
    const commentText = inputField.value.trim();

    if (commentText !== '') {
      const commentDiv = document.createElement('div');
      commentDiv.classList.add('comment');
      commentDiv.textContent = commentText;

      const commentClone = document.getElementById(`commentClone-${commentId}`);
      commentClone.appendChild(commentDiv);

      // Clear the input field
      inputField.value = '';
    }
  }

  function displayImages() {
    const commentContainers = document.querySelectorAll('.container-5');
    commentContainers.forEach((container, index) => {
      const imgSrc = `./images/avatars/image-maxblagun.png`; // Replace with your image source logic
      const imgElement = document.createElement('img');
      imgElement.src = imgSrc;
      container.querySelector('.comment-img-div img').replaceWith(imgElement);
    });
  }

  // Initialize reply buttons with click event handlers
  const replyButtons = document.querySelectorAll('.reply');
  replyButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const commentId = button.getAttribute('data-comment-id');
      replyClick(commentId);
    });
  });


displayImages();









