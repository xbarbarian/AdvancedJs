"use strict"


const app = new Vue({
    el: "#goods-list",
    data: {
        allGoods: [
            {
                id: 1,
                title: "Кресло",
                img: "noimg.png",
                price: 1500,
            },
            {
                id: 2,
                title: "Стул",
                img: "noimg.png",
                price: 2000,
            },
            {
                id: 3,
                title: "Стол",
                img: "noimg.png",
                price: 800,
            },
            {
                id: 4,
                title: "Шкаф",
                img: "noimg.png",
                price: 11800,
            },
            {
                id:5,
                title: "Комод",
                img: "noimg.png",
                price: 3800,
            },
            {
                id: 6,
                title: "Полка",
                img: "noimg.png",
                price: 2800,
            },

    ]
    },
    // computed: {
    //     assetsPath: function(){
    //         return './'+ this.allGoods.img;
    //     }
    // }
    }

)

// let i = allGoods.map(allGoodsItem => {
//     return allGoodsItem
// })
// console.log( i);



// const renderGoods = (id, img, title, price) =>{
//     return `<div class="goods" id = "goods"><div class="goods-img"> <img src="${img}"></div>` +
//             `<div class="goods-info justify-content-between"><div class="goods-title">${title}</div>` +
//             `<div class="goods-price"><span>${price}</span><span>₽</span></div>` +
//             `</div><a class="button" data-id="${id}">Добавить</a></div>`
// }
//
//
//
// const renderGoodsList = (list) => {
//     let goodsList = list.map(item => renderGoods(item.id, item.img, item.title, item.price)).join("");
//     console.log(goodsList);
//     document.querySelector("#goods-list").insertAdjacentHTML("beforeend", goodsList);
// }
//
//
//
//
// renderGoodsList(allGoods);
