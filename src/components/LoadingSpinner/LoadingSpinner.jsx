import { Spinner } from 'react-bootstrap'
import './LoadingSpinner.css'

function LoadingSpinner(){

    return(

        <div className="loading-spinner-container">
        <Spinner animation="border" role="status" className="loading-spinner">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
        <h2>Loading...</h2>
        </div>

    )

}

export default LoadingSpinner