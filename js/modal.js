let divModal = document.getElementById("modal-window")
console.log(divModal.classList);

const openModal = () =>{
    divModal.classList.add("active")
}

const closeModal = () =>{
    divModal.classList.remove("active")

}

//следующий урок (16/07)
$('.main-slider').slick({
    infinite: true,
    speed: 300,
    dots: true, //чтобы точки самого шаблона с click slider убрать
    slidesToShow: 1 //чтобы крутился 1 элемент
});