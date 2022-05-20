// Open Page on Click

function openPage(evt, pageName) {
	var i, pagecontent, pagelinks;
	pagecontent = document.getElementsByClassName("pagecontent");
	for (i = 0; i < pagecontent.length; i++) {
		pagecontent[i].style.display = "none";
	}
	pagelinks = document.getElementsByClassName("pagelinks");
	for (i = 0; i < pagelinks.length; i++) {
		pagelinks[i].className = pagelinks[i].className.replace(" active", "");
	}
	document.getElementById(pageName).style.display = "block";
	evt.currentTarget.className += " active";
}

