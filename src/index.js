const btnBurger = document.querySelector('.burgher-menu');
const navigation = document.querySelector('.horizantal-menu')
btnBurger.addEventListener('click', () => {
    btnBurger.classList.toggle('brg-active')
    navigation.classList.toggle('hrz-active')
})