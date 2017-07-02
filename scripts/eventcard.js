function eventCard(el) {
	this.el = el;
	this.title = this.el.getElementsByTagName("h1")[0].innerHTML;
	this.owner;
	this.date = this.el.getElementsByTagName("h3")[0].innerHTML;
	this.startTime;
	this.endTime;
	this.venue = this.el.getElementsByTagName("h2")[0].innerHTML;
	this.summary = this.el.getElementsByTagName("h4")[0].innerHTML;
	this.agenda = this.el.getElementsByTagName("dl")[0].innerHTML;
	this.links = this.el.getElementsByTagName("p")[0].innerHTML;
	this.details;
}

eventCard.prototype.divify = function() {
	this.el.classList.add("eventCard");
	this.el.innerHTML = '<div data-index="1" ><p class="title" >'+
	this.title+'</p></div><div data-index="2" ><p class="venue" >'+
	this.venue+'</p><p class="date" >'+
	this.date+'</p><p class="links" >'+
	this.links+'</p><div data-index="3" ><span data-act="1" >Agenda</span><span data-act="2" >Summary</span></div><div data-index="4" ><dl class="agenda hide" >'+
	this.agenda+'</dl><p class="summary hide">'+
	this.summary+'</p></div>';
	var that = this;
	this.el.onclick = function(e) {
		if(e.target.getAttribute("data-act")=="1") {
		that.el.getElementsByClassName("agenda")[0].classList.toggle("hide");
		that.el.getElementsByClassName("summary")[0].classList.add("hide");
		}
		if(e.target.getAttribute("data-act")=="2") {
		that.el.getElementsByClassName("agenda")[0].classList.add("hide");
		that.el.getElementsByClassName("summary")[0].classList.toggle("hide");
		}
	};
};


