 
const slide = (function () {
    let currentIndex = 0;
    return function routing(){

        let pic = document.getElementsByClassName("mySlides");

        for (let i = 0; i < pic.length; i++) {
            pic[i].style.display = "none";
        }
        currentIndex++;

        if (currentIndex > pic.length) {
            currentIndex = 1;
        }
        pic[currentIndex - 1].style.display = "block";
        setTimeout(routing, 3000);

    }
}());


slide();