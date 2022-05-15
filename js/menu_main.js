var accItem = document.getElementsByClassName('menuItem');
var accHD = document.getElementsByClassName('menuItemHeading');
for (i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener('click', toggleItem, false);
}

function toggleItem() {
    var itemClass = this.parentNode.className;
    for (i = 0; i < accItem.length; i++) {
        accItem[i].className = 'menuItem close';
    }
    if (itemClass == 'menuItem close') {
        this.parentNode.className = 'menuItem open';
    }
}
