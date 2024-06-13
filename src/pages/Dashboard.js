import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Dashbord() {

    var [contactview, setcontactview] = useState([]);
    // var [val, setval] = useState();


    // console.log(val);

    useEffect(() => {
        allshowdata();
    }, [])

    var allshowdata = () => {
        try {
            // var token = localStorage.getItem('token');
            axios.get('https://contactbook-backend-uenk.onrender.com', {
                // headers: {
                //     Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE3MTc5ODkwMTY1NDgtNDM2MzE0NTkyIiwiaWF0IjoxNzE3OTg5MDE2LCJleHAiOjE3MTgxNjE4MTZ9.PEQSpNqckwPz9TL4b6LiFsUnm6Sk5Dvf24yOfTNG2uI'
                // }
            })
                .then(function (response) {
                    setcontactview(response.data.data)
                    console.log(response.data.data);
                })
                .catch(function (error) {
                    console.log(error);
                });

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="p-3 desh-info">
                <div className="d-flex justify-content-between ">
                    <Link style={{ textDecoration: "none" }} >
                        <div className='desh_box me-2' style={{ backgroundColor: "#1565c0" }}>
                            <div style={{display:"block"}}>
                            <h3>contact : { contactview.length } </h3>
                            <Link className="link" to='/contactview'>more info..</Link>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default Dashbord;