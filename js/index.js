function CountdownTimer(elm, tl, mes) {
  this.initialize.apply(this, arguments);
  }
  CountdownTimer.prototype = {
  initialize: function (elm, tl, mes) {
  this.elem = document.getElementById(elm);
  this.tl = tl;
  this.mes = mes;
  }, countDown: function () {
  var timer = '';
  var today = new Date();
  var day = Math.floor((this.tl - today) / (24 * 60 * 60 * 1000));
  var hour = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  var min = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / (60 * 1000)) % 60;
  var sec = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / 1000) % 60 % 60;
  var milli = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / 10) % 100;
  var me = this;
  
  if ((this.tl - today) > 0) {
  if (day)
  timer += '' + day + 'd ';
  if (hour)
  timer += '' + hour + 'h ';
  timer += '' + this.addZero(min) + 'm ' +
      this.addZero(sec) + 's';
  this.elem.innerHTML = timer;
  tid = setTimeout(function () {
  me.countDown();
  }, 10);
  } else {
  this.elem.innerHTML = this.mes;
  return;
  }
  }, addZero: function (num) {
  return ('0' + num).slice(-2);
  }
  }
  function CDT() {
  var tl = new Date('2022/6/18 9:30:00');// 日付指定
  var timer = new CountdownTimer('CDT', tl, '翠翔祭2022は終了しました');
  timer.countDown();
  }
  
  
  
  window.onload = function () {
  CDT();
  CDT01();
  }

