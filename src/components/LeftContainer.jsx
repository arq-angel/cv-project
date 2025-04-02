import "../styles/left-container.css";

function LeftContainer({personalDetails, educationDetails, experienceDetails, handlePersonalDetailsChange, handleEducationDetailsChange, handleExperienceDetailsChange, clearDetails}) {

    return (
        <div className="left-container">
            <div className="personal details-container">
                <h1>Personal Details</h1>
                <form action="">
                    <div className="form-group">
                        <label className="form-label" htmlFor="name">Full name</label>
                        <input
                            className="form-input"
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Full name"
                            value={personalDetails.name}
                            onChange={handlePersonalDetailsChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="email">Email</label>
                        <input
                            className="form-input"
                            id="email"
                            type="text"
                            name="email"
                            placeholder="Enter email"
                            value={personalDetails.email}
                            onChange={handlePersonalDetailsChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="phone">Phone Number</label>
                        <input
                            className="form-input"
                            id="phone"
                            type="text"
                            name="phone"
                            placeholder="Enter phone number"
                            value={personalDetails.phone}
                            onChange={handlePersonalDetailsChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="address">Address</label>
                        <input
                            className="form-input"
                            id="address"
                            type="text"
                            name="address"
                            placeholder="City, Country"
                            value={personalDetails.address}
                            onChange={handlePersonalDetailsChange}
                        />
                    </div>

                </form>
            </div>

            <div className="education details-container">
                <h1>Education</h1>
                <form action="">
                    <div className="form-group">
                        <label className="form-label" htmlFor="school">School</label>
                        <input
                            className="form-input"
                            id="school"
                            type="text"
                            name="school"
                            placeholder="Enter school/ university"
                            value={educationDetails.school}
                            onChange={handleEducationDetailsChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="degree">Degree</label>
                        <input
                            className="form-input"
                            id="degree"
                            type="text"
                            name="degree"
                            placeholder="Enter degree / Field of Study"
                            value={educationDetails.degree}
                            onChange={handleEducationDetailsChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="school_start_date">Start Date</label>
                        <input
                            className="form-input"
                            id="school_start_date"
                            type="date"
                            name="school_start_date"
                            value={educationDetails.school_start_date}
                            onChange={handleEducationDetailsChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="school_end_date">End Date</label>
                        <input
                            className="form-input"
                            id="school_end_date"
                            type="date"
                            name="school_end_date"
                            value={educationDetails.school_end_date}
                            onChange={handleEducationDetailsChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="location">Location</label>
                        <input
                            className="form-input"
                            id="school_location"
                            type="text"
                            name="school_location"
                            placeholder="Enter Location"
                            value={educationDetails.school_location}
                            onChange={handleEducationDetailsChange}
                        />
                    </div>

                </form>
            </div>

            <div className="experience details-container">
                <h1>Experience</h1>
                <form action="">
                    <div className="form-group">
                        <label className="form-label" htmlFor="company">Company Name</label>
                        <input
                            className="form-input"
                            id="company"
                            type="text"
                            name="company"
                            placeholder="Enter Company Name"
                            value={experienceDetails.company}
                            onChange={handleExperienceDetailsChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="position">Position Title</label>
                        <input
                            className="form-input"
                            id="position"
                            type="text"
                            name="position"
                            placeholder="Enter Position Title"
                            value={experienceDetails.position}
                            onChange={handleExperienceDetailsChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="company_start_date">Start Date</label>
                        <input
                            className="form-input"
                            id="company_start_date"
                            type="date"
                            name="company_start_date"
                            value={experienceDetails.company_start_date}
                            onChange={handleExperienceDetailsChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="company_end_date">End Date</label>
                        <input
                            className="form-input"
                            id="company_end_date"
                            type="date"
                            name="company_end_date"
                            value={experienceDetails.company_end_date}
                            onChange={handleExperienceDetailsChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="location">Location</label>
                        <input
                            className="form-input"
                            id="company_location"
                            type="text"
                            name="company_location"
                            placeholder="Enter Location"
                            value={experienceDetails.company_location}
                            onChange={handleExperienceDetailsChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="description">Description</label>
                        <textarea
                            className="form-input textarea"
                            id="description"
                            rows="5"
                            name="description"
                            placeholder="Enter Description"
                            value={experienceDetails.description}
                            onChange={handleExperienceDetailsChange}
                        />
                    </div>

                </form>
            </div>

            <div className="button-container">
                <input
                    className="clear-button"
                    type="button"
                    value="Clear Details"
                    onClick={clearDetails}
                />
            </div>

        </div>
    )
}

export default LeftContainer;