
var songs = [
  "song1.mp3", 
  "song2.mp3", 
  "song3.mp3",  
  "song4.mp3",  
  "song5.mp3",  
  "song6.mp3",  
  "song7.mp3",  
  "song8.mp3",  
  "song9.mp3",  
  "song10.mp3"  
];

// Hàm để phát nhạc ngẫu nhiên
function playRandomSong() {
  var randomIndex = Math.floor(Math.random() * songs.length); 
  var audioPlayer = document.getElementById('audioPlayer');
  audioPlayer.src = songs[randomIndex];  
  audioPlayer.play();  
}
var audioPlayer = document.getElementById('audioPlayer');
audioPlayer.addEventListener('ended', function() {
  playRandomSong();  
});
