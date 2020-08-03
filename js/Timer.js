class Timer {
  constructor() {
    let show = "timerShow";
    let animation = "timerAnnimation";
    this.showStorage = show;
    this.timerFormat = "timerFormat";
    this.animationStorage = animation;
    this.id = "timer";
    this.tag = "p";
    this.timerInterval = null;
    this.show = getStorage(show, checkTrueValue) == checkTrueValue;
    this.format = getStorage(this.timerFormat, "LTS");
    this.animation = getStorage(animation, "fadeIn");
    this.render();
  }

  updateShow(newVal) {
    window.localStorage.setItem(this.showStorage, newVal);
    this.show = newVal;
    this.render();
  }

  updateFormat(newVal) {
    window.localStorage.setItem(this.timerFormat, newVal);
    this.format = newVal;
    this.render();
  }

  updateAnnimation(newVal) {
    window.localStorage.setItem(this.animationStorage, newVal);
    this.animation = newVal;
    this.render();
  }

  updateTimer = () => {
    let node = document.querySelector(`#${this.id}`);
    if (node) {
      node.innerText = moment().format(this.format);
    }
  };

  render() {
    if (!this.timerInterval)
      this.timerInterval = setInterval(this.updateTimer, 1000);
    let node = document.querySelector(`#${this.id}`);
    if (this.show) {
      if (!node) {
        node = document.createElement(this.tag);
        node.id = this.id;
      }

      if (this.animation) getAnimationClassName(node, this.animation);

      root.appendChild(node);
      this.updateTimer();
    } else {
      if (node) node.remove();
      if (this.timerInterval) clearInterval(this.timerInterval);
    }
  }
}
