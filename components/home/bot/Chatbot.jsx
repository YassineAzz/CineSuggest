import { useState} from 'react'
import { View, Text } from 'react-native'
import { COLORS } from '../../../constants';
import styles from './Chatbot.style'
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios'

const  Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  const  sendMessage = async () => {
    if (message) {
      setMessages([...messages, message]);
      setMessage('');
      try {
        await axios.post('http://127.0.0.1:5000/search/keyword', { message });
        console.log('Données envoyées avec succès');
      } catch (error) {
        console.error('Erreur lors de l\'envoi des données', error);
      }
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