let todos = [
  {
    name: "eat breakfast"
  },
  {
    name: "eat lunch"
  },
  {
    name: "eat dinner"
  }
]
  

const getAllTodos = (req, res) => {
  res.status(200).json(todos)
}

const createTodo = (req, res) => {
  const todo = req.body
  todos.push(todo)
  res.status(201).json(todo)
}

module.exports = {
  getAllTodos,
  createTodo
}
