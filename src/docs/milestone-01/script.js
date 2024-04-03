window.addEventListener('DOMContentLoaded', function() {
  function scrollToBottom() {
      window.scrollTo(0, document.body.scrollHeight);
  }

  const bottomButton = document.getElementById('bottomButton');
  if (bottomButton) {
      bottomButton.addEventListener('click', scrollToBottom);
  }
});
