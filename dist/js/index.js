"use strict";

/* rem 适配 */
(function (width) {
  var size = document.documentElement.clientWidth / (width / 100);
  document.documentElement.style.fontSize = size + "px";
  document.body.style.fontSize = "14px";
})(375);

//-------------
window.onload = function () {
  var contentList = document.querySelectorAll('#app .content > div');
  var guideItems = document.querySelectorAll('#app .guide-item');
  var profileLink = document.querySelector('#app .profile-link');
  var lgoinOrRegister = document.querySelectorAll('.login-content > form > div');
  var loginA = document.querySelectorAll('.login-header-title > a');
  var switchCircle = document.querySelector('.switch-circle');
  var switchText = document.querySelector('.switch-text');
  var goBack = document.querySelector('.go-back');
  var login = document.querySelector('#app > div');
  var headerLogin = document.querySelector('.header-login');

  /* swiper */
  var swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination'
    }
  });

  /* footer tab切换 */
  for (var i = 0; i < guideItems.length; i++) {
    // 给每个 guideItems 注册一个下标
    guideItems[i].index = i;
    // 给 guideItems[i] 添加手指离开屏幕事件
    guideItems[i].addEventListener('touchend', function () {
      for (var i = 0; i < guideItems.length; i++) {
        // 清除 guideItems[i] 的类 on
        guideItems[i].className = 'guide-item';
        // 清除 contentList[i] 的类 on
        contentList[i].className = '';
      }
      // 给 guideItem[i] 添加类 guide-item on
      this.className = 'guide-item on';
      // 给 contentList[i] 添加类 on
      contentList[this.index].className = 'on';
    });
  }
};