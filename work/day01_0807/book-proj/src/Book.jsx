function Book(props) {
    return (
        <div>
            <h1>이 책의 이름은 리액스 {props.name}</h1>
            <h1>이 책은 {props.total}page로 이루어져 있다.</h1>
        </div>
    )
}
export default Book;