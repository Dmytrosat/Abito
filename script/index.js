// variable
const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-box input');
const cardWrapper = document.querySelector('.content-main__list');


// array
const cardArray = [{
        id: 0,
        title: 'Пвх материал 2й сорт.Первый',
        price: '170 ₽',
        address: 'Казань, р-н Вахитовский',
        data: '10 июля 11:39',
        img: './images/card-img.png'
    },
    {
        id: 1,
        title: 'Пвх материал 2й сорт. Второй',
        price: '180 ₽',
        address: 'Казань, р-н Вахитовский',
        data: '10 июля 11:39',
        img: './images/card-img.png'
    },
    {
        id: 2,
        title: 'Пвх материал 2й сорт. Третий',
        price: '190 ₽',
        address: 'Казань, р-н Вахитовский',
        data: '10 июля 11:39',
        img: './images/card-img.png'
    },
    {
        id: 3,
        title: 'Пвх материал 2й сорт. Четвертый',
        price: '200 ₽',
        address: 'Казань, р-н Вахитовский',
        data: '10 июля 11:39',
        img: './images/card-img.png'
    },
    {
        id: 4,
        title: 'Пвх материал 2й сорт. Пятый',
        price: '210 ₽',
        address: 'Казань, р-н Вахитовский',
        data: '10 июля 11:39',
        img: './images/card-img.png'
    },
    {
        id: 5,
        title: 'Пвх материал 2й сорт. Шестой',
        price: '220 ₽',
        address: 'Казань, р-н Вахитовский',
        data: '10 июля 11:39',
        img: './images/card-img.png'
    },
]
// function render
const render = (cardList) => {
    cardWrapper.innerHTML = '';

    cardList.forEach((item) => {
        cardWrapper.insertAdjacentHTML('beforeend', `
            <a href="./product.html" class="content-main__list-item">
                <div class="content-main__list-item--img">
                    <img src="${item.img}" alt="card-img" />
                </div>
                <h5 class="content-main__list-item--title">
                    ${item.title}
                </h5>
                <strong class="content-main__list-item--price">${item.price}</strong>
                <div class="content-main__list-item--description-box">
                    <span class="content-main__list-item--description">${item.address}</span>
                    <span class="content-main__list-item--description">${item.data}</span>
                </div>
            </a>
        `)
    })
}

// function filteredArray
const filteredArray = (array, value)=> {
    console.log(array);
    console.log(value);
    
    return array.filter((item) => {
        return item.title.includes(value) || item.price.includes(value)
    })
}


cardWrapper.style.justifyContent = 'flex start';
cardWrapper.style.gap = '30px';

render(cardArray);

// function searchBtn
searchBtn.addEventListener('click', () => {
    render(filteredArray(cardArray, searchInput.value));
})