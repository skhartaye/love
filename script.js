window.onload = () => {
  const romanticSong = document.getElementById('romanticSong');
  romanticSong.volume = 0.3; // Set the volume to a more subtle level

  // Event listener to play music when the user clicks anywhere on the page
  document.body.addEventListener('click', () => {
    romanticSong.play(); // Play the song when the page is clicked
  });

  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};