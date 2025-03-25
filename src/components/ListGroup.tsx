function ListGroup() {
  let items = [
    "Delhi",
    "Noida",
    "Gurugram",
    "Mumbai",
    "Pune",
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Jaipur",
  ];
  //items = [];

  if (items.length === 0)
    return (
      <>
        <h1>List</h1> <p>No items found</p>
      </>
    );

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
