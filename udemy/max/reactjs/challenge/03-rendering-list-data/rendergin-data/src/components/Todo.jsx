const Todo = function (props) {
  const { data } = props;
  console.log(data);
  return (
    <ul>
      {data.map(elem => (
        <li>{elem}</li>
      ))}
    </ul>
  );
};

export default Todo;
