const drop_btn = document.querySelector(".drop-btn");
const tooltip = document.querySelector(".tooltip");
const menu_wrapper = document.querySelector(".wrapper");
const menu_bar = document.querySelector(".menu-bar");
const Season1_drop = document.querySelector(".Season1-drop");
const Season1 = document.querySelector(".Season1");
const Season2_drop = document.querySelector(".Season2-drop");
const Season2 = document.querySelector(".Season2");
const Season3_drop = document.querySelector(".Season3-drop");
const Season3 = document.querySelector(".Season3");
const Season4_drop = document.querySelector(".Season4-drop");
const Season4 = document.querySelector(".Season4");
const Season5_drop = document.querySelector(".Season5-drop");
const Season5 = document.querySelector(".Season5");
const Season6_drop = document.querySelector(".Season6-drop");
const Season6 = document.querySelector(".Season6");
const Season7_drop = document.querySelector(".Season7-drop");
const Season7 = document.querySelector(".Season7");
const Season8_drop = document.querySelector(".Season8-drop");
const Season8 = document.querySelector(".Season8");
const Season9_drop = document.querySelector(".Season9-drop");
const Season9 = document.querySelector(".Season9");
const Season10_drop = document.querySelector(".Season10-drop");
const Season10 = document.querySelector(".Season10");
const Season1_btn = document.querySelector(".back-Season1");
const Season2_btn = document.querySelector(".back-Season2");
const Season3_btn = document.querySelector(".back-Season3");
const Season4_btn = document.querySelector(".back-Season4");
const Season5_btn = document.querySelector(".back-Season5");
const Season6_btn = document.querySelector(".back-Season6");
const Season7_btn = document.querySelector(".back-Season7");
const Season8_btn = document.querySelector(".back-Season8");
const Season9_btn = document.querySelector(".back-Season9");
const Season10_btn = document.querySelector(".back-Season10");
drop_btn.onclick = (() => {
    menu_wrapper.classList.toggle("show");
    tooltip.classList.toggle("show");
});
Season1.onclick = (() => {
    menu_bar.style.marginLeft = "-400px";
    setTimeout(() => {
        Season1_drop.style.display = "block";
    }, 100);
});
Season2.onclick = (() => {
    menu_bar.style.marginLeft = "-400px";
    setTimeout(() => {
        Season2_drop.style.display = "block";
    }, 100);
});
Season3.onclick = (() => {
    menu_bar.style.marginLeft = "-400px";
    setTimeout(() => {
        Season3_drop.style.display = "block";
    }, 100);
});
Season4.onclick = (() => {
    menu_bar.style.marginLeft = "-400px";
    setTimeout(() => {
        Season4_drop.style.display = "block";
    }, 100);
});
Season5.onclick = (() => {
    menu_bar.style.marginLeft = "-400px";
    setTimeout(() => {
        Season5_drop.style.display = "block";
    }, 100);
});
Season6.onclick = (() => {
    menu_bar.style.marginLeft = "-400px";
    setTimeout(() => {
        Season6_drop.style.display = "block";
    }, 100);
});
Season7.onclick = (() => {
    menu_bar.style.marginLeft = "-400px";
    setTimeout(() => {
        Season7_drop.style.display = "block";
    }, 100);
});
Season8.onclick = (() => {
    menu_bar.style.marginLeft = "-400px";
    setTimeout(() => {
        Season8_drop.style.display = "block";
    }, 100);
});
Season9.onclick = (() => {
    menu_bar.style.marginLeft = "-400px";
    setTimeout(() => {
        Season9_drop.style.display = "block";
    }, 100);
});
Season10.onclick = (() => {
    menu_bar.style.marginLeft = "-400px";
    setTimeout(() => {
        Season10_drop.style.display = "block";
    }, 100);
});


Season1_btn.onclick = (() => {
    menu_bar.style.marginLeft = "0px";
    Season1_drop.style.display = "none";
});
Season2_btn.onclick = (() => {
    Season2_drop.style.display = "none";
    menu_bar.style.marginLeft = "0px";
});
Season3_btn.onclick = (() => {
    Season3_drop.style.display = "none";
    menu_bar.style.marginLeft = "0px";
});
Season4_btn.onclick = (() => {
    Season4_drop.style.display = "none";
    menu_bar.style.marginLeft = "0px";
});
Season5_btn.onclick = (() => {
    Season5_drop.style.display = "none";
    menu_bar.style.marginLeft = "0px";
});
Season6_btn.onclick = (() => {
    Season6_drop.style.display = "none";
    menu_bar.style.marginLeft = "0px";
});
Season7_btn.onclick = (() => {
    Season7_drop.style.display = "none";
    menu_bar.style.marginLeft = "0px";
});
Season8_btn.onclick = (() => {
    Season8_drop.style.display = "none";
    menu_bar.style.marginLeft = "0px";
});
Season9_btn.onclick = (() => {
    Season9_drop.style.display = "none";
    menu_bar.style.marginLeft = "0px";
});
Season10_btn.onclick = (() => {
    Season10_drop.style.display = "none";
    menu_bar.style.marginLeft = "0px";
});