import { ContactService } from "./service/ContactService.js";

var contactService = new ContactService;

const contactList = document.getElementById('contact-list');
const addContactForm = document.getElementById('add-contact-form');

document.addEventListener('DOMContentLoaded', listContacts);

// Event listener para o envio do formulário
addContactForm.addEventListener('submit', submitContact);

function listContacts(){
     // Busca contatos na API
    contactService.fetchContacts()
     .then(contacts => {
         renderContacts(contacts);
     })
     .catch(error => {
         console.error('Houve um problema ao buscar os contatos:', error);
     });

}

function submitContact(event){
    event.preventDefault(); // Evita o envio padrão do formulário

    const formData = new FormData(addContactForm);
    const contactData = {
        name: formData.get('name'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        photo: formData.get('photo') || 'https://placehold.co/100', // Foto padrão
    };

    contactService.addContact(contactData)
        .then(() => {
            return contactService.fetchContacts();
        })
        .then(contacts => {
            renderContacts(contacts);
            addContactForm.reset(); // Limpa os campos do formulário
        })
        .catch(error => {
            console.error('Houve um problema ao adicionar o contato:', error);
        });
}


// Função para renderizar contatos na página
function renderContacts(contacts) {
    contactList.innerHTML = ''; // Limpa os contatos existentes

    contacts.forEach(contact => {
        const contactCard = createContactCard(contact);
        contactList.appendChild(contactCard);
    });
}

// Função para criar o card de contato
function createContactCard(contact) {
    
    const contactCard = document.createElement('div');
    contactCard.classList.add('contact');

    const photo = document.createElement('img');
    photo.src = contact.photo;
    photo.alt = contact.name;

    const name = document.createElement('h3');
    name.textContent = contact.name;

    const phone = document.createElement('p');
    phone.textContent = `Telefone: ${contact.phone}`;

    const email = document.createElement('p');
    email.textContent = `Email: ${contact.email}`;

    contactCard.appendChild(photo);
    contactCard.appendChild(name);
    contactCard.appendChild(phone);
    contactCard.appendChild(email);

    return contactCard;
}