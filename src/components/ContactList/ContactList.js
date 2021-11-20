import { removeContact } from '../../redux/contacts/actions';
import s from './ContactList.module.css';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { getFilteredContacts } from '../../redux/contacts/selectors';
import { useSelector, useDispatch } from 'react-redux';

export default function ContactList() {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  return (
    <div>
      <ul className="contact-list">
        {contacts.map(({ name, number, id }) => (
          <li key={id} className={s.contact__item}>
            <p className={s.item}>{name}:</p>
            <p className={s.item}>{number}</p>
            <button
              key={id}
              type="button"
              className={s.onClick__btn}
              onClick={() => dispatch(removeContact(id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// function ContactList({ contacts, deleteContact }) {
//   return (
//     <div>
//       <ul className="contact-list">
//         {contacts.map(({ name, number, id }) => (
//           <li key={id} className={s.contact__item}>
//             <p className={s.item}>{name}:</p>
//             <p className={s.item}>{number}</p>
//             <button
//               key={id}
//               type="button"
//               className={s.onClick__btn}
//               onClick={() => deleteContact(id)}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// const mapStateToProps = state => {
//   return {
//     contacts: state.contacts,
//   };
// };
// const mapDispatchToProps = dispatch => {
//   return {
//     deleteContact: id => dispatch(removeContact(id)),
//   };
// };

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//       id: PropTypes.string.isRequired,
//     }),
//   ),
//   deleteContact: PropTypes.func.isRequired,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
