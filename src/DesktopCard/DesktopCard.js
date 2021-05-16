import './DesktopCard.css';

import type { Node } from 'react';
import React, { PureComponent } from 'react';

interface Props {
    children: Node;
}

class DesktopCard extends PureComponent<Props> {
    render() {
        const { children } = this.props;
        const className = 'DesktopCard';

        return <div className={className}>{children}</div>;
    }
}

export default DesktopCard;