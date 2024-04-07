let list = document.getElementById('list');
let filter = document.querySelector('.filter');
let count = document.getElementById('count');

let listProducts = [
{
    id: 1,
    name: 'Laptop Dell Inspiron 15 N3530 I3U085W11BLU',
    category: 'Laptop',
    brand: 'Dell',
    price: 10490000,
    quantity: 0,
    image: '../images/lap1.webp',
    link: '../html/lap1.html'
},
{
    id: 2,
    name: 'Laptop Lenovo Yoga 9 2in1 14IMH9 83AC000SVN',
    category: 'Laptop',
    brand: 'Lenovo',
    price: 45990000,
    quantiy: 30,
    image: '../images/lap2.webp',
    link: '../html/lap2.html'
},
{
    id: 3,
    name: 'Laptop ASUS Vivobook 14 OLED A1405VA KM095W',
    category: 'Laptop',
    brand: 'ASUS',
    price: 16890000,
    quantiy: 30,
    image: '../images/lap3.webp',
    link: '../html/lap3.html'
},
{
    id: 4,
    name: 'Laptop gaming ASUS ROG Strix G16 G614JU N3777W',
    category: 'Laptop',
    brand: 'ASUS',
    price: 36490000,
    quantiy: 30,
    image: '../images/lap4.webp',
    link: '../html/lap4.html'
},
{
    id: 5,
    name: 'Laptop Dell Inspiron 15 N3530 I3U085W11BLU',
    category: 'Laptop',
    brand: 'Dell',
    price: 36490000,
    quantity: 30,
    image: '../images/lap5.webp',
    link: '../html/lap5.html'
},
{
    id: 5,
    name: 'PC ASUS ROG Hyperion Black (Intel i9-14900K/ VGA RTX 4090)',
    category: 'PC',
    brand: 'ASUS',
    price: 116000000,
    quantiy: 30,
    image: '../images/pc4.webp',
    link: '../html/pc4.html'
},
{
    id: 6,
    name: 'PC Thermaltake PROJECT VERTICAL (Intel i7-14700K/ VGA RTX 4070 Ti Super)',
    category: 'PC',
    brand: 'Thermaltake',
    price: 60900000,
    quantiy: 30,
    image: '../images/pc2.png',
    link: '../html/pc2.html'
},
{
    id: 7,
    name: 'PC Homework R3 4300G',
    category: 'PC',
    brand: 'Homework',
    price: 5990000,
    quantiy: 30,
    image: '../images/pc3.png',
    link: '../html/pc3.html'
},
{
    id: 8,
    name: 'PC Intel i3-12100F/ VGA GTX 1650',
    category: 'PC',
    brand: 'ASUS',
    price: 10490000,
    quantiy: 30,
    image: '../images/pc5.webp',
    link: '../html/pc5.html'
},
{
    id: 9,
    name: 'PC Intel i5-12400F/ VGA RX 6600',
    category: 'PC',
    brand: 'ASUS',
    price: 16290000,
    quantiy: 30,
    image: '../images/pc1.png',
    link: '../html/pc1.html'
},
{
    id: 10,
    name: 'Tai Nghe Chụp Tai Dây Gaming VH530',
    category: 'Headphones',
    brand: 'VH530',
    price: 490000,
    quantiy: 30,
    image: '../images/black.png',
    link: '../html/headphone1.html'
},
{
    id: 11,
    name: 'Tai Nghe Gaming không dây Corsair Virtuoso RGB 7.1 Surround',
    category: 'Headphones',
    brand: 'Corsair',
    price: 2990000,
    quantiy: 30,
    image: '../images/TaingheCorsaiVirtuosoRGBWirelessPearl/9011185-ap-gallery-virtuoso-carbon-01_e6d0975e928c4189883b4cc65b374786_e5fc1605bae6453a965f5b4a9c756336_grande.webp',
    link: '../html/headphone2.html'
},
{
    id: 12,
    name: 'Tai nghe chơi game E-DRA EH412 PRO',
    category: 'Headphones',
    brand: 'E-DRA',
    price: 1090000,
    quantiy: 30,
    image: '../images/Tai ngheE-DraEH412ProRGBUSB7.1/den.jpg',
    link: '../html/headphone3.html'
},
{
    id: 13,
    name: 'Tai nghe HiFiMan Arya Organic',
    category: 'Headphones',
    brand: 'HiFiMan',
    price: 25990000,
    quantiy: 30,
    image: '../images/Tai nghe HiFiMan Arya Organic/chinh.jpg',
    link: '../html/headphone4.html'
},
{
    id: 14,
    name: 'Tai nghe Rhapsodio Supreme V3',
    category: 'Headphones',
    brand: 'Rhapsodio',
    price: 147000000,
    quantiy: 30,
    image: '../images/TaingheRhapsodioSupremeV3/5692_tai_nghe_rhapsodio_superme_v3_xuan_vu_audio.jpg',
    link: '../html/headphone5.html'
},
{
    id: 15,
    name: 'Màn Hình EDRA EGM24F75',
    category: 'Monitor',
    brand: 'EDRA',
    price: 2990000,
    quantiy: 30,
    image: '../images/Manhinh-E-DRA-EGM2510025IPS100/mattruoc.jpg',
    link: '../html/monitor1.html'
},
{
    id: 16,
    name: 'Màn hình cong Samsung LS27CG552 27',
    category: 'Monitor',
    brand: 'Samsung',
    price: 4990000,
    quantiy: 30,
    image: '../images/ManhinhcongSamsungLS27CG55227/truoc.jpg',
    link: '../html/monitor2.html'
},
{
    id: 17,
    name: 'Màn hình Samsung LS27CG510 27 2K 16',
    category: 'Monitor',
    brand: 'Samsung',
    price: 4890000,
    quantiy: 30,
    image: '../images/ManhinhSamsungiLS27CG510272K16/picmanhinhSamSung.png',
    link: '../html/monitor3.html'
},
{
    id: 18,
    name: 'Màn hình ROG Strix XG 30 9CM',
    category: 'Monitor',
    brand: 'ASUS',
    price: 11390000,
    quantiy: 30,
    image: '../images/ROGStrixXG309CM-Screen/truoc.png',
    link: '../html/monitor4.html'
},
{
    id: 19,
    name: 'Màn hình ACER Predator X27 144Hz 4K Gsync',
    category: 'Monitor',
    brand: 'ACER',
    price: 69000000,
    quantiy: 30,
    image: '../images/AcerPREDATORX27/truoc.jpg',
    link: '../html/monitor5.html'
},



];
let productFilter = listProducts;
listProducts.sort((a, b) => a.price - b.price);
showProduct(productFilter);

