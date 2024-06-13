import '../App.css';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import axios from 'axios';
import { Link } from 'react-router-dom';

const validationSchema = Yup.object({
    name: Yup.string().required("Enter First Name"),
    lname: Yup.string().required("Enter last Name"),
    mNo: Yup.string().min(10, "Enter 10 character").max(10, "onlye 10 character").required("Enter mobile No "),
    email: Yup.string().required("Enter Email address "),
    nname: Yup.string().required("Enter Email address "),
});
function Contactadd() {

    const formik = useFormik({
        initialValues: {
            name: '',
            lname: '',
            mNo: '',
            email: '',
            nname: ''
        },
        validationSchema: validationSchema,
        onSubmit: async (values, { resetForm }) => {
            try {
                // var headers = {
                //     Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE3MTc5ODkwMTY1NDgtNDM2MzE0NTkyIiwiaWF0IjoxNzE3OTg5MDE2LCJleHAiOjE3MTgxNjE4MTZ9.PEQSpNqckwPz9TL4b6LiFsUnm6Sk5Dvf24yOfTNG2uI'
                // }
                // console.log(headers);
                const response = await axios.post('https://contactbook-backend-uenk.onrender.com', {
                    firstName: values.name,
                    lastName: values.lname,
                    mobileNo: values.mNo,
                    email: values.email,
                    nickName: values.nname
                });
                // { headers }
                // console.log("role",role);
                console.log(response.data.data);
                if (response) {
                    console.log(response.data);
                    // setlogin(true);
                    resetForm();
                }
            } catch (error) {
                console.error('Error:', error);

            }
        }
    });

    return (
        <>
            <div className="contect">
                <div className="contectlist ">
                    <div className='mainlist'>
                        <h3 style={{ textDecoration: "underline", textAlign: "center" }}>Add contact</h3>
                        <form onSubmit={formik.handleSubmit}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>First Name :</td>
                                        <td><input type="text" placeholder='first name'
                                            name="name"
                                            onChange={formik.handleChange}
                                            value={formik.values.name}
                                            onBlur={formik.handleBlur}
                                        /></td>
                                    </tr>
                                    {formik.touched.name && formik.errors.name ? (
                                        <tr>
                                            <td colSpan="2" style={{ color: 'red' }}>
                                                {formik.errors.name}
                                            </td>
                                        </tr>
                                    ) : null}
                                    <tr>
                                        <td>last Name :</td>
                                        <td><input type="text" placeholder='last name'
                                            name="lname"
                                            onChange={formik.handleChange}
                                            value={formik.values.lname}
                                            onBlur={formik.handleBlur}
                                        /></td>
                                    </tr>
                                    {formik.touched.lname && formik.errors.lname ? (
                                        <tr>
                                            <td colSpan="2" style={{ color: 'red' }}>
                                                {formik.errors.lname}
                                            </td>
                                        </tr>
                                    ) : null}
                                    <tr>
                                        <td>mobile No :</td>
                                        <td><input type="text" placeholder='Mobile No'
                                            name="mNo"
                                            onChange={formik.handleChange}
                                            value={formik.values.mNo}
                                            onBlur={formik.handleBlur}
                                        /></td>
                                    </tr>
                                    {formik.touched.mNo && formik.errors.mNo ? (
                                        <tr>
                                            <td colSpan="2" style={{ color: 'red' }}>
                                                {formik.errors.mNo}
                                            </td>
                                        </tr>
                                    ) : null}
                                    <tr>
                                        <td>email :</td>
                                        <td><input type="text" placeholder='Enter Email Address'
                                            name="email"
                                            onChange={formik.handleChange}
                                            value={formik.values.email}
                                            onBlur={formik.handleBlur}
                                        /></td>
                                    </tr>
                                    {formik.touched.email && formik.errors.email ? (
                                        <tr>
                                            <td colSpan="2" style={{ color: 'red' }}>
                                                {formik.errors.email}
                                            </td>
                                        </tr>
                                    ) : null}
                                    <tr>
                                        <td>nick Name :</td>
                                        <td><input type="text" placeholder='last name'
                                            name="nname"
                                            onChange={formik.handleChange}
                                            value={formik.values.nname}
                                            onBlur={formik.handleBlur}
                                        /></td>
                                    </tr>
                                    {formik.touched.nname && formik.errors.nname ? (
                                        <tr>
                                            <td colSpan="2" style={{ color: 'red' }}>
                                                {formik.errors.nname}
                                            </td>
                                        </tr>
                                    ) : null}
                                </tbody>
                            </table>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "10px" }}>
                                <button type='submit' style={{ border: "0", padding: "5px 30px" }}>Add</button>
                                <Link to="/contactview"><button type='submit' style={{ border: "0", padding: "5px 30px", marginLeft: "10px" }}>view</button></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contactadd;