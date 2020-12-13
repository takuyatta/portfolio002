// lesson画面の各単語画像 の クリック時の音声再生トリガー
const playSound = document.querySelectorAll('.lesson__items__item');
playSound.forEach(selectedWord => selectedWord.addEventListener('click',function() {
   document.querySelector('.lesson__items__item').classList.toggle('play-sound');
}));

// Try Speaking!ボタン の クリック時のトリガー
const toRecPage = document.querySelector('.lesson__rec__btn-arrow');
toRecPage.addEventListener('click',function() {
   document.querySelector('#global-container').classList.add('open-rec-page');
});

const backToSoundPage = document.querySelector('.speak__back-arrow');
backToSoundPage.addEventListener('click',function() {
   document.querySelector('#global-container').classList.remove('open-rec-page');
   document.querySelector('.speak__rec').classList.add('inview');
   document.querySelector('.speak__now-recording').classList.remove('inview');
   document.querySelector('.speak__stop').classList.remove('inview');
   document.querySelector('.speak__answer').classList.remove('inview');
});