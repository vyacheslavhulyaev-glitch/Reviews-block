import { FaQuoteRight } from "react-icons/fa6";

export function Review({
  reviews,
  changeCounter,
  counter
}) {
  return <div className='review' key={reviews[counter].id}>
          <div className="img-container">
            <img className='person-img' src={reviews[counter].image} alt={reviews[counter].name} />
            <div className='quote-icon'><FaQuoteRight /></div>
          </div>

          <div className='text-author-wrp'>
            <div className='author'>{reviews[counter].name}</div>
            <div className='job'>{reviews[counter].job}</div>
            <div className='info'>{reviews[counter].text}</div>
          </div>

          <div className='btn-container'>
            <div className='prev-btn btn btn-hipster' 
              onClick={() => {
                changeCounter(counter - 1);
              }}>Prev
            </div>

            <div className='next-btn btn btn-hipster' 
              onClick={() => {
                changeCounter(counter + 1);
              }}>Next
            </div>
            
          </div>

          <div className='btn-container'>
            <div className='next-btn btn btn-hipster' 
              onClick={() => {
                    changeCounter(Math.floor(Math.random() * (reviews.length + 1)));
                }}>Random
            </div>

          </div>
        </div>;
}
  