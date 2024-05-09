import ContactFrom from "../ContactForm/ContactFrom";
import { fetchContact } from "../../redux/contactsOps";
import ContactList from "../ContactList/ContactList";
import Loader from "../Loader/Loader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.contact.loading);
  // console.log(isLoading);
  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>

      <ContactFrom />
      {isLoading && <Loader />}
      <ContactList />
    </>
  );
}

export default App;
