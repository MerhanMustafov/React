import './css/bootstrap.min.css';
import './css/tooplate-infinite-loop.css';
import Infinite from './components/InfinitePage.js'
import WhatWeDo from './components/WhatWeDo.js'
import Testimonials from './components/Testimonials.js'
import Gallery from './components/Gallery.js'
import Contacts from './components/Contacts.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Infinite />
        <WhatWeDo />
        <Testimonials />
        <Gallery />
        <Contacts />
      </header>
    </div>
  );
}

export default App;
