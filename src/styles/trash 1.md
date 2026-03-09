import { useState, useEffect } from "react";

export default function List({ list, setList, click }) {

  const [menu, setMenu] = useState({
    visible: false,
    x: 0,
    y: 0,
    taskId: null
  });

  function handleContextMenu(e, taskId) {
    e.preventDefault();

    setMenu({
      visible: true,
      x: e.pageX,
      y: e.pageY,
      taskId: taskId
    });
  }

  useEffect(() => {
    function closeMenu() {
      setMenu((prev) => ({ ...prev, visible: false }));
    }

    window.addEventListener("click", closeMenu);

    return () => window.removeEventListener("click", closeMenu);
  }, []);

  function deleteTask(id) {
    const updatedList = list.filter((task) => task.id !== id);
    setList(updatedList);

    setMenu((prev) => ({ ...prev, visible: false }));
  }

  return (
    <div className="todos">

      {/* ALL TASKS */}

      {click === "All Tasks" && (
        <div className="items">
          {list.length === 0 ? (
            <p>No Tasks Here</p>
          ) : (
            list.map((item) => (
              <div
                className="item"
                key={item.id}
                onContextMenu={(e) => handleContextMenu(e, item.id)}
              >
                <span>{item.task}</span>
                <span>{item.status ? "Complete" : "Incomplete"}</span>
              </div>
            ))
          )}
        </div>
      )}


      {/* ACTIVE TASKS */}

      {click === "Active Tasks" && (
        <div className="items">
          {list.filter((item) => item.status === false).length === 0 ? (
            <p>No Tasks Here</p>
          ) : (
            list
              .filter((item) => item.status === false)
              .map((item) => (
                <div
                  className="item"
                  key={item.id}
                  onContextMenu={(e) => handleContextMenu(e, item.id)}
                >
                  <span>{item.task}</span>
                  <span>Incomplete</span>
                </div>
              ))
          )}
        </div>
      )}


      {/* COMPLETED TASKS */}

      {click === "Completed Tasks" && (
        <div className="items">
          {list.filter((item) => item.status === true).length === 0 ? (
            <p>No Tasks Here</p>
          ) : (
            list
              .filter((item) => item.status === true)
              .map((item) => (
                <div
                  className="item"
                  key={item.id}
                  onContextMenu={(e) => handleContextMenu(e, item.id)}
                >
                  <span>{item.task}</span>
                  <span>Complete</span>
                </div>
              ))
          )}
        </div>
      )}


      {/* CONTEXT MENU */}

      {menu.visible && (
        <div
          className="context-menu"
          style={{
            position: "absolute",
            top: menu.y,
            left: menu.x
          }}
        >
          <button onClick={() => deleteTask(menu.taskId)}>
            Delete Task
          </button>
        </div>
      )}

    </div>
  );
}