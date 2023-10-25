export const getAllContacts = ({ contacts }) => contacts.items.results;

export const getFilteredContacts = ({ filter, contacts }) => {
console.log('contacts', contacts);
  if (!filter) {
    return contacts.items.results;
  }

  const normalizedFilter = filter.toLowerCase();
  const result = contacts.items.results.filter(({ name }) => {
    return name.toLowerCase().includes(normalizedFilter);
  });

  return res;
};

