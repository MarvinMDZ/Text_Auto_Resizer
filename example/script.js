
function resizeMe(className){
	
	var resElement;
	var prefix = className.substring(0,1) !== '.' ? '.' : '';

	resElement = document.querySelectorAll(prefix + className);	
	
	for (var i = resElement.length - 1; i >= 0; i--) {
		var item;
		var currentFontSize;
		do{
			item = resElement[i];
			currentFontSize = parseFloat(window.getComputedStyle(item, null).getPropertyValue('font-size'));
			item.style.fontSize = (currentFontSize - 1)+'px';
		}while(item.parentElement.clientWidth < item.clientWidth || item.parentElement.clientHeight < item.clientHeight);
	}

}

resizeMe('resizable');