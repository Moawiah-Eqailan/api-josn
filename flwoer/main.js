const flowerImages = {
    alstroemerias: "img/alstroemerias.jpg",
    gardenias: "img/gardenias.jpg",
    orchids: "img/orchids.jpg",
    peonies: "img/peonies.jpg",
    roses: "img/roses.jpg",
    sunflowers: "img/sunflowers.jpg",
    tulips: "img/tulips.jpg",
  
};


document.getElementById('formGarden').addEventListener('submit', function (event) {
    event.preventDefault(); 
    const selectedFlower = document.getElementById('selImg').value; 
    const imgElement = document.getElementById('flowerImg');


    imgElement.src = flowerImages[selectedFlower];
    imgElement.style.display = 'block'; 
});


document.getElementById('clerLis').addEventListener('click', function () {
    document.getElementById('nameInp').value = '';
    document.getElementById('sesonInp').value = '';
    document.getElementById('selImg').selectedIndex = 0; 
    const imgElement = document.getElementById('flowerImg');
    imgElement.src = ''; 
    imgElement.style.display = 'none'; 
});