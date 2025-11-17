
import react, { use } from  'react';

export default function Test() {

    const[taskDetails, setTaskDetails] = useState(sessionStorage.getItem('taskDetails') ? JSON.parse(sessionStorage.getItem('taskDetails')) : []);

    useEffect(() => {   }, [taskDetails]);
 const AddTask = () => {
   document.getElementById('dvTask').style.display = 'block';
}
const SaveTask = () => {
   var Task = document.getElementById('txtTaks').value;
  var taskDetails = sessionStorage.getItem('taskDetails') ? JSON.parse(sessionStorage.getItem('taskDetails')) : [];
   taskDetails.push(Task); 
   sessionStorage.setItem('taskDetails', JSON.stringify(taskDetails));
}

  return (
    <div>
      <div><button style="float:right;" onClick={AddTask}>Create Task</button></div>
      <div id="dvTask"> 
        <input type='text' id='txtTaks'></input> 
        <button onClick={SaveTask}>Add Task</button>
        </div>
      <div>
        <ul>
            {taskDetails.map((task, index) => (
              <li key={index} >{task}</li>   
            ))}
        </ul>

      </div>
    </div>
  );
}