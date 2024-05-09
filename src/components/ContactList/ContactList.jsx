import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
export default function ContactList() {
  const contactSelector = useSelector((state) => state.contact.items);
  console.log(contactSelector);
  return (
    <>
      <ul>
        {contactSelector.map((contact) => {
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
