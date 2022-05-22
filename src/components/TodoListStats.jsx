import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../recoil/todoListStatsState";

const TodoListStats = () => {
  const { totalNum, totalCompletedNum, totalUnCompletedNum, percentCompleted } =
    useRecoilValue(todoListStatsState);
  const formattedPercentCompleted = Math.round(percentCompleted * 100);
  return (
    <div>
      <ul>
        <li>Total items: {totalNum}</li>
        <li>Items Completed: {totalCompletedNum}</li>
        <li>Items not Completed: {totalUnCompletedNum}</li>
        <li>Percent completed: {formattedPercentCompleted}</li>
      </ul>
    </div>
  );
};

export default TodoListStats;
