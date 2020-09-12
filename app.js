const Card = (props) => {
    return (
        <div class="card">
            <p class="title">{props.name}</p>
            <p>{props.job}</p>
        </div>
    )
}

const App = () => {
    return (
        <div>
            <Card name="Prawito Hudoro" job="FrontEnd Dev" />
            <Card name="Mila Ikrima" job="Project Manager" />
            <Card name="Mukidi" job="UI/UX" />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))