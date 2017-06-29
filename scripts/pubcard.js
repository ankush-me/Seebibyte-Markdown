

function pubCard(el,obj) {
	this.el = el;
	this.abs = this.el.getElementsByTagName("p")[0];
	this.anc = this.el.getElementsByTagName("p")[1];
	this.type = obj.entryType;
	this.title = obj.TITLE;
	this.author = obj.AUTHOR;
	this.booktitle = obj.BOOKTITLE;
	this.year = parseInt(obj.YEAR);
	
}

pubCard.prototype.divify = function() {
	this.el.classList.add("pubCard");
	this.el.innerHTML = '<div data-index="1" ><p class="title" >'+this.title
	+'</p></div><div data-index="2" ><p class="author" >'+this.author+'</p><p class="booktitle" >'
	+this.booktitle+'</p><p class="year" >'+this.year+'</p><p class="links" >'+this.anc.innerHTML+'</p></div><div data-index="3" ><span data-act="1" >Abstract</span></div>'+
	'<div data-index="4" ><p class="abstract hide" >'+this.abs.innerHTML+'</p></div>';
}; 

pubCard.prototype.init = function() {
	var that = this;
	this.divify();
	this.el.onclick = function(e) {
		if(e.target.getAttribute("data-act")=="1") {
		that.el.getElementsByClassName("abstract")[0].classList.toggle("hide");
		}
	};
};
