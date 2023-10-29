import { useState} from 'react'
import {View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { COLORS, icons, SIZES } from '../../../constants';
import styles from '../../home/welcome/welcome.style'
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
    <View>
      <View style={styles.searchContainer}> 
        <View style={styles.searchWrapper}>
        <div style={styles.headerTitle} className="chat">
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
          <TextInput
            style={styles.searchInput}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={ (e) => {
              if (e.key === 'Enter') {
                sendMessage()
              }
            }}
          />
          </View>
          <TouchableOpacity style={styles.searchBtn} onClick={sendMessage}>
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Chatbot