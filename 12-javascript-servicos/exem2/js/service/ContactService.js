import { Contact } from "../model/Contact.js";

var baseUrl = "https://webi-20251-imd0404-default-rtdb.firebaseio.com/";

export class ContactService {
  // Função para buscar contatos na API e retornar uma lista deles
  async fetchContacts() {
    let fetchUrl = baseUrl + "contacts.json";
    const contactsList = [];

    try {
      let response = await fetch(fetchUrl);

      if (!response.ok) {
        throw new Error("Resposta de rede não foi ok");
      }
      let contacts = await response.json();

      if (contacts) {
        for (let key in contacts) {
          const contact = new Contact({
            id: key,
            name: contacts[key].name,
            phone: contacts[key].phone,
            email: contacts[key].email,
            photo: contacts[key].photo,
          });
          //contacts.push({ id: key, ...data[key] });
          contactsList.push(contact);
        }
        return contactsList;
      } else {
        throw new Error("Não há contatos");
      }
    } catch (error) {
      console.error("Houve um problema ao buscar os contatos:", error);
    }
  }

  // Função para adicionar contato na API
  async addContact(contactData) {
    let addUrl = baseUrl + "contacts.json";

    try {
      let response = await fetch(addUrl, {
        method: "POST", //enviar dados
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData), //os dados que quero enviar - proprierdade body - formato JSON
      });
      if (!response.ok) {
        throw new Error("Resposta de rede não foi ok: " + error);
      }
    } catch (error) {
        throw new Error("Resposta ao salvar contato: " + error);
    }
  }

    // Função para deletar contato
  async deleteContact(contactId) {
    let deleteUrl = baseUrl + `contacts/${contactId}.json`;

    try {
      let response = await fetch(deleteUrl, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Erro ao deletar contato");
      }
    } catch (error) {
      console.error("Erro ao deletar contato:", error);
      throw error;
    }
  }

  // Função para atualizar contato
  async updateContact(contactId, updatedData) {
    let updateUrl = baseUrl + `contacts/${contactId}.json`;

    try {
      let response = await fetch(updateUrl, {
        method: "PUT", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });
      if (!response.ok) {
        throw new Error("Erro ao atualizar contato");
      }
    } catch (error) {
      console.error("Erro ao atualizar contato:", error);
      throw error;
    }
  }
}
