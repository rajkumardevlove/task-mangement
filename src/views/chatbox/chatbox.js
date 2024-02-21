import React, { useState,useEffect,useRef } from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);
  const [inputValue, setInputValue] = useState('');

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    const userInput = e.target.message.value;
    const botResponse = getBotResponse(userInput);
    setMessages([...messages, { text: botResponse, sender: 'bot' }]);
    setInputValue('');
    e.target.reset();
  };

  const handleDeleteMessage = (index) => {
    const updatedMessages = [...messages];
    updatedMessages.splice(index, 1);
    setMessages(updatedMessages);
  };

  const getBotResponse = (userInput) => {
    // Hardcoded AI responses
    const responses = {
        'hi': 'Hello! How can I assist you today?',
        'bye': 'Goodbye! Have a great day!',
        'how are you': 'I am just a bot, but thank you for asking!',
    };

    const employeesData = [
      { name: 'rajkumar', task: 'IV-567', completion: 80, balance: 20},
      { name: 'ram', task: 'IV-537', completion: 50, balance: 20 },
      { name: 'dharan', task: 'IV-527', completion: 40, balance: 20 },
      { name: 'pradeep', task: 'IV-560', completion: 90, balance: 20 },
      { name: 'arun', task: 'IV-588', completion: 40, balance: 0 }
  ];

    const lowerCaseInput = userInput.toLowerCase();
    let extract = lowerCaseInput.split(' ');
    if(userInput.toLowerCase() === 'all employee status' || userInput.toLowerCase() === 'team status') {
      return employeesData.map(employee => `${employee.name} working on ${employee.task} has completed ${employee.completion}%`).join('\n');
    }
   if (extract.includes('employee') || extract.includes('status')) {
      const employeeName = extract.find(word => employeesData.some(emp => emp.name === word));
      const employee = employeesData.find(emp => emp.name === employeeName);
      return employee ? `${employee.name} working on ${employee.task} has completed ${employee.completion}%    \n` : "Sorry, I couldn't find information about that employee.";
    }
    if(extract.includes('connect')) {
      if(!extract.find(word => employeesData.some(emp => emp.name === word))){
        return "Sorry, I couldn't find information about that employee.";
      }
      const employeeName = extract.find(word => employeesData.some(emp => emp.name === word));
      const employee = employeesData.find(emp => emp.name === employeeName);
      return `You will be connected to ${employee.name} shortly`;
    }
    if(extract.includes('length') || extract.includes('size')) {
      return 'Your team size is 5';
    }
    if(extract.includes('apply') && extract.includes('leave')) {
      return 'Leave applied successfully';
    }
    if(extract.includes('assign')) {
      if(!extract.find(word => employeesData.some(emp => emp.name === word))){
        return "Sorry, I couldn't find information about that employee.";
      }
      const employeeName = extract.find(word => employeesData.some(emp => emp.name === word));
      const employee = employeesData.find(emp => emp.name === employeeName);
      return `Task assigned to ${employee.name} successfully`;
    }
    else{
      return responses[lowerCaseInput] || "I'm sorry, I didn't understand that. Can you please rephrase?";
    }
};


const userInput = "employee status";
const botResponse = getBotResponse(userInput.toLowerCase());

if (botResponse === "I'm sorry, I didn't understand that. Can you please rephrase?") {
    // If the user input doesn't match any predefined responses
    console.log(generateResponse());
} else {
    console.log(botResponse);
}



  useEffect(() => {
    if (messagesEndRef.current>0) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div style={{ height: '80vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <div style={{ flex: '1', overflowX: 'auto', marginBottom: '10px' }}>
        {messages.map((message, index) => (
          <Paper key={index} elevation={3} style={{ margin: '10px', padding: '10px', position: 'relative' }}>
            <IconButton
              aria-label="delete"
              onClick={() => handleDeleteMessage(index)}
              style={{ position: 'absolute', top: '0px', right: '5px' }}
            >
              <CloseIcon />
            </IconButton>
            {message.text}
          </Paper>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleMessageSubmit} style={{ position: 'fixed', bottom: '0', left: '20%', width: '80%', padding: '10px', backgroundColor: '#f0f0f0' }}>
        <TextField
          name="message"
          label="Type your message"
          variant="outlined"
          fullWidth
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Chatbot;