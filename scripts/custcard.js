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

}

custCard.prototype.animator = function() {
	var that = this;
	//that.ul.classList.add("anim");
	that.ul.style.transform = "translate3d(-"+this.cw+"px,0,0)";
  curr_width = this.ul.getElementsByTagName("li")[0].offsetWidth;
	if(this.cw>=curr_width) {
		this.cw = 0;
		that.ul.classList.remove("anim");
		that.ul.style.transform = "translate3d(0,0,0)";
		that.ul.appendChild(that.ul.getElementsByTagName("li")[0]);
	}
	this.cw = this.cw+1;
};

var cc = new custCard(document.getElementsByClassName("custCard")[0]);

 setInterval(function(){cc.animator();},10);
