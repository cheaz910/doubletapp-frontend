import React from "react";
import PropTypes from "prop-types";

import styles from "./image.module.css";


class Image extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            errored: false,
            src: this.props.src
        }
    }

    onError = () => {
        if (!this.state.errored) {
            this.setState({
                errored: true,
                src: this.props.src,
            });
        }
    }

    render() {
        const { isBorder, firstLetters, fontStyles, ...props } = this.props;
        const sizeStyle = { width: this.props.width, height: this.props.height };
        if (this.state.errored && this.state.src === this.props.src) {
            return (
                <div style={sizeStyle} className={styles.imgContainer}>
                    <div style={{...sizeStyle, ...fontStyles}} className={styles.imgContainer__empty}>
                        {firstLetters}
                    </div>
                </div>
            );
        }
        return (
            <div style={sizeStyle} className={[styles.imgContainer, isBorder ? styles.imgContainer_border : ''].join(' ')}>
                <img
                    className={styles.imgContainer__img}
                    onError={this.onError}
                    {...props}
                    alt={firstLetters}
                />
            </div>
        );
    }
}

Image.propTypes = {
    isBorder: PropTypes.bool,
    src: PropTypes.string,
    firstLetters: PropTypes.string,
    fontStyles: PropTypes.objectOf(
        PropTypes.shape({
            fontSize: PropTypes.string,
            lineHeight: PropTypes.string
        })
    ),
    width: PropTypes.string,
    height: PropTypes.string,
}

export default Image;