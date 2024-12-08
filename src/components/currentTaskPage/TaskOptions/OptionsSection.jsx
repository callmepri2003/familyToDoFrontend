/* eslint-disable react/prop-types */
import {AcceptOption} from './AcceptOption' 
import { CompleteOption } from './CompleteOption';
import { RejectOption } from './RejectOption';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { useTheme } from 'styled-components';

const OptionsSection = ({taskId}) => {
    const theme = useTheme();
    const style = {
        margin: `${theme.spacing.small} 0px`,
        alignSelf: "center"
    }
    return (
        <Row style={style}>
            <Col xs={4} md={4}>
                <AcceptOption taskId={taskId}></AcceptOption>
            </Col>
            <Col xs={4} md={4}>
                <RejectOption taskId={taskId}></RejectOption>
            </Col>
            <Col xs={4} md={4}>
                <CompleteOption taskId={taskId}></CompleteOption>
            </Col>
        </Row>
    )
}

export default OptionsSection;