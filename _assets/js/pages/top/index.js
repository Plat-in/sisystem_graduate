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
