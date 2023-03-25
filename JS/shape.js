const previewBox = document.querySelector(".box");

/* width */
const width = document.getElementsByName("width");
const widthResult = document.querySelector(".width-result");

/* height */
const height = document.getElementsByName("height");
const heightResult = document.querySelector(".height-result");

/* bgColor */
const bgColor = document.getElementsByName("bg-color");
const bgColorResult = document.querySelector(".bg-color-result");

/* bdRadius */
const bdRadius = document.getElementsByName("bd-radius");
const bdRadiusResult = document.querySelector(".bd-radius-result");

/* bdStyle */
const bdStyle = document.getElementsByName("bd-style");
const bdStyleResult = document.querySelector(".bd-style-result");

/* bdWidth */
const bdWidth = document.getElementsByName("bd-width");
const bdWidthResult = document.querySelector(".bd-width-result");

/* bdColor */
const bdColor = document.getElementsByName("bd-color");
const bdColorResult = document.querySelector(".bd-color-result");

/* boxSizing */
const boxSizing = document.getElementsByName("box-sizing");
const boxSizingResult = document.querySelector(".box-sizing-result");

/* olStyle */
const olStyle = document.getElementsByName("ol-style");
const olStyleResult = document.querySelector(".ol-style-result");

/* olOffset */
const olOffset = document.getElementsByName("ol-offset");
const olOffsetResult = document.querySelector(".ol-offset-result");

/* olWidth */
const olWidth = document.getElementsByName("ol-width");
const olWidthResult = document.querySelector(".ol-width-result");

/* olColor */
const olColor = document.getElementsByName("ol-color");
const olColorResult = document.querySelector(".ol-color-result");

/* reset */
function reset() {
    widthResult.innerText = "50px";
    heightResult.innerText = "50px";
    bgColorResult.innerText = "black";
    bdRadiusResult.innerText = "0px";
    bdStyleResult.innerText = "none";
    bdWidthResult.innerText = "1px";
    bdColorResult.innerText = "black";
    boxSizingResult.innerText = "content-box";
    olStyleResult.innerText = "none";
    olOffsetResult.innerText = "0px";
    olWidthResult.innerText = "1px";
    olColorResult.innerText = "black";
}

reset();

/* input function */

function addEvent() {
    width.forEach((item) => {
        item.addEventListener("click", () => {
            if (item.checked == true) {
                setValue(1, item.value);
                getValue(1, item.value);
            }
        });
    });

    height.forEach((item) => {
        item.addEventListener("click", () => {
            if (item.checked == true) {
                setValue(2, item.value);
                getValue(2, item.value);
            }
        });
    });

    bgColor.forEach((item) => {
        item.addEventListener("click", () => {
            if (item.checked == true) {
                setValue(3, item.value);
                getValue(3, item.value);
            }
        });
    });

    bdRadius.forEach((item) => {
        item.addEventListener("click", () => {
            if (item.checked == true) {
                setValue(4, item.value);
                getValue(4, item.value);
            }
        });
    });

    bdStyle.forEach((item) => {
        item.addEventListener("click", () => {
            if (item.checked == true) {
                setValue(5, item.value);
                getValue(5, item.value);
            }
        });
    });

    bdWidth.forEach((item) => {
        item.addEventListener("click", () => {
            if (item.checked == true) {
                setValue(6, item.value);
                getValue(6, item.value);
            }
        });
    });

    bdColor.forEach((item) => {
        item.addEventListener("click", () => {
            if (item.checked == true) {
                setValue(7, item.value);
                getValue(7, item.value);
            }
        });
    });

    boxSizing.forEach((item) => {
        item.addEventListener("click", () => {
            if (item.checked == true) {
                setValue(8, item.value);
                getValue(8, item.value);
            }
        });
    });

    olStyle.forEach((item) => {
        item.addEventListener("click", () => {
            if (item.checked == true) {
                setValue(9, item.value);
                getValue(9, item.value);
            }
        });
    });

    olOffset.forEach((item) => {
        item.addEventListener("click", () => {
            if (item.checked == true) {
                setValue(10, item.value);
                getValue(10, item.value);
            }
        });
    });

    olWidth.forEach((item) => {
        item.addEventListener("click", () => {
            if (item.checked == true) {
                setValue(11, item.value);
                getValue(11, item.value);
            }
        });
    });

    olColor.forEach((item) => {
        item.addEventListener("click", () => {
            if (item.checked == true) {
                setValue(12, item.value);
                getValue(12, item.value);
            }
        });
    });
}

addEvent();

function setValue(type, value) {
    if (type === 1) {
        previewBox.style.width = `${value}`;
    }
    if (type === 2) {
        previewBox.style.height = `${value}`;
    }
    if (type === 3) {
        previewBox.style.backgroundColor = `${value}`;
    }
    if (type === 4) {
        previewBox.style.borderRadius = `${value}`;
    }
    if (type === 5) {
        previewBox.style.borderStyle = `${value}`;
    }
    if (type === 6) {
        previewBox.style.borderWidth = `${value}`;
    }
    if (type === 7) {
        previewBox.style.borderColor = `${value}`;
    }
    if (type === 8) {
        previewBox.style.boxSizing = `${value}`;
    }
    if (type === 9) {
        previewBox.style.outlineStyle = `${value}`;
    }
    if (type === 10) {
        previewBox.style.outlineOffset = `${value}`;
    }
    if (type === 11) {
        previewBox.style.outlineWidth = `${value}`;
    }
    if (type === 12) {
        previewBox.style.outlineColor = `${value}`;
    }
}

function getValue(type, value) {
    if (type === 1) {
        widthResult.innerHTML = `${value};`;
    }
    if (type === 2) {
        heightResult.innerHTML = `${value};`;
    }
    if (type === 3) {
        bgColorResult.innerHTML = `${value};`;
    }
    if (type === 4) {
        bdRadiusResult.innerHTML = `${value};`;
    }
    if (type === 5) {
        bdStyleResult.innerHTML = `${value};`;
    }
    if (type === 6) {
        bdWidthResult.innerHTML = `${value};`;
    }
    if (type === 7) {
        bdColorhesult.innerHTML = `${value};`;
    }
    if (type === 8) {
        boxSizingResult.innerHTML = `${value};`;
    }
    if (type === 9) {
        olStyleResult.innerHTML = `${value};`;
    }
    if (type === 10) {
        olOffsetResult.innerHTML = `${value};`;
    }
    if (type === 11) {
        olWidthResult.innerHTML = `${value};`;
    }
    if (type === 12) {
        olColorResult.innerHTML = `${value};`;
    }
}
