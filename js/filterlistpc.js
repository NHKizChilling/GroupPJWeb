
let list = document.getElementById('list');
let filter = document.querySelector('.filter');
let count = document.getElementById('count');


const listProducts = [
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
    {
        id: 20,
        name: 'Bàn phím MonsGeek M1 QMK Silver AKKO Switch v3 black Pro',
        category: 'Keyboard',
        brand: 'AKKO',
        price: 2290000,
        quantiy: 30,
        image: '../images/BpcAKKO5075BPlus-SBlack&SilverAkkoSwitchv3CreamYellowPro/chinhdien.png',
        link: '../html/keyboard1.html'
    },
    {
        id: 21,
        name: 'Bàn phím cơ Mountain Everest MAX Xám MX Brown Switch',
        category: 'Keyboard',
        brand: 'Mountain',
        price: 2950000,
        quantiy: 30,
        image: '../images/BnphimcoMountainEverestMAXXmMX/chinh.jpg',
        link: '../html/keyboard2.html'
    },
    {
        id: 22,
        name: 'Bàn phím Vortex 8700 MultiX Summer Silver',
        category: 'Keyboard',
        brand: 'Vortex',
        price: 2490000,
        quantiy: 30,
        image: '../images/BpVortex8700MultiXSummerSilverSwitch/chinh.jpg',
        link: '../html/keyboard3.html'
    },
    {
        id: 23,
        name: 'Bàn phím cơ E-Dra EK375 Alpha Red Switch',
        category: 'Keyboard',
        brand: 'E-Dra',
        price: 540000,
        quantiy: 30,
        image: '../images/key1.webp',
        link: '../html/keyboard4.html'
    },
    {
        id: 24,
        name: 'Bàn phím cơ không dây DAREU EK75 PRO ',
        category: 'Keyboard',
        brand: 'DAREU',
        price: 1890000,
        quantiy: 30,
        image: '../images/BanphimcoBluetoothDareuEK75Pro/keyboard2.jpg',
        link: '../html/keyboard5.html'
    },
    {
        id: 25,
        name: 'Chuột Logitech MX Master 3 Wireless (Graphite)',
        category: 'Mouse',
        brand: 'Logitech',
        price: 1950000,
        quantiy: 30,
        image: '../images/ChuotLogitechMXMaster3Wireless(Graphite)/h_mx_master_3_wireless__graphite_.webp',
        link: '../html/mouse1.html'
    },
    {
        id: 26,
        name: 'Chuột Logitech G502X Plus Lightspeed White',
        category: 'Mouse',
        brand: 'Logitech',
        price: 3090000,
        quantiy: 30,
        image: '../images/ChuotLogitechG502XPlusLightSpeed White/picindexLogictech.jpg',
        link: '../html/mouse2.html'
    },
    {
        id: 27,
        name: 'Chuột Logitech G Pro Wireless',
        category: 'Mouse',
        brand: 'Logitech',
        price: 1500000,
        quantiy: 30,
        image: '../images/ChuotLogitechGProWireless/chinh.jpg',
        link: '../html/mouse3.html'
    },
    {
        id: 28,
        name: 'Chuột Rapoo Không dây V300SE Black',
        category: 'Mouse',
        brand: 'Rapoo',
        price: 790000,
        quantiy: 30,
        image: '../images/chuotrambo/chuotrambochinhdetail.jpg',
        link: '../html/mouse4.html'
    },
    {
        id: 29,
        name: 'Chuột SteelSeries Aerox 5',
        category: 'Mouse',
        brand: 'SteelSeries',
        price: 1290000,
        quantiy: 30,
        image: '../images/ChuotSteelSeriesAerox5/chinh.jpg',
        link: '../html/mouse5.html'
    }
    
    
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
    productFilter = listProducts;
    showProduct(productFilter);
})
// Add missing import statement for jQuery library
function showProduct(productFilter){
    count.innerText = productFilter.length;
    list.innerHTML = '';
    productFilter.forEach(item => {
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.setAttribute('id', item.id);

        // create image
        let newImage = new Image();
        newImage.src = item.image;
        newItem.appendChild(newImage);
        // create name product
        let newTitle = document.createElement('div');
        newTitle.classList.add('title');
        newTitle.classList.add('m-0');
        newTitle.innerText = item.name;
        newItem.appendChild(newTitle);

        // create price
        let newPrice = document.createElement('p');
        newPrice.classList.add('price');
        newPrice.classList.add('p-4');
        newPrice.innerText = item.price.toLocaleString() + 'đ';
        
        // create button
        let newButton = document.createElement('button');
        newButton.classList.add('btn');
        newButton.classList.add('btn-danger');
        newButton.classList.add('rounded-pill');
        newButton.style.float = 'left';
        //thêm vào nút mua hàng với class là addCart
        newButton.classList.add('addCart');
        newButton.innerText = 'Mua hàng';

        let newButton2 = document.createElement('button');
        newButton2.classList.add('btn');
        newButton2.classList.add('btn-info');
        newButton2.classList.add('rounded-pill');
        newButton2.style.float = 'right';
        
        //thêm nút xem chi tiết dung để bật modal
        newButton2.innerText = 'Xem chi tiết';
        newButton2.setAttribute('data-bs-toggle', 'modal');
        newButton2.setAttribute('data-bs-target', '#productModal');
        newButton2.classList.add('btn');
        newButton2.classList.add('btn-info');
        //sài nút chi tiết để dẫn vào trang khác
        newButton2.addEventListener('click', function(){
            window.location.href = item.link;
        })
       
        newItem.appendChild(newPrice);
        newItem.appendChild(newButton);
        newItem.appendChild(newButton2);
        list.appendChild(newItem);
    });
}




