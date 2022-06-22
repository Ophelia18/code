import React from 'react';
import Book from './Component/Book';
import { books } from './Component/books';

function App () {
   return (
      <div className='grid'>
         {books.map((e, i) => {
            {/* const { name, auther, img } = e; */}
            return <Book key={i} {...e} />;
         })}
      </div>
   );
}

export default App;