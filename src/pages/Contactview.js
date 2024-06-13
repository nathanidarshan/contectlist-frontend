import '../App.css';
import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from 'react-bootstrap';
import { MdDeleteForever, MdOutlineUpdate } from "react-icons/md";
import { Link } from "react-router-dom";


function Contactview() {

    var [contactview, setcontactview] = useState([]);
    var [val, setval] = useState();


    // console.log(val);

    useEffect(() => {
        allshowdata();
    }, [])

    var allshowdata = () => {
        try {
            // var token = localStorage.getItem('token');
            axios.get('http://localhost:5000', {
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

    var Remove = async (id) => {
        console.log(id);
        try {
            const response = await axios.delete("http://localhost:5000/" + id, {
                _id: id,
            });
            console.log(response.data.data);
            allshowdata();
        } catch (error) {
            console.log("error =", error);
        }
    };

    const search = async (e) => {
        console.log(e);
        try {
            if (e.length > 1) {

                const response = await axios.get(`http://localhost:5000${e}`, {
                    headers: {
                        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE3MTc5ODkwMTY1NDgtNDM2MzE0NTkyIiwiaWF0IjoxNzE3OTg5MDE2LCJleHAiOjE3MTgxNjE4MTZ9.PEQSpNqckwPz9TL4b6LiFsUnm6Sk5Dvf24yOfTNG2uI'
                    }
                })
                console.log(response);
                setcontactview(response.data.data);
            }
            else {
                allshowdata();
            }
        } catch (error) {
            console.log(error);
        }

    }


    //  pages ======================================================================================

    var perpage = 3;
    var [currentpage, setcurrentpage] = useState(0);

    var handlepage = (pageno) => {
        setcurrentpage(pageno);
    }


    var numberpage = Math.ceil(contactview.length / perpage);
    var pageindex = Array.from({ length: numberpage }, (_, ind) => ind + 1)
    var rows = contactview.slice(currentpage * perpage, (currentpage + 1) * perpage);


    return (

        <>

            <div className="contectview d-none d-md-block">
                <div className='mainlist'>
                    <form>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <h3 style={{ textDecoration: "underline" }}>View Contact</h3>
                            <div className='d-flex d-block d-md-block ' style={{ alignItems: "center" }}>
                                <td>search :</td>
                                <td><input type='text' placeholder='search' onChange={(e) => { search(e.target.value) }} /></td>
                            </div>
                        </div>
                        <Table striped bordered hover >
                            <tbody>
                                <tr>
                                    <th style={{ padding: " 2px 15px", textAlign: "center" }}>#</th>
                                    <th style={{ padding: " 2px 15px", textAlign: "center" }}>Name</th>
                                    <th style={{ padding: " 2px 15px", textAlign: "center" }}>mobile No</th>
                                    <th style={{ padding: " 2px 15px", textAlign: "center" }}>nick Name</th>
                                    <th style={{ padding: " 2px 15px", textAlign: "center" }}>update</th>
                                    <th style={{ padding: " 2px 15px", textAlign: "center" }}>delete</th>
                                </tr>
                                {
                                    rows.map((ele, ind) => {
                                        return (
                                            <>
                                                <tr>
                                                    <td style={{ padding: " 2px 15px", textAlign: "center" }}>{ind + 1}</td>
                                                    <td style={{ padding: " 2px 15px", textAlign: "center" }}>{ele.firstName}</td>
                                                    <td style={{ padding: " 2px 15px", textAlign: "center" }}>{ele.mobileNo}</td>
                                                    <td style={{ padding: " 2px 15px", textAlign: "center" }}>{ele.nickName}</td>
                                                    <td style={{ padding: " 2px 15px", textAlign: "center", fontSize: "20px" }}><Link to={"/contactupdate/" + ele._id} style={{ color: "green" }}><div><MdOutlineUpdate /></div></Link></td>
                                                    <td style={{ padding: " 2px 15px", textAlign: "center", fontSize: "20px" }}><Link style={{ color: "red" }}><div onClick={() => { Remove(ele._id) }} ><MdDeleteForever /></div></Link></td>
                                                </tr>
                                            </>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                        <div style={{ width: "100%", display: "flex", justifyContent: "end" }}>
                            <Link style={currentpage < 1 ? { display: "none" } : { textDecoration: "none", color: "black", display: "block", paddingRight: "10px" }} onClick={() => { handlepage(currentpage - 1) }}>&lt;</Link>
                            {
                                pageindex.slice(Math.max(0, currentpage - 2), Math.min(numberpage, currentpage + 1)).map((ele, ind) => {
                                    return (<><Link className={currentpage == ele ? "active" : ""} style={{ textDecoration: "none", color: "black", paddingRight: "10px" }} onClick={() => { handlepage(ele - 1) }}>{ele}</Link></>)
                                })
                            }
                            <Link style={currentpage >= numberpage - 1 ? { display: "none" } : { textDecoration: "none", color: "black", display: "block", paddingRight: "10px" }} onClick={() => { handlepage(currentpage + 1) }}>&gt;</Link>

                        </div>
                    </form>

                </div>
            </div>
            <div className="contectview d-md-none">
                <div className='mainlist'>
                    <form>
                        <div className='d-block d-md-block' style={{ display: "flex", justifyContent: "space-between" }}>
                            <h3 style={{ textDecoration: "underline" }}>View Contact</h3>
                            <div className='d-flex d-block d-md-block ' style={{ alignItems: "center" }}>
                                <td>search :</td>
                                <td><input type='text' placeholder='search' onChange={(e) => { search(e.target.value) }} /></td>
                            </div>
                        </div>
                        <Table striped bordered hover >
                            <tbody>
                                <tr>
                                    <th style={{ padding: " 2px 15px", textAlign: "center" }}>#</th>
                                    <th style={{ padding: " 2px 15px", textAlign: "center" }}>Name</th>
                                    {/* <th style={{ padding: " 2px 15px", textAlign: "center" }}>mobile No</th> */}
                                    {/* <th style={{ padding: " 2px 15px", textAlign: "center" }}>nick Name</th> */}
                                    <th style={{ padding: " 2px 15px", textAlign: "center" }}>update</th>
                                    <th style={{ padding: " 2px 15px", textAlign: "center" }}>delete</th>
                                </tr>
                                {
                                    rows.map((ele, ind) => {
                                        return (
                                            <>
                                                <tr>
                                                    <td style={{ padding: " 2px 15px", textAlign: "center" }}>{ind + 1}</td>
                                                    <td style={{ padding: " 2px 15px", textAlign: "center" }}>{ele.firstName}</td>
                                                    {/* <td style={{ padding: " 2px 15px", textAlign: "center" }}>{ele.mobileNo}</td> */}
                                                    {/* <td style={{ padding: " 2px 15px", textAlign: "center" }}>{ele.nickName}</td> */}
                                                    <td style={{ padding: " 2px 15px", textAlign: "center", fontSize: "20px" }}><Link to={"/contactupdate/" + ele._id} style={{ color: "green" }}><div><MdOutlineUpdate /></div></Link></td>
                                                    <td style={{ padding: " 2px 15px", textAlign: "center", fontSize: "20px" }}><Link style={{ color: "red" }}><div onClick={() => { Remove(ele._id) }} ><MdDeleteForever /></div></Link></td>
                                                </tr>
                                            </>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                        <div style={{ width: "100%", display: "flex", justifyContent: "end" }}>
                            <Link style={currentpage < 1 ? { display: "none" } : { textDecoration: "none", color: "black", display: "block", paddingRight: "10px" }} onClick={() => { handlepage(currentpage - 1) }}>&lt;</Link>
                            {
                                pageindex.slice(Math.max(0, currentpage - 2), Math.min(numberpage, currentpage + 1)).map((ele, ind) => {
                                    return (<><Link className={currentpage == ele ? "active" : ""} style={{ textDecoration: "none", color: "black", paddingRight: "10px" }} onClick={() => { handlepage(ele - 1) }}>{ele}</Link></>)
                                })
                            }
                            <Link style={currentpage >= numberpage - 1 ? { display: "none" } : { textDecoration: "none", color: "black", display: "block", paddingRight: "10px" }} onClick={() => { handlepage(currentpage + 1) }}>&gt;</Link>

                        </div>
                    </form>

                </div>
            </div>

        </>
    )
}
export default Contactview;