    import React from 'react';
    import { useSelector, useDispatch } from 'react-redux';
    import { removeContact } from '../redux/actions';

    const ContactList = () => {
    const contacts = useSelector((state) => state.contacts);
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeContact(id));
    };

    return (
        <div>
        <h2>Contact List</h2>
        <ul>
            {contacts.map((contact) => (
            <li key={contact.id}>
                {contact.fullName} - {contact.email} - {contact.phone}
                <button onClick={() => handleRemove(contact.id)}>Remove</button>
            </li>
            ))}
        </ul>
        </div>
    );
    };

    export default ContactList;
