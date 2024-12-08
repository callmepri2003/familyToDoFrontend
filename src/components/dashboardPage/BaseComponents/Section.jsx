/* eslint-disable react/prop-types */
import Col from 'react-bootstrap/Col'
import { useTheme } from 'styled-components'

const Section = ({children}) => {
    const theme = useTheme();

    const styles = {
        backgroundColor: theme.colors.background,
        borderRadius: theme.borderRadius.medium,
        margin: `${theme.spacing.unit} 0`,
        padding: `0 ${theme.spacing.unit}`,
    }
    return (
        <Col xs={12} sm={12} md={12} lg={12} style={styles}>
            {children}
        </Col>
    )
}

export default Section;