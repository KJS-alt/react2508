function Book(props) {
    return(
    <div>
        <h1> 책이름 {props.name}</h1>
        <h3> 책가격 {props.numOfpage}</h3>
    </div>
    )
}
export default Book