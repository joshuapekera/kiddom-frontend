$(".navbar-collapse").on("shown.bs.collapse",function(){$(".glyph-flip").addClass("glyphicon-chevron-up").removeClass("glyphicon-chevron-down")}),$(".navbar-collapse").on("hidden.bs.collapse",function(){$(".glyph-flip").addClass("glyphicon-chevron-down").removeClass("glyphicon-chevron-up")});var findIE=function(){var a,b;b=" "+navigator.userAgent,a=document.getElementsByTagName("html")[0],"Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko"===b||b.indexOf("MSIE 11")>-1||b.indexOf("rv:11.0")>-1||b.indexOf("Trident/7.0")>-1?a.className+=" IExplorer IE11":b.indexOf("MSIE 10")>-1?a.className+=" IExplorer IE10":b.indexOf("MSIE 9")>-1?a.className+=" IExplorer IE9":b.indexOf("MSIE")>-1||b.indexOf("Trident")>-1?a.className+=" IExplorer IE-X":a.className+=" NOT-IE"};findIE();