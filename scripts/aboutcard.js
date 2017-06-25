function aboutCard(el) {
  this.el =   el;
  this.img =  this.el.getAttribute("data-img");
  this.name = this.el.getAttribute("data-name");
  this.href = this.el.getAttribute("data-href");
  this.info = this.el.innerText;
  this.cimg;this.cname;this.cinfo;
  this.arr = [];
  this.cidx = 0;
  this.len = 360;
  this.el.classList.add("animated");
  this.c4div;this.c6div;
}

function PrefixedEvent(element, type, callback) {
  var pfx = ["webkit", "moz", "MS", "o", ""];
    for (var p = 0; p < pfx.length; p++) {
        if (!pfx[p]) type = type.toLowerCase();
        element.addEventListener(pfx[p]+type, callback, false);
    }
}

aboutCard.prototype.deskmode = function() {
		this.c4div = document.createElement("div");
		this.c6div = document.createElement("div");
		this.c4div.setAttribute("data-width","40");
		this.c6div.setAttribute("data-width","60");
		this.c4div.appendChild(this.cimg);
		this.c4div.appendChild(this.cname);
		this.c6div.appendChild(this.cinfo);
		this.el.innerHTML = "";
		this.el.appendChild(this.c4div);
		this.el.appendChild(this.c6div);
		this.cinfo.style.display = "block";
		this.len = 750;
		this.showtext();
		
	};

aboutCard.prototype.divify = function() {
  this.cimg = document.createElement("div");
  this.cimg.setAttribute("data-ac","1");
  this.cname = document.createElement("div");
  this.cname.setAttribute("data-ac","2");
  this.cinfo = document.createElement("div");
  this.cinfo.setAttribute("data-ac","3");
  this.cimg.innerHTML = '<a href="'+this.href+'"><img src="'+this.img+'" alt="'+this.name+'" /></a>';
  this.cname.innerHTML = '<h1>'+this.name+'</h1><p><span data-acspan="1">ABOUT</span></p>';
  this.cinfo.innerHTML = '<p></p>';
  this.el.innerHTML = "";
  this.el.appendChild(this.cimg);
  this.el.appendChild(this.cname);
  this.el.appendChild(this.cinfo);
  this.cinfo.style.display = "none";
  
  var that = this;
  var about = this.cname.querySelectorAll('span[data-acspan="1"]')[0];
  this.cname.onclick = function(e) {
    if(e.target.getAttribute("data-acspan")==="1") {
     that.view(); 
     that.el.classList.add("fadeInUp");
     that.el.classList.remove("fadeInDown");
    }
    
    
  };
  
  if(window.innerWidth>=960) {
	  this.deskmode();
  }
  
};

aboutCard.prototype.view = function() {
  this.cinfo.style.display = "block";
  this.cimg.style.display = "none";
  this.cname.innerHTML = '<h2>'+this.name+'</h2>';
  this.cinfo.innerHTML = "";
  this.showtext();
  this.cinfo.classList.add("animated");
  var that = this;
  this.cname.onclick = function() {
    that.divify();
    that.el.classList.add("fadeInDown");
    that.el.classList.remove("fadeInUp");
  };
};

aboutCard.prototype.animate = function() {
  var that = this;
  var animation ="fadeIn";
    that.cinfo.classList.add(animation); 
    PrefixedEvent(that.cinfo, "AnimationEnd",function() {
      that.cinfo.classList.remove(animation);
    });
    
}

aboutCard.prototype.showtext = function() {
  if(this.info.length<=this.len) {
  this.cinfo.innerHTML = '<p>'+this.info.substr(this.cidx,this.len)+'</p>';
  }
  else if(this.info.length>this.cidx+this.len && this.cidx!==0) {
  this.cinfo.innerHTML = '<p>'+this.info.substr(this.cidx,this.len)+'...</p><p><span data-acspan="11">BACK</span><span data-acspan="12" >MORE</span></p>';
  }
  else if(this.info.length>this.cidx+this.len && this.cidx===0) {
  this.cinfo.innerHTML = '<p>'+this.info.substr(this.cidx,this.len)+'...</p><p><span data-acspan="12" >MORE</span></p>';
  }
  else if(this.info.length<=this.cidx+this.len) {
  this.cinfo.innerHTML = '<p>'+this.info.substr(this.cidx,this.len)+'</p><p><span data-acspan="11" >BACK</span></p>';
  }
  var that = this;
  var next = this.cinfo.querySelectorAll('span[data-acspan="12"]')[0];
  var back = this.cinfo.querySelectorAll('span[data-acspan="11"]')[0];
    if(next) {
    next.onclick = function() {
    that.cidx+=that.len;
    that.showtext();
    that.animate();
    };
    }
    if(back) {
    back.onclick = function() {
    that.cidx-=that.len;
    that.showtext();
    that.animate();
    };
    }
	
	
  
};
function initAboutCards() {
var aboutCards = document.getElementsByClassName("aboutCard");
for(var i=0;i<aboutCards.length;i++) {
var acnew = new aboutCard(aboutCards[i]);
acnew.divify(); 

}	
}


