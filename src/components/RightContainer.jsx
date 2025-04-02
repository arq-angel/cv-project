import "../styles/right-container.css";


function RightContainer({personalDetails, educationDetails, experienceDetails}) {
    return (
        <div className="right-container">
            <div className="resume-header">
                <h1 className="resume-name">{personalDetails?.name}</h1>
                <div className="resume-header-additional-details">
                    <p className="resume-email">{personalDetails?.email}</p>
                    <p className="resume-phone">{personalDetails?.phone}</p>
                    <p className="resume-address">{personalDetails?.address}</p>
                </div>
            </div>
            <div className="resume-body">
                <div className="resume-education-container">
                    <div className="resume-education-title">
                        <h2>Education</h2>
                    </div>
                    <div className="resume-education-details">
                        <div className="resume-education-details-left">
                            <p>{educationDetails?.school_start_date} - {educationDetails?.school_end_date}</p>
                            <p>{educationDetails?.school_location}</p>
                        </div>
                        <div className="resume-education-details-right">
                            <p className="bold-heading">{educationDetails?.school}</p>
                            <p>{educationDetails?.degree}</p>
                        </div>
                    </div>
                </div>
                <div className="resume-experience-container">
                    <div className="resume-experience-title">
                        <h2>Professional Experience</h2>
                    </div>
                    <div className="resume-experience-details">
                        <div className="resume-experience-details-left">
                            <p>{experienceDetails?.company_start_date} - {experienceDetails?.company_end_date}</p>
                            <p>{experienceDetails?.company_location}</p>
                        </div>
                        <div className="resume-experience-details-right">
                            <p className="bold-heading">{experienceDetails?.company}</p>
                            <p>{experienceDetails?.position}</p>
                            <p>{experienceDetails?.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightContainer;