import { useState } from 'react';
import './style/FormCreate.css';

const FormCreate = () => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    // 1. Initialized as a plain object, not an array
    const [data, setData] = useState({
        category: '',
        title: '',
        price: '',
        description: '',
        Image: null,
    });


    const handleChange = (e) => {
        const { id, value } = e.target;
        setData((prev) => ({ ...prev, [id]: value }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData((prev) => ({ ...prev, Image: file }));
        }
    };

    const handleSave = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            const image = data.Image
                ? await new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onload = () => resolve(reader.result);
                    reader.onerror = () => reject(new Error('Unable to read the selected image.'));
                    reader.readAsDataURL(data.Image);
                })
                : 'https://i.pravatar.cc';
            const productPayload = {
                title: data.title,
                price: Number(data.price),
                description: data.description,
                category: data.category,
                image,
            };
            const response = await fetch('https://fakestoreapi.com/products', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(productPayload),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            setMessage(`Product saved successfully${result.id ? ` (ID: ${result.id})` : ''}.`);
        } catch (error) {
            console.error('Error saving item:', error);
            setMessage(error.message || 'Failed to save item. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="form-wrapper">
            <form className="form-card" onSubmit={handleSave}>
                <h2 className="form-title">Create Item</h2>

                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        id="title"
                        type="text"
                        placeholder="Product title"
                        value={data.title}
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
                            value={data.price}
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
                        type="file"
                        accept="image/*"
                        className="file-input"
                        onChange={handleFileChange}
                    />
                </div>

                {data.Image && (
                    <div className="form-group">
                        <img
                            src={
                                typeof data.Image === 'string'
                                    ? data.Image
                                    : URL.createObjectURL(data.Image)
                            }
                            alt={data.title || 'Preview'}
                            className="mt-2 h-32 w-32 rounded-lg border border-gray-200 object-cover shadow-sm"
                        />
                    </div>
                )}

                {message && <p role="status">{message}</p>}

                <button type="submit" className="submit-btn" disabled={loading}>
                    {loading ? 'Saving...' : 'Save'}
                </button>
            </form>
        </div>
    );
};

export default FormCreate;