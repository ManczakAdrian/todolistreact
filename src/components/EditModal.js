export const EditModal=(props)=>{
    return
    <dialog open>
    <article>
      <h2>Edit todo</h2>

      <form>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" />

        <label htmlFor="priority">Priority</label>
        <select id="priority">
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <label htmlFor="status">Status</label>
        <input type="checkbox" id="status" />

        <div style={{ display: 'flex', gap: 20, margin: 50 }}>

          <button>Submit</button>
          <button onClick={()=>{
            props.setTodoToEdit(null);

          }}>Cancel</button>

        </div>


      </form>
    </article>
  </dialog>
}