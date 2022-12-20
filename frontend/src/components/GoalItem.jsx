import { useState  } from "react";
import { useDispatch } from "react-redux";
import { deleteGoal } from "../features/goals/goalSlice";
import { updateGoal } from "../features/goals/goalSlice";

function GoalItem({ goal }) {
  const [id, setId] = useState(goal._id);
  const [text, setText] = useState(goal.text);

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(text, id);
    const div = document.getElementById(goal._id);
    div.style.display = "none";
    dispatch(updateGoal({ id, text }));
  };

  return (
    <div className="goal">
      <div className="title">{text}</div>
      <button onClick={() => dispatch(deleteGoal(goal._id))} className="close">
        X
      </button>
      <button
        onClick={() => {
          setText(goal.text);
          setId(goal._id);
          const div = document.getElementById(goal._id);
          div.style.display = "block";
        }}
        className="update"
      >
        Update
      </button>

      <div className="date">
        {new Date(goal.createdAt).toLocaleString("en-US")}
      </div>
      {/* update form */}
      <form
        className="update-form"
        style={{'display' :  "none"}}
        id={goal._id}
        name={goal._id}
        onSubmit={onSubmit}
      >
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="form-control"
          placeholder="Update your goal"
        />
        <button className="update-form1" type="submit-form">
          Update
        </button>
      </form>
    </div>
  );
}

export default GoalItem;
