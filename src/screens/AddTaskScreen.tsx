import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text } from 'react-native-ui-kitten';
import { Header, StatusBar } from 'src/components';
import { color } from 'src/config/theme';

const AddTaskScreen: React.FC = () => {
  return (
    <Layout style={styles.container}>
      <StatusBar />
      <Header
        title='New task'
      />
      <Text>Add Task screen</Text>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: color.background
  }
});

export default AddTaskScreen;
