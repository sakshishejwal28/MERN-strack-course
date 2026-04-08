
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import "./../style.css";
import { useEffect, useState } from 'react'; 
import Modal from 'react-bootstrap/Modal';


function Item() {

  const [itemName, setItemName] = useState();

  const [discription, setdiscription] = useState();
  const [PurchasePrice, setPurchasePrice] = useState();
  const [sellingPrice, setsellingPrice] = useState();
  const [quantity, setquantity] = useState();
  const [unit, setunit] = useState();
  const [itemData, setData] = useState();



  async function submitform(e) {
    try {


      e.preventDefault();


      const data = {
        name: itemName,
        decription: discription,
        PurchasePrice: PurchasePrice,
        sellingPrice: sellingPrice,
        quantity: quantity,
        unit: unit
      };

      console.log(data, "form submitted");
      const apiResponse = await axios.post(`${import.meta.env.VITE_API_URL_BACKED}/create-item`,
        data,).then(console.log("yes")).catch((error) => console.log("error"))

      console.log(apiResponse)
      getAllItemsData();
      toast.success('form submitted', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",

      });
    } catch (error) {
      console.log(error)
    }
  }


  const getAllItemsData = async () => {
    try {
      const apiResponse = await fetch(`${import.meta.env.VITE_API_URL_BACKED}/get-all-item`);
      const responseData = await apiResponse.json();
      setData(responseData.data);
      console.log(responseData);


    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    getAllItemsData();
  }, []);

  console.log(
    itemData, "itemData ==>"
  )

  
 const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const[id, setId]= useState()

  const OpenDeleteModel = (_id) =>{
    try {
       setShow(true);

       setId(_id)
       console.log(_id,"_id==>")
      console.log("call delete function")
    } catch (error) {
      console.log(error)
    }
  }

  const handleDelete = async () =>{
    try {
      console.log(id,"_id==>")
       
      const apiResponse = await axios.delete(` ${import.meta.env.VITE_API_URL_BACKED}/delete-item/${id}`)
      setShow(false);
      console.log(apiResponse)
       getAllItemsData();
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"

      />
      <h1 className='text-danger text-center my-5'><b>Manage Items</b></h1>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 '>
            <h3 className='border text-center'>create item</h3>
            <Form>
              <Row className="mb-3 my-5">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Iteam Name</Form.Label>
                  <Form.Control type="email" placeholder="Enter Iteam name"
                    onChange={(event) => setItemName(event.target.value)}
                    value={itemName}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Description</Form.Label>
                  <Form.Control type="Description" placeholder="Entre Description"

                    onChange={(event) => setdiscription(event.target.value)}
                    value={discription}
                  />


                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Purchase Price</Form.Label>
                  <Form.Control type='number' placeholder='Enter purchase Price'
                    onChange={(event) => setPurchasePrice(event.target.value)}
                    value={PurchasePrice}
                  />
                </Form.Group>

                <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                  <Form.Label>Selling Price</Form.Label>
                  <Form.Control type="number" placeholder="Enter selling price"
                    onChange={(event) => setsellingPrice(event.target.value)}
                    value={sellingPrice}
                  />
                </Form.Group>
              </Row>


              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control type='number' placeholder='Enter Quantity'
                    onChange={(event) => setquantity(event.target.value)}
                    value={quantity}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Unit</Form.Label>
                  <Form.Select defaultValue="Choose Unit"
                   onChange={(event) => setunit(event.target.value)}
                     value={unit}>
                    
                    <option>choose Unit </option>
                    <option>pice</option>
                    <option>Box</option>
                    <option>Kg</option>
                    <option>litter</option>
                    <option>Gram</option>
                  </Form.Select>
                </Form.Group>


              </Row>

              

              <div className='text-center'>
                <Button
                  variant="primary"
                  type="submit"
                  className='w-50'
                  onClick={submitform} >
                  Submit
                </Button>
              </div>
            </Form>

          </div>
          <div className='col-md-6'>
            <h3 className='border text-center'>Get list</h3>
            <Table striped bordered hover variant="white my-5">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Item name</th>
                  <th>Description</th>
                  <th>Purchase Price</th>
                  <th>Selling Price</th>
                  <th>Quantity</th>
                  <th>Unit</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {
                  itemData &&
                  itemData.map((each, index) => {
                    return (
                      <tr key={index +0}>
                        <td>{index + 1}</td>
                        <td>{each.name}</td>
                        <td>{each.decription}</td>
                        <td>{each.PurchasePrice}</td>
                        <td>{each.sellingPrice}</td>
                        <td>{each.quantity}</td>
                        <td>{each.unit}</td>
                        <td className='d-flex'>
                          <button className='btn btn-success'>Edit</button>
                          <button className='btn btn-danger mx-2' 
                          onClick={() => OpenDeleteModel(each._id) }
                           >Delete
                              
                          </button>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </Table>

          </div>
        </div>

      </div>

     
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Delete conformation</Modal.Title>
        </Modal.Header>
        <Modal.Body> Are you sure</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDelete}>
            yes
          </Button>
          <Button variant="primary" onClick={handleClose}>
           No
          </Button>
        </Modal.Footer>
      </Modal>
 

    </>
  )
}

export default Item
