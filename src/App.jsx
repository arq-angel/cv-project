import "./app.css";
import LeftContainer from "./LeftContainer.jsx";
import RightContainer from "./RightContainer.jsx";
import {useState} from "react";

function App() {
    const [personalDetails, setPersonalDetails] = useState({
        name: "", email: "", phone: "", address: "",
    });

    const [educationDetails, setEducationDetails] = useState({
        school: "", degree: "", school_start_date: "", school_end_date: "", school_location: ""
    });

    const [experienceDetails, setExperienceDetails] = useState({
        company: "",
        position: "",
        company_start_date: "",
        company_end_date: "",
        company_location: "",
        location_start_date: "",
        description: "",
    })

    const handlePersonalDetailsChange = (e) => {
        const {name, value} = e.target;
        setPersonalDetails(prevState => ({...prevState, [name]: value}));
    }

    const handleEducationDetailsChange = (e) => {
        const {name, value} = e.target;
        setEducationDetails(prevState => ({...prevState, [name]: value}));
    }

    const handleExperienceDetailsChange = (e) => {
        const {name, value} = e.target;
        setExperienceDetails(prevState => ({...prevState, [name]: value}));
    }

    const clearDetails = (e) => {
        // Reset personal details
        setPersonalDetails({
            name: "",
            email: "",
            phone: "",
            address: ""
        });

        // Reset education details
        setEducationDetails({
            school: "",
            degree: "",
            school_start_date: "",
            school_end_date: "",
            school_location: ""
        });

        // Reset experience details
        setExperienceDetails({
            company: "",
            position: "",
            company_start_date: "",
            company_end_date: "",
            company_location: "",
            location_start_date: "",
            description: ""
        });
    }

    return (
        <div className="main-container">
            <LeftContainer
                personalDetails={personalDetails}
                setPersonalDetails={setPersonalDetails}
                educationDetails={educationDetails}
                setEducationDetails={setEducationDetails}
                experienceDetails={experienceDetails}
                setExperienceDetails={setExperienceDetails}
                handlePersonalDetailsChange={handlePersonalDetailsChange}
                handleEducationDetailsChange={handleEducationDetailsChange}
                handleExperienceDetailsChange={handleExperienceDetailsChange}
                clearDetails = {clearDetails}
            />
            <RightContainer
                personalDetails={personalDetails}
                educationDetails={educationDetails}
                experienceDetails={experienceDetails}
            />
        </div>
    )
}

export default App
