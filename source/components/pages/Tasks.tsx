import React from 'react';
import {} from 'react-native';
import { Container, Content } from 'native-base';
import { TaskList } from '../organisms';

const data = [
    {
        label: 'Formatura das PLPs 2019',
        isDone: true,
    },
    {
        label: 'Terminar planejamento de 2019',
        isDone: false,
    },
    {
        label: 'Lutar contra bozo',
        isDone: true,
    },
    {
        label: 'Descansar',
        isDone: false,
    },
]
 
interface IProps {

}

interface IState {

}

export default class Tasks extends React.Component<IProps, IState> {
    render() {
        return (
            <Container>
                <Content>
                    <TaskList data={data}/>
                </Content>
            </Container>
        )
    }
}
