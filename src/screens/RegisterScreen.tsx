import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Layout, Text, Button, Input, Icon } from 'react-native-ui-kitten';
import { NavigationStackProp } from 'react-navigation-stack';
import { Header, StatusBar } from 'src/components';
import { color } from 'src/config/theme';

interface Props {
  navigation: NavigationStackProp;
}

const RegisterScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <Layout style={styles.container}>
      <StatusBar />
      <Header
        title='Register'
        leftIconName='arrow-back-outline'
        leftPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <Text category='s2' style={styles.title}>
          Enter your account to register
        </Text>
        <Input
          placeholder='Username'
          style={styles.input}
          icon={() => <Icon name='person-outline' />}
          caption={'Invalid username'}
          captionTextStyle={{ color: '#FF3D71' }}
        />
        <Input
          secureTextEntry
          placeholder='Password'
          style={styles.input}
          icon={() => <Icon name='lock-outline' />}
          caption={'Invalid password'}
          captionTextStyle={{ color: '#FF3D71' }}
        />
        <Button
          style={styles.btn}
          textStyle={{ color: 'white' }}
          size='large'
          onPress={() => navigation.navigate('Congratulation')}
        >
          REGISTER
        </Button>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: color.background
  },
  content: {
    flex: 1,
    padding: 15
  },
  title: {
    color: color.secondary,
    textAlign: 'center',
    marginBottom: 20
  },
  input: {
    marginBottom: 15
  },
  btn: {
    width: '100%',
    backgroundColor: color.primary,
    borderColor: 'rgba(255, 126, 103, 0.2)',
    marginTop: 50,
    marginBottom: 10
  },
  disabledBtn: {
    width: '100%',
    backgroundColor: '#EDF1F7',
    borderColor: 'rgba(237, 241, 247, 0.2)',
    marginTop: 50,
    marginBottom: 10
  }
});

export default RegisterScreen;
