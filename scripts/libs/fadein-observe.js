// 各要素のフェードインのためのスクロール判定 + inviewクラスの付与の設定

const obj1s = document.querySelectorAll('.observe-obj1'); // タイトル画面の要素DOM
const obj2s = document.querySelectorAll('.observe-obj2'); // タイトル画面の要素DOM
const obj3s = document.querySelectorAll('.observe-obj3'); // タイトル画面の要素DOM


const cb = function(entries, observer) {
   entries.forEach(entry => {
      if(entry.isIntersecting) {  
         entry.target.classList.add('inview');  // ビューポート内に侵入したら inviewクラスを付与
         observer.unobserve(entry.target);  // 一度inviewクラスを付与したら、もう監視をやめる
      } 
   })
}

const options = {
   rootMargin: "-5% 0px 0px 0px", // ビューポート内に 監視要素が5%以上 侵入してから、発火させる
};

const io = new IntersectionObserver(cb, options);


// 複数ある監視対象要素のDOMをそれぞれ配列化しておく
obj1s.forEach(obj1 => io.observe(obj1));
obj2s.forEach(obj2 => io.observe(obj2));
obj3s.forEach(obj3 => io.observe(obj3));


// トップのカルーセルより下にスクロールしたら、ヘッダーが見えにくくなるので、その範囲に反応させてヘッダーに黒い背景幕を敷く
// const headerLine = document.querySelector('.top');


// const headerFilm = function(entries, observer) {
//    entries.forEach(entry => {
//       if(entry.isIntersecting) { 
//          document.querySelector('.header__back-film').classList.remove('enter');
//       } else { 
//          document.querySelector('.header__back-film').classList.add('enter');
//       }
//    })
// }

// const headerOptions = {
//    rootMargin: "-8% 0px 0px 0px",
// };

// const bridge_io = new IntersectionObserver(headerFilm, headerOptions);
// bridge_io.observe(headerLine);