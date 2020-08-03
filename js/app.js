class App {
  constructor() {
    this.title = new Simple(titleCons);
    this.subtitle = new Simple(subtitleCons);
    this.quote = new Quote();
    this.timer = new Timer();

    this.timerAnimation = "fadeIn";
    this.setupTimer = null;
  }

  run() {
    root.innerHTML = "";
    this.title.render();
    this.subtitle.render();
    this.timer.render();
    this.quote.render();
  }
}

let app = new App();
app.run();
