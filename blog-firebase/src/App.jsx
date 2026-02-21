import { Routes, Route, Link } from 'react-router-dom';
import { useBlog } from './context/BlogContext';
import HomePage from './pages/HomePage';
import CreatePost from './pages/CreatePost';
import PostDetail from './pages/PostDetail';

// Estilos movidos fuera para mayor orden
const styles = {
  container: { maxWidth: '900px', margin: '0 auto', padding: '40px 20px', fontFamily: 'Inter, sans-serif' },
  nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' },
  logo: { fontSize: '1.5rem', fontWeight: '800', color: '#646cff', textDecoration: 'none', letterSpacing: '-1px' },
  button: { padding: '12px 24px', background: '#646cff', color: 'white', textDecoration: 'none', borderRadius: '8px', fontWeight: '600', transition: '0.3s' }
};

function App() {
  const { state } = useBlog();

  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        <Link to="/" style={styles.logo}>DevLog_</Link>
        <Link to="/create" style={styles.button}>Redactar</Link>
      </nav>

      {state.error && <div style={{background: '#ffebe9', color: '#ce3c2e', padding: '1rem', borderRadius: '8px', marginBottom: '20px'}}>⚠️ {state.error}</div>}
      
      {state.loading ? (
        <div style={{textAlign: 'center', marginTop: '50px'}}>Sincronizando con la nube...</div>
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/create" element={<CreatePost />} />
        </Routes>
      )}
    </div>
  );
}

export default App;