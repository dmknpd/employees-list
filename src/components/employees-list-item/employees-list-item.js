import "./employees-list-item.css";

const EmployeesListItem = (props) => {
  const { name, salary, onDelete, onToggleProp, increase, rise } = props;

  let className = "list-group-item d-flex justify-content-between";
  if (increase) {
    className += " increase";
  }

  if (rise) {
    className += " like";
  }

  return (
    <li className={className}>
      <span
        onClick={onToggleProp}
        data-toggle="rise"
        className="list-group-item-label"
      >
        {name}
      </span>
      <input
        type="text"
        defaultValue={salary + "$"}
        className="list-group-item-input"
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          onClick={onToggleProp}
          data-toggle="increase"
          type="button"
          className="btn-cookie btn-sm"
        >
          <i className="fas fa-cookie"></i>
        </button>

        <button onClick={onDelete} type="button" className="btn-trash btn-sm">
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmployeesListItem;
