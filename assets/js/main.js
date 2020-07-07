window.addEventListener('scroll', scrollfunc);

        function scrollfunc() {
            if (!(/Mobi|Android/i.test(navigator.userAgent))) {
                if (window.scrollY >= 147) {
                    document.getElementById("myTopnav").classList.add("fixbar");
                    document.getElementById('myTopnav').style.marginTop = '0%';

                } else if (window.scrollY < 147) {
                    document.getElementById("myTopnav").classList.remove("fixbar");
                    document.getElementById('myTopnav').style.marginTop = '2.5%';

                }
            }
        }

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
        document.getElementByClass("txt-img").style.display = 'none';
        document.getElementByClass("text-img-colored").style.display = 'none';
    } else {
        x.className = "topnav";
        document.getElementByClass("txt-img").style.display = 'unset';
        document.getElementByClass("text-img-colored").style.display = 'unset';
        
    }
}

if (/Mobi|Android/i.test(navigator.userAgent)) {
    var slider = new airSlider({
        autoPlay: true,
        width: '100%',
        height: '300px'
    });
} else {
    var slider = new airSlider({
        autoPlay: true,
        width: '100%',
        height: '740px'
    });
}