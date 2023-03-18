import { Box } from 'components/Box';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { ContactsTitle } from 'pages/ContactsPage/ContactsPageStyled';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchFavoriteContacts } from 'redux/contacts/conatactsOperations';

const FavoritePage = () => {
  const [shouldFetchFavoriteContacts, setShoudFetchFavoriteContacts] =
    useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteContacts());
  }, [dispatch, shouldFetchFavoriteContacts]);

  return (
    <Box p="20px">
      <ContactsTitle>Favorites</ContactsTitle>
      <Filter />
      <ContactsList
        setShoudFetchFavoriteContacts={setShoudFetchFavoriteContacts}
        shouldFetchFavoriteContacts={shouldFetchFavoriteContacts}
        isItFavoritePage
      />
    </Box>
  );
};

export default FavoritePage;
