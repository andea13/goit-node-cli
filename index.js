const { program } = require("commander");
const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
} = require("./contacts.js");
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();

// TODO: рефакторити
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contactsList = await listContacts();
      console.log(contactsList);

      break;

    case "get":
      const oneContact = await getContactById(id);
      console.log(oneContact);

      break;

    case "add":
      const newContact = await addContact(name, email, phone);
      console.log(newContact);
      break;

    case "remove":
      const removedContact = await removeContact(id);
      console.log(removedContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "PlqGej_y5yTcV4L_eY2B1" });
// invokeAction({
//   action: "add",
//   name: "Viktoriia",
//   email: "vk@gmail.com",
//   phone: "333-44-55",
// });
// invokeAction({ action: "remove", id: "PlqGej_y5yTcV4L_eY2B1" });

invokeAction(options);
