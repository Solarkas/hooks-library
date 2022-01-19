import React from "react";

import PropTypes from "prop-types";
import Subtitle from "../common/typografy/subtitle";
import CollapseWrapper from "../common/collapse";

const SimpleComponent = ({ name, onLogOut, handleChange }) => {
    return (
        <CollapseWrapper title="Упражнение">
            <Subtitle>{name}</Subtitle>
            <div>
                <p className="mt-3">
                    <button className="btn btn-primary" onClick={handleChange}>
                        {onLogOut}
                    </button>
                </p>
            </div>
        </CollapseWrapper>
    );
};
SimpleComponent.propTypes = {
    name: PropTypes.string,
    onLogOut: PropTypes.string,
    handleChange: PropTypes.func
};
export default SimpleComponent;
