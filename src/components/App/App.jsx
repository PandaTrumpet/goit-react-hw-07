import ContactFrom from "../ContactForm/ContactFrom";
import { fetchContact } from "../../redux/contactsOps";
import ContactList from "../ContactList/ContactList";
import Loader from "../Loader/Loader";
import SearchBox from "../SearchBox/SearchBox";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLoading } from "../../redux/contactSlice";
function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  // console.log(isLoading);
  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>

      <ContactFrom />
      {isLoading && <Loader />}
      <SearchBox />
      <ContactList />
    </>
  );
}

export default App;
