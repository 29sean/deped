import Button from "react-bootstrap/Button";
import Header from "../components/header2";
import { useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { useEffect, useState, useCallback } from "react";
import Swal from "sweetalert2";
import "../style/PageStyle.css";
import { API_BASE_URL } from "../config";
import axios from "axios";

const ServiceDropdown = ({
  title,
  selectedValue,
  onSelect,
  items,
  itemKey,
  itemLabel,
}) => (
  <div className="mb-3 rounded p-3" style={{ backgroundColor: "#dfe7f5" }}>
    <p className="info">{title}</p>
    <Dropdown onSelect={onSelect}>
      <Dropdown.Toggle
        variant="light"
        className="text-truncate info"
        style={{ width: "100%", textAlign: "left" }}
      >
        {selectedValue}
      </Dropdown.Toggle>
      <Dropdown.Menu className="info">
        {items.map((item) => (
          <Dropdown.Item key={item[itemKey]} eventKey={item[itemKey]}>
            {item[itemLabel]}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  </div>
);

const serviceAvail = () => {
  const navigate = useNavigate();

  const [services, setServices] = useState([]);
  const [subDivisions, setSubDivisions] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);

  const [selectedServiceAvailed, setSelectedServiceAvailed] =
    useState("Select your answer");
  const [selectedOfficeTransacted, setSelectedOfficeTransacted] =
    useState("Select your answer");
  const [staticOfficeTitle, setStaticOfficeTitle] =
    useState("Select your answer");

  const fetchInitialData = useCallback(async () => {
    try {
      const subDivisionsResponse = await axios.get(
        `${API_BASE_URL}/divisions/get-sub-division`
      );
      const data = JSON.parse(sessionStorage.getItem("userData")) || {};
      const selectedDivisionId = data.officeId || null;

      const filteredSubDivisions = subDivisionsResponse.data.filter(
        (subDivision) => subDivision.parent_id === selectedDivisionId
      );

      setSubDivisions(filteredSubDivisions);
      setStaticOfficeTitle(data.office || "Select your answer");
      setSelectedServiceAvailed(data.service || "Select your answer");

      const servicesResponse = await axios.get(
        `${API_BASE_URL}/divisions/get-services`,
        {
          params: { divisionId: selectedDivisionId },
        }
      );
      setServices(servicesResponse.data || []);
    } catch (error) {
      console.error("Error fetching data:", error);
      setServices([]);
      setSubDivisions([]);
    }
  }, []);

  useEffect(() => {
    fetchInitialData();
  }, [fetchInitialData]);

  const handleSelectOfficeTransacted = async (subDivisionId) => {
    const selectedSubDivision = subDivisions.find(
      (subDivision) => subDivision.sub_division_id.toString() === subDivisionId
    );

    if (selectedSubDivision) {
      setSelectedOfficeTransacted(selectedSubDivision.sub_division_name);

      const userData = JSON.parse(sessionStorage.getItem("userData")) || {};
      userData.insideOffice = selectedSubDivision.sub_division_name;
      userData.sub_division_id = selectedSubDivision.sub_division_id;
      sessionStorage.setItem("userData", JSON.stringify(userData));

      try {
        const servicesResponse = await axios.get(
          `${API_BASE_URL}/divisions/get-services`,
          {
            params: {
              divisionId: userData.officeId,
              subDivisionId: selectedSubDivision.sub_division_id,
            },
          }
        );

        setFilteredServices(servicesResponse.data || []);
        setSelectedServiceAvailed("Select your answer");
      } catch (error) {
        console.error("Error fetching filtered services:", error);
        setFilteredServices([]);
      }
    }
  };

  const handleSelectService = (serviceName) => {
    setSelectedServiceAvailed(serviceName);
    const userData = JSON.parse(sessionStorage.getItem("userData")) || {};
    userData.service = serviceName;
    sessionStorage.setItem("userData", JSON.stringify(userData));
  };

  const backPage = () => navigate("/office-transact");

  const nextPage = () => {
    if (
      selectedServiceAvailed === "Select your answer" ||
      selectedOfficeTransacted === "Select your answer"
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please select before proceeding!",
      });
      return;
    }

    const userData = JSON.parse(sessionStorage.getItem("userData")) || {};

    if (
      userData.service === "Other requests/inquiries" ||
      userData.service === "Feedback/Complaint"
    ) {
      delete userData.charter1;
      delete userData.charter2;
      delete userData.charter3;
      sessionStorage.setItem("userData", JSON.stringify(userData));
      navigate("/client-satisfaction");
    } else {
      userData.service = selectedServiceAvailed;
      if (userData.service !== selectedServiceAvailed) {
        delete userData.charter1;
        delete userData.charter2;
        delete userData.charter3;
      }
      sessionStorage.setItem("userData", JSON.stringify(userData));
      navigate("/citizen-charter");
    }
  };

  return (
    <div className="pt-lg-5 pb-lg-5" style={{ backgroundColor: "#edf3fc" }}>
      <div
        className="w-75 m-auto border rounded shadow-lg content"
        style={{ backgroundColor: "#f5f9ff" }}
      >
        <Header />
        <div className="container">
          <div className="m-auto">
            <div className="rounded" style={{ backgroundColor: "#dfe7f5" }}>
              <p className="title">{staticOfficeTitle}</p>
            </div>

            {subDivisions.length > 0 && (
              <ServiceDropdown
                title="Office Transacted With"
                selectedValue={selectedOfficeTransacted}
                onSelect={handleSelectOfficeTransacted}
                items={subDivisions}
                itemKey="sub_division_id"
                itemLabel="sub_division_name"
              />
            )}

            <ServiceDropdown
              title="Service Availed"
              selectedValue={selectedServiceAvailed}
              onSelect={handleSelectService}
              items={filteredServices.length > 0 ? filteredServices : services}
              itemKey="service_name" // Use service_name as the key
              itemLabel="service_name" // Use service_name as the label
            />

            <div className="d-flex" style={{ width: "150px" }}>
              <Button
                className="info"
                variant="light"
                onClick={backPage}
                style={{ marginRight: "13px", backgroundColor: "#ededed" }}
              >
                Back
              </Button>
              <Button
                className="info"
                style={{ backgroundColor: "green" }}
                onClick={nextPage}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default serviceAvail;
