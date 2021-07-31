async function commentFormHandler(event) {
    event.preventDefault();
    
    const comment_title = document.querySelector('textarea[name="comment-title"]').value.trim();
    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
    const product_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    console.log(product_id);
  
    if (comment_text && comment_title) {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({
            comment_title,
            comment_text,
            product_id
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    }
}
  
document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);