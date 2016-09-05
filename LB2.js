$(function () {
  var ua = navigator.userAgent.toLowerCase();
  var ver = navigator.appVersion.toLowerCase();
  var browser = {
    ie6: ver.indexOf('msie 6.') > -1
    , ie7: ver.indexOf('msie 7.') > -1
    , ie8: ver.indexOf('msie 8.') > -1
    , ie9: ver.indexOf('msie 9.') > -1
    , ie10: ver.indexOf('msie 10.') > -1
    , ie11: ua.indexOf('trident/7') > -1
    , edge: ua.indexOf('edge') > -1
    , chrome: ua.indexOf('chrome') > -1
    , firefox: ua.indexOf('firefox') > -1
    , safari: ua.indexOf('safari') > -1
    , opera: ua.indexOf('opera') > -1
  }
  var $body = $("body");
  var mode = $body.attr("blockmode");
  if (mode == undefined) mode = "black";
  var list = $body.attr("list");
  if (list == undefined) list = ["ie6,ie7,ie8,ie9,ie10,ie11,edge"];
  else list = list.split(",");
  if ((function () {
      var b = !(mode == "black");
      $.each(supported, function (i, v) {
        if (browser[v]) {
          b = !b;
          return;
        }
      });
      return b;
    })()) {
    $body.addClass("unsupported");
  }
});
