import React, { useContext, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/blogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state, editBlogPost } = useContext(Context);
  const blogPost = state.find((blogPost) => (blogPost.id = id));
  const [title, setTitle] = useState(blogPost.title);
  const [content, setContent] = useState(blogPost.content);
  const initialValues = { title: blogPost.title, content: blogPost.content };
  const onSubmit = (title, content) => {
    editBlogPost(id, title, content, () => navigation.pop());
  };

  return (
    <BlogPostForm
      onSubmit={(title, content) => onSubmit(title, content)}
      initialValues={initialValues}
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
