import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './navbar'
import Home from './home'
import Certifications from './certifications'
import About from './about'
import WorkExperience from './workExperience'
import Academics from './academics'

function App() {
  const [count, setCount] = useState(0); // State for the counter functionality

  return (
    <div className='container'>
      <Navbar />
      <main> {/* Wrap main content in a main section */}
        <Home />  {/* Display the Home component */}
        {/* Conditionally render other components based on routing (if applicable) */}
        <About />  {/* Assuming you have an About component */}
        <WorkExperience />  {/* Assuming you have a WorkExperience component */}
        <Academics />  {/* Assuming you have an Academics component */}
        <Certifications />  {/* Assuming you have a Certifications component */}
      </main>
    </div>
  );
}

export default App
