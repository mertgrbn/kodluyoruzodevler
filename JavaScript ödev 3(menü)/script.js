const menu = [
    {
        id: 1,
        title: "T-shirt",
        category: "woman",
        price: 149.99,
        img:
            "https://static.bershka.net/4/photos2/2022/V/0/1/p/2125/700/200/2125700200_1_1_3.jpg?t=1643813467119",
        desc: `Kısa kollu desenli sweatshirt`,
    },
    {
        id: 2,
        title: "Kruvaze Top",
        category: "woman",
        price: 149.99,
        img:
            "https://static.bershka.net/4/photos2/2022/V/0/1/p/3949/443/800/3949443800_1_1_3.jpg?t=1643901943167",
        desc: `Kısa kollu desenli sweatshirt`,
    },
    {
        id: 3,
        title: "Büstiyer",
        category: "woman",
        price: 299,
        img: "https://sky-static.mavi.com/sys-master/maviTrImages/h4a/h4e/9406373101598",
        desc: `Askılı tül büstiyer top`,
    },
    {
        id: 4,
        title: "Sweatshirt",
        category: "man",
        price: 175,
        img:
            "https://static.bershka.net/4/photos2/2022/V/0/2/p/7324/498/717/7324498717_1_1_3.jpg?t=1633529314524",
        desc: `Bisiklet yaka sweatshirt`,
    }, {
        id: 5,
        title: "Sweatshirt",
        category: "man",
        price: 175,
        img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fb8%2Fac%2Fb8acf8f323c75e71b6d54d4cc7ed62d95c230e38.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
        desc: `Basic sweatshirt`,
    },
    {
        id: 6,
        title: "Sweatshirt",
        category: "man",
        price: 100,
        img: "https://ktnimg.mncdn.com/mnresize/1500/1969/product-images/2KAM71032MKAA1/1500Wx1969H/2KAM71032MKAA1_G01_zoom1_V01.jpg",
        desc: `Kapusonlu sweatshirt`,
    },
    {
        id: 7,
        title: "Bel Çantası",
        category: "accessory",
        price: 100,
        img: "https://st-thenorthface.mncdn.com/Content/media/ProductImg/original/637492443474020577.jpg",
        desc: `Yamalı bel çantası`,
    },
    {
        id: 8,
        title: "Düz Sırt Çantası",
        category: "accessory",
        price: 200,
        img: "https://cdn-ayae.akinon.net/products/2019/03/12/37316/7f6f7667-1b8f-41a2-8eb4-b39204f68425_size780x780_cropCenter.jpg",
        desc: `Deri sırt çantası`,
    },
    {
        id: 9,
        title: "Parfüm",
        category: "accessory",
        price: 249,
        img: "https://www.sevil.com.tr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/r/ar-c099600455_.jpg",
        desc: `Odunsu erkek kokulu`,
    },
    {
        id: 10,
        title: "Spor Ayakkabı",
        category: "shoes",
        price: 399,
        img:
            "https://static.bershka.net/4/photos2/2022/V/1/2/p/2460/960/001/2460960001_2_4_3.jpg?t=1642604162510",
        desc: `Kontrast spor ayakkabı beyaz`,
    },
    {
        id: 11,
        title: "Casual Ayakkabı",
        category: "shoes",
        price: 400,
        img: "https://www.minnosdukkan.com/image/data/color/vans-banner-cooljs.jpg",
        desc: `Tek renkli spor ayakkabı`,
    },
    {
        id: 12,
        title: "Spor Ayakkabı",
        category: "shoes",
        price: 599,
        img: "https://www.shooos.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/v/n/vn0a3wkt4q41-1.jpg",
        desc: `Kısa kollu desenli sweatshirt`,
    }
];



const containerButton = document.querySelector(".btn-container");
const SectionCenter = document.querySelector(".section-center");

//sayfa acildiginda load ediyoruz.

window.addEventListener("DOMContentLoaded", function () {
    displayMenu(menu);
    displayButton();
})


//displaymenu fonskiyonun icine sayfa yuklendiginde hazir olan dizimizi parametre olarak yolluyoruz.
function displayMenu(menuItems) {

    //bos bir dizi olusturup foreach ile her bir itemi createmenuitems'a yollayip return olduktan sonra icine pushluyoruz.
    let displayMenuForEach = [];
    menuItems.forEach(item => {
        const menuItemDesign = createMenuItems(item);
        displayMenuForEach.push(menuItemDesign);
    });
    //join methodu ile yan yana yazdirip,sectioncenter'ın icine yazdiriyoruz.
    displayMenuForEach = displayMenuForEach.join('');
    SectionCenter.innerHTML = displayMenuForEach;


}

function createMenuItems(item) {
    //olusturdugumuz bos dizinin icine pushlamak icin gonderdigimiz itemlera class verdikten sonra return ediyoruz.
    const itemDesign = `<div class="menu-items col-lg-3 col-sm-12">
    <img
          src=${item.img}
          alt=${item.title}
          class="photo"
        />
        <div class="menu-info">
          <div class="menu-title">
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}</h4>
          </div>
          <div class="menu-text">
            ${item.desc}
          </div>
        </div>
    </div>`

    return itemDesign;

}

function displayButton() {
    // icinde sadece all adinda bir button olacak diziyi tanimliyoruz.map methodu ile menu icindeki her bir itemi categories adindaki dizimizin
    // icine atmak icin includes(var mi yok mu) ediyoruz.yoksa pushluyoruz varsa devam et.
    const categories = ['all'];
    menu.map((item) => {
        if (!categories.includes(item.category)) {
            categories.push(item.category)
        }
    })
    //olusturdugumuz bu dizi icinde all ile birlikte toplam 5 farklı category olustu.(man-woman-shoes-accessory)bunlari map ile 
    //donerek her bir button'a class vermek icin creataButtons'a yolluyoruz.return olan buttonları categorybuttons'in icine atıyoruz.
    const categoryButtons = categories.map((item) => {
        const buttonDesign = createButtons(item);
        return buttonDesign;
    })
    //olusan bu categorybuttonsları join ile yanyana yazdirip,click yaptigimizda ne olmasini istedigimiz yani event oldugunda tikladigimiz
    //hedefin id'sini almasini istiyoruz.category(yani tikladigimiz button'ın id'si all ise tum menuyu goster.)
    containerButton.innerHTML = categoryButtons.join('');
    containerButton.addEventListener("click", (e) => {
        const category = e.target.id
        if (category === 'all') {
            displayMenu(menu);
        }
        //all disindaki bi id aldiginda filtrelemek icin degisken olusturup.filter methodu ile item.category'si tikladigimizda 
        //bize donen id degerine esit olanları filteredButtons degiskenine aktariyoruz.
        else {
            const filteredButtons =
                menu.filter(item => item.category === category)
            displayMenu(filteredButtons);
        }
    })

}
//buttonlara class vermek icin yukaridan yolladigimiz itemler sekil alip return ediyor.
function createButtons(category) {

    const button = `<button class="filter-btn btn btn-outline-dark btn-item" type="button" id="${category}">${category}</button>`
    return button;
}