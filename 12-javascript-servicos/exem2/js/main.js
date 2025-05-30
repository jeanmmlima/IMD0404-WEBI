import createContactCard from "./components/ContactCard.js";
import { ContactService } from "./service/ContactService.js";

var contactService = new ContactService();

const contactList = document.getElementById("contact-list");
const addContactForm = document.getElementById("add-contact-form");

document.addEventListener("DOMContentLoaded", listContacts);

addContactForm.addEventListener("submit", submitContact);


function listContacts() {
  // Busca contatos na API

  const spinner = document.getElementById("spinner");
  spinner.style.display = "block"; // Mostra o spinner

  contactService
    .fetchContacts()
    .then((contacts) => {
      renderContacts(contacts);
    })
    .catch((error) => {
      console.error("Houve um problema ao buscar os contatos:", error);
    }).finally(() => {
        spinner.style.display = "none"; // Esconde o spinner
    });
}

function submitContact(event) {
  event.preventDefault(); // Evita o envio padrão do formulário

  const formData = new FormData(addContactForm);
  const contactData = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    photo: formData.get("photo") || "https://placehold.co/100", // Foto padrão
  };

  let mode = this.dataset.mode;
  let contactId = this.dataset.id;

  if(mode === "edit"){

    contactService.updateContact(contactId,contactData)
    .then(() => {
        return listContacts();
    }).then(() => {
      addContactForm.reset(); // Limpa os campos do formulário
    }).catch((error) => {
        console.error("Houve um problema ao atualizar o contato:", error);
    })

  } else {
    contactService
    .addContact(contactData)
    .then(() => {
      return contactService.fetchContacts();
    })
    .then((contacts) => {
      renderContacts(contacts);
      addContactForm.reset(); // Limpa os campos do formulário
    })
    .catch((error) => {
      console.error("Houve um problema ao adicionar o contato:", error);
    });
  }


  
}
// Função para renderizar contatos na página
function renderContacts(contacts) {
  contactList.innerHTML = ""; // Limpa os contatos existentes

  contacts.forEach((contact) => {
    const contactCard = createContactCard(contact,listContacts);
    contactList.appendChild(contactCard);
  });
}
