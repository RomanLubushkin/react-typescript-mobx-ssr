import * as React from 'react';
import {StyledText} from '../ui/StyledText';

export interface SimpleComponentProps {
    text: string;
}

const SimpleComponent: React.SFC<SimpleComponentProps> = function (props: SimpleComponentProps) {
    const {text} = props;
    return (
        <StyledText>{text}</StyledText>
    );
};

SimpleComponent.defaultProps = {};

export default SimpleComponent;