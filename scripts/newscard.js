function newsCard(el) {
	this.el = el;
	this.title = this.el.getElementsByTagName("h1")[0].innerHTML;
	this.cover = this.el.getElementsByTagName("img")[0].src;
	this.date =  this.el.getElementsByTagName("h2")[0].innerHTML;
	this.highlight = this.el.getElementsByTagName("h3")[0].innerHTML;
	this.content = this.el.getElementsByTagName("p")[1].innerHTML;
	
}

newsCard.prototype.divify = function() {
	this.el.classList.add("newsCard");
	this.el.innerHTML = '<div data-index="1" ><p class="title" >'+this.title+'</p><p><img src="'+
	this.cover+'" alt="'+this.title+'" /></p><p class="date" >'+this.date+'</p><p class="highlight">'+
	this.highlight+'</p></div><div data-index="2" ><span><a target="_blank" href="https://twitter.com/intent/tweet?text='+encodeURI(this.title+'\nRead at :&nbsp '+window.location.href)+'" >Tweet</a></span><span data-act="1" >Read</span></div><div data-index="3" ><p class="long hide">'+
	this.content+'</p></div>';
	
	var that = this;
	this.el.onclick = function(e) {
		if(e.target.getAttribute("data-act")=="1") {
		that.el.getElementsByClassName("long")[0].classList.toggle("hide");
		}
		
	};
};

