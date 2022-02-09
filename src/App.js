import React from 'react'
import "./koders.css";
import "bootstrap/dist/css/bootstrap.css";
import PChart from "./ChartPie"
import LChart from './ChartLine';
import Logo from "./logo.svg"


const App = () => {
    return (
        <>
            <div className='container'>
                <div className='row d-flex'>
                    <div className='col-lg-2 left-div '>
                        <p><img src={Logo} id="logo"/>Shards Dashboard</p>
                        <ul className='d-grid align-items-center'>
                            <li> <p><i className="zmdi zmdi-edit"></i> Blog Dashboard</p></li>
                            <li><p><i class="zmdi zmdi-markunread-mailbox"></i> Blog Post</p></li>
                            <li><p><i class="zmdi zmdi-file-plus"></i> Add New Post</p></li>
                            <li><p><i class="zmdi zmdi-square-o"></i> Forms and Components</p></li>
                            <li><p><i class="zmdi zmdi-markunread-mailbox"></i> Tables</p></li>
                            <li> <p><i className="zmdi zmdi-account mr-1"></i> User Profile</p></li>
                            <li><p><i class="zmdi zmdi-close-circle"></i> Errors</p></li>
                        </ul>
                    </div>
                    <div className='col-lg-9 mx-2 right-div'>
                        <div className='d-flex align-items center head '>
                            <div className="input-group mb-3 w-75">
                                <span class="input-group-text" id="basic-addon1"><i class="zmdi zmdi-search"></i>
                                </span>
                                <input type="text" class="form-control" placeholder="Search for something..." aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <span className='mx-3 my-2 bg-light'>
                            <i class="zmdi zmdi-notifications-active"></i>
                            </span>
                            <div className="">
                                
                                <p className='mx-3 my-2 '><img src={Logo} id="logo"/> Kaushal Karki</p>
                            </div>
                        </div>
                        <h6>DASHBOARD</h6>
                        <h3>Blog Overview</h3>
                        <div className='row d-lg-flex d-sm-grid mt-5 mx-4 justify-content-between '>
                            <div className=' col-8  col-lg-2 tabs-div text-center'>
                                <p>POSTS</p>
                                <p className='display-6'>2390</p>

                            </div>
                            <div className='col-8  col-lg-2 tabs-div text-center'>
                                <p>PAGES</p>
                                <p className='display-6'>182</p>
                            </div>
                            <div className='col-8  col-lg-2 tabs-div text-center'>
                                <p>COMMENTS</p>
                                <p className='display-6'>8147</p>
                            </div>
                            <div className='col-8  col-lg-2 tabs-div text-center'>
                                <p>NEW CUSTOMER</p>
                                <p className='display-6'>29</p>
                            </div>
                            <div className='col-8  col-lg-2 tabs-div text-center'>
                                <p>SUBSCRIBERS</p>
                                <p className='display-6'>17281</p>
                            </div>
                        </div>
                        <div className='row my-5 mx-5 justify-content-between'>
                            <div className='col-lg-6 chart'>
                                <p>User Overview</p>
                                <LChart />
                            </div>
                            <div className='col-lg-4 chart' id="pie">
                                <p>Users By Device</p>
                                <PChart />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App