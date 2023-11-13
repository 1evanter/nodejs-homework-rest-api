const { Contact } = require("../models/contact");

// const { HttpError, ctrlWrapper } = require("../helpers");
const { ctrlWrapper } = require("../helpers");

const getAllContacts = async (req, res) => {
  const result = await Contact.find();
  res.status(200).json(result);
};

// const getContactById = async (req, res) => {
//   const { contactId } = req.params;
//   const result = await contacts.getContactById(contactId);

//   if (!result) {
//     throw HttpError(404, "Not found");
//   }

//   res.status(200).json(result);
// };

// const addContact = async (req, res) => {
//   const { error } = addSchema.validate(req.body);
//   if (error) {
//     throw HttpError(400, { message: "missing required name field" });
//   }
//   const result = await contacts.addContact(req.body);
//   res.status(201).json(result);
// };

// const updateContact = async (req, res) => {
//   const { error } = addSchema.validate(req.body);
//   if (error) {
//     throw HttpError(400, { message: "missing fields" });
//   }
//   const { contactId } = req.params;
//   const result = await contacts.updateContact(contactId, req.body);

//   if (!result) {
//     throw HttpError(404, "Not found");
//   }

//   res.status(200).json(result);
// };

// const deleteContact = async (req, res) => {
//   const { contactId } = req.params;
//   const result = await contacts.removeContact(contactId);
//   console.log(result);
//   if (!result) {
//     throw HttpError(404, "Not found");
//   }

//   res.status(200).json({ message: "contact deleted" });
// };

module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
  // getContactById: ctrlWrapper(getContactById),
  // addContact: ctrlWrapper(addContact),
  // updateContact: ctrlWrapper(updateContact),
  // deleteContact: ctrlWrapper(deleteContact),
};
