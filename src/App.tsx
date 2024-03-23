import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";
import Rules from "./components/Info/Rules"
import Schedule from "./components/Info/Schedule"
import useTodos from "./hooks/useTodos";
import { CalendarCheck2, Scale } from "lucide-react";

function App() {
  const {
    todos,
    addTodo,
    setTodoCompleted,
    deleteTodo,
    deleteAllCompletedTodos,
  } = useTodos();

  return (
    <main className="py-10 h-screen space-y-5 overflow-y-auto">
      <h1 className="font-bold text-3xl text-center">ችቦ</h1>
      
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
      <div className="flex items-center space-x-4">
          <Scale
            className="text-gray-600 hover:text-gray-800 cursor-pointer"
            onMouseEnter={handleDrawerHover}
            onMouseLeave={handleDrawerClose}
          />
          <CalendarCheck2
            className="text-gray-600 hover:text-gray-800 cursor-pointer"
            onMouseEnter={handleDrawerHover2}
            onMouseLeave={handleDrawerClose2}
          />
   
         </div>
         {isDrawerOpen ? <Rules/> : <></>}
          {isDrawerOpen2 ?  <Schedule/> : <></>}

       
        <AddTodoForm onSubmit={addTodo} />
        <TodoList
          todos={todos}
          onCompletedChange={setTodoCompleted}
          onDelete={deleteTodo}
        />
      </div>
      <TodoSummary todos={todos} deleteAllCompleted={deleteAllCompletedTodos} />
    </main>
  );
}

export default App;
