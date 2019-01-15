
function resizeMe(className){
	
	var resElement;
	var prefix = className.substring(0,1) !== '.' ? '.' : '';
	var item;
	var currentFontSize;

	resElement = document.querySelectorAll(prefix + className);	
	
	for (var i = resElement.length - 1; i >= 0; i--) {
		item = resElement[i];
		while(item.parentElement.clientWidth < item.clientWidth || item.parentElement.clientHeight < item.clientHeight){
			currentFontSize = parseFloat(window.getComputedStyle(item, null).getPropertyValue('font-size'));
			item.style.fontSize = (currentFontSize - 1)+'px';
		}
	}

}

resizeMe('resizable');