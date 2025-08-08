function Car(props){
    return (
        <div className={`car-${props.label}`}>모델 : {props.name} 차 <br />라벨 : {props.label}</div>
    )
}
export default Car