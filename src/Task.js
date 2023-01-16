export const Task = (props) => {
    return (

        <div className="List"
            style={{backgroundColor: props.completed ? "green" : "white" }}>
            <h1> {props.taskName}
                {/* Untuk fungsi yang memiliki parameter */}
                <button onClick={() => props.deleteTask(props.id)}> X </button>
                <button onClick={() => props.updateTask(props.id)}> Complete </button>
            </h1>
        </div>
    )
}