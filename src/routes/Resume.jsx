import './resume.css'

const Resume = () => {

    return (
        <div id='resume'>
            <h3>Resume</h3>
            <div>
                <button onClick={() => window.open('/Resume-Dylan-Liesenfelt.pdf', '_blank')}>View on Mobile</button>
            </div>
        </div>
    )
}

export default Resume