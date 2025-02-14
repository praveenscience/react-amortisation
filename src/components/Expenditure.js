import { useState } from "react";
import Card from "./Bootstrap/Card";
import FormGroup from "./Bootstrap/FormGroup";

const Expenditure = () => {
  const [expenses, setExpenses] = useState({});
  const [inpName, setInpName] = useState("");
  const [inpExp, setInpExp] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (!inpExp) {
      setExpenses(exps => {
        delete exps[inpName];
        return exps;
      });
    } else {
      setExpenses(exps => ({
        ...exps,
        [inpName]: inpExp
      }));
    }
  };
  const handleChange = ({ target }) => {
    const fn = { setInpName, setInpExp };
    const { name, value } = target;
    fn["set" + name](name === "InpExp" ? +value : value);
  };
  return (
    <Card Header="Step 1: Enter your Expenditure">
      <p>
        Please add all the possible expenditure here. Currently you have added:
      </p>
      <ul>
        {Object.keys(expenses).length > 0 ? (
          Object.keys(expenses).map((exp, id) => (
            <li key={id}>
              {exp}: {expenses[exp]}
            </li>
          ))
        ) : (
          <li>Please add something!</li>
        )}
      </ul>
      <Card TextHeader={true} Header="Add New">
        <form onSubmit={handleSubmit} onChange={handleChange}>
          <FormGroup Id="InpName" Type="text" Label="Name" Value={inpName} />
          <FormGroup Id="InpExp" Type="number" Label="Expense" Value={inpExp} />
          <input type="submit" value="Add" className="btn btn-primary" />
        </form>
      </Card>
      <pre className="bg-light p-1 border rounded">
        {JSON.stringify({ expenses, inpName, inpExp }, null, 2)}
      </pre>
    </Card>
  );
};

export default Expenditure;
