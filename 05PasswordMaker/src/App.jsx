import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [passwordLength, setPasswordLength] = useState(8);
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [isCharacterAllowed, setIsCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordReference = useRef(null);

  const generatePassword = useCallback(() => {
    let newGeneratedPassword = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (isNumberAllowed) string += "0123456789";
    if (isCharacterAllowed) string += "!@#$%&'()*+,-./";

    for (let index = 1; index <= passwordLength; index++) {
      let indexOfCharacter = Math.floor(Math.random() * string.length + 1);
      newGeneratedPassword += string.charAt(indexOfCharacter);
    }

    setPassword(newGeneratedPassword);
  }, [passwordLength, isNumberAllowed, isCharacterAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordReference.current?.select();
    // passwordReference.current?.setSelectionRange(0, 24);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    generatePassword();
  }, [passwordLength, isNumberAllowed, isCharacterAllowed, generatePassword]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 my-8 text-white bg-gray-800">
      <h1 className="text-center text-2xl my-4">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4 text-black">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="password"
          readOnly
          ref={passwordReference}
        />
        <button
          onClick={copyPasswordToClipboard}
          className="outline-none bg-blue-700 px-3 py-0.5 shrink-0"
        >
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={24}
            value={passwordLength}
            className="cursor-pointer"
            onChange={(eventObject) => {
              setPasswordLength(eventObject.target.value);
            }}
          />
          <label>Length: {passwordLength}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={isNumberAllowed}
            id="numberInput"
            onChange={() => {
              setIsNumberAllowed((previousState) => !previousState);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={isCharacterAllowed}
            id="characterInput"
            onChange={() => {
              setIsCharacterAllowed((previousState) => !previousState);
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
