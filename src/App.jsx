import { Review } from './Review';
import data from './data';
import { useState } from 'react'
 
const App = () => {
  const [reviews, setReviews] = useState(data);
  const [counter, setCounter] = useState(0);

  const changeCounter = (nextNumber) => {
    if(nextNumber >= 0 && nextNumber <= reviews.length - 1) {
      setCounter(nextNumber);
    }

    if(nextNumber < 0) {
      setCounter(reviews.length - 1)
    }

    if(nextNumber > reviews.length - 1) {
      setCounter(0)
    }
  }

  return (
  <main>
    <div className='review-container'>

      {reviews[counter] && 
        <Review reviews={reviews} changeCounter={changeCounter} counter={counter}  />
      }
    </div>
  </main>
  )
};
export default App;
