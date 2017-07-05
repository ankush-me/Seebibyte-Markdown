function eventDeck(el,eid) {
	this.el = el;
	this.div = [];
	this.eid = eid;
}

eventDeck.prototype.divify = function() {
	this.div[0] = this.el;
	for(var i=1;i<=8;i++) {
		this.div[i]=document.createElement("div");
		this.div[i].setAttribute("data-index",i);
		this.el.appendChild(this.div[i]);
	}
	this.div[1].appendChild(this.div[2]);
	this.div[1].appendChild(this.div[3]);
	this.div[5].appendChild(this.div[6]);
	this.div[5].appendChild(this.div[7]);
	
	
	
};

eventDeck.prototype.loadCanvas = function() {
	var that = this;
	var lc = new jaxer("events/"+this.eid+"/data.json", function(data){
	var obj = JSON.parse(data);
	that.div[3].innerHTML = '<p class="date" >'+obj.date
	+'</p><p class="titleF" >'+obj.titleF
	+'</p><p class="titleL" >'+obj.titleL
	+'</p><p class="organizer" >'+obj.organizer+'</p>';
	that.div[2].style.backgroundImage = 'url('+obj.imgsrc+')';
	that.div[4].innerHTML = '<p><span class="eventid" ></span><span class="tweet" ></span></p>'
	that.div[4].getElementsByClassName("eventid")[0].innerHTML = "#"+that.eid;
	that.div[4].getElementsByClassName("tweet")[0].innerHTML = '<a target="_blank" href="https://twitter.com/intent/tweet?text='+
	encodeURI(obj.titleF+' '+obj.titleL+' on '+obj.date+' by '+obj.organizer+'\n&hashtags='+that.eid)+'" >Share on Twitter</a>';
	});
	lc.req();
};

eventDeck.prototype.loadSummary = function() {
	var that = this;
	var ls = new jaxer("events/"+this.eid+"/summary.md",function(data){
	var md = new Remarkable();
	that.div[6].innerHTML = md.render(data);
	});
	ls.req();
};


eventDeck.prototype.loadMeta = function() {
	var that = this;
	var lm = new jaxer("events/"+this.eid+"/meta.md",function(data){
	var md = new Remarkable();
	that.div[7].innerHTML = md.render(data);
	});
	lm.req();
};

eventDeck.prototype.loadSoftware = function() {
	var that = this;
	var ls = new jaxer("events/"+this.eid+"/software.md",function(data){
	var md = new Remarkable();
	that.div[8].innerHTML = md.render(data);
	var lcel = that.div[8];
	var lclis = lcel.getElementsByTagName("li");
	for(var i=0;i<lclis.length;i++) {
		var lcli = lclis[i];

		var src = lcli.getElementsByTagName("img")[0].getAttribute("src");
		var txt = lcli.getElementsByTagName("p")[0].innerText;
		var lnk = lcli.getElementsByTagName("a")[0].getAttribute("href");

		var lcdiv = document.createElement("div");
		lcdiv.classList.add("linkCard");
		lcdiv.setAttribute("data-img",src);
		lcdiv.setAttribute("data-title",txt);
		lcdiv.setAttribute("data-link",lnk);
		lcli.innerHTML = " ";

	    lcli.appendChild(lcdiv);
	}
	initLinkCards();
	
	});
	ls.req();
};

eventDeck.prototype.run = function() {
	this.divify();
	this.loadCanvas();
	this.loadSummary();
	this.loadMeta();
	this.loadSoftware();
}

