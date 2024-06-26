import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { RiContactsLine } from "react-icons/ri";
import { BsFillTelephoneFill } from "react-icons/bs";
import { deleteContact } from "../../redux/contactsOps";
export default function Contact({ contact }) {
  const dispatch = useDispatch();
  return (
    <div className={css.contactItemContainer}>
      <div>
        <div className={css.nameContainer}>
          <RiContactsLine />
          <p>{contact.name}</p>
        </div>
        <div className={css.numberContainer}>
          <BsFillTelephoneFill />
          <p>{contact.number}</p>
        </div>
        <button onClick={() => dispatch(deleteContact(contact.id))}>
          Delete contact
        </button>
      </div>
    </div>
  );
}
