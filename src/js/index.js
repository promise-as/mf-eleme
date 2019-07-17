/* rem 适配 */
(function (width) {
  var size = document.documentElement.clientWidth / (width / 100);
  document.documentElement.style.fontSize = size + "px";
  document.body.style.fontSize = "14px";
})(375);


//-------------
window.onload = function () {

  /* swiper */
  var swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination'
    }
  });
};