import { useDispatch } from "react-redux";
import { HiUser, HiPhone } from "react-icons/hi";
import { deleteContact } from "../../redux/contactsSlice";
import css from "./Contact.module.css"



export default function Contact({contact}) {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteContact(contact.id));
    }




    return (
        <div className={css.container}>
      <address>
        <div className={css.user}>
          <HiUser />
          <span>{contact.name}</span>
        </div>
        <div className={css.phone}>
          <HiPhone />
          <span>{contact.number}</span>
        </div>
      </address>
      <form>
        <button type="button" className={css.btn} onClick={handleDelete}>Delete</button>
      </form>
    </div>
    )
}