import React from 'react';
import { FlatList } from 'react-native';
import TaskItem from './TaskItem';

export { TaskItem };

interface Item { label: string, isDone: boolean }
interface IProps {
    data: Item[]
}

interface IState {
    data: Item[]
}

export default class TaskList extends React.Component<IProps, IState> {

    componentDidMount() {
        const { data } = this.props;
        this.setState({ data });
    }

    state = {
        data: []
    }

    _onDeletePress = (index: number) => {
        const { data }: { data: Item[] } = this.state;
        const updatedList = data.filter((el, i: number) => i !== index);

        this.setState({ data: updatedList });
        /**
         * #TODO;
         * send the latest document to Firebase;
         */
    }

    _onPress = (index: number) => {
        /**
         * I don't like this
         */
        const { data }: { data: Item[] } = this.state;
        const updatedList = data.map((el, i) => {
            if (i === index) {
                return { label: el.label, isDone: !el.isDone };
            }
            return el;
        });

        this.setState({ data: updatedList });
        // #TODO: -- Save result in Firebase
    }

    _renderItem = ({ item, index }: { item: Item, index: number }) => 
        <TaskItem 
            isDone={item.isDone}
            label={item.label}
            onDeletePress={() => this._onDeletePress(index)}
            onPress={() => this._onPress(index)} />
    
    render() {
        const { data } = this.state;
        return (
            <FlatList
                data={data}
                renderItem={this._renderItem}/>
        )
    }
}