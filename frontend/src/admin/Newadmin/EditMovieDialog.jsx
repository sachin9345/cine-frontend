import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button, Box } from '@mui/material';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditMovieDialog = ({ movie, onClose, onSave }) => {
  const [form, setForm] = useState({ name: '', starring: '', directedby: '', language: '', trailerlink: '', bookinglink: '', posterimage: '', bannerimage: '' });

  useEffect(() => {
    if (movie) {
      setForm(movie);
    }
  }, [movie]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async () => {
    if (movie._id) {
      await axios.put(`/api/v1/admin/cinema/${movie._id}`, form);
      onSave();
      toast.success("Updated Successfully");
    }
    onClose();
  };

  return (
    <Dialog open onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>{movie._id ? 'Edit Movie' : 'Edit Movie'}</DialogTitle>
      <DialogContent>
        <Box marginBottom={3}>
          <TextField name="name" label="Name" value={form.name} onChange={handleChange} fullWidth />
        </Box>
        <Box marginBottom={3}>
          <TextField name="starring" label="Starring" value={form.starring} onChange={handleChange} fullWidth />
        </Box>
        <Box marginBottom={3}>
          <TextField name="directedby" label="Directed By" value={form.directedby} onChange={handleChange} fullWidth />
        </Box>
        <Box marginBottom={3}>
          <TextField name="language" label="Language" value={form.language} onChange={handleChange} fullWidth />
        </Box>
        <Box marginBottom={3}>
          <TextField name="trailerlink" label="Trailer Link" value={form.trailerlink} onChange={handleChange} fullWidth />
        </Box>
        <Box marginBottom={3}>
          <TextField name="bookinglink" label="Booking Link" value={form.bookinglink} onChange={handleChange} fullWidth />
        </Box>
        <Box marginBottom={3}>
          <TextField name="posterimage" label="Poster Image" value={form.posterimage} onChange={handleChange} fullWidth />
        </Box>
        <TextField name="bannerimage" label="Banner Image" value={form.bannerimage} onChange={handleChange} fullWidth />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit}>{movie._id ? 'Update' : 'Update'}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditMovieDialog;
