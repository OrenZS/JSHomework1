function amount(price) {
  if (price < 100) {
    console.log(price - 5);
  } else {
    console.log(price - 10);
  }
}

amount();

const button = null;

function onClick(button) {
  if (button === null) {
    console.log("Button not found");
  } else {
    console.log("You can click the button");
  }
}

onClick();
