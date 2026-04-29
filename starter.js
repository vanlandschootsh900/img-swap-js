// Shay VanLandschoot
// 4/29/26
// JS Image Swap Project



const modelImages = ['bruce_wayne.jpg','batman.jpg'];

const imgElement = document.getElementById('model-frame');
const divContainer = document.querySelector('.image-container');
const heading = document.getElementById('heading');

const preload = new Image();
preload.src = modelImages[1];

imgElement.addEventListener('mouseenter', () => {
     imgElement.src = modelImages[1];
     divContainer.style.backgroundColor = 'black';
     heading.style.color = 'white';
     document.body.style.backgroundColor = 'gray';
}); 

imgElement.addEventListener('mouseleave', () => {
     imgElement.src = modelImages[0];
     divContainer.style.backgroundColor = 'lightskyblue';
     heading.style.color = 'black';
     document.body.style.backgroundColor = 'white';
}); 













