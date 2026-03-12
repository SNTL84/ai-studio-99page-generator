import { BrowserRouter as Router, Routes, Route, useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import servicesData from '../data/services-data.json';
import './index.css';

// --- Components ---

const Nav = () => (
  <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 py-4">
    <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-extrabold text-blue-800">DesiDevloper.com</Link>
      <div className="hidden md:flex gap-8 font-medium">
        <Link to="/" className="hover:text-blue-700">Home</Link>
        <Link to="/services" className="hover:text-blue-700">Services</Link>
        <Link to="/contact" className="hover:text-blue-700">Contact</Link>
      </div>
      <a href="https://wa.me/919727413309" className="bg-green-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-green-600 transition">WhatsApp</a>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="bg-gray-900 text-white pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div>
          <strong className="text-2xl block mb-4">DesiDevloper.com</strong>
          <p className="text-gray-400">Built with intention. Launched with confidence.</p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Contact</h4>
          <p className="text-gray-400">Email: 3goldenlotusroots@gmail.com</p>
          <p className="text-gray-400">WhatsApp: +91 97274 13309</p>
          <p className="text-gray-400">Ahmedabad, Gujarat, India</p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Social</h4>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/sntl2784" className="text-gray-400 hover:text-white">LinkedIn</a>
            <a href="https://github.com/3goldenlotusroots-droid/SNTL2784" className="text-gray-400 hover:text-white">GitHub</a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
        <p>© 2025 DesiDevloper.com · All rights reserved · Built by DesiDevloper.com</p>
      </div>
    </div>
  </footer>
);

const ConnectBubble = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed bottom-6 right-6 z-[9999] flex flex-col gap-3 transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <a href="https://wa.me/919727413309" className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
      </a>
      <a href="https://www.linkedin.com/in/sntl2784" className="w-14 h-14 bg-blue-700 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
      </a>
    </div>
  );
};

// --- Pages ---

