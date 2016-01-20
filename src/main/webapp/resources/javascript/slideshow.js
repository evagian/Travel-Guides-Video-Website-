/*
 *  Slideshow JS
 *  Stefanos Lintas
 *  slintas@isc.tuc.gr
 *  stefanos_lidas@hotmail.com
 */

//put the path of the 3 images you want to interchange
var image1 = 'yoda1.jpg';
var image2 = 'yoda2.jpg';
var image3 = 'yoda3.jpg';
var path = '../resources/images/';

function changeImage() {
    if (document.getElementById('slideshow').src.toString().indexOf(image1) !== -1) {
        document.getElementById('slideshow').src = path+image2;
        document.getElementsByClassName('slideshow_item')[0].style.opacity = 0.5;
        document.getElementsByClassName('slideshow_item')[1].style.opacity = 1;
        document.getElementsByClassName('slideshow_item')[2].style.opacity = 0.5;
    } else if (document.getElementById('slideshow').src.toString().indexOf(image2) !== -1) {
        document.getElementById('slideshow').src = path+image3;
        document.getElementsByClassName('slideshow_item')[0].style.opacity = 0.5;
        document.getElementsByClassName('slideshow_item')[1].style.opacity = 0.5;
        document.getElementsByClassName('slideshow_item')[2].style.opacity = 1;
    } else {
        document.getElementById('slideshow').src = path+image1;
        document.getElementsByClassName('slideshow_item')[0].style.opacity = 1;
        document.getElementsByClassName('slideshow_item')[1].style.opacity = 0.5;
        document.getElementsByClassName('slideshow_item')[2].style.opacity = 0.5;
    }
}

function changeNextImage() {
    slide_starter.stop();
    if (document.getElementById('slideshow').src.toString().indexOf(image1) !== -1) {
        document.getElementById('slideshow').src = path+image2;
        document.getElementsByClassName('slideshow_item')[0].style.opacity = 0.5;
        document.getElementsByClassName('slideshow_item')[1].style.opacity = 1;
        document.getElementsByClassName('slideshow_item')[2].style.opacity = 0.5;
    } else if (document.getElementById('slideshow').src.toString().indexOf(image2) !== -1) {
        document.getElementById('slideshow').src = path+image3;
        document.getElementsByClassName('slideshow_item')[0].style.opacity = 0.5;
        document.getElementsByClassName('slideshow_item')[1].style.opacity = 0.5;
        document.getElementsByClassName('slideshow_item')[2].style.opacity = 1;
    } else {
        document.getElementById('slideshow').src = path+image1;
        document.getElementsByClassName('slideshow_item')[0].style.opacity = 1;
        document.getElementsByClassName('slideshow_item')[1].style.opacity = 0.5;
        document.getElementsByClassName('slideshow_item')[2].style.opacity = 0.5;
    }
    slide_starter.init();
}

function changePrevImage() {
    slide_starter.stop();
    if (document.getElementById('slideshow').src.toString().indexOf(image1) !== -1) {
        document.getElementById('slideshow').src = path+image3;
        document.getElementsByClassName('slideshow_item')[0].style.opacity = 0.5;
        document.getElementsByClassName('slideshow_item')[1].style.opacity = 0.5;
        document.getElementsByClassName('slideshow_item')[2].style.opacity = 1;
    } else if (document.getElementById('slideshow').src.toString().indexOf(image2) !== -1) {
        document.getElementById('slideshow').src = path+image1;
        document.getElementsByClassName('slideshow_item')[0].style.opacity = 1;
        document.getElementsByClassName('slideshow_item')[1].style.opacity = 0.5;
        document.getElementsByClassName('slideshow_item')[2].style.opacity = 0.5;
    } else {
        document.getElementById('slideshow').src = path+image2;
        document.getElementsByClassName('slideshow_item')[0].style.opacity = 0.5;
        document.getElementsByClassName('slideshow_item')[1].style.opacity = 1;
        document.getElementsByClassName('slideshow_item')[2].style.opacity = 0.5;
    }
    slide_starter.init();
}

function getImage(choice){
    slide_starter.stop();
    if (choice === 1) {
        document.getElementById('slideshow').src = path+image1;
        document.getElementsByClassName('slideshow_item')[0].style.opacity = 1;
        document.getElementsByClassName('slideshow_item')[1].style.opacity = 0.5;
        document.getElementsByClassName('slideshow_item')[2].style.opacity = 0.5;
    } else if (choice === 2) {
        document.getElementById('slideshow').src = path+image2;
        document.getElementsByClassName('slideshow_item')[0].style.opacity = 0.5;
        document.getElementsByClassName('slideshow_item')[1].style.opacity = 1;
        document.getElementsByClassName('slideshow_item')[2].style.opacity = 0.5;
    } else {
        document.getElementById('slideshow').src = path+image3;
        document.getElementsByClassName('slideshow_item')[0].style.opacity = 0.5;
        document.getElementsByClassName('slideshow_item')[1].style.opacity = 0.5;
        document.getElementsByClassName('slideshow_item')[2].style.opacity = 1;
    }
    slide_starter.init();
}


