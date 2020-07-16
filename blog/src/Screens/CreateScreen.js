import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/blogContext';
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);
  const onSubmit = (title, content) => {
    addBlogPost(title, content, () => navigation.navigate('Index'));
  };

  return <BlogPostForm onSubmit={onSubmit} />;
};

const styles = StyleSheet.create({});

export default CreateScreen;
