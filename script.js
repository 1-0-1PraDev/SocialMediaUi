const root = document.querySelector(":root");
const colorPalette = document.querySelectorAll(".choose-color span"); 

//------------------------ sidebar functionality ----------------------------
const menudItems = document.querySelectorAll(".menu-item");

// remove active classes
const removeActiveClass = () => {
    menudItems.forEach((item) => {
        item.classList.remove("active");
    });
}

menudItems.forEach((item) => {
    item.addEventListener("click", () => {
        removeActiveClass();
        item.classList.add("active");
        if(item.id !== "notifications"){
            document.querySelector(".notification-tooltip").style.display = "none";
        }else{
            document.querySelector(".notification-tooltip").style.display = "block";
            document.querySelector(".notification-tooltip").style.boxShadow = '0 0 0.8rem var(--color-primary)'; 
            document.querySelector(".notification-count").style.display = "none";
        }
    })
});


//------------------------ Messages functionality ----------------------------
const messagesBx = document.querySelector(".messages");
const messagesNotifications = document.querySelector("#messages-notifications");
const messageSearch = document.querySelector("#message-search");
const message = document.querySelectorAll(".message");

const searchMsg = (e) => {
    const val = messageSearch.value.toLowerCase();
    message.forEach((singleMsg) => {
        let searchTerm = singleMsg.querySelector("h5").textContent.toLowerCase();
        if(searchTerm.indexOf(val) != -1){
            singleMsg.style.display = "flex";
        }else{
            singleMsg.style.display = "none";
        }
    });
} 

messagesNotifications.addEventListener("click", () => {
    messagesBx.style.boxShadow = '0 0 1rem var(--color-primary)';   
    messagesNotifications.querySelector(".notification-count").style.display = "none";
    // make box shadow dissapear after 2 seconds
    setTimeout(() => {
        messagesBx.style.boxShadow = "none";
    }, 2000);
});

// message search
messageSearch.addEventListener("keyup", searchMsg);


// -------------------------------- THEME CUSTOMIZATION ===========================
const themeBtn = document.querySelector("#theme-btn");
const themeModal = document.querySelector(".customize-theme");

themeBtn.addEventListener("click", () => {
    themeModal.style.display = "grid";
}); 

const closeThemeModel = (e) => {
    if(e.target.classList.contains("customize-theme")){
        themeModal.style.display = "none";
    }
}

themeModal.addEventListener("click", closeThemeModel);

// ------------------------------ FONTS SIZE CHANGE ------------------------
// remove active class from span 
const removeSizeSelector = () => {
    fontSizes.forEach((size) => {
        size.classList.remove("active");
    });
}

const fontSizes = document.querySelectorAll(".choose-sizes span");
fontSizes.forEach((size) => {
    let fontSize;
    size.addEventListener("click", () => {
        removeSizeSelector();
        size.classList.add("active");
        if(size.classList.contains("font-size-1")){
            fontSize = "10px";
        }else if(size.classList.contains("font-size-2")){
            fontSize = "13px";
        }else if(size.classList.contains("font-size-3")){
            fontSize = "16px";
        }else if(size.classList.contains("font-size-4")){
            fontSize = "19px";
        }else if(size.classList.contains("font-size-5")){
            fontSize = "20px";
        }
        document.querySelector("html").style.fontSize = fontSize;
    });
});

//remove active class from colors
const removeActiveClrClass = () => {
    colorPalette.forEach((color) => {
        color.classList.remove("active");
    });
}

// change primary colors
colorPalette.forEach((color) => {
    color.addEventListener("click", () => {
        removeActiveClrClass();
        color.classList.add("active");
        let primaryHue;
        if(color.classList.contains("color-1")){
            primaryHue = 252;
        }else if(color.classList.contains("color-2")){
            primaryHue = 52;
        }else if(color.classList.contains("color-3")){
            primaryHue = 352;
        }else if(color.classList.contains("color-4")){
            primaryHue = 152;
        }else if(color.classList.contains("color-5")){
            primaryHue = 202;
        }
        root.style.setProperty("--primary-color-hue", primaryHue);
    });
});

const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");

let lightColorLightness;
let darkColorLightness;
let whiteColorLightness;

const changeBg = () => {
    root.style.setProperty("--color-light-lightness", lightColorLightness);
    root.style.setProperty("--color-white-lightness", whiteColorLightness);
    root.style.setProperty("--color-dark-lightness", darkColorLightness);
}

Bg1.addEventListener("click", () => {
    Bg1.classList.add("active");

    // remove active class from other backgrounds
    Bg2.classList.remove("active");
    Bg3.classList.remove("active");
    window.location.reload();
});

Bg2.addEventListener("click", () => {
    darkColorLightness = "95%";
    whiteColorLightness = "20%";
    lightColorLightness = "15%";

    Bg2.classList.add("active");

    // remove active class from other backgrounds
    Bg1.classList.remove("active");
    Bg3.classList.remove("active");
    changeBg();
});

Bg3.addEventListener("click", () => {
    darkColorLightness = "95%";
    whiteColorLightness = "10%";
    lightColorLightness = "0%";

    Bg3.classList.add("active");

    // remove active class from other backgrounds
    Bg1.classList.remove("active");
    Bg2.classList.remove("active");
    changeBg();
});