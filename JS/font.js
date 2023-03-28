const previewBox = document.querySelector(".font");

/* fSize */
const fSize = document.getElementsByName("fsize");
const fSizeResult = document.querySelector(".fsize-result");

/* fStyle */
const fStyle = document.getElementsByName("fstyle");
const fStyleResult = document.querySelector(".fstyle-result");

/* fWeight */
const fWeight = document.getElementsByName("fweight");
const fWeightResult = document.querySelector(".fweight-result");

/* color */
const fColor = document.getElementsByName("fcolor");
const fColorResult = document.querySelector(".fcolor-result");

/* txtTransform */
const txtTransform = document.getElementsByName("txt-transform");
const txtTransformResult = document.querySelector(".txt-transform-result");

/* reset */
function reset() {
    fSizeResult.innerText = "30px";
    fStyleResult.innerText = "normal";
    fWeightResult.innerText = "100";
    fColorResult.innerText = "black";
    txtTransformResult.innerText = "capitalize";
}

reset();

/* input function */

function addEvent() {
    fSize.forEach((item) => {
        item.addEventListener("click", () => {
            if (item.checked == true) {
                setValue(1, item.value);
                getValue(1, item.value);
            }
        });
    });

    fStyle.forEach((item) => {
        item.addEventListener("click", () => {
            if (item.checked == true) {
                setValue(2, item.value);
                getValue(2, item.value);
            }
        });
    });

    fWeight.forEach((item) => {
        item.addEventListener("click", () => {
            if (item.checked == true) {
                setValue(3, item.value);
                getValue(3, item.value);
            }
        });
    });

    fColor.forEach((item) => {
        item.addEventListener("click", () => {
            if (item.checked == true) {
                setValue(4, item.value);
                getValue(4, item.value);
            }
        });
    });

    txtTransform.forEach((item) => {
        item.addEventListener("click", () => {
            if (item.checked == true) {
                setValue(5, item.value);
                getValue(5, item.value);
            }
        });
    });
}

addEvent();

function setValue(type, value) {
    if (type === 1) {
        previewBox.style.fontSize = `${value}`;
    }
    if (type === 2) {
        previewBox.style.fontStyle = `${value}`;
    }
    if (type === 3) {
        if (value == 100) {
            shadowX = 0;
            shadowSet();
        } else if (value == 500) {
            shadowX = 1;
            shadowSet();
        } else if (value == 900) {
            shadowX = 2;
            shadowSet();
        }
        previewBox.style.fontWeight = `${value}`;
    }
    if (type === 4) {
        color = value;
        previewBox.style.color = `${value}`;
        shadowSet();
    }
    if (type === 5) {
        previewBox.style.textTransform = `${value}`;
    }
}

function getValue(type, value) {
    if (type === 1) {
        fSizeResult.innerHTML = `${value};`;
    }
    if (type === 2) {
        fStyleResult.innerHTML = `${value};`;
    }
    if (type === 3) {
        fWeightResult.innerHTML = `${value};`;
    }
    if (type === 4) {
        fColorResult.innerHTML = `${value};`;
    }
    if (type === 5) {
        txtTransformResult.innerHTML = `${value};`;
    }
}

let shadowX = 0;
let color = "";

function shadowSet() {
    previewBox.style.textShadow = `${shadowX}px 0 ${color}`;
}