function slideshow_start() {
    var timer = false;
    this.initialize = function () {
        document.getElementById('loaded_bar').style.width = '0px';
        document.getElementById('slideshow').style.opacity = '1';
        document.getElementsByClassName('slideshow_item')[0].style.opacity = 1;
        document.getElementsByClassName('slideshow_item')[1].style.opacity = 0.5;
        document.getElementsByClassName('slideshow_item')[2].style.opacity = 0.5;
        slide_bar.start();
    };
    this.init = function(){
        document.getElementById('loaded_bar').style.width = '0px';
        document.getElementById('slideshow').style.opacity = '1';
        document.getElementsByClassName('slideshow_item')[1].style.opacity = 0.5;
        document.getElementsByClassName('slideshow_item')[2].style.opacity = 0.5;
        
        slide_bar.start();
    };
    this.start = function () {//
        if (!this.isUp()) {
            timer = setInterval(function () {
                document.getElementById('loaded_bar').style.width = '0px';
                document.getElementById('slideshow').style.opacity = '1';
                slide_bar.start();
            }, 10000);
        }
    };
    this.stop = function () {
        clearInterval(timer);
        document.getElementById('loaded_bar').style.width = '0px';
        document.getElementById('slideshow').style.opacity = '1';
        document.getElementById('slideshow').style.marginLeft = '0px';
        slide_bar.stop();
        slide_slider.stop();
        timer = false;
    };
    this.isUp = function () {
        return timer !== false;
    };
}
var slide_starter = new slideshow_start();

function slideshow_loadBar() {
    var timer = false;
    this.start = function () {//
        if (!this.isUp()) {
            timer = setInterval(function () {
                if ((parseInt(onlyNum(document.getElementById('loaded_bar').style.width))) < 80 * 4) {
                    document.getElementById('loaded_bar').style.width = (parseInt(onlyNum(document.getElementById('loaded_bar').style.width)) + 4) + 'px';
                } else if ((parseInt(onlyNum(document.getElementById('loaded_bar').style.width))) < 100 * 4) {
                    document.getElementById('loaded_bar').style.width = (parseInt(onlyNum(document.getElementById('loaded_bar').style.width)) + 4) + 'px';
                    document.getElementById('slideshow').style.opacity = document.getElementById('slideshow').style.opacity - 0.05;
                }
                else {
                    document.getElementById('loaded_bar').style.width = '0px';
                    changeImage();
                    document.getElementById('slideshow').style.marginLeft = '400px';
                    document.getElementById('slideshow').style.opacity = 1;
                    slide_slider.start();
                }

            }, 100);
        }
    };
    this.stop = function () {
        document.getElementById('loaded_bar').style.width = '0px';
        clearInterval(timer);
        timer = false;
    };
    this.isUp = function () {
        return timer !== false;
    };
}
var slide_bar = new slideshow_loadBar();

function slideshow_slider() {
    var timer = false;
    this.start = function () {//
        if (!this.isUp()) {
            timer = setInterval(function () {
                if ((parseInt(onlyNum(document.getElementById('slideshow').style.marginLeft))) > 40) {
                    document.getElementById('slideshow').style.marginLeft = (parseInt(onlyNum(document.getElementById('slideshow').style.marginLeft)) - 8) + 'px';
                } else if ((parseInt(onlyNum(document.getElementById('slideshow').style.marginLeft))) > 0) {
                    document.getElementById('slideshow').style.marginLeft = (parseInt(onlyNum(document.getElementById('slideshow').style.marginLeft)) - 1) + 'px';
                } else {
                    slide_slider.stop;
                    timer = true;
                }
            }, 10);
        }
    };
    this.stop = function () {
        clearInterval(timer);
        timer = false;
    };
    this.isUp = function () {
        return timer !== false;
    };
}
var slide_slider = new slideshow_slider();

function slideshow_kill() {
    if (document.getElementById('slideshow_stop').src.toString().indexOf('x.png') !== -1) {
        slide_starter.stop();
        document.getElementById('slideshow_stop').src = path+'play.png';
    } else {
        slide_starter.initialize();
        document.getElementById('slideshow_stop').src = path+'x.png';
    }

}

function onlyNum(str) {
    return str.toString().replace(/\D/g, '');
}

function menu(mouseover) {
    if (mouseover === 1) {
        
    } else if (mouseover === 2) {
        
    } else {
        
    }
}
