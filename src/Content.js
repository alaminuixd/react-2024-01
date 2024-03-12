const Content = () => {
  const handleNameChange = () => {
    const names = [
      "AL AMIN",
      "RUHUL AHMI",
      "SULTANA",
      "SUBRINA AKHTER",
      "ABRAR SYED",
      "ARSHYA",
    ];
    const int = Math.floor(Math.random() * names.length);
    return names[int];
  };
  return (
    <main>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <p className="randomeName">Hello {handleNameChange()}!</p>
    </main>
  );
};
export default Content;
