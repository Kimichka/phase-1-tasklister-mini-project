document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  let tasklist = []
  form.addEventListener('submit', (e) => {
  e.preventDefault()
  let toDo = document.querySelector('#new-task-description')
  if (toDo.value !== "") {
  tasklist.push(toDo.value)
  buildToDo(toDo.value)}
  form.reset()})
  function buildToDo(todo) {
  let p = document.createElement ('p')
  let btn = document.createElement ('button' )
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'
  p.textContent = `${todo}`
  p.appendChild(btn)
  document.querySelector('#list #tasks').appendChild(p)}
  function handleDelete(e){
  e.target.parentNode.remove()}});