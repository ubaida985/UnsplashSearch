import React from "react";

class ImageCard extends React.Component {

    state = { spans: 0 };

    constructor(props) {
        super(props);
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener("loads", this.setSpan());
    }

    setSpan = () => {
        const height = this.imageRef.current.clientHeight;
        const spanLenth = Math.ceil(height / 10);
        this.setState({ spans: spanLenth });
    }

    render() {
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img
                    ref={this.imageRef}
                    src={this.props.image.urls.regular}
                    alt={this.props.image.description} />
            </div>
        );
    }
}

export default ImageCard;