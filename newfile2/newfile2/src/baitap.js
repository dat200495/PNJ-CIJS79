export const ToDo = (props) => {
    return (     
        <input className="search" type="text" placeholder="Enter your task here..."/>
    )
}; 
export const DoList = (props) => {
    return (
        <div className="dat">
            <input type="checkbox" className="list"/>
            <label for="list">{props.list}</label>
        </div>
    )
};

