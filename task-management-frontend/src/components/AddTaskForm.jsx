import React,{useState} from "react";

const AddTaskForm =({onAdd})=>{
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');

    const handleSubmit =async e=>{
        e.preventDefault();
        if(!description.trim()){
            setError("Description is required");
            return;
        }
        await onAdd(description);
        setDescription('');
        setError("");
    };
    return(
        <form onSubmit={handleSubmit} className="mb-4">
            <input
                type="text"
                placeholder="Task description"
                value={description}
                onChange={e => setDescription(e.target.value)}
                className="border p-2 w-full mb-2"
            />
             {error && <p className="text-red-500">{error}</p>}
             <button type="submit" className="bg-blue-500 text-white p-2 w-full">
                Add Task
            </button>
        </form>
    );
};
export default AddTaskForm;