// cart
let iconCart = document.querySelector('.iconCart');
let cart = document.querySelector('.cart');
let container = document.querySelector('.container');
let close = document.querySelector('.close');
let cartListHTML = document.querySelector('.listCart');
let iconCartSpan = document.querySelector('.iconCart span');

iconCart.addEventListener('click', function(){
    if(cart.style.right == '-100%'){
        cart.style.right = '0';
        container.style.transform = 'translateX(-150px)';
    }else{
        cart.style.right = '-100%';
        container.style.transform = 'translateX(0)';
    }
})
close.addEventListener('click', function (){
    cart.style.right = '-100%';
    container.style.transform = 'translateX(0)';
})



//use cookie so the cart doesn't get lost on refresh page
let listCart = [];
list.addEventListener('click', (event) => {
    let postionClick = event.target;
    if(postionClick.classList.contains('addCart')){
        let product_id = postionClick.parentElement.getAttribute('id');
        addToCart(product_id);
    }
})
//add to cart with modal
// let modal = document.querySelector('.modal');
// modal.addEventListener('click', (event) => {
//     let postionClick = event.target;
//     if(postionClick.classList.contains('addCart')){
//         let product_id = postionClick.parentElement.getAttribute('id');
//         alert(product_id);
//         addToCart(product_id);
//     }
// })


const addToCart = (product_id) => {
    let positonThisProduct = listCart.findIndex((item) => item.product_id == product_id);
    if(listCart.length <= 0){
        listCart = [{
            product_id: product_id,
            quantity: 1,
        }]
    } else if(positonThisProduct < 0){
        listCart.push({
            product_id: product_id,
            quantity: 1,
        })
    } else{
        listCart[positonThisProduct].quantity += 1;
    }
    addCartToHTML();
    addCartToMemory();
}

const addCartToMemory = () => {
    localStorage.setItem('listCart', JSON.stringify(listCart));
}

const getCartFromMemory = () => {
    if(localStorage.getItem('listCart')){
        listCart = JSON.parse(localStorage.getItem('listCart'));
        addCartToHTML();
    }
}


const addCartToHTML = () => {
    cartListHTML.innerHTML = '';
    let totalQuantity = 0;
    if(listCart.length > 0) {
        listCart.forEach((item) => {
            totalQuantity += item.quantity;
            let newCart = document.createElement('div');
            newCart.classList.add('item');
            newCart.setAttribute('id', item.product_id);
            let product = listProducts.find((product) => product.id == item.product_id);
            newCart.innerHTML = `
            <img src="${product.image}" alt="">
            <div class="title">${product.name}</div>
            <div class="quantity">Số lượng: ${item.quantity}</div>
            <div class="price">${(product.price * item.quantity).toLocaleString()}đ</div>
            <div class="quantity">
                <span class="minus">-</span>
                <span> ${item.quantity} </span>
                <span class="plus">+</span>
            </div>
            `;
        cartListHTML.appendChild(newCart);
        })
    }
    iconCartSpan.innerText = totalQuantity;
    console.log(listCart);
}

cartListHTML.addEventListener('click', (event) => {
    let postionClick = event.target;
    if(postionClick.classList.contains('plus') || postionClick.classList.contains('minus')){
        let product_id = postionClick.parentElement.parentElement.getAttribute('id');
        let type = 'minus';
        if(postionClick.classList.contains('plus')){
            type = 'plus';
        }
        changeQuantity(product_id, type);
    }
})

const changeQuantity = (product_id, type) => {
    let positonThisProduct = listCart.findIndex((item) => item.product_id == product_id);
    if(positonThisProduct >=0 ) {
        switch(type) {
            case 'plus':
                listCart[positonThisProduct].quantity += 1;
                break;

            default: 
                let valueChange = listCart[positonThisProduct].quantity - 1;
                if(valueChange <= 0){
                    listCart.splice(positonThisProduct, 1);
                } else {
                    listCart[positonThisProduct].quantity = valueChange;
                }
                break;
        }
    }
    addCartToHTML();
    addCartToMemory();
}

getCartFromMemory();