import React from "react";
import PropTypes from "prop-types";
import Select, { components } from "react-select";

import Arrow from "../../assets/images/arr.png";


const customStyles = {
    menu: () => ({
        width: '380px',
    }),
    option: (provided, state) => ({
        ...provided,
        width: '358px',
        height: '35px',
        margin: '2px 11px',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        background: state.isSelected ?
            'url(../../assets/images/optionSelected.png) no-repeat right 13px center, rgba(73, 194, 232, 0.11)' :
            '#FFF',
        color: '#000',
        borderRadius: '5px',
        cursor: 'pointer',
        '&:hover': {
            background: state.isSelected ? '' : 'rgba(73, 194, 232, 0.11)',
        },
        '&:active': {
            background: state.isSelected ?
                'url(../../assets/images/optionSelected.png) no-repeat right 13px center, rgba(73, 194, 232, 0.11)' :
                'rgba(73, 194, 232, 0.11)',
        },
    }),
    container: () => ({
        width: '380px',
        border: '0',
    }),
    input: () => ({
        fontSize: '16px',
        lineHeight: '20px',
    }),
    valueContainer: (provided) => ({
        ...provided,
        paddingLeft: '0',
    }),
    control: (provided, state) => ({
        ...provided,
        paddingLeft: '20px',
        borderRadius: '6px',
        height: '48px',
        border: !!state.selectProps.error && state.selectProps.touched ? '1px solid red' : '0',
        backgroundColor: '#fff',
        boxShadow: '0px 7px 64px rgba(0, 0, 0, 0.07)',
        '&:hover': {
            border: !!state.selectProps.error && state.selectProps.touched ? '1px solid red' : '0',
            cursor: 'pointer',
        },
    }),
    menuList: (provided, state) => {console.log(state); return {
        ...provided,
        position: 'absolute',
        width: state.options.length > 4 ? '397px' : '380px',
        maxHeight: '164px',
        zIndex: '2',
        scrollbarWidth: 'thin',
        boxSizing: 'border-box',
        marginTop: '6px',
        padding: '4px 0',
        boxShadow: '0px 7px 64px rgba(0, 0, 0, 0.07)',
        borderRadius: '6px',
        backgroundColor: '#fff',
    }},
    dropdownIndicator: () => ({
        margin: '13px 22px 13px 0',
    }),
};

const colorStyles = {
    ...customStyles,
    option: (provided, state) => ({
        ...provided,
        display: 'inline-block',
        width: '30px',
        height: '30px',
        marginRight: '20px',
        borderRadius: '50%',
        background: state.data.color,
        cursor: 'pointer',
        '&:hover': {
            background: state.data.color,
        },
        '&:active': {
            background: state.data.color,
        },
    }),
    menuList: (provided) => ({
        ...provided,
        position: 'absolute',
        zIndex: '2',
        width: '380px',
        height: '70px',
        marginTop: '6px',
        padding: '20px 0 20px 25px',
        borderRadius: '6px',
        boxShadow: '0px 7px 64px rgba(0, 0, 0, 0.07)',
        boxSizing: 'border-box',
        overflow: 'hidden',
        fontSize: '0',
        backgroundColor: '#fff',
    }),

}

const CustomSingleValue = (props) => (
    <components.SingleValue {...props}>
        {props.data.controlLabel}
    </components.SingleValue>
);

CustomSingleValue.propTypes = {
    data: PropTypes.objectOf(
        PropTypes.shape({
            controlLabel: PropTypes.string
        })
    )
};

const DropdownIndicator = (props) => {
    return (
        <components.DropdownIndicator {...props}>
            <img src={Arrow} alt="" />
        </components.DropdownIndicator>
    );
};


class CustomSelect extends React.Component {
    handleChange = (value) => {
        this.props.onChange(this.props.valueName, value);
    };

    handleBlur = () => {
        this.props.onBlur(this.props.valueName, true);
    };

    render() {
        const componentsProps = {
            DropdownIndicator,
            IndicatorSeparator: () => null
        };
        if (!this.props.isDefaultSelect) {
            componentsProps.SingleValue = CustomSingleValue;
        }
        const stylesProps = this.props.isDefaultSelect ? customStyles : colorStyles;
        return (
            <Select
                error={this.props.error}
                touched={this.props.touched}
                id={this.props.valueName}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                options={this.props.options}
                placeholder='Выбрать'
                isSearchable={false}
                components={componentsProps}
                styles={stylesProps}
            />
        );
    }
}

CustomSelect.propTypes = {
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    isDefaultSelect: PropTypes.bool,
    valueName: PropTypes.string,
    error: PropTypes.string,
    touched: PropTypes.string,
    options: PropTypes.object,
};

export const DefaultSelect = (props) => (
    <CustomSelect isDefaultSelect={true} {...props} />
);

export const ColorSelect = (props) => (
    <CustomSelect isDefaultSelect={false} {...props} />
);