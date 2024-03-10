import InputForm from "./components/InputForm";
import QRcode from "./components/QRcode";

function App() {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-screen flex items-center">
      <div className="container mx-auto max-w-4xl bg-cyan-300 rounded-md shadow">
        <div className="md:grid md:grid-cols-3">
          <InputForm />
          <QRcode />
        </div>
      </div>
    </div>
  );
}

export default App;
