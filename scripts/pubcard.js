function pubCard(el) {
	this.el=el;
	this.req;
	this.para=this.el.getElementsByTagName("p");
	this.author=this.para[0];
	this.title=this.para[1];
	this.booktitle=this.para[2];
	
}

pubCard.prototype.getbib = function() {

};