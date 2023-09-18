function customRender(reactElement, container) {
  // const createDomElement = document.createElement(reactElement.type);
  // createDomElement.textContent = reactElement.children;
  // createDomElement.setAttribute("href", reactElement.props.href);
  // createDomElement.setAttribute("target", reactElement.props.target);

  // container.appendChild(createDomElement);

  const createDomElement = document.createElement(reactElement.type);
  createDomElement.textContent = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    createDomElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(createDomElement);
}

// Creating HTML react element in object form
const reactElement = {
  // Element's name
  type: "a",
  // Element's attribute
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  // Element's text
  children: "Click me to visit google",
};

// Main root element
const rootElement = document.querySelector("#root");

// Rendering the element
customRender(reactElement, rootElement);
