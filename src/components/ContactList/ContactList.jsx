import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectContacts, visibleContacts } from "../../redux/contactSlice";
// import { selectFilter } from "../../redux/filterSlice";
export default function ContactList() {
  // const contactSelector = useSelector(selectContacts);
  // const findContact = useSelector(selectFilter);

  const filterAllContacts = useSelector(visibleContacts);
  return (
    <>
      <ul>
        {filterAllContacts.map((contact) => {
          return (
            <li key={contact.id}>
              <Contact contact={contact} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
