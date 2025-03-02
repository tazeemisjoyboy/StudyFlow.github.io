// Update Word Count
function updateWordCount() {
    const text = document.getElementById('wordCountTextarea').value.trim();
    const words = text.match(/\b\w+\b/g) || [];
    document.getElementById('wordCountResult').textContent = words.length;
  }
  
  // Toggle Focus Music
  let isMuted = true;
  function toggleMusic() {
    const player = document.getElementById("focusMusicPlayer");
    isMuted = !isMuted;
    player.contentWindow.postMessage('{"event":"command","func":"mute","args":[' + isMuted + ']}', '*');
    document.getElementById('musicStatus').textContent = isMuted ? 'Off' : 'On';
  }
  
  // Fetch New Quote
  function fetchNewQuote() {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        document.getElementById('quoteText').textContent = data.content;
        document.getElementById('quoteAuthor').textContent = `— ${data.author}`;
      })
      .catch(error => console.error('Error fetching quote:', error));
  }
  
  // Initialize Tools
  fetchNewQuote();