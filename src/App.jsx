import { useState } from "react";

function App() {
  const [pass, setPass] = useState(""); // State for password
  const [isVisible, setIsVisible] = useState(false); // Toggle state for visibility
  const [isnum, setisnum] = useState(false);
  const [issym, setissym] = useState(false);
  const [length, setlength] = useState(8);
  const generatePassword = () => {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(isnum)  chars+="1234567890";
    if(issym)  chars+="@#$%&!";
    let newPass = "";
    for (let i = 0; i < length; i++) {
      newPass += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPass(newPass);
  };

  const copyToClipboard = () => {
    if (pass) {
      navigator.clipboard.writeText(pass);
      alert("Password copied!");
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-900">
      <div className="bg-gray-700 p-6 rounded-lg shadow-md flex flex-col items-center w-96">
        <h1 className="text-white text-2xl font-bold mb-4">PASSWORD GENERATOR</h1>

        <div className="flex w-full space-x-2 mb-4">
          <input
            type={isVisible ? "text" : "password"} // Toggle input type
            readOnly
            placeholder="Generated password"
            value={pass}
            className="p-2 flex-1 border rounded-md text-white"
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            onClick={copyToClipboard}
            disabled={!pass}
          >
            COPY
          </button>
        </div>
         
         <div className="px-4 py-2 "><input type="range"
               min={8}
               max={20}
               value={length}
               onChange={(e)=>{
                 generatePassword();
                 setlength(e.target.value)}}
               />
               <label className="text-white px-2.5" >lenght:{length}</label>
               </div>

        <div className="flex items-center space-x-2 mb-4">
          <input
            type="checkbox"
            checked={isVisible}
            onChange={() => setIsVisible(!isVisible)}
            className="cursor-pointer"
          />
          <label className="text-white">Show Password</label>
        </div>
        <div className="flex items-center space-x-2 mb-4">
          <input
            type="checkbox"
            checked={isnum}
            onChange={() => setisnum(!isnum)}
            className="cursor-pointer"
          />
          <label className="text-white">numericalsadded</label>

          <input
            type="checkbox"
            checked={issym}
            onChange={() => setissym(!issym)}
            className="cursor-pointer"
          />
          <label className="text-white">symbolsadded</label>
        </div>

        <button
          className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
          onClick={generatePassword}
        >
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default App;
