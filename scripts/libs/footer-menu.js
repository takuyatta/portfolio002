// モバイルにおいて、メインコンテンツ画面で最上部から下にスクロールしたらヘッダーメニューを出現させる
const inContents = document.querySelector('.contents__wrapper');


const headerFilm = function(entries, observer) {
   entries.forEach(entry => {
      if(entry.isIntersecting) { 
         document.querySelector('.bottom-menu').classList.add('appear');
      } else { 
         document.querySelector('.bottom-menu').classList.remove('appear');
      }
   })
}

const headerOptions = {
   rootMargin: "0px 0px 0px 0px",
};

const footer_io = new IntersectionObserver(headerFilm, headerOptions);
footer_io.observe(inContents);