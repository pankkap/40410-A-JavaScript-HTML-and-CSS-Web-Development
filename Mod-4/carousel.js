// alert('script connected')

var prevBtn = document.querySelector(".prev");
var nextBtn = document.querySelector(".next");

var images = document.querySelector(".image-container").children;

var totalImages = images.length;
index = 0;

prevBtn.onclick = function () {
  changePicture("prev");
};
nextBtn.onclick = function () {
  changePicture("next");
};

function changePicture(direction) {
  if (direction == "next") {
    index++;
    if (index == totalImages) {
      index = 0;
    }
  } else {
    if (index == 0) {
      index = totalImages - 1;
    } else {
      index--;
    }
  }

  for (var i = 0; i < totalImages; i++) {
    images[i].classList.remove("main");
  }
  images[index].classList.add("main");
}
