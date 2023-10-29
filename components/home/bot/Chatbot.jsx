import { useState} from 'react'
import { View, Text } from 'react-native'
import { COLORS } from '../../../constants';
import styles from './Chatbot.style'
import { SafeAreaView } from 'react-native-safe-area-context';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    if (message) {
      setMessages([...messages, message]);
      setMessage('');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1,  backgroundColor: COLORS.lightWhite}}>
      <SafeAreaView style={styles.container}>
      <div style={styles.headerTitle} className="chat">
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <input
        style={styles.headerTitle}
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={ (e) => {
          if (e.key === 'Enter') {
            sendMessage()
          }
        }}
        placeholder="Mot clé de vos envies"
      />
      </SafeAreaView>
      <button style={styles.headerTitle} onClick={sendMessage}>Valider</button>
    </SafeAreaView>
  );
}

export default Chatbot