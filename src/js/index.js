// The addEventListener() method attaches an event handler to an element without overwriting existing event handlers.
// The setAttribute, sets the value of an attribute on the specified element. If the attribute already exists, the value is updated; otherwise a new attribute is added with the specified name and value.

// With querySelectorAll I will get an array

const select = document.querySelector('#select');
const image = document.querySelector('.image');

select.addEventListener('change', () => {
image.setAttribute('src', `img/gato${select.value}.jpg`);
});

let styleBody = document.querySelectorAll("body");
let h1Style = document.querySelectorAll("h1");
let selectStyle = document.querySelectorAll("select");
let imgStyle = document.querySelectorAll("img");
let sectionStyle = document.querySelectorAll(".section");

styleBody.forEach((body) => {
  body.style.minWidth = "320px";
  body.style.minHeight = "100vh";
  body.style.display = "flex";
  body.style.justifyContent = "center";
  body.style.alignItems = "center";
  body.style.backgroundColor = "pink";
  body.style.padding = "20px";
  body.style.fontFamily = "Arial, Helvetica, sans-serif";
});

h1Style.forEach((h1) => {
  h1.style.marginTop = "2rem";
  h1.style.color = "rgb(85, 84, 84)";
});

selectStyle.forEach((select) => {
  select.style.width = "130px";
  select.style.padding = "2px";
  select.style.marginTop = "2rem";
  select.style.fontFamily = "Arial, Helvetica, sans-serif";
  select.style.fontSize = "16px";
  select.style.borderRadius = "6px";
});

imgStyle.forEach((img) => {
  img.style.width = "95%";
  img.style.maxWidth = "250px";
  img.style.marginTop = "20px";
  img.style.borderRadius = "8px";
});

sectionStyle.forEach((section) => {
  section.style.width = "85%";
  section.style.maxWidth = "500px";
  section.style.height = "500px";
  section.style.padding = "0 10px";
  section.style.textAlign = "center";
  section.style.backgroundColor = "#DBCED7";
  section.style.borderRadius = "30px";
});