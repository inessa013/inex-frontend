const catalog = document.querySelector('[data-catalog]');

function renderCatalog(products){
    catalog.innerHTML='';
    products.forEach(function (elem) {
    card = `<article class="catalog__card card">
                            <div class="card__img-wrapper" id-${elem.id}>
                                <img src="img/catalog/${elem.imgSrc}" alt="" class="card__img">
                            </div>
                            <div class="card__body">
                                <div class="card__title">${elem.name}</div>
                                <div class="card__button button">Adaugă în coș</div>
                                <strong class="card__price-wrapper">Prețul: <span class="card__price">${elem.price} lei</span></strong>
                            </div>
                        </article>`

    catalog.insertAdjacentHTML('beforeend', card);
});
}

renderCatalog(products);

const filterWrapper = document.querySelector('[data-filter]');
const filters = filterWrapper.querySelectorAll('input[type="checkbox"]');
const toate = filterWrapper.querySelector('input[value="toate"]');
const categorii = [...filters].filter((item) => item.value !== 'toate');
let values = [];
let productsActual = [];
console.log(categorii);


categorii.forEach(function (elem) {

        elem.addEventListener('change', function () {
            toate.checked = false;

        if(values.includes(elem.value)){
            console.log('yes');
            values = values.filter(e => e !== elem.value);
        }else if(elem.checked){
            values.push(elem.value);
        } 
        
        console.log(values);


        productsActual = products.filter(function (elem) {
            if(values.includes(elem.category)) return elem;
        })
        renderCatalog(productsActual);
    });

    toate.addEventListener('change', function (){
        if(toate.checked){
            categorii.forEach(function(elem){
                    elem.checked = false;
            });
            values = [];
            renderCatalog(products);
        } else {
            renderCatalog([]);
        }
        
    });

    



});

