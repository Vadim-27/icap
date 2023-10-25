export const getAllContacts = ({ contacts }) => contacts.items;

export const getFilteredContacts = ({ filter, contacts }) => {

  if (!filter) {
    return contacts.items.results;
  }

  const normalizedFilter = filter.toLowerCase();
  const result = contacts.items.filter(({ name }) => {
    return name.toLowerCase().includes(normalizedFilter);
  });

  return result;
};

