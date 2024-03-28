class Contact {
    constructor({id, name, phone, email, photo}) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.photo = photo;
    }
}

const contactList = document.getElementById('contact-list');
const addContactForm = document.getElementById('add-contact-form');

document.addEventListener('DOMContentLoaded', listContacts);

// Event listener para o envio do formulário
addContactForm.addEventListener('submit', submitContact);

function listContacts(){
     // Busca contatos na API
     fetchContacts()
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
        photo: formData.get('photo') || 'https://via.placeholder.com/100', // Foto padrão
    };

    addContact(contactData)
        .then(() => {
            return fetchContacts();
        })
        .then(contacts => {
            renderContacts(contacts);
            addContactForm.reset(); // Limpa os campos do formulário
        })
        .catch(error => {
            console.error('Houve um problema ao adicionar o contato:', error);
        });
}

// Função para buscar contatos na API
function fetchContacts() {
    return fetch('https://imd0404-webi-default-rtdb.firebaseio.com/contacts.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Resposta de rede não foi ok');
            }
            return response.json();
        })
        .then(contacts => {
            const contactsList = [];
            for (let key in contacts) {
                const contact = new Contact({
                    id: key, 
                    name: contacts[key].name,
                    phone: contacts[key].phone,
                    email: contacts[key].email,
                    photo: contacts[key].photo});

                //contacts.push({ id: key, ...data[key] });
                contactsList.push(contact);
            }
            return contactsList;
        });
}

// Função para adicionar contato na API
function addContact(contactData) {
    return fetch('https://imd0404-webi-default-rtdb.firebaseio.com/contacts.json', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Resposta de rede não foi ok');
            }
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