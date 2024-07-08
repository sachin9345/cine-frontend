import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ContactList = () => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await axios.get('/api/v1/contactusform');
                console.log(response.data); // Log the response data
                if (response.data.success) {
                    setContacts(response.data.contact); // Ensure we set the array properly
                } else {
                    setError('Failed to fetch contacts');
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchContacts();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Contact List</h1>
            <ul>
                {contacts.map((contact) => (
                    <li key={contact._id}>
                        <p>Name: {contact.contactname}</p>
                        <p>Number: {contact.contactnumber}</p>
                        <p>Email: {contact.contactemail}</p>
                        <p>Message: {contact.message}</p>
                        <p>Created At: {new Date(contact.createdAt).toLocaleString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContactList;
