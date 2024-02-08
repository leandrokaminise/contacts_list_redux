    import React, { useState } from 'react';
    import { useDispatch } from 'react-redux';
    import { addContact } from '../redux/actions';

    const ContactForm = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addContact(formData));
        setFormData({ fullName: '', email: '', phone: '' });
    };

    return (
        <div>
        <h2>Add Contact</h2>
        <form onSubmit={handleSubmit}>
            <label>
            Full Name:
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
            </label>
            <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <label>
            Phone:
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
            </label>
            <button type="submit">Add Contact</button>
        </form>
        </div>
    );
    };

    export default ContactForm;
