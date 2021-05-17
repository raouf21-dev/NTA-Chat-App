import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

export const PROJECT_ID = "b27c1921-c863-413f-bcb7-e3e126612e67";

function App() {

  if (!localStorage.getItem('username')) return <LoginForm /> 
  
  return (
    <div className="App">
      
      <ChatEngine
        projectID={PROJECT_ID}
        height="100vh"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppState) => <ChatFeed {...chatAppState} />}
        
      />
    </div>
  );
}

export default App;
