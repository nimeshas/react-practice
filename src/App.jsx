import Card from './Card'
import Button from './Button'
import Student from './Student'
import UserGreeting from './UserGreeting'
import List from './List.jsx'
function App() {
    return(<>
        <Card></Card>
        <Student name="Nimesha" age={19} isStudent={true}></Student>
        <Button/>
        <UserGreeting isLoggedIn={false} username="nimesha"/>
        <List/>
      </>
    );
}

export default App
