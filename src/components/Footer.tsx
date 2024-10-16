import React from 'react';
import { Pane, Button, Badge, Text } from 'evergreen-ui';
import { Headers} from "../constants/strings";

interface FooterProps {
    remainingCount: number;
    filter: 'all' | 'active' | 'completed';
    setFilter: (filter: 'all' | 'active' | 'completed') => void;
    clearCompleted: () => void;
}

const Footer: React.FC<FooterProps> = ({ remainingCount, filter, setFilter, clearCompleted}) => (
    <Pane display="flex"
          justifyContent="space-between"
          alignItems="center"
          padding={10}
          marginTop={20}
          borderTop>
        <Text size={300}>{remainingCount} {Headers.LEFT_TODOS}</Text>

        <Pane display="flex" flexDirection="column" alignItems="flex-start" gap={1}>
            <Button appearance="minimal" onClick={() => setFilter('all')}>
                <Badge color={filter === 'all' ? 'blue' : 'neutral'}>{Headers.ALL_TODOS}</Badge>
            </Button>
            <Button appearance="minimal" onClick={() => setFilter('active')}>
                <Badge color={filter === 'active' ? 'blue' : 'neutral'}>{Headers.ACTIVE_TODOS}</Badge>
            </Button>
            <Button appearance="minimal" onClick={() => setFilter('completed')}>
                <Badge color={filter === 'completed' ? 'blue' : 'neutral'}>{Headers.COMPLETED_TODOS}</Badge>
            </Button>
        </Pane>

        <Button onClick={clearCompleted} appearance="minimal" intent="danger">
            {Headers.DELETE_COMPLETED}
        </Button>
    </Pane>
);

export default Footer;
