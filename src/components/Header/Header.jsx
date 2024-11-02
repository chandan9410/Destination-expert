
import React from 'react';
import styles from './styles.js'; // Importing your custom styles

const Header = ({ }) => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}> Destination Expert</h1>
      <div style={styles.searchContainer}>
        <h2 style={styles.subtitle}>Explore new places</h2>
        <div style={styles.search}>
          <input
            type="text"
            placeholder="Search…"
            style={styles.searchInput}
          />
          <button style={styles.searchButton}>
            <span role="img" aria-label="search">🔍</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;




// import React from 'react';
// import styles from './styles.js';
// // function Header() {
// // above one is :  is a standard function declaration.
// // It is hoisted, meaning it can be used before it is declared in the code.
// const Header = () => {
//   // this  {onPlaceChanged,onLoad}  it destructure  props directy into  function parameter  list  
//   // Destructuring makes it more convenient to access these props without having 
//   // to use props.onPlaceChanged and props.onLoad throughout the component
//   return (
//     <header style={styles.header}>
//       <h1 style={styles.title}> Travel assistent </h1>
//       <div style={styles.searchContainer}>
//         <h2 style={styles.subtitle}> explore new  places </h2>
//         <div style={styles.search}>
//           <input type="text" placeholder='search..'
//             style={styles.searchInput} />
//           <button style={styles.searchButton}>
//             <span role="img" aria-label="search">🔍</span>
//           </button>
//         </div>
//       </div>
//     </header>

//   )
// }

// export default Header;
