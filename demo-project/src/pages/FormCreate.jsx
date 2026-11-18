import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import fetchAxios from '../fetchApi/AxiosCustom';
import './style/FormCreate.css';


const FormCreate = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    // const [previewUrl, setPreviewUrl] = useState('');

    const [data, setData] = useState({
        name: '',
        category: '',
        price: '',
        stock: '',
        description: '',
        image: null,
    });

    // // Generate and clean up image preview URL only when data.image changes
    // useEffect(() => {
    //     if (!data.image) {
    //         setPreviewUrl('');
    //         return;
    //     }
    //     // const objectUrl = URL.createObjectURL(data.image);
    //     // setPreviewUrl(objectUrl);

    //     // return () => URL.revokeObjectURL(objectUrl);
    // }, [data.image]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setData((prev) => ({ ...prev, [id]: value }));
    };

    // const handleFileChange = (e) => {
    //     const file = e.target.files[0];
    //     if (file) {
    //         console.log(file)
    //         setData((prev) => ({ ...prev, image: file }));
    //     }
    // };

    const handleSave = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            // const imageUrl = data.image
            //     ? await new Promise((resolve, reject) => {
            //         const reader = new FileReader();
            //         reader.onload = () => resolve(reader.result);
            //         reader.onerror = () => reject(new Error('Unable to read the selected image.'));
            //         reader.readAsDataURL(data.image);
            //     })
            //     : '';

            const productPayload = {
                name: data.name,
                category: data.category,
                price: Number(data.price),
                stock: Number(data.stock),
                description: data.description,
                imageUrl: data.image,
            };

            // Using your custom Axios helper to match Home.jsx
            const reStore = await fetchAxios('/products', 'POST', productPayload);
            console.log(reStore)

            // navigate('/'); // Redirect back to Home table after saving
        } catch (error) {
            console.error('Error saving item:', error);
            setMessage(error?.response?.data?.message || error.message || 'Failed to save item.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="form-wrapper">
            <form className="form-card" onSubmit={handleSave}>
                <h2 className="form-title">Create Product</h2>

                <div className="form-group">
                    <label htmlFor="name">Product Name</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Product name"
                        value={data.name}
                        required
                        onChange={handleChange}
                    />
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <input
                            id="category"
                            type="text"
                            placeholder="Category"
                            value={data.category}
                            required
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="price">Price ($)</label>
                        <input
                            id="price"
                            type="number"
                            placeholder="0.00"
                            step="0.01"
                            min="0"
                            value={data.price}
                            required
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="stock">Stock</label>
                        <input
                            id="stock"
                            type="number"
                            placeholder="0"
                            min="0"
                            value={data.stock}
                            required
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        rows="3"
                        placeholder="Enter a description..."
                        value={data.description}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="image">Image</label>
                    <input
                        id="image"
                        type="text"
                        accept="image/*"
                        className="file-input"
                        placeholder='Image Url'
                        onChange={handleChange}
                    />
                </div>

                {/* {previewUrl && (
                    <div className="form-group">
                        <img
                            src={previewUrl}
                            alt={data.name || 'Preview'}
                            className="img-thumbnail mt-2"
                            style={{ width: '128px', height: '128px', objectFit: 'cover' }}
                        />
                    </div>
                )} */}

                {message && <p className="text-danger" role="status">{message}</p>}

                <div className="d-flex gap-2">
                    <button type="submit" className="submit-btn" disabled={loading}>
                        {loading ? 'Saving...' : 'Save'}
                    </button>
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => navigate('/')}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormCreate;