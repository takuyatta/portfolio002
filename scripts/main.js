// タイトル内 トライアルボタンのトリガー
const trialBtn = document.querySelector('.title__trial');
trialBtn.addEventListener('click',function() {
   document.querySelector('#global-container').classList.add('contents-open');
});

// メインコンテンツの学習言語選択の クリック時のトリガー
const langSelect = document.querySelector('.top__select__area');
langSelect.addEventListener('click',function() {
   document.querySelector('#main').classList.toggle('language-select');
});

const langSelected = document.querySelectorAll('.lang-checked');
langSelected.forEach(selected => selected.addEventListener('click',function() {
   document.querySelector('#main').classList.toggle('language-select');
}));