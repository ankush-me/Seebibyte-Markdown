
function initHeader() {
document.getElementById("hamburger").onclick = function() {
	document.body.classList.toggle("show-mobile-nav");
};

var nav = document.getElementsByClassName("nav-item");
for(var i=0;i<nav.length;i++) {
	nav[i].onclick = function() {
	
	if(document.body.classList.contains("show-mobile-nav")) {
	document.body.classList.remove("show-mobile-nav");	
	}

	}
}
for(var i=0;i<document.getElementsByClassName("has-dropdown").length;i++) {
document.getElementsByClassName("has-dropdown")[i].onclick = function() {
	document.getElementsByClassName("header-dropdown")[i].classList.toggle("showit");
};
}

}

initHeader();
var mdreq;
var mddiv = document.getElementsByClassName("content")[0];
var mdsec = mddiv.getElementsByClassName("markdowner")[0];
var mdsrc = mddiv.getAttribute("data-src");
var hasmd = mddiv.getAttribute("data-hasmd");

function reqContent() {
	mdreq = new XMLHttpRequest();
	mdreq.onreadystatechange = loadContent;
	mdreq.open("GET",mdsrc);
	mdreq.send();
}

function loadContent() {
	if(mdreq.readyState === 4 && mdreq.status == 200) {
	mdsec.innerHTML = "";
	var md = new Remarkable();
	mdsec.innerHTML = md.render(mdreq.responseText);
	init();
	}
}

if(hasmd=="1") {
	reqContent();
}

var ftreq;
var ftsec = document.getElementsByTagName("footer")[0];

function reqFooter() {
	ftreq = new XMLHttpRequest();
	ftreq.onreadystatechange = loadFooter;
	ftreq.open("GET","markdown/footer.md");
	ftreq.send();
}

function loadFooter() {
	if(ftreq.readyState === 4 && ftreq.status == 200) {
	ftsec.innerHTML = "";
	var md = new Remarkable();
	ftsec.innerHTML = md.render(ftreq.responseText);
	}
}

reqFooter();