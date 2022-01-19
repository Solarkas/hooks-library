import React from "react";

import SimpleComponent from "./simpleComponent";
import withLogin from "./withLogin";

const HocExercise = () => {
    const ComponentWithAuth = withLogin(SimpleComponent);
    return <ComponentWithAuth />;
};

export default HocExercise;
