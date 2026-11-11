import useCustomFetchApi from './CustomFetchApi';
import {useNavigate} from 'react-router-dom';
const FetchApi = () => {
    const navigate = useNavigate();
    const { ApiData } = useCustomFetchApi("https://fakestoreapi.com/products", {}, "", "GET");
    console.log(ApiData)
    const handleDetail = (id) => { 
        navigate(`fetchApi/detail/${id}`);
    }

    return (
        <>
            <div className='mt-5 text-center fs-1'>Fetch Api</div>
            <div className='d-flex flex-wrap justify-content-center'>
                {
                ApiData.map(item => {
                    return (
                        <div key={item.id} className='card m-3' style={{ width: '18rem' }}>
                            <img src={item.image} className="card-img-top" alt={item.title} />
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">${item.price.toFixed(2)}</p>
                                <p>{item.description}</p>
                                <p>{item.category}</p>
                                <p>{item.rating.rate}</p>
                                <p>{item.rating.count}</p>
                                <div className="d-flex justify-content-between">
                                    <button className='btn btn-primary'>Add to Cart</button>
                                    <button className='btn btn-danger' onClick={() => handleDetail(item.id)}>View Details</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </>
    );
};

export default FetchApi;