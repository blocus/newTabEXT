const configForm = [
  {
    title: "Title",
    toConfig: [
      { label: "Show title", id: "titleShow", type: "checkbox" },
      { label: "Title", id: "titleText", type: "text" },
      {
        label: "Title annimation",
        id: "titleAnnimation",
        type: "annimation",
      },
    ],
  },
  {
    title: "Subtitle",
    toConfig: [
      { label: "Show subtitle", id: "subtitleShow", type: "checkbox" },
      { label: "Subtitle", id: "subtitleText", type: "textarea" },
      {
        label: "Subtitle annimation",
        id: "subtitleAnnimation",
        type: "annimation",
      },
    ],
  },
  {
    title: "Timer",
    toConfig: [
      { label: "Show timer", id: "timerShow", type: "checkbox" },
      { label: "Timer", id: "timerFormat", type: "timeformat" },
      {
        label: "Timer annimation",
        id: "timerAnnimation",
        type: "annimation",
      },
    ],
  },
  {
    title: "Quotes",
    toConfig: [
      { label: "Show quote", id: "showQuote", type: "checkbox" },
      { label: "Refresh quote", id: "refreshQuote", type: "range" },
      {
        label: "Quote annimation",
        id: "animationQuote",
        type: "annimation",
      },
    ],
  },
];

const getCheckbox = (id) => {
  let field = document.createElement("input");
  field.id = id;
  field.type = "checkbox";
  field.checked = window.localStorage[id] == checkTrueValue;
  return field;
};
const getText = (id) => {
  let field = document.createElement("input");
  field.id = id;
  field.type = "text";
  field.value = window.localStorage[id];

  return field;
};
const getTextarea = (id) => {
  let field = document.createElement("textarea");
  field.id = id;
  field.value = window.localStorage[id];

  return field;
};

const getTimeFormat = (id) => {
  let field = document.createElement("select");
  field.id = id;
  field.value = window.localStorage[id];
  timeForms.forEach((e, i) => {
    let item = document.createElement("option");
    item.innerText = moment().format(e);
    item.value = e;
    field.appendChild(item);
  });
  return field;
};

const getRange = (id) => {
  let field = document.createElement("input");
  field.id = id;
  field.type = "range";
  field.value = window.localStorage[id];

  return field;
};
const getAnnimation = (id) => {
  let field = document.createElement("select");

  annimations.forEach((e, i) => {
    let item = document.createElement("option");
    item.innerText = e;
    item.value = e;
    field.appendChild(item);
  });

  field.id = id;
  field.value = window.localStorage[id];

  return field;
};

const getField = (type, id) => {
  let field;
  if (type === "checkbox") field = getCheckbox(id);
  else if (type === "text") field = getText(id);
  else if (type === "textarea") field = getTextarea(id);
  else if (type === "timeformat") field = getTimeFormat(id);
  else if (type === "range") field = getRange(id);
  else if (type === "annimation") field = getAnnimation(id);

  return field;
};

configBtn.addEventListener("click", () => {
  chonfig.show();
});

drop.addEventListener("click", () => {
  chonfig.hide();
});

class Config {
  constructor() {
    this.configStatus = false;
  }

  render() {
    config.innerHTML = "";
    const configTitle = document.createElement("h1");
    configTitle.innerText = "Configure new tab";
    config.appendChild(configTitle);
    configForm.forEach((item, i) => {
      let element = document.createElement("fieldset");
      let legend = document.createElement("legend");
      legend.innerText = item.title;
      element.appendChild(legend);

      item.toConfig.forEach((e, i) => {
        let div = document.createElement("div");

        let label = document.createElement("label");
        label.innerText = e.label;
        label.htmlFor = e.id;

        let field = getField(e.type, e.id);
        if (["checkbox"].includes(e.type)) {
          field.addEventListener("input", (event) => {
            window.localStorage.setItem(e.id, event.target.checked);
          });
        } else if (["text", "textarea", "checkbox"].includes(e.type)) {
          field.addEventListener("input", (event) => {
            window.localStorage.setItem(e.id, field.value);
          });
        } else {
          field.addEventListener("change", (event) => {
            window.localStorage.setItem(e.id, field.value);
          });
        }

        div.appendChild(label);
        div.appendChild(field);
        element.appendChild(div);
      });

      config.appendChild(element);
    });
  }

  show() {
    drop.style.display = "block";
    config.style.display = "block";
    configBtn.style.display = "none";
    getAnimationClassName(drop, "fadeIn");
    this.configStatus = true;
    getAnimationClassName(config, "fadeIn");
    this.render();
  }

  hide() {
    app = new App();
    app.run();
    this.configStatus = false;
    configBtn.style.display = "block";
    getAnimationClassName(drop, "fadeOut").then(
      () => (drop.style.display = "none")
    );
    getAnimationClassName(config, "fadeOut").then(
      () => (config.style.display = "none")
    );
  }
}

var chonfig = new Config();
chonfig.render();
