class Simple {
  constructor(props) {
    let { text, show, animation, tag, id, textV, showV, animationV } = props;

    textV = textV ? textV : "Simple Text";
    showV = showV ? showV : true;
    animationV = animationV ? animationV : "fadeIn";

    text = text ? text : "simpleText";
    show = show ? show : "simpleShow";
    animation = animation ? animation : "simpleAnnimation";
    tag = tag ? tag : "h1";
    id = id ? id : "simple";

    this.textStorage = text;
    this.showStorage = show;
    this.animationStorage = animation;

    this.tag = tag;
    this.id = id;

    this.text = getStorage(text, textV);
    this.show = getStorage(show, checkTrueValue) == checkTrueValue;
    this.animation = getStorage(animation, animationV);
    this.render();
  }

  render() {
    const tag = this.tag;
    const id = this.id;

    let node = document.querySelector(`#${id}`);

    if (this.show) {
      let first = false;
      if (!node) {
        first = true;
        node = document.createElement(tag);
        node.id = id;
      }

      node.innerText = this.text;
      if (this.animation) getAnimationClassName(node, this.animation);
      if (first) {
        root.appendChild(node);
      }
    } else {
      if (node) node.remove();
    }
  }

  updateText(newVal) {
    window.localStorage.setItem(this.textStorage, newVal);
    this.text = newVal;
    this.render();
  }

  updateShow(newVal) {
    window.localStorage.setItem(this.showStorage, newVal);
    this.show = newVal;
    this.render();
  }

  updateAnnimation(newVal) {
    window.localStorage.setItem(this.animationStorage, newVal);
    this.animation = newVal;
    this.render();
  }
}
