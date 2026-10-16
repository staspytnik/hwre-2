import Greeting from "./components/Greeting";
import Message from "./components/Message";
import Button from "./components/Button";

function App() {
  const handleClick = () => {
    console.log("Натиснуто кнопку");
  };

  return (
    <div>
      <Greeting name="Стас" />
      <Message text="повідомлення" />
      <Button onClick={handleClick} />
    </div>
  );
}

export default App;
