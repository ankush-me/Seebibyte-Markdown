function demoCard(el) {
    this.el = el;
    this.hdiv;
    this.idiv;
    this.pdiv;
    this.adiv;
}

demoCard.prototype.gridy = function() {
    this.hdiv = document.createElement("div");
    this.idiv = document.createElement("div");
    this.pdiv = document.createElement("div");
    this.adiv = document.createElement("div");
    this.hdiv.setAttribute("data-dc", "1");
    this.idiv.setAttribute("data-dc", "2");
    this.pdiv.setAttribute("data-dc", "3");
    this.adiv.setAttribute("data-dc", "4");
    this.pdiv.appendChild(this.el.getElementsByTagName("h1")[0]);
    this.idiv.appendChild(this.el.getElementsByTagName("img")[0]);
    this.pdiv.appendChild(this.el.getElementsByTagName("h2")[0]);
    this.pdiv.appendChild(this.el.getElementsByTagName("p")[1]);
    this.idiv.appendChild(this.el.getElementsByTagName("a")[0]);
    this.idiv.appendChild(this.el.getElementsByTagName("a")[0]);

    this.el.innerHTML = "";
    this.el.appendChild(this.hdiv);
    this.el.appendChild(this.idiv);
    this.el.appendChild(this.pdiv);
    this.el.appendChild(this.adiv);
};
/*
var dc = new demoCard(document.getElementsByClassName("demoCard")[0]);
dc.gridy();
*/