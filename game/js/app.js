let top1 = 0;
let left = 0;

document.body.onkeydown = function (x) {
  let imag = document.querySelector(".image img");
  let ev = x.keyCode;

  if (ev === 39) {
    if (left <= 1195) {
      left += 20;
      imag.style.left = `${left}px`;
    }
  }
  if (ev === 37) {
    if (left >= 20 && left <= 1215) {
      left -= 20;
      imag.style.left = `${left}px`;
    }
  }

  if (ev === 38) {
    if (top1 >= 20 && top1 <= 430) {
      top1 -= 20;
      imag.style.top = `${top1}px`;
    }
  }

  if (ev === 40) {
    if (top1 >= 0 && top1 <= 430) {
      top1 += 20;
      imag.style.top = `${top1}px`;
    }
  }

  if (left >= 1200 && top1 >= 420) {
    let restart = document.querySelector(".restart");
    restart.style.display = "block";
  }
};

function start() {
  location.reload();
}
