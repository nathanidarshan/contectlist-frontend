import axios from 'axios';
import '../App.css';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Contactupdate() {

    var [branchView, setbranchView] = useState([]);
    var { id } = useParams();
    var [data, setdata] = useState();
    var [lname,setlname] = useState();
    var [mno,setmno] = useState();
    var [email,setemail] = useState();
    var [nname,setnname] = useState();

    var val = branchView.find((ele) => { return ele._id === id });
    useEffect(() => {
        if (val) {
            setdata(val.firstName || '');
            setlname(val.lastName || '');
            setmno(val.mobileNo || '');
            setemail(val.email || '');
            setnname(val.nickName || '');
        }
    }, [val]);

    useEffect(() => {
        try {
            // var token = localStorage.getItem('token');
            axios.get('https://contactbook-backend-uenk.onrender.com', {
                // headers: {
                //     Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE3MTc5ODkwMTY1NDgtNDM2MzE0NTkyIiwiaWF0IjoxNzE3OTg5MDE2LCJleHAiOjE3MTgxNjE4MTZ9.PEQSpNqckwPz9TL4b6LiFsUnm6Sk5Dvf24yOfTNG2uI'
                // }
            })
                .then(function (response) {
                    setbranchView(response.data.data)
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            console.log(val);
            if (val) {
                setdata(val.firstName);
                setlname(val.lastName);
                setmno(val.mno);
                setemail(val.email);
                setnname(val.nname);
                // console.log(data);
            }

        } catch (error) {
            console.log(error);
        }
    }, []);

    const Submit = async () => {
        try {
            var token = localStorage.getItem('token');
            var headers = {
                authorization: token
            }
            const response = await axios.patch('https://contactbook-backend-uenk.onrender.com/' + id, {
                firstName: data,
                lastName: lname,
                mobileNo:mno,
                email:email,
                nickName:nname
            }, { headers });
            console.log(response.data);
            if (response.data) {
                console.log(response.data.data);
                // setlogin(true);
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle error
        }
    };

    return (
        <>
            <div className="contectlist">
                <div className='mainlist'>
                    <h3 style={{ textDecoration: "underline", textAlign: "center" }}>Update contact</h3>

                    <table>
                        <tbody>
                            <tr>
                                <td>First Name : </td>
                                <td><input type="text" placeholder='first name' value={data}  onChange={(e) => {setdata(e.target.value)}}
                                    name="name"
                                /></td>
                            </tr>
                            <tr>
                                <td>last Name : </td>
                                <td><input type="text" placeholder='last name' value={lname} onChange={(e) => {setlname(e.target.value)}}
                                    name="lname"
                                /></td>
                            </tr>

                            <tr>
                                <td>mobile No : </td>
                                <td><input type="text" placeholder='Mobile No' value={mno} onChange={(e) => {setmno(e.target.value)}}
                                    name="mNo"
                                /></td>
                            </tr>
                            <tr>
                                <td>email : </td>
                                <td><input type="text" placeholder='Enter Email Address' value={email} onChange={(e) => {setemail(e.target.value)}}
                                    name="email"
                                /></td>
                            </tr>
                            <tr>
                                <td>nick Name : </td>
                                <td><input type="text" placeholder='last name' value={nname} onChange={(e) => {setnname(e.target.value)}}
                                    name="nname"
                                /></td>
                            </tr>
                        </tbody>
                    </table>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "10px" }}>
                        <Link to='/contactview'><button style={{ border: "0", padding: "5px 30px", marginLeft: "10px" }} onClick={() => { Submit() }}>Add contact</button></Link>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Contactupdate;