const containers = Array.from(document.querySelectorAll("article, section"));
const heads = containers.map((container) => Array.from(container.querySelectorAll(':scope h1, h2, h3, h4, h5, h6'))).flat();
const uniqueHeadings = new Set(heads);
const paras = containers.map((container) => Array.from(container.querySelectorAll(':scope p'))).flat();
const uniqueParas = new Set(paras);

const elements = [...uniqueHeadings, ...uniqueParas];
console.log("hi");
if (elements){
    let wordCount = 0;
    const wordMatchRegExp = /[^s]+/g;

    elements.forEach((element) => {
        const text = element.textContent;
        const words = text.matchAll(wordMatchRegExp)
        wordCount += [...words].length;
        }
    )
    //match any character that isn't s
    //matchAll returns an iterator and ... will convert it into an array
    //... is spread, so it takes an iterable and expands it into individual elements
    //window.readingSpeed = ((document.getElementById("speed") || {}).value) || 230;
    //console.log("reading speed");
    //console.log(readingSpeed);
    const readingTime = Math.round(wordCount/200);
    const badge = document.createElement("p");
    //tagName describes the type of element to be created
    badge.classList.add("color-secondary-text", "type--caption");
    //this modifies the colour to that of the existing page
    badge.textContent = `⏱️ ${readingTime} min read`;
    //textContext will overwrite the text associated whereas textNode will append it

    const heading = (document.querySelector("article")).querySelector("h1");
    const date = (document.querySelector("article")).querySelector("time")?.parentNode;

    (date ?? heading).insertAdjacentElement("afterend", badge);
    //this insertAdjacentElement will insert the reading time node after the date or heading, depending on if date is null or not
}

