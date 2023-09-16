const images=["0.jpg","1.jpg","2.jpg"];
const chosenImage = images[Math.floor(Math.random()*images.length)];

// console.log(images);
const bgImage =document.createElement("img");
// console.log(bgImage);
bgImage.src = `img/${chosenImage}`;
// console.log(bgImage);
document.body.appendChild(bgImage); //append 마지막에
                                    //prepend 맨 앞에


