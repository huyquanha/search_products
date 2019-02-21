import React from 'react';

const ControlRefButton = React.forwardRef((props,ref) => (
    <button ref={ref}>Click me to change input</button>
));

export default ControlRefButton;