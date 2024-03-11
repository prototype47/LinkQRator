import { createContext, useState } from "react";
import InputForm from "./components/InputForm";
import QRcode from "./components/QRcode";
import axios from "axios";

// Context API
export const InputContext = createContext();

function App() {

  const [inputValue, setInputValue] = useState({
    url: '',
    color: ''
  });
  const [response, setResponse] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const config = {
    headers: {
      Authorization: 'Bearer 1cff2b30-df95-11ee-8863-df6653032ee9',
    },
  }
  const bodyParameters = {
    "colorDark": inputValue.color,
    "qrCategory": "url",
    "text": inputValue.url,
  };
  const getQRcode = async () => {
    try {
      const res = await axios.post('https://qrtiger.com/api/qr/static', bodyParameters, config);
      setResponse(res.data.url);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  const value = { inputValue, setInputValue, getQRcode, response, error, loading};

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-screen flex items-center">
      <div className="container mx-auto max-w-4xl bg-cyan-300 rounded-md shadow">
        <div className="md:grid md:grid-cols-3">
          <InputContext.Provider value={value}>
            <InputForm />
            <QRcode />
          </InputContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
