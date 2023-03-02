/***********************************************
 * Const
 * ********************************************/
const html = document.documentElement;
const body = document.body;
const windowHeight = window.innerHeight;
  // ハンバーガーボタン
const hamburgerButton = document.getElementById('js-hamburgerButton');

 // ハンバーガーメニュー
const header = document.getElementById('js-header');
const headerNav = document.getElementById('js-headerNav');

/***********************************************
  * Method
* ********************************************/
window.addEventListener("load", () => {
  body.classList.add("is-loaded");
});

// ページ内リンクのみ取得
let scroll = new SmoothScroll('a[href*="#"]', {
  speed: 300, //スクロールする速さ
});

//mv以降表示 js-active付与
window.addEventListener('scroll', function () {
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const header = document.getElementById("js-header");
  const mv = document.getElementById("js-mv").clientHeight;;
  if (scrollTop < mv) {
    header.classList.remove("js-active")
  } else {
    header.classList.add("js-active")
  }
});

let offset = 0;
let lastPosition = 0;
let ticking = false;
const height = 1000;

const onScroll = () => {
  if (lastPosition > height) {
    if (lastPosition > offset) {
      header.classList.add('head-animation');
    } else {
      header.classList.remove('head-animation');
    }
    offset = lastPosition;
  }
};

document.addEventListener('scroll', () => {
  lastPosition = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(() => {
      onScroll();
      ticking = false;
    });
    ticking = true;
  }
});

function openNav() {
  const hamburger = document.getElementById("js-hamburger");
  const html = document.documentElement;
  const body = document.body;
  const root = document.documentElement;
  hamburger.addEventListener(
    "click",
    function () {
      const opened = body.classList.contains("is-open");
      if (opened) {
        body.classList.remove("is-open");
        html.style.overflow = '';
      } else {
        body.classList.add("is-open");
        html.style = "overflow: initial";
        html.style.overflow = 'hidden';
      }
    },
    false
  );
  event.stopPropagation();
}

window.addEventListener("load", function () {
  openNav();
});

//ハンバーガーメニュー内をクリックすると閉じる is-navOpenを消す
const closeHeaderNav = ()=>{
   headerNav.addEventListener('click', ()=>{
     const headerNavOpened = body.classList.contains('is-open');
       if (headerNavOpened) {
         body.classList.remove('is-open');
         html.style.overflow = '';
       }
   });
 }
 if(headerNav) {
   closeHeaderNav();
 }



 // inview
/**
 * @function HTMLElement.prototype.inview　HTML要素と画面の交差を判定し処理を実行する
 */
if (!HTMLElement.prototype.inview) {
  Object.defineProperty(HTMLElement.prototype, "inview", {
    configurable: true,
    enumerable: false,
    writable: true,
    /**
     * @function callbackInView  HTML要素が画面内に入った時に実行する関数
     * @function callbackOutView  HTML要素が画面から出た時に実行する関数
     */
    value: function (callbackInView, callbackOutView) {
      const options = {
        root: null,
        rootMargin: "0%", //要素が交差する手前でコールバックを呼び出したい場合はrootMarginに0%以外の値を
        threshold: [0.5], //交差領域が50%変化した時にコールバックを呼び出す
      };
      const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (
            e.isIntersecting &&
            Object.prototype.toString.call(callbackInView) ===
              "[object Function]"
          ) {
            callbackInView(e);
          }
          //要素が画面から出た時
          else if (
            !e.isIntersecting &&
            Object.prototype.toString.call(callbackOutView) ===
              "[object Function]"
          ) {
            callbackOutView(e);
          }
        });
      }, options);
      observer.observe(this);
    },
  });
}
window.addEventListener("load", function () {
  const item = document.querySelectorAll(".iv");
  for (let i = 0; i < item.length; i++) {
    const elem = item[i];
    //要素が画面内に入った時クラスを付与
    setTimeout(function () {
      elem.inview(function () {
        elem.classList.add("view");
      });
    }, 800);
  }
});

const item = document.querySelectorAll(".iv");
for (let i = 0; i < item.length; i++) {
  const elem = item[i];
  //要素が画面内に入った時クラスを付与
  elem.inview(function () {
    elem.classList.add("view");
  });
}


//  ページ内のimg要素サイズを取得
const myFunc = function (src) {
    return new Promise(function(resolve, reject){
        const image = new Image();
        image.src = src;
        image.onload = function(){
            resolve(image);
        }
        image.onerror = function(error){
            reject(error);
        }
    });
}
const imgs = document.getElementsByTagName('img');
for (const img of imgs) {
    const src = img.getAttribute('src');
    myFunc(src)
    .then(function(res){
        if(!img.hasAttribute('width')){
            img.setAttribute('width', res.width);
        }
        if(!img.hasAttribute('height')){
            img.setAttribute('height', res.height);
        }
    })
    .catch(function(error){
        console.log(error);
    });
}

window.addEventListener("load", function () {
  const item = document.querySelectorAll(".p-entry__title");
  for (let i = 0; i < item.length; i++) {
    const elem = item[i];
    //要素が画面内に入った時クラスを付与
    setTimeout(function () {
      elem.inview(function () {
        elem.setAttribute("src", "./assets/images/common/catch_white.gif");
      });
    }, 400);
  }
});

window.addEventListener("load", function () {
  const item = document.querySelectorAll(".gif");
  for (let i = 0; i < item.length; i++) {
    const elem = item[i];
    //要素が画面内に入った時クラスを付与
    setTimeout(function () {
      elem.inview(function () {
        elem.setAttribute("src", "./assets/images/top/catch_orange.gif");
      });
    }, 400);
  }
});
