import React, { useState } from 'react';
import api from '../services/api';

const CreatePost = () => {
  const [form, setForm] = useState({ title: '', content: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post('/posts', form);
    alert('Post created!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" onChange={e => setForm({ ...form, title: e.target.value })} />
      <textarea name="content" placeholder="Content" onChange={e => setForm({ ...form, content: e.target.value })} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreatePost;
