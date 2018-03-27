class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            isOn: true
        };
        this.timerId = setInterval(() => this.tick(), 1000);
        console.log("Chemsitry!")
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({date: new Date()});
    }

    render() {
        const date = this.state.date;
        const h = date.getHours();
        const m = date.getMinutes();
        const s = date.getSeconds();
        const displayTime = `${h}:${m}:${s}`;
        return (
            <Title title={displayTime} />
        );
    }
}
