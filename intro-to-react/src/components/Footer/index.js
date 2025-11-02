import CommonComponent from '../common';
import './index.css';

function Footer() {
    const styleObj = {
        backgroundColor: 'yellow',
        padding: '20px',
        border: '2px solid black',
        textAlign: 'center',
        fontSize: '24px',
        fontWeight: 'bold'
    }
    
    return (
        <div id="footer" style={styleObj}>
            <h1>Footer Component</h1>
            <p>This is Footer paragraph</p>
            {/* <CommonComponent /> */}
        </div>
    )
}

export default Footer;