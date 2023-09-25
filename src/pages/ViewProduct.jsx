import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ViewProduct = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`/get-product/${id}`);
        setData(response.data)
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, [id]);


  return (
    <div>
      <h1>View Product</h1>
      <div>
        <strong>ID:</strong> {data._id}
      </div>
      <div>
        <strong>Name:</strong> {data.product_name}
      </div>
      <div>
        <strong>Price:</strong> {data.price}
      </div>
      <div>
        <strong>Description:</strong> {data.description}
      </div>
      <div>
        <Link to='/'>Back to Home</Link>
      </div>
    </div>
  );
};

export default ViewProduct;
