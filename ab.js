
function Contact(name, phone, email) {
    this.name = name;
    this.phone = phone;
    this.email = email;
  }
  
  Contact.prototype.getCardHTML = function() {
    return `
      <div class="contact-card">
        <h3>${this.name}</h3>
        <p>Phone: ${this.phone}</p>
        <p>Email: ${this.email}</p>
      </div>
    `;
  };
  
  
  function AddressBook() {
    this.contacts = [];
  }
  
  AddressBook.prototype.addContact = function(contact) {
    this.contacts.push(contact);
    this.render();
  };
  
  AddressBook.prototype.render = function() {
    const contactsDiv = document.getElementById('contacts');
    contactsDiv.innerHTML = '';
    this.contacts.forEach(function(contact) {
      contactsDiv.innerHTML += contact.getCardHTML();
    });
  };
  

  const myAddressBook = new AddressBook();
  
  
  function addContact() {
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    
    if (name && phone && email) {
      const newContact = new Contact(name, phone, email);
      myAddressBook.addContact(newContact);
  
      document.getElementById('name').value = '';
      document.getElementById('phone').value = '';
      document.getElementById('email').value = '';
    } else {
      alert('Please fill in all fields!');
    }
  }
  
