var songs = [
  { name: "Bài hát 1", file: "song1.mp3" }, 
  { name: "Bài hát 2", file: "song2.mp3" }, 
  { name: "Bài hát 3", file: "song3.mp3" },  
  { name: "Bài hát 4", file: "song4.mp3" },  
  { name: "Bài hát 5", file: "song5.mp3" },  
  { name: "Bài hát 6", file: "song6.mp3" },  
  { name: "Bài hát 7", file: "song7.mp3" },  
  { name: "Bài hát 8", file: "song8.mp3" },  
  { name: "Bài hát 9", file: "song9.mp3" },  
  { name: "Bài hát 10", file: "song10.mp3" }  
];

// Hàm để thông báo bài hát ngẫu nhiên đang được phát
function playRandomSong() {
  var randomIndex = Math.floor(Math.random() * songs.length); 
  var song = songs[randomIndex];  // Lấy thông tin bài hát

  // Cập nhật thông báo với tên bài hát
  var notification = document.getElementById('songNotification');
  notification.textContent = 'Đang phát bài: ' + song.name;

  // Hiển thị thông báo pop-up
  var popup = document.getElementById('popupNotification');
  popup.classList.add('show');

  // Ẩn thông báo sau 3 giây
  setTimeout(function() {
    popup.classList.add('hide');
    // Sau khi ẩn, xóa lớp 'show' để có thể hiển thị lại thông báo
    setTimeout(function() {
      popup.classList.remove('show', 'hide');
    }, 500);  // Thời gian chờ để hiệu ứng ẩn hoàn tất
  }, 3000); // Thời gian hiển thị thông báo

  // Có thể phát nhạc bằng cách tạo thẻ <audio> và chỉ định bài nhạc
  var audio = new Audio(song.file);
  audio.play();
}

// Tự động phát nhạc ngay khi trang được tải
window.onload = function() {
  playRandomSong();
  setInterval(playRandomSong, 5000);  // Tự động phát nhạc mỗi 5 giây
};
