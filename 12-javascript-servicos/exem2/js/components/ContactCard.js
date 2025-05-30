import { ContactService } from "../service/ContactService.js";

const addContactForm = document.getElementById("add-contact-form");

var contactService = new ContactService();

function createContactCard(contact,  loadContactsFunc) {
  const contactCard = document.createElement("div");
  contactCard.classList.add("card", "mb-3", "p-3", "shadow-sm");

  const row = document.createElement("div");
  row.classList.add("row", "g-0");

  const imgCol = document.createElement("div");
  imgCol.classList.add("col-md-2", "d-flex", "align-items-center");

  const photo = document.createElement("img");
  photo.src = contact.photo;
  photo.alt = contact.name;
  photo.classList.add("img-fluid", "rounded-circle", "border", "border-secondary", "p-1");

  imgCol.appendChild(photo);

  const bodyCol = document.createElement("div");
  bodyCol.classList.add("col-md-10");

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const name = document.createElement("h5");
  name.textContent = contact.name;
  name.classList.add("card-title");

  const phone = document.createElement("p");
  phone.textContent = `Telefone: ${contact.phone}`;
  phone.classList.add("card-text", "mb-1");

  const email = document.createElement("p");
  email.textContent = `Email: ${contact.email}`;
  email.classList.add("card-text", "mb-2");

  const btnEdit = document.createElement("button");
  btnEdit.innerHTML = '<i class="bi bi-pencil-square me-1"></i> Editar';
  btnEdit.classList.add("btn", "btn-primary", "me-2");
  btnEdit.addEventListener("click", function () {
    document.getElementById("name").value = contact.name;
    document.getElementById("email").value = contact.email;
    document.getElementById("photo").value = contact.photo;
    document.getElementById("phone").value = contact.phone;
    addContactForm.dataset.mode = "edit";
    addContactForm.dataset.id = contact.id;
  });

  const btnRemove = document.createElement("button");
  btnRemove.innerHTML = '<i class="bi bi-trash me-1"></i> Remover'
  btnRemove.classList.add("btn", "btn-danger");
  btnRemove.addEventListener("click", async function () {
    await contactService.deleteContact(contact.id);
    await loadContactsFunc();
  });

  cardBody.appendChild(name);
  cardBody.appendChild(phone);
  cardBody.appendChild(email);
  cardBody.appendChild(btnEdit);
  cardBody.appendChild(btnRemove);

  bodyCol.appendChild(cardBody);
  row.appendChild(imgCol);
  row.appendChild(bodyCol);
  contactCard.appendChild(row);

  contactCard.setAttribute("data-id", `${contact.id}`);
  return contactCard;
}

export default createContactCard;