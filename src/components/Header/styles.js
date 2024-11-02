

const styles = {
  header: {
    backgroundColor: '#3f51b5', // Example color
    padding: '16px',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: '24px',
    display: 'block', // Always visible
  },
  subtitle: {
    fontSize: '18px',
    display: 'block', // Always visible
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  search: {
    display: 'flex',
    position: 'relative',
    marginLeft: '16px',
  },
  searchInput: {
    border: 'none',
    borderRadius: '4px',
    padding: '8px',
    width: '200px', // Adjust width as necessary
  },
  searchButton: {
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: '0 8px',
  },
};

export default styles;
