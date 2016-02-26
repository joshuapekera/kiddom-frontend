//

$('.navbar-collapse').on('shown.bs.collapse', function() {
    $(".glyph-flip").addClass('glyphicon-chevron-up').removeClass('glyphicon-chevron-down');
  });

$('.navbar-collapse').on('hidden.bs.collapse', function() {
    $(".glyph-flip").addClass('glyphicon-chevron-down').removeClass('glyphicon-chevron-up');
  });



var findIE = function(){
	// Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.109 Safari/537.36
	var _Html, _uAgent;

	_uAgent = " " + navigator.userAgent;

	_Html = document.getElementsByTagName('html')[0];

	if (_uAgent === 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko' || _uAgent.indexOf('MSIE 11') > -1 || _uAgent.indexOf('rv:11.0') > -1 || _uAgent.indexOf('Trident/7.0') > -1 ) {
	  _Html.className += ' IExplorer IE11';
	} else if (_uAgent.indexOf('MSIE 10') > -1) {
	  _Html.className += ' IExplorer IE10';
	} else if (_uAgent.indexOf('MSIE 9') > -1) {
	  _Html.className += ' IExplorer IE9';
	} else if (_uAgent.indexOf('MSIE') > -1 || _uAgent.indexOf('Trident') > -1 ) {
	  _Html.className += ' IExplorer IE-X';
	}
	else{
	  _Html.className += ' NOT-IE';
	}
};

//window.onLoad = function(){
	findIE();
//};

