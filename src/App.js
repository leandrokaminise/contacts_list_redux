import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div>
      <GlobalStyle />
      <h1>Contact Management App</h1>
      <ContactForm />
      <ContactList />
    </div>
  );
}

export default App;
