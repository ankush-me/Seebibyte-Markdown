function custCard(el) {
	this.el = el;
	this.ul = this.el.getElementsByTagName("ul")[0];
	this.li = this.el.getElementsByTagName("li");
	this.idx = 0;
	this.len = this.li.length;
	this.div = [];
	this.liw = this.li[0].clientWidth;
	this.ulw = this.ul.clientWidth;
	this.cw = 0;
	// console.log(this.cw);
	// console.log(this.liw);
	// console.log(this.ulw);
}

custCard.prototype.animator = function() {
	this.ul.style.transform = "translate3d(-"+this.cw+"px,0,0)";
	this.cw = (this.cw+this.liw)%this.ulw;
};

var cc = new custCard(document.getElementsByClassName("custCard")[0]);

setInterval(function() {
	cc.animator();
},2000);
