// 録音開始ボタンのトリガー
const startRec = document.querySelector('.speak__rec__btn');
startRec.addEventListener('click',function() {
   document.querySelector('.speak__rec').classList.remove('inview');
   document.querySelector('.speak__now-recording').classList.add('inview');
});

// 録音停止ボタンのトリガー
const stopRec = document.querySelector('.speak__now-recording__btn');
stopRec.addEventListener('click',function() {
   document.querySelector('.speak__now-recording').classList.remove('inview');
   document.querySelector('.speak__stop').classList.add('inview');
});