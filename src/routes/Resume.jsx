import './resume.css'

const Resume = () => {

    return (
        <div id='resume'>
            <h3>Resume</h3>
            <div>
                <button onClick={() => window.open('/Dylan_Liesenfelt_Resume.pdf', '_blank')}>View on Mobile</button>
            </div>
        </div>
    )
}

export default Resume