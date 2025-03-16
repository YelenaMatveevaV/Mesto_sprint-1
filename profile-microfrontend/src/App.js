import React, {lazy, Suspense} from "react";
import "./index.css";
//import TasksTestControl from "./components/TasksTestControl";

const TasksTestControl = lazy(() => 
  import('./components/TasksTestControl').catch(() => {
  return { default: () => <div className='error'>Component is not available!</div> };
 })
 );

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: host</div>
    <div>Framework: react-19</div>
    <Suspense fallback={<div>Loading...</div>}>
      <TasksTestControl />
    </Suspense>
  </div>
);

export default App;