const Home = () => (
  <div className="min-h-screen">
    <section className="bg-gray-50 py-24 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">Your Complete Digital Partner in Ahmedabad</h1>
        <p className="text-xl text-blue-800 font-bold mb-4">Web dev, SEO, AI automation, design — 99 services, one team.</p>
        <p className="text-gray-600 mb-10 text-lg">Built with intention. Launched with confidence.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/services" className="bg-blue-800 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-900 transition">View All 99 Services</Link>
          <a href="https://wa.me/919727413309" className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition">WhatsApp Us Now</a>
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Why Choose DesiDevloper?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { title: 'Fast Delivery', desc: 'Transparent milestones and quick turnaround.' },
            { title: 'Fixed Pricing', desc: 'No hidden costs, no surprises.' },
            { title: 'Dedicated Support', desc: 'We are with you every step of the way.' },
            { title: 'Results Driven', desc: 'Focused on leads, sales, and rankings.' }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-3 text-blue-800">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

const ServicesIndex = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', ...new Set(servicesData.map((s: any) => s.CATEGORY))];

  const filteredServices = selectedCategory === 'All' 
    ? servicesData 
    : servicesData.filter((s: any) => s.CATEGORY === selectedCategory);

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-black mb-4 text-center">99 Expert Services</h1>
        <p className="text-gray-600 text-center mb-12 text-lg">One trusted partner for all your digital needs.</p>
        
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-bold transition ${selectedCategory === cat ? 'bg-blue-800 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredServices.map((service: any) => (
            <Link key={service.slug} to={`/services/${service.slug}`} className="group p-8 bg-white border border-gray-200 rounded-2xl hover:border-blue-800 transition shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-800 text-xs font-bold rounded-full">{service.CATEGORY}</span>
                <span className="text-xs font-bold text-gray-400">Tier {service.SERVICE_TIER}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-800 transition">{service.SERVICE_NAME}</h3>
              <p className="text-gray-600 mb-6 line-clamp-2">{service.HERO_SUB}</p>
              <span className="text-blue-800 font-bold">Learn More →</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const ServicePage = () => {
  const { slug } = useParams();
  const service = servicesData.find((s: any) => s.slug === slug);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  if (!service) return <div className="py-20 text-center">Service not found.</div>;

  return (
    <div className="service-page">
      {/* Hero */}
      <section className="bg-gray-50 py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-black mb-4">{service.SERVICE_NAME}</h1>
          <p className="text-xl text-blue-800 font-bold mb-4">{service.HERO_HEADLINE}</p>
          <p className="text-gray-600 mb-10 text-lg">{service.HERO_SUB}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-blue-800 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-900 transition">Start Your Project</Link>
            <a href="https://wa.me/919727413309" className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-600 transition">WhatsApp Us</a>
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-bold mb-10">The Challenges</h2>
              <div className="space-y-8">
                {[1, 2, 3].map(i => (
                  <div key={i}>
                    <h4 className="font-bold text-lg mb-2 text-red-600">{service[`PROBLEM_${i}_TITLE` as keyof typeof service]}</h4>
                    <p className="text-gray-600">{service[`PROBLEM_${i}_DESC` as keyof typeof service]}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-10">Our Solution</h2>
              <div className="space-y-8">
                {[1, 2, 3].map(i => (
                  <div key={i}>
                    <h4 className="font-bold text-lg mb-2 text-green-600">{service[`SOLUTION_${i}_TITLE` as keyof typeof service]}</h4>
                    <p className="text-gray-600">{service[`SOLUTION_${i}_DESC` as keyof typeof service]}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our 6-Step Process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="text-center">
                <span className="w-10 h-10 bg-blue-800 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">{i}</span>
                <h4 className="font-bold mb-2">{service[`STEP_${i}_TITLE` as keyof typeof service]}</h4>
                <p className="text-sm text-gray-600">{service[`STEP_${i}_DESC` as keyof typeof service]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="border-b border-gray-200 pb-4">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full text-left flex justify-between items-center font-bold py-2"
                >
                  {service[`FAQ_${i}_Q` as keyof typeof service]}
                  <span>{activeFaq === i ? '−' : '+'}</span>
                </button>
                {activeFaq === i && <p className="mt-2 text-gray-600">{service[`FAQ_${i}_A` as keyof typeof service]}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gray-900 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{service.CTA_HEADLINE}</h2>
          <p className="text-xl text-gray-400 mb-6">{service.CTA_SUB}</p>
          <p className="text-amber-500 font-bold text-lg mb-10">{service.PRICING_ANCHOR}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-blue-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-800 transition">Start Your Project</Link>
            <a href="https://wa.me/919727413309" className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-600 transition">WhatsApp Us</a>
          </div>
        </div>
      </section>
    </div>
  );
};

const Contact = () => (
  <div className="py-24">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h1 className="text-5xl font-black mb-6">Let's Build Something Great</h1>
      <p className="text-xl text-gray-600 mb-12">We respond within 4 business hours. Based in Ahmedabad, Gujarat.</p>
      <div className="bg-white p-10 rounded-3xl border border-gray-200 shadow-xl">
        <h3 className="text-2xl font-bold mb-8 text-blue-800">Direct Contact</h3>
        <div className="flex flex-col gap-6 items-center">
          <a href="https://wa.me/919727413309" className="w-full max-w-sm bg-green-500 text-white py-4 rounded-xl font-bold text-xl hover:bg-green-600 transition">Chat on WhatsApp</a>
          <p className="text-gray-500">Or email us at:</p>
          <a href="mailto:3goldenlotusroots@gmail.com" className="text-2xl font-bold text-gray-900 hover:text-blue-800 transition">3goldenlotusroots@gmail.com</a>
        </div>
      </div>
    </div>
  </div>
);

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans text-gray-900">
        <Nav />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesIndex />} />
            <Route path="/services/:slug" element={<ServicePage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <ConnectBubble />
      </div>
    </Router>
  );
}
