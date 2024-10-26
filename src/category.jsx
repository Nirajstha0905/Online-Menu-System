function category() {
  const buttonLabels = [
    "Main Course",
    "Soup",
    "Appetizer",
    "Beverage",
    "Hooka",
    "Side dish",
    "Dessert",
  ];
  return (
    <>
      <h3>Category</h3>
      <div>
        {buttonLabels.map((label, index) => (
          <button
            key={index}
            id={label}
            onClick={() => alert(`you clicked ${label}`)}
          >
            {label}
          </button>
        ))}
      </div>
    </>
  );
}

export default category;
