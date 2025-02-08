import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Header from "../components/header";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

function clientInformation() {
  const navigate = useNavigate();

  const [age, setAge] = useState();
  const [sex, setSex] = useState();
  const [customerType, setCustomerType] = useState();

  const nextPage = () => {
    if (!age || !sex || !customerType) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in all fields before proceeding!",
      });
      return;
    }

    navigate("/office-transact");
  };

  useEffect(() => {
    const savedAge = sessionStorage.getItem("age");
    if (savedAge) {
      setAge(savedAge);
    }

    const savedSex = sessionStorage.getItem("sex");
    if (savedSex) {
      setSex(savedSex);
    }

    const savedCustomerType = sessionStorage.getItem("customerType");
    if (savedCustomerType) {
      setCustomerType(savedCustomerType);
    }
  }, []);

  const handleAgeChange = (event) => {
    const value = event.target.value;
    setAge(value);
    sessionStorage.setItem("age", value);
  };

  const handleSexChange = (event) => {
    const value = event.target.value;
    setSex(value);
    sessionStorage.setItem("sex", value);
  };

  const handleCustomerTypeChange = (event) => {
    const value = event.target.value;
    setCustomerType(value);
    sessionStorage.setItem("customerType", value);
  };

  return (
    <div className="pt-5 pb-5" style={{ backgroundColor: "#edf3fc" }}>
      <div
        className="w-75 m-auto border rounded shadow-lg"
        style={{ backgroundColor: "#f5f9ff", width: "80%" }}
      >
        <Header />
        <div className="m-auto mt-3 mb-3" style={{ width: "85%" }}>
          <div className="m-auto">
            <div className="rounded" style={{ backgroundColor: "#dfe7f5" }}>
              <p className="fs-4 p-3">Client Information</p>
            </div>
            <div
              className="mb-3 rounded p-3"
              style={{ backgroundColor: "#dfe7f5" }}
              controlId="age"
            >
              <p>Age</p>
              <Form.Control
                type="number"
                placeholder="The value must be a number"
                value={age}
                onChange={handleAgeChange}
              />
            </div>

            <div
              className="mb-3 rounded p-3"
              style={{ backgroundColor: "#dfe7f5" }}
              controlId="sex"
            >
              <p>Sex</p>
              <div>
                <Form.Check
                  type="radio"
                  label="Male"
                  name="sex"
                  id="male"
                  value="male"
                  checked={sex == "male"}
                  onChange={handleSexChange}
                />
                <Form.Check
                  type="radio"
                  label="Female"
                  name="sex"
                  id="female"
                  value="female"
                  checked={sex == "female"}
                  onChange={handleSexChange}
                />
              </div>
            </div>

            <div
              className="mb-3 rounded p-3"
              style={{ backgroundColor: "#dfe7f5" }}
              controlId="customerType"
            >
              <p>Customer Type</p>
              <div>
                <Form.Check
                  type="radio"
                  label="Business (private school, corporations, etc.)"
                  name="customerType"
                  id="business"
                  value="business"
                  checked={customerType == "business"}
                  onChange={handleCustomerTypeChange}
                />
                <Form.Check
                  type="radio"
                  label="Citizen (general public, learners, parents, former DepEd employees, researchers, NGOs etc.)"
                  name="customerType"
                  id="citizen"
                  value="citizen"
                  checked={customerType == "citizen"}
                  onChange={handleCustomerTypeChange}
                />
                <Form.Check
                  type="radio"
                  label="Government (current DepEd employees or employees of other government agencies & LGUs)"
                  name="customerType"
                  id="government"
                  value="government"
                  checked={customerType == "government"}
                  onChange={handleCustomerTypeChange}
                />
              </div>
            </div>
            <Button style={{ backgroundColor: "green" }} onClick={nextPage}>
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default clientInformation;
