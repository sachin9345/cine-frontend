import React, { useState } from 'react';
import axios from 'axios';
import './Newadmin.css';  // Import the CSS file
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewCinemaForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        starring: '',
        directedby: '',
        language: '',
        trailerlink: '',
        bookinglink: '',
        posterimage: null,
        bannerimage: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('name', formData.name);
        data.append('starring', formData.starring);
        data.append('directedby', formData.directedby);
        data.append('language', formData.language);
        data.append('trailerlink', formData.trailerlink);
        data.append('bookinglink', formData.bookinglink);
        if (formData.posterimage) {
            data.append('posterimage', formData.posterimage);
        }
        if (formData.bannerimage) {
            data.append('bannerimage', formData.bannerimage);
        }

        try {
            await axios.post('/api/v1/admin/cinema/new', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            toast.success('Cinema data posted successfully');
            setFormData({
                name: '',
                starring: '',
                directedby: '',
                language: '',
                trailerlink: '',
                bookinglink: '',
                posterimage: null,
                bannerimage: null,
            });
        } catch (error) {
            console.error('Error posting cinema data', error);
            toast.warning('Failed to post cinema data');
        }
    };

    return (
        <div className="form-container">
            <h2>Post New Cinema Data</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Starring:</label>
                    <input type="text" name="starring" value={formData.starring} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Directed By:</label>
                    <input type="text" name="directedby" value={formData.directedby} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Language:</label>
                    <input type="text" name="language" value={formData.language} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Trailer Link:</label>
                    <input type="text" name="trailerlink" value={formData.trailerlink} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Booking Link:</label>
                    <input type="text" name="bookinglink" value={formData.bookinglink} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Poster Image:</label>
                    <input type="file" name="posterimage" onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Banner Image:</label>
                    <input type="file" name="bannerimage" onChange={handleChange} required />
                </div>
                <button type="submit">Post Cinema Data</button>
            </form>
           
            
        </div>
    );
};

export default NewCinemaForm;
