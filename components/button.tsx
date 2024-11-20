import React from 'react'
import {useFormStatus} from 'react-dom';

const button = () => {
    const {pending} = useFormStatus();
    return (
        <button type="submit">
            {
                pending ? "Adding..." : "Add"
            }
        </button>
    )
}

export default button