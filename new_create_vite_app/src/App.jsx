import CustomComponent from "./CustomComponent";

function App() {
  const username = "test user 1";

  return (
    <>
      <CustomComponent />
      <p>Username is: {username}</p>
    </>
  );
}

export default App;
