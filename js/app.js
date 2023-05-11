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

 let config = {
    'korisnicko_ime':{
        request: true,
        email: true,
        minLength: 5,
        maxLength: 50,
    },
    'register_email':{
        request: true,
        email: true,
        minLength: 5,
        maxLength: 50,
    },
    'register_lozinka':{
        request: true,
        email: true,
        minLength: 7,
        maxLength: 25,
        matching: 'ponovi_lozinku'
    },
    'ponovi_lozinku':{
        request: true,
        email: true,
        minLength: 7,
        maxLength: 25,
        matching: 'register_lozinka'
    }
 };
 const validator = new Validator(config, "#registrationForm");
 document.querySelector('#registrationForm').addEventListener('submit', e =>{
    e.priventDefault();
    if(validator.validationPassed()){
        alert('Sve je ok')
    } else
    alert('nije ok')
 });