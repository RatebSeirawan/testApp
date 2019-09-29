import Reactotron from 'reactotron-react-native';

const reactotron = Reactotron.configure({host: '192.168.1.101'})
  // .use(reactotronRedux())
  .useReactNative()
  .connect();

reactotron.clear();

export default reactotron;
