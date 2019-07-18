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
  var loginOrRegister = document.querySelectorAll('.login-content > form > div');
  var loginA = document.querySelectorAll('.login-header-title > a');
  var switchCircle = document.querySelector('.switch-circle');
  var switchButton = document.querySelector('.switch-button');
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

  /* 切换手机号登录/密码登录 */
  for (var i = 0; i < loginA.length; i++) {
    loginA[i].index = i;
    loginA[i].addEventListener('touchend', function () {
      for (var i = 0; i < loginOrRegister.length; i++) {
        loginA[i].className = '';
        loginOrRegister[i].className = '';
      }
      this.className = 'on';
      loginOrRegister[this.index].className = 'on';
    });
  }

  /* 登录界面切换密码明/暗文 */
  var isSwitch = false;
  switchButton.addEventListener('touchend', function () {
    if (!isSwitch) {
      switchCircle.style.transform = 'translateX(27px)';
      this.className = 'switch-button on';
      switchText.innerText = 'abc';
    } else {
      switchCircle.style.transform = 'translateX(0)';
      this.className = 'switch-button off';
      switchText.innerText = '...';
    }
    isSwitch = !isSwitch;
  });

  /* 控制登录界面的 on/off */
  profileLink.addEventListener('touchend', function () {
    login.className = 'on';
  });
  goBack.addEventListener('touchend', function () {
    login.className = 'off';
  });

  /* 点击首页的登录注册 跳转到登录注册 */
  headerLogin.addEventListener('touchend', function () {
    login.className = 'on';
  });
};