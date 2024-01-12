const { program } = require("commander");
const { listContacts, getContactById } = require("./contacts.js");
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
      try {
        const contactsList = await listContacts();
        console.log(contactsList);
        return contactsList;
      } catch (error) {
        console.log(error);
      }
      break;

    case "get":
      try {
        const contactId = "AeHIrLTr6JkxGE6SN-0Rw";
        // const allContacts = await listContacts();
        // const ContactIdList = allContacts.map((contact) => contact.id);
        // const randomIndex = Math.floor(Math.random() * ContactIdList.length);
        // const randomId = ContactIdList[randomIndex];
        // console.log(randomId);
        // const oneBook = await getContactById(randomId);
        // console.log(oneBook);
        // return oneBook;
        // const allContacts = await listContacts();
        // const ContactIdList = allContacts.map((contact) => contact.id);
        // const randomIndex = Math.floor(Math.random() * ContactIdList.length);
        // const contactId = ContactIdList[randomIndex];
        const oneBook = await getContactById(contactId);

        console.log(oneBook);
        return oneBook;
      } catch (error) {
        console.log(error);
      }
      // ... id

      break;

    case "add":
      // ... name email phone
      break;

    case "remove":
      // ... id
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

// invokeAction({ action: "list" });

invokeAction(options);
