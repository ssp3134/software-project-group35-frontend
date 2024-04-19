import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import React, { useState, useEffect } from 'react'; 
import axios from 'axios'; 
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const EditStudentDetail = () => {

    const [formData, setFormData] = useState({
        name: '',
        gender: '',
        date_of_birth: '',
        place_of_birth: '',
        physically_challenged: '',
        nationality: '',
        identification_mark: '',
        blood_group: '',
        kashmiri_immigrant: '',
        marital_status: '',
        category: '',
        religion: '',
        aadhar_card_no: '',
        father_name: '',
        father_occupation: '',
        father_gross_annual_income: '',
        father_guardian_name: '',
        father_phone_no: '',
        mother_name: '',
        mother_occupation: '',
        mother_gross_annual_income: '',
        guardian_relation: '',
        parent_guardian_mobile_no: '',
        parent_email: '',
        present_address: '',
        present_contact_number: '',
        permanent_address: '',
        permanent_contact_number: '',
        class_10th_board_name: '',
        class_10th_school_name: '',
        class_10th_year: '',
        class_10th_percentage: '',
        class_12th_board_name: '',
        class_12th_school_name: '',
        class_12th_year: '',
        class_12th_percentage: '',
        migration_no: '',
        date_of_admission: '',
        general_rank: '',
        gate_rank: '',
        student_type: '',
        department: '',
        branch: '',
        roll_no: '',
        admission_based_on: '',
        category_rank: '',
        cat_rank: '',
        present_semester: '',
        course: '',
        other: '',
        bank_name: '',
        account_no: '',
        ifsc_code: ''
    });

    useEffect(() => {
        const fetchStudentData = async (aadhar_card_no) => {
            try {
                if (!aadhar_card_no) {
                    alert("Please fill the Aadhar Card No. field first to update the details.");
                    return;
                }
                const response = await axios.get(`http://localhost:8000/api/students/${aadhar_card_no}`);
                const studentData = response.data;
                setFormData(studentData);
            } catch (error) {
                console.error('Error fetching student data:', error);
            }
        };
        fetchStudentData(formData.aadhar_card_no);
    }, [formData.aadhar_card_no]);
    
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            try {
                // console.log(formData);
                const filteredData = {};
                for (const key in formData) {
                    if (formData[key] !== '') {
                        filteredData[key] = formData[key];
                    }
                }
                // console.log(filteredData);
                const response = await axios.put(`http://localhost:8000/api/students/${formData.aadhar_card_no}`, filteredData, formData.aadhar_card_no);
                console.log(response.data);
            } catch (error) {
                console.error('Error:', error);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (

        <Grid container spacing={6}>
            <Grid item xs={12}>
                <Card>
                    <CardHeader title='Thesis Management System 🚀'></CardHeader>
                    <CardContent>
                    <Typography sx={{ mb: 2 }}>EditStudentDetail | Welcomes to Thesis Management System (IIT(ISM)).</Typography>
                        <div>
                            <button style={{background:"none",borderWidth:"1px",height:"2rem",borderRadius:5, paddingInline:"1rem"}}>Personal Details</button>
                            <button style={{background:"none",borderWidth:"1px",height:"2rem",borderRadius:5,paddingInline:"1rem"}}>Family Details</button>
                            <button style={{background:"none",borderWidth:"1px",height:"2rem",borderRadius:5,paddingInline:"1rem"}}>Address Details</button>
                            <button style={{background:"none",borderWidth:"1px",height:"2rem",borderRadius:5,paddingInline:"1rem"}}>Education</button>
                            <button style={{background:"none",borderWidth:"1px",height:"2rem",borderRadius:5,paddingInline:"1rem"}}>Admission</button>
                            <button style={{background:"none",borderWidth:"1px",height:"2rem",borderRadius:5,paddingInline:"1rem"}}>Bank Details</button>
                            <button style={{background:"none",borderWidth:"1px",height:"2rem",borderRadius:5,paddingInline:"1rem"}}>Editable Details</button>
                        </div>
                        <Typography style={{width:"100%", marginTop:"1rem", marginBottom:"1rem"}}>Personal Details</Typography>
                        <form onSubmit={handleSubmit}>
                        <div style={{display:"flex", width:"100%"}}>
                        <div style={{width:"50%"}}>
                                <Typography style={{width:"100%"}}>Name</Typography>
                                <input type="text" name="name" style={{width:"80%", borderRadius:8, height:"1.8rem"}} value={formData.name} onChange={handleChange}></input><br/>
                                <Typography>Gender</Typography>
                                <input type="text" name="gender" style={{width:"80%", borderRadius:8, height:"1.8rem"}} value={formData.gender} onChange={handleChange}></input><br/>
                                <Typography>Date of Birth</Typography>
                                <input type="text" name="date_of_birth" style={{width:"80%", borderRadius:8, height:"1.8rem"}} value={formData.date_of_birth} onChange={handleChange}></input><br/>
                                <Typography>Place of Birth</Typography>
                                <input type="text" name="place_of_birth" style={{width:"80%", borderRadius:8, height:"1.8rem"}} value={formData.place_of_birth} onChange={handleChange}></input><br/>
                                <Typography>Physically Challenged</Typography>
                                <input type="text" name="physically_challenged" style={{width:"80%", borderRadius:8, height:"1.8rem"}} value={formData.physically_challenged} onChange={handleChange}></input><br/>
                                <Typography>Nationality</Typography>
                                <input type="text" name="nationality" style={{width:"80%", borderRadius:8, height:"1.8rem"}} value={formData.nationality} onChange={handleChange}></input><br/>
                                <Typography>Identification Mark</Typography>
                                <input type="text" name="identification_mark" style={{width:"80%", borderRadius:8, height:"1.8rem"}} value={formData.identification_mark} onChange={handleChange}></input><br/>
                            </div>
                            <div style={{width:"50%"}}>
                                <Typography>Blood Group</Typography> 
                                <input type="text" name="blood_group" style={{width:"80%", borderRadius:8, height:"1.8rem"}} value={formData.blood_group} onChange={handleChange}></input><br/>
                                <Typography>Kashmiri Immigrant</Typography>
                                <input type="text" name="kashmiri_immigrant" style={{width:"80%", borderRadius:8, height:"1.8rem"}} value={formData.kashmiri_immigrant} onChange={handleChange}></input><br/>
                                <Typography>Marital Status</Typography>
                                <input type="text" name="marital_status" style={{width:"80%", borderRadius:8, height:"1.8rem"}} value={formData.marital_status} onChange={handleChange}></input><br/>
                                <Typography>Category</Typography>
                                <input type="text" name="category" style={{width:"80%", borderRadius:8, height:"1.8rem"}} value={formData.category} onChange={handleChange}></input><br/>
                                <Typography>Religion</Typography>
                                <input type="text" name="religion" style={{width:"80%", borderRadius:8, height:"1.8rem"}} value={formData.religion} onChange={handleChange}></input><br/>
                                <Typography>Aadhar Card No.</Typography>
                                <input type="text" name="aadhar_card_no" style={{width:"80%", borderRadius:8, height:"1.8rem"}} value={formData.aadhar_card_no} onChange={handleChange}></input><br/>
                            </div>
                        </div>
                        <div style={{display:"flex", justifyContent:"flex-end"}}>
                        <button style={{background:"blue", color:"white", marginTop:"1.5rem",paddingInline:"1rem",height:"2rem",borderRadius:5}}>Next</button>
                        </div>
                        <Typography style={{width:"100%", marginTop:"1rem", marginBottom:"1rem"}}>Family Details</Typography>
                        <div style={{display:"flex", width:"100%"}}>
                            <div style={{width:"50%"}}>
                                <Typography style={{width:"100%"}}>Father's Name</Typography> 
                                <input type="text" name="father_name" style={{width:"80%", borderRadius:8, height:"1.8rem"}} value={formData.father_name} onChange={handleChange}></input><br/>
                                <Typography>Occupation</Typography>
                                <input type="text" name="father_occupation" style={{width:"80%", borderRadius:8, height:"1.8rem"}} value={formData.father_occupation} onChange={handleChange}></input><br/>
                                <Typography>Income</Typography>
                                <input type="text" name="father_gross_annual_income" style={{width:"80%", borderRadius:8, height:"1.8rem"}} value={formData.father_gross_annual_income} onChange={handleChange}></input><br/>
                                <Typography>Guardian's Name</Typography>
                                <input type="text" name="father_guardian_name" style={{width:"80%", borderRadius:8, height:"1.8rem"}} value={formData.father_guardian_name} onChange={handleChange}></input><br/>
                                <Typography>Phone number</Typography>
                                <input type="text" name="father_phone_no" style={{width:"80%", borderRadius:8, height:"1.8rem"}} value={formData.father_phone_no} onChange={handleChange}></input><br/>
                            </div>
                            <div style={{width:"50%"}}>
                                <Typography>Mother's Name</Typography> 
                                <input type="text" name="mother_name" style={{width:"80%", borderRadius:8, height:"1.8rem"}} value={formData.mother_name} onChange={handleChange}></input><br/>
                                <Typography>Occupation</Typography>
                                <input type="text" name="mother_occupation" style={{width:"80%", borderRadius:8, height:"1.8rem"}} value={formData.mother_occupation} onChange={handleChange}></input><br/>
                                <Typography>Income</Typography>
                                <input type="text" name="mother_gross_annual_income" style={{width:"80%", borderRadius:8, height:"1.8rem"}} value={formData.mother_gross_annual_income} onChange={handleChange}></input><br/>
                                <Typography>Guardian Relation</Typography>
                                <input type="text" name="guardian_relation" style={{width:"80%", borderRadius:8, height:"1.8rem"}} value={formData.guardian_relation} onChange={handleChange}></input><br/>
                                <Typography>Guardian Mobile No</Typography>
                                <input type="text" name="parent_guardian_mobile_no" style={{width:"80%", borderRadius:8, height:"1.8rem"}} value={formData.parent_guardian_mobile_no} onChange={handleChange}></input><br/>
                                <Typography>Email</Typography>
                                <input type="text" name="parent_email" style={{width:"80%", borderRadius:8, height:"1.8rem"}} value={formData.parent_email} onChange={handleChange}></input><br/>
                            </div>
                        </div>
                        <div style={{display:"flex", justifyContent:"flex-end"}}>
                        <button style={{background:"blue", color:"white", marginTop:"1.5rem",paddingInline:"1rem",height:"2rem",borderRadius:5}}>Next</button>
                        </div>
                        <Typography style={{width:"100%", marginTop:"1rem", marginBottom:"1rem"}}>Address Details</Typography>
                        <div style={{display:"flex", width:"100%"}}>
                            <div style={{width:"50%"}}>
                                <Typography style={{width:"100%"}}>Present Address</Typography> 
                                <input type="text" name="present_address" style={{width:"80%", borderRadius:8, height:"1.8rem"}} value={formData.present_address} onChange={handleChange}></input><br/>
                                <Typography>Contact number</Typography>
                                <input type="text" name="present_contact_number" style={{width:"80%", borderRadius:8, height:"1.8rem"}} value={formData.present_contact_number} onChange={handleChange}></input><br/>
                            </div>
                            <div style={{width:"50%"}}>
                                <Typography>Permanent Address</Typography> 
                                <input type="text" name="permanent_address" style={{width:"80%", borderRadius:8, height:"1.8rem"}} value={formData.permanent_address} onChange={handleChange}></input><br/>
                                <Typography>Contact Number</Typography>
                                <input type="text" name="permanent_contact_number" style={{width:"80%", borderRadius:8, height:"1.8rem"}} value={formData.permanent_contact_number} onChange={handleChange}></input><br/>
                            </div>
                        </div>
                        <div style={{display:"flex", justifyContent:"flex-end"}}>
                        <button style={{background:"blue", color:"white", marginTop:"1.5rem",paddingInline:"1rem",height:"2rem",borderRadius:5}}>Next</button>
                        </div>
                        <Typography style={{width:"100%", marginTop:"1rem", marginBottom:"1rem"}}>Educational Details</Typography>
                        <div style={{display:"flex", width:"100%"}}>

                            <div style={{width:"50%"}}>
                                <Typography style={{width:"100%"}}>Class 10th</Typography>
                                <Typography style={{width:"100%"}}>Board Name</Typography>  
                                <input type="text" name="class_10th_board_name" style={{width:"80%", borderRadius:8, height:"1.8rem"}} value={formData.class_10th_board_name} onChange={handleChange}></input><br/>
                                <Typography>School Name</Typography>
                                <input type="text" name="class_10th_school_name" style={{width:"80%", borderRadius:8, height:"1.8rem"}} value={formData.class_10th_school_name} onChange={handleChange}></input><br/>
                                <Typography>Year</Typography>
                                <input type="text" name="class_10th_year" style={{width:"80%", borderRadius:8, height:"1.8rem"}} value={formData.class_10th_year} onChange={handleChange}></input><br/>
                                <Typography>Percentage</Typography>
                                <input type="text" name="class_10th_percentage" style={{width:"80%", borderRadius:8, height:"1.8rem"}} value={formData.class_10th_percentage} onChange={handleChange}></input><br/>
                            </div>
                            <div style={{width:"50%"}}>
                                <Typography style={{width:"100%"}}>Class 12th</Typography>
                                <Typography style={{width:"100%"}}>Board Name</Typography>  
                                <input type="text" name="class_12th_board_name" style={{width:"80%", borderRadius:8, height:"1.8rem"}} value={formData.class_12th_board_name} onChange={handleChange}></input><br/>
                                <Typography>School Name</Typography>
                                <input type="text" name="class_12th_school_name" style={{width:"80%", borderRadius:8, height:"1.8rem"}} value={formData.class_12th_school_name} onChange={handleChange}></input><br/>
                                <Typography>Year</Typography>
                                <input type="text" name="class_12th_year" style={{width:"80%", borderRadius:8, height:"1.8rem"}} value={formData.class_12th_year} onChange={handleChange}></input><br/>
                                <Typography>Percentage</Typography>
                                <input type="text" name="class_12th_percentage" style={{width:"80%", borderRadius:8, height:"1.8rem"}} value={formData.class_12th_percentage} onChange={handleChange}></input><br/>
                            </div>
                        </div>
                        <div style={{display:"flex", justifyContent:"flex-end"}}>
                        <button style={{background:"blue", color:"white", marginTop:"1.5rem",paddingInline:"1rem",height:"2rem",borderRadius:5}}>Next</button>
                        </div>
                        <Typography style={{width:"100%", marginTop:"1rem", marginBottom:"1rem"}}>Admission Details</Typography>
                        <div style={{display:"flex", width:"100%"}}>
                            <div style={{width:"50%"}}>
                                <Typography style={{width:"100%"}}>Migration Number</Typography> 
                                <input type="text" name="migration_no" style={{width:"80%", borderRadius:8, height:"1.8rem"}} value={formData.migration_no} onChange={handleChange}></input><br/>
                                <Typography>Date of Admission</Typography>
                                <input type="text" name="date_of_admission" style={{width:"80%", borderRadius:8, height:"1.8rem"}} value={formData.date_of_admission} onChange={handleChange}></input><br/>
                                <Typography>General Rank</Typography>
                                <input type="text" name="general_rank" style={{width:"80%", borderRadius:8, height:"1.8rem"}} value={formData.general_rank} onChange={handleChange}></input><br/>
                                <Typography>GATE</Typography>
                                <input type="text" name="gate_rank" style={{width:"80%", borderRadius:8, height:"1.8rem"}} value={formData.gate_rank} onChange={handleChange}></input><br/>
                                <Typography>Student type</Typography>
                                <input type="text" name="student_type" style={{width:"80%", borderRadius:8, height:"1.8rem"}} value={formData.student_type} onChange={handleChange}></input><br/>
                                <Typography>Department</Typography>
                                <input type="text" name="department" style={{width:"80%", borderRadius:8, height:"1.8rem"}} value={formData.department} onChange={handleChange}></input><br/>
                                <Typography>Branch</Typography>
                                <input type="text" name="branch" style={{width:"80%", borderRadius:8, height:"1.8rem"}} value={formData.branch} onChange={handleChange}></input><br/>
                            </div>
                            <div style={{width:"50%"}}>
                                <Typography>Roll number</Typography> 
                                <input type="text" name="roll_no" style={{width:"80%", borderRadius:8, height:"1.8rem"}} value={formData.roll_no} onChange={handleChange}></input><br/>
                                <Typography>Admission based on</Typography>
                                <input type="text" name="admission_based_on" style={{width:"80%", borderRadius:8, height:"1.8rem"}} value={formData.admission_based_on} onChange={handleChange}></input><br/>
                                <Typography>Category Rank</Typography>
                                <input type="text" name="category_rank" style={{width:"80%", borderRadius:8, height:"1.8rem"}} value={formData.category_rank} onChange={handleChange}></input><br/>
                                <Typography>CAT</Typography>
                                <input type="text" name="cat_rank" style={{width:"80%", borderRadius:8, height:"1.8rem"}} value={formData.cat_rank} onChange={handleChange}></input><br/>
                                <Typography>Present semester</Typography>
                                <input type="text" name="present_semester" style={{width:"80%", borderRadius:8, height:"1.8rem"}} value={formData.present_semester} onChange={handleChange}></input><br/>
                                <Typography>Course</Typography>
                                <input type="text" name="course" style={{width:"80%", borderRadius:8, height:"1.8rem"}} value={formData.course} onChange={handleChange}></input><br/>
                                <Typography>Other</Typography>
                                <input type="text" name="other" style={{width:"80%", borderRadius:8, height:"1.8rem"}} value={formData.other} onChange={handleChange}></input><br/>
                            </div>
                        </div>
                        <div style={{display:"flex", justifyContent:"flex-end"}}>
                        <button style={{background:"blue", color:"white", marginTop:"1.5rem",paddingInline:"1rem",height:"2rem",borderRadius:5}}>Next</button>
                        </div>
                        <Typography style={{width:"100%", marginTop:"1rem", marginBottom:"1rem"}}>Fee Payment</Typography>
                        <div style={{display:"flex", width:"100%"}}>

                            <div style={{width:"50%"}}>
                                <Typography style={{width:"100%"}}>Bank Name</Typography> 
                                <input type="text" name="bank_name" style={{width:"80%", borderRadius:8, height:"1.8rem"}} value={formData.bank_name} onChange={handleChange}></input><br/>
                                <Typography>Account Number</Typography>
                                <input type="text" name="account_no" style={{width:"80%", borderRadius:8, height:"1.8rem"}} value={formData.account_no} onChange={handleChange}></input><br/>
                            </div>
                            <div style={{width:"50%"}}>
                                <Typography>IFSC Code</Typography> 
                                <input type="text" name="ifsc_code" style={{width:"80%", borderRadius:8, height:"1.8rem"}} value={formData.ifsc_code} onChange={handleChange}></input><br/>
                            </div>
                        </div>
                        {/* <div style={{display:"flex", justifyContent:"flex-end"}}> */}
                        {/* <button style={{background:"blue", color:"white", marginTop:"1.5rem",paddingInline:"1rem",height:"2rem",borderRadius:5}}>Next</button> */}
                        <button type="submit" style={{ background: "blue", color: "white", marginTop: "1.5rem", paddingInline: "1rem", height: "2rem", borderRadius: 5 }}>Submit</button>
                        {/* </div> */}
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )

}
export default EditStudentDetail;
