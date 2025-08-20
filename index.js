// --------------------------------------------
// createElement() Function Start

const createElement = (tagName, textContent) => {
  const element = document.createElement(tagName);

  if (textContent) {
    element.appendChild(document.createTextNode(textContent));
  }

  return element;
};

// createElement() Function End
// --------------------------------------------

const main = document.getElementsByClassName(`base`);

// --------------------------------------------
// Card() Function Start

const card = (src, alt, title, text, valueName, valueName2, href) => {
  // ELEMENTS
  const article = createElement(`article`);
  const figure = createElement(`figure`);
  const img = createElement(`img`);
  const div = createElement(`div`);
  const h5 = createElement(`h5`, title);
  const p = createElement(`p`, text);

  const section = createElement(`section`);
  const innerDiv = createElement(`div`);
  const innerDiv2 = createElement(`div`);
  const key = createElement(`span`, `CEO: `);
  const value = createElement(`span`, valueName);
  const key2 = createElement(`span`, `Year: `);
  const value2 = createElement(`span`, valueName2);
  const btnGroup = createElement(`div`);
  const a = createElement(`a`, `Visit Us`);

  // ATTRIBUTES
  img.src = src;
  img.alt = alt;
  a.href = href || `#`;

  // CLASSNAME
  article.className = `card`;
  figure.className = `figure`;
  img.className = `figure-img`;
  div.className = `card-body`;
  h5.className = `card-title`;
  p.className = `card-text`;

  section.className = `details`;
  innerDiv.className = `detail-item`;
  innerDiv2.className = `detail-item`;
  key.className = `key`;
  value.className = `value`;
  key2.className = `key2`;
  value2.className = `value2`;
  btnGroup.className = `btn-group`;
  a.className = `card-link`;

  // APPEND ELEMENTS
  article.append(figure, div);
  figure.appendChild(img);

  div.append(h5, p, section, btnGroup);
  section.append(innerDiv, innerDiv2);
  innerDiv.append(key, value);
  innerDiv2.append(key2, value2);
  btnGroup.appendChild(a);
  main[0].appendChild(article);

  return article;
};

card(
  `https://www.microsoft.com/favicon.ico`,
  `Microsoft Logo`,
  `Microsoft`,
  `Microsoft is a multinational technology corporation that develops, licenses, and sells computer software, consumer electronics, and Fpersonal computers.`,
  `Satya Narayan Nadella`,
  `04-April-1975`,
  `https://www.microsoft.com/`
);

card(
  `https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/408px-Google_2015_logo.svg.png`,
  `Google Logo`,
  `Google`,
  `Google is a search engine that provides access to a vastamount of information on the internet. It was founded in 1998by Larry Page and Sergey Brin while they were Ph.D. studentsat Stanford University.`,
  `Sundar Pichai`,
  `1998`,
  `https://www.google.com/`
);

card(
  `https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/135px-Apple_logo_black.svg.png`,
  `Apple Logo`,
  `Apple`,
  `Apple Inc. is a multinational technology company headquarteredin Cupertino, California, USA. It was founded on April 1,1976, by Steve Jobs, Steve Wozniak, and Ronald Wayne`,
  `Timothy Donald Cook`,
  `01-April-1976`,
  `https://www.apple.com/`
);

// Card() Function End
// --------------------------------------------
// Copyright Start

let date = new Date().getFullYear();
document
  .getElementById(`currentYear`)
  .appendChild(document.createTextNode(date));

// Copyright End
// --------------------------------------------
