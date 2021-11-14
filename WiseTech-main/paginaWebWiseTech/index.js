
const db = firebase.firestore();
const fecha=new Date();

const todoForm = document.getElementById('todo_form');

const create = (name,
    datecreated,
    email,telephone,
   message) => {
    db.collection('contacto').doc().set({
        name,
        datecreated,
        email,
    telephone,
       message
    })
}

todoForm.addEventListener('submit', async e => {
    escribir2("ok")
    e.preventDefault();
    const name = todoForm['todo_name'].value;
    const datecreated=fecha.toString();
    const email = todoForm['todo_url'].value;
    const telephone = todoForm['todo_phone'].value;
    const message = todoForm['todo_description'].value;

    await create(name,
        datecreated,
        email,
        telephone,
       message); 
       
    todoForm.reset(); 
    
});

function escribir2(algo) {
    if(algo=="ok"){
       document.getElementById('cont3').innerHTML='Mensaje enviado correctamente ✔'; 
    }
     
    }
    