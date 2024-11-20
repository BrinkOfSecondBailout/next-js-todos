import React from 'react'
import {useFormStatus} from 'react-dom';

const button = () => {
    const {pending} = useFormStatus();
    return (
        <button disabled={pending} type="submit">
            Add
        </button>
    )
}

export default button