filter.addEventListener('submit', function(event){
    event.preventDefault();
    let valueFilter = event.target.elements;
    productFilter = listProducts.filter(item => {
        // check category
        if(valueFilter.category.value != ''){
            if(item.category != valueFilter.category.value){
                return false;
            }
        }
        if(valueFilter.brand.value != ''){
            if(item.brand != valueFilter.brand.value){
                return false;
            }
        }
        // check price
        if(valueFilter.minprice.value != ''){
            if(item.price < valueFilter.minprice.value){
                return false;
            }
        }
        if(valueFilter.maxprice.value != ''){
            if(item.price > valueFilter.maxprice.value){
                return false;
            }
        }
        document.getElementById('countResults').removeAttribute('hidden');
        return true;
    })
    showProduct(productFilter);
})

filter.addEventListener('reset', function(){
    document.getElementById('countResults').setAttribute('hidden', true);
    document.getElementById("brand").setAttribute("hidden", "true");
    document.getElementById("lb-brand").setAttribute("hidden", "true");
    productFilter = listProducts;
    showProduct(productFilter);
})

function showProduct(productFilter){
    count.innerText = productFilter.length;
    list.innerHTML = '';
    productFilter.forEach(item => {
        let newItem = document.createElement('div');
        newItem.classList.add('item');

        // create image
        let newImage = new Image();
        newImage.src = item.image;
        newItem.appendChild(newImage);
        // create name product
        let newTitle = document.createElement('div');
        newTitle.classList.add('title');
        newTitle.innerText = item.name;
        newItem.appendChild(newTitle);
        // create price
        let newPrice = document.createElement('span');
        newPrice.classList.add('price');
        newPrice.innerText = item.price.toLocaleString() + ' đ';
        newItem.appendChild(newPrice);
        // create button
        let newButton = document.createElement('button');
        newButton.classList.add('btn');
        newButton.classList.add('btn-primary');
        newButton.style.float = 'left';
        newButton.innerText = 'See more';
        newButton.addEventListener('click', function(){
            window.location.href = item.link;
        })
        newItem.appendChild(newButton);
        list.appendChild(newItem);
    });
}