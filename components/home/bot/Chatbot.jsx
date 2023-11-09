import { useState} from 'react'
import { View, Text, Image, TextInput, TouchableOpacity, FlatList } from 'react-native'
import { COLORS, icons } from '../../../constants';
import styles from './Chatbot.style'
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios'

const  Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  const  sendMessage = async () => {
    if (message && message.trim().length > 0) {
      setMessages([...messages, message]);
      setMessage('');
      try {
        await axios.post('http://127.0.0.1:5000/search/keyword', { message });
      } catch (error) {
        console.error('ERROR while searching movies with keyWord', error);
      }
    }
  };

  return (
    <View style={styles.infoContainer}>
        <div style={styles.welcomeMessage} className="chat">
          {messages.map((msg, index) => (
            <div key={index}style={styles.chatBubble}>{msg} </div>
          ))}
        </div>
        <View style={styles.searchContainer}>
          <View style={styles.searchWrapper}>
            <TextInput
              style={[styles.searchInput, styles.welcomeMessage]}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={ (e) => {
                if (e.key === 'Enter') {
                  sendMessage()
                }
              }}
              placeholder=""
            />
          </View>
          <TouchableOpacity style={styles.searchBtn} onPress={sendMessage}>
          <Image 
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
        </View>
    </View>
  );
}

export default Chatbot