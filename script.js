"use strict"

const showLeftColumnBtn = document.getElementById("showLeftColumnBtn");
const showRightColumnBtn = document.getElementById("showRightColumnBtn");
const showBothBtn = document.getElementById("showBothBtn");

const rightColumn = document.getElementById("rightColumn");
const leftColumn = document.getElementById("leftColumn");
const catImg = document.getElementById("catImg");
const dogImg = document.getElementById("dogImg");

function ColumnExpansionAnimation (expandingColumnWidth, shrinkingColumnWidth, expandingColumnSide, expandindColumnTarget) {
    let movementPercentage = 0;
    let startTime = Date.now(); 
    let timer = setInterval(function() {
        let timePass = Date.now() - startTime;

        if (timePass >= 1000) {
            clearInterval(timer); 
            movementPercentage = 0;
            return;
        }

        movementPercentage = movementPercentage + 2;

        const expandingColumnNewWidth = expandingColumnWidth + movementPercentage;
        const shrinkingColumnNewWidth = shrinkingColumnWidth - movementPercentage;

        if (expandingColumnNewWidth > expandindColumnTarget) {
            clearInterval(timer); 
            movementPercentage = 0;
            return;
        }

        if (expandingColumnSide === "left") {

            leftColumn.style.width = expandingColumnNewWidth + '%';
            rightColumn.style.width = shrinkingColumnNewWidth + '%';
        }
        else if (expandingColumnSide === "right") {
            leftColumn.style.width = shrinkingColumnNewWidth + '%';
            rightColumn.style.width = expandingColumnNewWidth + '%';
        }

    }, 10);

 
}

showLeftColumnBtn.addEventListener("click", () => {

    showBothBtn.classList.remove("activeBtn");
    showBothBtn.classList.add("inactiveBtn");

    showRightColumnBtn.classList.remove("activeBtn");
    showRightColumnBtn.classList.add("inactiveBtn")

    showLeftColumnBtn.classList.remove("inactiveBtn");
    showLeftColumnBtn.classList.add("activeBtn");

    $("#dogImg").fadeOut(400); //убрать картинку
   
    setTimeout(async () => {

        const rightColumnwidthInPixels = rightColumn.offsetWidth;
        const rightColumnPrimWidthInPixels = rightColumn.parentElement.offsetWidth;
        const rightColumnWidthInPercentage = (rightColumnwidthInPixels / rightColumnPrimWidthInPixels) * 100;//изначальная ширина

        const leftColumnwidthInPixels = leftColumn.offsetWidth;
        const leftColumnPrimWidthInPixels = leftColumn.parentElement.offsetWidth;
        const leftColumnWidthInPercentage = (leftColumnwidthInPixels / leftColumnPrimWidthInPixels) * 100;//изначальная ширина

        ColumnExpansionAnimation(leftColumnWidthInPercentage, rightColumnWidthInPercentage, "left", 88);

        setTimeout(async () => {
            $("#catImg").fadeIn(400); //проявить картинку
            $(".imageContainer").width(400);
        }, 200)
    }, 400)
})

showRightColumnBtn.addEventListener("click", () => {

    showBothBtn.classList.remove("activeBtn");
    showBothBtn.classList.add("inactiveBtn")

    showLeftColumnBtn.classList.remove("activeBtn");
    showLeftColumnBtn.classList.add("inactiveBtn");

    showRightColumnBtn.classList.remove("inactiveBtn");
    showRightColumnBtn.classList.add("activeBtn");

    $("#catImg").fadeOut(400); //убрать картинку

    setTimeout(async () => {

        const rightColumnwidthInPixels = rightColumn.offsetWidth;
        const rightColumnPrimWidthInPixels = rightColumn.parentElement.offsetWidth;
        const rightColumnWidthInPercentage = (rightColumnwidthInPixels / rightColumnPrimWidthInPixels) * 100;//изначальная ширина

        const leftColumnwidthInPixels = leftColumn.offsetWidth;
        const leftColumnPrimWidthInPixels = leftColumn.parentElement.offsetWidth;
        const leftColumnWidthInPercentage = (leftColumnwidthInPixels / leftColumnPrimWidthInPixels) * 100;//изначальная ширина

        ColumnExpansionAnimation(rightColumnWidthInPercentage, leftColumnWidthInPercentage, "right", 88);

        setTimeout(async () => {
            $("#dogImg").fadeIn(400); //проявить картинку
            $(".imageContainer").width(400);
        }, 200)
    }, 400)
})

showBothBtn.addEventListener("click", () => {

    showRightColumnBtn.classList.remove("activeBtn");
    showRightColumnBtn.classList.add("inactiveBtn")

    showLeftColumnBtn.classList.remove("activeBtn");
    showLeftColumnBtn.classList.add("inactiveBtn")

    showBothBtn.classList.remove("inactiveBtn");
    showBothBtn.classList.add("activeBtn");

    const rightColumnwidthInPixels = rightColumn.offsetWidth;
    const rightColumnPrimWidthInPixels = rightColumn.parentElement.offsetWidth;
    const rightColumnWidthInPercentage = (rightColumnwidthInPixels / rightColumnPrimWidthInPixels) * 100; //изначальная ширина

    const leftColumnwidthInPixels = leftColumn.offsetWidth;
    const leftColumnPrimWidthInPixels = leftColumn.parentElement.offsetWidth;
    const leftColumnWidthInPercentage = (leftColumnwidthInPixels / leftColumnPrimWidthInPixels) * 100; //изначальная ширина

    if (rightColumnWidthInPercentage < 20) {

        ColumnExpansionAnimation(rightColumnWidthInPercentage, leftColumnWidthInPercentage, "right", 50);
        setTimeout(async () => {
            $(".imageContainer").width(300); //скорректировать размеры
            $("#dogImg").fadeIn(400);
        }, 200)

    }

    else if (leftColumnWidthInPercentage < 20) {
        
        ColumnExpansionAnimation(leftColumnWidthInPercentage, rightColumnWidthInPercentage, "left", 50);
        setTimeout(async () => {
            $(".imageContainer").width(300);//скорректировать размеры
            $("#catImg").fadeIn(400);
        }, 200)        
    }
})