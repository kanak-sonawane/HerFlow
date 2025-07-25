export default function Home() {
  return (
    <div className="bg-pink-50 min-h-screen">
      <section className="text-center py-20 bg-white shadow">
        <h1 className="text-4xl font-bold text-pink-600 mb-4">Welcome to HerFlow 💖</h1>
        <p className="text-gray-700 text-lg max-w-xl mx-auto">
          Your personal companion for period tracking, health awareness, and support.
        </p>
        <a href="/track" className="mt-6 inline-block bg-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-600 transition">
          Start Tracking
        </a>
      </section>

      
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-pink-600 text-center mb-10">Explore Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard title="Period Tracker" description="Track your cycle and get predictions." link="/track" />
          <FeatureCard title="Community" description="Share experiences & support each other." link="/community" />
          <FeatureCard title="AI Chatbot" description="Ask anything anonymously with our chatbot." link="/chat" />
        </div>
      </section>

    
      <section className="bg-white py-12 text-center px-6">
        <h2 className="text-xl font-bold text-pink-600">💬 Did You Know?</h2>
        <p className="text-gray-700 mt-4 max-w-xl mx-auto">
          1 in 5 women in India suffers from PCOS. Let's break the taboo and spread awareness together!
        </p>
        <a href="/info" className="mt-6 inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded hover:bg-pink-200 transition">
          Learn More
        </a>
      </section>

     
      <footer className="text-center text-gray-500 text-sm py-4 mt-8">
        © 2025 HerFlow. Empowering every cycle.
      </footer>
    </div>
  );
}


function FeatureCard({ title, description, link }) {
  return (
    <a href={link} className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition text-left">
      <h3 className="text-lg font-semibold text-pink-600">{title}</h3>
      <p className="text-gray-700 mt-2">{description}</p>
    </a>
  );
}
