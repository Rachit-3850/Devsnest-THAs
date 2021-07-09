const Black =(props) => {
    return (
        <div className={(Math.ceil(props.title / 8)%2==1)? (props.title % 2 == 0 ? 'white' : 'black'): (props.title % 2 == 1 ? 'white' : 'black')}>
        </div>
    )
}
export default Black;