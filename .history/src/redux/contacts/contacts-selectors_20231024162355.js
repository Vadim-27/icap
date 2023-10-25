export const getAllContacts = ({ contacts }) => contacts.items;

export const getFilteredContacts = ({ filter, contacts }) => {
clg
  if (!filter) {
    return contacts.items.results;
  }

  const normalizedFilter = filter.toLowerCase();
  const res = contacts.items.result.filter(({ name }) => {
    return name.toLowerCase().includes(normalizedFilter);
  });

  return res;
};

