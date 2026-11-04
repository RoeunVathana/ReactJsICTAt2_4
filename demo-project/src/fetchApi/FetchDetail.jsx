import useCustomFetchApi from './CustomFetchApi';
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
const FetchDetail = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState([]);


  const { ApiData } = useCustomFetchApi("https://fakestoreapi.com/products", {}, id, "GET");

  useEffect(() => {
    if(ApiData && ApiData.id) {
      setDetailData(ApiData);
    }
  }, [id, ApiData]);
  return (
    <>
      <div className='mt-5 text-center fs-1'>Fetch Api</div>
      <div className='d-flex flex-wrap justify-content-center'>
        {
          detailData.id ? (
            <div className='card m-3' style={{ width: '18rem' }}>
              <img src={detailData.image} className="card-img-top" alt={detailData.title} />
              <div className="card-body">
                <h5 className="card-title">{detailData.title}</h5>
                <p className="card-text">${detailData.price.toFixed(2)}</p>
                <p>{detailData.description}</p>
                <p>{detailData.category}</p>
                <p>{detailData.rating?.rate}</p>
                <p>{detailData.rating?.count}</p>
              </div>
            </div>
          ):(
            <div className='text-center fs-1'>Loading...</div>
          )
        }
      </div>
    </>
  )
}

export default FetchDetail