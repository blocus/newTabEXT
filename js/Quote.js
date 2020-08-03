class Quote {
  constructor() {
    this.textStorage = "textQuote";
    this.authorStorage = "authorQuote";
    this.showStorage = "showQuote";
    this.animationStorage = "animationQuote";
    this.refreshStorage = "refreshQuote";
    this.updateStorage = "updateQuote";
    this.interval = null;

    this.text = getStorage(this.textStorage, null);
    this.author = getStorage(this.authorStorage, null);

    this.text = this.text == "null" ? null : this.text;
    this.author = this.author == "null" ? null : this.author;
    this.first = true;
    this.show = getStorage(this.showStorage, checkTrueValue) == checkTrueValue;
    this.animation = getStorage(this.animationStorage, "fadeIn");
    this.refresh = parseInt(getStorage(this.refreshStorage, 60));
    this.update = null;
    delete window.localStorage[this.updateStorage];

    this.tag = "div";
    this.quoteTag = "p";
    this.authorTag = "span";
    this.id = "inspire";

    this.updateTime = this.refresh * 1000;
    this.updateQuote();
  }

  updateQuote = () => {
    let item = quotes[Math.floor(Math.random() * quotes.length)];
    // const API_URL = "http://quotes.rest/qod.json";
    // if (this.update !== getDate()) {
    //   console.log("updating");
    //   fetch(API_URL)
    //     .then((res) => res.json())
    //     .then((res) => res.contents.quotes[0])
    //     .then((res) => {
    window.localStorage.setItem(this.updateStorage, getDate());
    window.localStorage.setItem(this.textStorage, item.quote);
    window.localStorage.setItem(this.authorStorage, item.author);

    // this.update = res.date;
    this.text = item.quote;
    this.author = item.author;

    this.render();
    //     });
    // }
  };

  render() {
    if (!this.interval)
      this.interval = setInterval(this.updateQuote, this.updateTime);

    const tag = this.tag;
    const id = this.id;
    const first = this.first;
    let node = document.querySelector(`#${id}`);
    console.log("show", this.show);
    if (this.show) {
      if (!node) {
        node = document.createElement(tag);
        node.id = id;
      }

      node.innerHTML = "";

      const quote = document.createElement(this.quoteTag);
      const author = document.createElement(this.authorTag);

      quote.innerHTML = this.text;
      author.innerHTML = this.author;

      node.appendChild(quote);
      node.appendChild(author);
      if (this.animation) getAnimationClassName(node, this.animation);

      if (first) {
        root.appendChild(node);
      }
    } else {
      if (node) node.remove();
      clearInterval(this.interval);
    }
  }
}
