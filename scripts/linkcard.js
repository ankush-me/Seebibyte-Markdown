function linkCard(el) {
  this.el = el;
  this.img = this.el.getAttribute("data-img");
  this.lnk = this.el.getAttribute("data-link");
  this.title = this.el.getAttribute("data-title");
  this.cimg;this.ctitle;
}

linkCard.prototype.init =  function() {
  this.el.innerHTML = '<a href="'+this.lnk+'" ><img src="'+this.img+'" alt="'+this.title+'" />   <h1>'+this.title+'</h1></a>';
  this.cimg = this.el.getElementsByTagName("img")[0];
  this.ctitle = this.el.getElementsByTagName("h1")[0];
};

function initLinkCards() {
var linkCards = document.getElementsByClassName("linkCard");
for(var i=0;i<linkCards.length;i++) {
  var lc = new linkCard(linkCards[i]);
  lc.init();
}
}
