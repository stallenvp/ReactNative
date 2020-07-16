import React, { useContext, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/blogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const blogPost = state.find(
    (blogPost) => (blogPost.id = navigation.getParam('id')),
  );
  const [title, setTitle] = useState(blogPost.title);
  const [content, setContent] = useState(blogPost.content);
  const initialValues = { title: blogPost.title, content: blogPost.content };
  const onSubmit = (title, content) => {
    console.log(title, content);
  };

  return (
    <BlogPostForm onSubmit={() => onSubmit()} initialValues={initialValues} />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
