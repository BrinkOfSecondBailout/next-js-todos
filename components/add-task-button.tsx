import React from 'react'
import {useFormStatus} from 'react-dom';

const AddTaskButton = () => {
    const {pending} = useFormStatus();
    return (
        <button disabled={pending} type="submit">
            Add
        </button>
    )
}

export default AddTaskButton