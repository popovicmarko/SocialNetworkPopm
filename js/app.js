document.querySelector('#registracija').addEventListener('click', () => {
    document.querySelector('.custom-model').style.display = 'block';
})
document.querySelector('#closeModal').addEventListener('click', () => {
    document.querySelector('.custom-model').style.display = 'none';
})
 let a = document.querySelector('#closeModal')
 a.addEventListener('click', e => {
    e.preventDefault();
 })