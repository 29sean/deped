
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Header from "../components/header";
import { useNavigate } from 'react-router-dom';

function page1() {
    const navigate = useNavigate();

    const nextPage = () => {
        navigate('/page2');
    }
    return (
        <div className='pt-5 pb-5' style={{ backgroundColor: "#edf3fc" }}>
            <div className='w-75 m-auto border rounded shadow-lg' style={{ backgroundColor: '#f5f9ff' }}>
                <Header />
                <div className='m-auto mt-3 mb-3' style={{ width: "85%" }}>
                    <div className='m-auto'>
                        <div className='rounded' style={{ backgroundColor: "#dfe7f5" }}>
                            <p className='fs-4 p-3'>Client Information</p>
                        </div>
                            <div className="mb-3 rounded p-3" style={{ backgroundColor: "#dfe7f5" }} controlId="formBasicEmail">
                                <p>Age</p>
                                <Form.Control type="number" placeholder="The value must be a number" />
                            </div>

                            <div className="mb-3 rounded p-3" style={{ backgroundColor: "#dfe7f5" }} controlId="">
                                <p>Sex</p>
                                <div>
                                    <Form.Check
                                        type="radio"
                                        label="Male"
                                        name="sex"
                                        id="male"
                                        value="male"
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="Female"
                                        name="sex"
                                        id="female"
                                        value="female"
                                    />
                                </div>
                            </div>


                            <div className="mb-3 rounded p-3" style={{ backgroundColor: "#dfe7f5" }} controlId="">
                                <p>Customer Type</p>
                                <div>
                                    <Form.Check
                                        type="radio"
                                        label="Business (private school, corporations, etc.)"
                                        name="customerType"
                                        id="business"
                                        value="business"
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="Citizen (general public, learners, parents, former DepEd employees, researchers, NGOs etc.)"
                                        name="customerType"
                                        id="citizen"
                                        value="citizen"
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="Government (current DepEd employees or employees of other government agencies & LGUs)"
                                        name="customerType"
                                        id="government"
                                        value="government"
                                    />
                                </div>
                            </div>
                            <Button variant="primary" onClick={ nextPage }>
                                Next
                            </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default page1;