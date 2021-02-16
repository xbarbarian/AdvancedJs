"use strict"

const allGoods = [
        {
            title: "Кресло",
            img: "./noimg.png",
            qty: 1,
            price: 1500,
        },
        {
            title: "Стул",
            img: "./noimg.png",
            qty: 1,
            price: 2000,
        },
        {
            title: "Стол",
            img: "./noimg.png",
            qty: 1,
            price: 800,
        },
        {
            title: "Шкаф",
            img: "./noimg.png",
            qty: 1,
            price: 11800,
        },
        {
            title: "Комод",
            img: "./noimg.png",
            qty: 1,
            price: 3800,
        },
        {
            title: "Полка",
            img: "./noimg.png",
            qty: 1,
            price: 2800,
        },

    ];
let i = allGoods.map(allGoodsItem => {
    return allGoodsItem
})
console.log( i);

class listgoods

const renderGoods = (img, title, price) =>{
    return `<div class="goods" id = "goods"><div class="goods-img"> <img src="${img}"></div>` +
            `<div class="goods-info justify-content-between"><div class="goods-title">${title}</div>` +
            `<div class="goods-price"><span>${price}</span><span>₽</span></div>` +
            `</div><a class="button">Добавить</a></div>`
}

// console.log(renderGoods(allGoods.img, allGoods.title,allGoods.price));

const renderGoodsList = (list) => { //map преобразует и возвращает массив, при выводе он по умолчание
    // делае join через запятую, что бы убрать запятые нужно добавить пустой join("")
    let goodsList = list.map(item => renderGoods(item.img, item.title, item.price)).join("");
    console.log(goodsList);
    document.querySelector("#goods-list").insertAdjacentHTML("beforeend", goodsList);
}




const renderCart = () => {

}
const renderCartList = () => {

}

const addToCart = () => {

}
const removeFromCart = () => {

}

renderGoodsList(allGoods);