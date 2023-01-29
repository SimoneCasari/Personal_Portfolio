let elements = document.querySelectorAll('.oggettoDaVedere');

let chiamataFunzione = function(items){
    items.forEach((item) => {
        if(item.isIntersecting)
            item.target.classList.add("entrato");
        else
            item.target.classList.remove("entrato");
    });
}

let observer =  new IntersectionObserver(chiamataFunzione, {threshold: 0.8});

elements.forEach((element)=> {
        observer.observe(element);
});
