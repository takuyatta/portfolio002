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

// 録音停止ボタンのトリガー
const reStartRec = document.querySelector('.speak__stop__btn');
reStartRec.addEventListener('click',function() {
   document.querySelector('.speak__stop').classList.remove('inview');
   document.querySelector('.speak__now-recording').classList.add('inview');
});


//Listenボタンのトリガー
const listenVoice = document.querySelector('.speak__stop__listen');
listenVoice.addEventListener('click',function() {
   document.querySelector('.speak__stop').classList.add('listening');
});

//Checkボタンのトリガー
const checkVoice = document.querySelector('.speak__stop__check');
checkVoice.addEventListener('click',function() {
    document.querySelector('.speak__stop').classList.remove('inview');
    document.querySelector('.speak__answer').classList.add('inview');
});

//Muteボタンのトリガー
const muteVoice = document.querySelector('.speak__answer__mute');
muteVoice.addEventListener('click',function() {
   document.querySelector('.speak__answer').classList.add('mute');
});

//Nextボタンのトリガー
const nextWord = document.querySelector('.speak__answer__next');
nextWord.addEventListener('click',function() {
   document.querySelector('.speak__answer').classList.remove('inview');
   document.querySelector('.speak__rec').classList.add('inview');
});