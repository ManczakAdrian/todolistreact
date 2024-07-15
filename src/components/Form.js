import { useState } from "react"


export const Form=(props)=>{
const [title,setTitle]=useState('');
const [priority, setPriority]=useState('')

    return <article>


        <form onSubmit={(event)=>{
            event.preventDefault();
            const newTodo={
                id:Math.random(),
                status:false,
                title:title,
                priority:priority
            }
            props.setTodos((prevState)=>[...prevState,newTodo]);
            setTitle('');
            setPriority('');

        }}>
        <input
        required
        value={title} onChange={(event)=>{setTitle(event.target.value)}}type="text" placeholder="Todo title"/>
        <select
        required
        value={priority} onChange={(event)=>setPriority(event.target.value)}>
            <option value="" hidden>Select priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
        </select>

        <button type="submit">Submit</button>
        </form>
    </article>
}