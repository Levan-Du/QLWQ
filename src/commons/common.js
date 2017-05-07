export var getStyle = (element, css) => {
    if (getComputedStyle) {
        return getComputedStyle(element)[css];
    } else {
        return element.currentStyle[css];
    }
}

export var addEvent = (element, type, eventHandler) => {
    if (element.addEventListener) {
        element.addEventListener(type, eventHandler);
    } else if (element.attachEvent) {
        element.attachEvent('on' + type, eventHandler);
    } else {
        element[on + type] = eventHandler;
    }
}
