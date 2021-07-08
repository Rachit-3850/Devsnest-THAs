const Black =(props) => {
    const {calorie,title} = props;
    return (
    <div className="card">
        <div className="heading">{title}</div>
        <div className="para">you have consumed {calorie} cals today</div>
    </div>
    )
}
export default Black;