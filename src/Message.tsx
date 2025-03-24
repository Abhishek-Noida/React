function Message() {
  const name = "Abhishek";
  //JSX javascript xml
  if (name) return <h1>Hello {name}</h1>;
  else return <h1>Hello Buddy</h1>;
}

export default Message;
