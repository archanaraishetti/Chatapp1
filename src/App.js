import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';


const App = () => {
if(!localStorage.getItem('username')) return <LoginForm/>
const userId = authenticateUser(email);

  return (
    <ChatEngine
      height="100vh"
      projectID="e4fccc9b-2b8d-4466-9e60-4d420ba5b232"
      userName={localStorage.getItem('username')}
      userId= {userId}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
     
    />

  );
};


export default App;