import React from 'react';
import { Body, Button, CheckBox, Icon, ListItem, Text } from 'native-base';

interface IProps { 
    isDone: boolean;
    label: string;
    onPress: () => void;
    onDeletePress: () => void;
}

const onCheck = () => {

};

const TaskItem = (props: IProps) => {
    const { isDone, onDeletePress,  onPress, label } = props;
    return (
        <ListItem>
            <CheckBox checked={isDone} onPress={onPress}/>
            <Body>
                <Text>{label}</Text>
            </Body>
            <Button transparent onPress={onDeletePress}>
                <Icon name="close" />
            </Button>
        </ListItem>
    )
};

export default TaskItem;
