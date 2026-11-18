import { useNavigate } from "react-router-dom";
import fetchAxios from "../fetchApi/AxiosCustom";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const handleLink = () => {
    navigate("/form_create");
  };

  const handleUpdate = (id) => {
    navigate(`/form_update/${id}`); // Adjust route to match your app
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    try {
      await fetchAxios(`/products/${id}`, "DELETE");
      // Remove the deleted item from state without reloading
      setData((prevData) => prevData.filter((item) => item.id !== id));
    } catch (error) {
      alert(error?.response?.data?.message || "Failed to delete product!");
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await fetchAxios("/products", "GET");
      setData(response || []);
    } catch (error) {
      alert(error?.response?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Product List</h2>
        <button className="btn btn-primary" onClick={handleLink}>
          + Create Product
        </button>
      </div>

      {loading ? (
        
        <p className="text-center my-4">Loading...</p>

      ) : data?.length > 0 ? (
        <div className="table-responsive">
          <table className="table table-striped table-hover align-middle">
            <thead className="table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Price</th>
                <th scope="col">Stock</th>
                <th scope="col">Category</th>
                <th scope="col">Created At</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={item.id || index}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <img
                      src={item?.imageUrl}
                      alt={item?.name || "Product"}
                      className="img-thumbnail"
                      style={{ width: "60px", height: "60px", objectFit: "cover" }}
                    />
                  </td>
                  <td>{item?.name}</td>
                  <td>{item?.description}</td>
                  <td>${item?.price}</td>
                  <td>{item?.stock}</td>
                  <td>{item?.category}</td>
                  <td>{item?.createAt}</td>
                  <td className="text-nowrap">
                    <button
                      className="btn btn-primary btn-sm me-2"
                      onClick={() => handleUpdate(item.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-muted my-4">Not Found!</p>
      )}
    </div>
  );
};

export default Home;