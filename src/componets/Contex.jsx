import React from 'react'

export const Contex = () => {
  return (
    <div>
        <div class="container">
    <div class="tasks">
      <div class="task">
        <input type="checkbox" id="task1"/>
        <label for="task1">Buy a new gaming laptop</label>
      </div>
      <div class="task">
        <input type="checkbox" id="task2"/>
        <label for="task2">Complete a previous task</label>
      </div>
      <div class="task">
        <input type="checkbox" id="task3"/>
        <label for="task3">Create a new portfolio site</label>
      </div>
    </div>
    <div class="buttons">
      <button class="add-task">Add your new todo</button>
      <button class="clear-all">Clear All</button>
    </div>
  </div>

    </div>
  )
}
