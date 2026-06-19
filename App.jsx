import { useState } from "react";

function App() {

  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");

  const calculateBMI = () => {
    if (!height || !weight) return;
    const h = height / 100;
    const result = (weight / (h * h)).toFixed(1);
    setBmi(result);
    if (result < 18.5) {
      setStatus("Underweight");
    } else if (result < 25) {
      setStatus("Healthy Weight");
    } else if (result < 30) {
      setStatus("Overweight");
    } else {
      setStatus("Obese");
    }
  };

  return (
    <div className="bg-[#050505] text-white w-full overflow-x-hidden">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 py-5 flex items-center justify-between">

          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Forever Fitness"
              className="h-12"
            />
            <div>
              <h1 className="font-bold text-lg text-yellow-400">
                FOREVER FITNESS
              </h1>
              <p className="text-xs text-gray-400">
                By Firoz Khan
              </p>
            </div>
          </div>

          <div className="hidden md:flex gap-10 items-center text-sm">
            <a href="#" className="hover:text-yellow-400 transition">Home</a>
            <a href="#" className="hover:text-yellow-400 transition">About</a>
            <a href="#" className="hover:text-yellow-400 transition">Services</a>
            <a href="#" className="hover:text-yellow-400 transition">Gallery</a>
            <a href="#" className="hover:text-yellow-400 transition">Contact</a>
          </div>

        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-32 pb-20">

        <p className="text-pink-500 uppercase tracking-[5px] mb-6">
          Welcome To Forever Fitness
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
          Build Strength.
          <br />
          Build Confidence.
          <br />
          Build Forever.
        </h1>

        <p className="max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed mb-14">
          Transform your body and mind with world-class
          equipment, expert trainers, and an environment
          built for champions.
        </p>

        <div className="flex gap-5 flex-wrap justify-center">
          <button className="bg-yellow-400 text-black px-10 py-4 rounded-lg font-semibold hover:scale-105 transition">
            View Memberships
          </button>
          <button className="border border-pink-500 text-pink-500 px-10 py-4 rounded-lg hover:bg-pink-500 hover:text-white transition">
            Contact Us
          </button>
        </div>

      </section>

      {/* Stats Section */}
      <section className="py-28 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-14 gap-x-8 text-center">

            <div>
              <h2 className="text-5xl font-bold text-yellow-400">200+</h2>
              <p className="text-gray-400 mt-3">Happy Members</p>
            </div>

            <div>
              <h2 className="text-5xl font-bold text-pink-500">20+</h2>
              <p className="text-gray-400 mt-3">Expert Trainers</p>
            </div>

            <div>
              <h2 className="text-5xl font-bold text-blue-500">10+</h2>
              <p className="text-gray-400 mt-3">Years Experience</p>
            </div>

            <div>
              <h2 className="text-5xl font-bold text-yellow-400">98%</h2>
              <p className="text-gray-400 mt-3">Success Rate</p>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">

          <div className="text-center mb-24 max-w-2xl mx-auto">
            <p className="text-pink-500 uppercase tracking-[4px] mb-4">
              Why Choose Us
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose
              <span className="text-yellow-400"> Forever Fitness</span>
            </h2>
            <p className="text-gray-400">
              Experience world-class fitness facilities,
              expert trainers, and a motivating environment
              designed to help you achieve your goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">

            <div className="bg-[#121212] p-10 rounded-2xl border border-gray-800 hover:border-yellow-400 transition">
              <h3 className="text-xl font-semibold text-yellow-400 mb-4">Certified Trainers</h3>
              <p className="text-gray-400 leading-relaxed">
                Train under experienced professionals who guide
                you towards your fitness goals safely and effectively.
              </p>
            </div>

            <div className="bg-[#121212] p-10 rounded-2xl border border-gray-800 hover:border-pink-500 transition">
              <h3 className="text-xl font-semibold text-pink-500 mb-4">Modern Equipment</h3>
              <p className="text-gray-400 leading-relaxed">
                Access premium gym equipment for strength,
                cardio, endurance, and functional training.
              </p>
            </div>

            <div className="bg-[#121212] p-10 rounded-2xl border border-gray-800 hover:border-blue-500 transition">
              <h3 className="text-xl font-semibold text-blue-500 mb-4">Personalized Programs</h3>
              <p className="text-gray-400 leading-relaxed">
                Customized workout plans designed according
                to your fitness level and goals.
              </p>
            </div>

            <div className="bg-[#121212] p-10 rounded-2xl border border-gray-800 hover:border-yellow-400 transition">
              <h3 className="text-xl font-semibold text-yellow-400 mb-4">Nutrition Guidance</h3>
              <p className="text-gray-400 leading-relaxed">
                Get expert nutrition advice to complement
                your workout and maximize results.
              </p>
            </div>

            <div className="bg-[#121212] p-10 rounded-2xl border border-gray-800 hover:border-pink-500 transition">
              <h3 className="text-xl font-semibold text-pink-500 mb-4">Supportive Community</h3>
              <p className="text-gray-400 leading-relaxed">
                Join a community of motivated individuals
                working together towards healthier lifestyles.
              </p>
            </div>

            <div className="bg-[#121212] p-10 rounded-2xl border border-gray-800 hover:border-blue-500 transition">
              <h3 className="text-xl font-semibold text-blue-500 mb-4">Proven Results</h3>
              <p className="text-gray-400 leading-relaxed">
                Thousands of successful transformations and
                years of excellence in fitness coaching.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">

          <div className="text-center mb-24 max-w-2xl mx-auto">
            <p className="text-pink-500 uppercase tracking-[4px] mb-4">
              Membership Plans
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Choose Your
              <span className="text-yellow-400"> Fitness Journey</span>
            </h2>
            <p className="text-gray-400">
              Flexible plans designed for every fitness goal.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">

            {/* Starter */}
            <div className="bg-[#121212] border border-gray-800 rounded-3xl p-10 hover:border-yellow-400 transition">
              <h3 className="text-xl font-bold mb-4">Starter</h3>
              <h2 className="text-5xl font-bold text-yellow-400 mb-8">₹1,999</h2>
              <ul className="space-y-4 text-gray-400">
                <li>✔ Gym Access</li>
                <li>✔ Cardio Area</li>
                <li>✔ Locker Access</li>
                <li>✔ Fitness Assessment</li>
              </ul>
            </div>

            {/* Pro */}
            <div className="bg-gradient-to-b from-yellow-400/10 to-transparent border-2 border-yellow-400 rounded-3xl p-10">
              <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                MOST POPULAR
              </span>
              <h3 className="text-xl font-bold mt-6 mb-4">Pro</h3>
              <h2 className="text-5xl font-bold text-yellow-400 mb-8">₹3,499</h2>
              <ul className="space-y-4 text-gray-300">
                <li>✔ Personal Training</li>
                <li>✔ Nutrition Guidance</li>
                <li>✔ Group Classes</li>
                <li>✔ Locker Access</li>
                <li>✔ Priority Support</li>
              </ul>
            </div>

            {/* Elite */}
            <div className="bg-[#121212] border border-gray-800 rounded-3xl p-10 hover:border-pink-500 transition">
              <h3 className="text-xl font-bold mb-4">Elite</h3>
              <h2 className="text-5xl font-bold text-pink-500 mb-8">₹5,999</h2>
              <ul className="space-y-4 text-gray-400">
                <li>✔ Dedicated Coach</li>
                <li>✔ Advanced Programs</li>
                <li>✔ Premium Facilities</li>
                <li>✔ Nutrition Planning</li>
                <li>✔ VIP Support</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-32 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">

          <div className="text-center mb-24 max-w-2xl mx-auto">
            <p className="text-pink-500 uppercase tracking-[4px] mb-4">
              Our Facilities
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Train With
              <span className="text-yellow-400"> World-Class Equipment</span>
            </h2>
            <p className="text-gray-400">
              Everything you need for strength, endurance, flexibility,
              and complete body transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

            <div className="bg-[#121212] rounded-3xl overflow-hidden border border-gray-800 hover:border-yellow-400 transition">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48"
                alt="Strength Training"
                className="h-56 w-full object-cover"
              />
              <div className="p-7">
                <h3 className="text-xl font-bold text-yellow-400 mb-3">Strength Zone</h3>
                <p className="text-gray-400">Advanced machines and free weights.</p>
              </div>
            </div>

            <div className="bg-[#121212] rounded-3xl overflow-hidden border border-gray-800 hover:border-pink-500 transition">
              <img
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
                alt="Cardio"
                className="h-56 w-full object-cover"
              />
              <div className="p-7">
                <h3 className="text-xl font-bold text-pink-500 mb-3">Cardio Zone</h3>
                <p className="text-gray-400">Treadmills, cycles and endurance training.</p>
              </div>
            </div>

            <div className="bg-[#121212] rounded-3xl overflow-hidden border border-gray-800 hover:border-blue-500 transition">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b"
                alt="CrossFit"
                className="h-56 w-full object-cover"
              />
              <div className="p-7">
                <h3 className="text-xl font-bold text-blue-500 mb-3">Functional Area</h3>
                <p className="text-gray-400">HIIT, CrossFit and performance training.</p>
              </div>
            </div>

            <div className="bg-[#121212] rounded-3xl overflow-hidden border border-gray-800 hover:border-yellow-400 transition">
              <img
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a"
                alt="Yoga"
                className="h-56 w-full object-cover"
              />
              <div className="p-7">
                <h3 className="text-xl font-bold text-yellow-400 mb-3">Yoga Studio</h3>
                <p className="text-gray-400">Flexibility, recovery and mindfulness sessions.</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">

          <div className="text-center mb-20 max-w-2xl mx-auto">
            <p className="text-pink-500 uppercase tracking-[4px] mb-4">
              Member Reviews
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our
              <span className="text-yellow-400"> Members Say</span>
            </h2>
            <div className="mt-8">
              <span className="text-5xl font-bold text-yellow-400">4.9</span>
              <div className="text-yellow-400 text-xl mt-3">★★★★★</div>
              <p className="text-gray-400 mt-3">Based on 500+ Member Reviews</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">

            <div className="bg-[#121212] p-10 rounded-3xl border border-gray-800">
              <div className="text-yellow-400 mb-5">★★★★★</div>
              <p className="text-gray-400 mb-7 leading-relaxed">
                Amazing atmosphere and supportive trainers.
                My strength and confidence have improved tremendously.
              </p>
              <h4 className="font-bold">Rahul Sharma</h4>
            </div>

            <div className="bg-[#121212] p-10 rounded-3xl border border-gray-800">
              <div className="text-yellow-400 mb-5">★★★★★</div>
              <p className="text-gray-400 mb-7 leading-relaxed">
                Best gym experience I've had. Modern equipment
                and excellent personal guidance.
              </p>
              <h4 className="font-bold">Priya Verma</h4>
            </div>

            <div className="bg-[#121212] p-10 rounded-3xl border border-gray-800">
              <div className="text-yellow-400 mb-5">★★★★★</div>
              <p className="text-gray-400 mb-7 leading-relaxed">
                Great environment and motivating community.
                Highly recommended for fitness enthusiasts.
              </p>
              <h4 className="font-bold">Aman Singh</h4>
            </div>

          </div>

        </div>
      </section>

      {/* BMI Calculator */}
      <section className="py-32 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">

          <div className="text-center mb-20 max-w-2xl mx-auto">
            <p className="text-pink-500 uppercase tracking-[4px] mb-4">
              Fitness Tool
            </p>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              BMI
              <span className="text-yellow-400"> Calculator</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Check your Body Mass Index instantly.
            </p>
          </div>

          <div className="flex justify-center">

            <div className="w-full max-w-3xl bg-[#121212]/80 backdrop-blur-md border border-gray-800 rounded-3xl p-10 md:p-14 shadow-2xl">

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="number"
                  placeholder="Height (cm)"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="bg-black border border-gray-700 rounded-xl px-5 py-4 outline-none w-full text-white focus:border-yellow-400 transition"
                />
                <input
                  type="number"
                  placeholder="Weight (kg)"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="bg-black border border-gray-700 rounded-xl px-5 py-4 outline-none w-full text-white focus:border-yellow-400 transition"
                />
              </div>

              <div className="flex justify-center mt-10">
                <button
                  onClick={calculateBMI}
                  className="bg-yellow-400 text-black px-10 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300"
                >
                  Calculate BMI
                </button>
              </div>

              {bmi && (
                <div className="mt-12 text-center">

                  <h3 className="text-4xl font-bold text-yellow-400">{bmi}</h3>
                  <p className="text-gray-400 mt-3">Your BMI Score</p>

                  <p className="mt-6 text-2xl font-semibold text-yellow-400">{status}</p>

                  <p className="text-gray-400 mt-5 max-w-xl mx-auto leading-relaxed">
                    {
                      status === "Underweight"
                        ? "Focus on strength training and a calorie surplus diet."
                        : status === "Healthy Weight"
                          ? "Great job! Maintain your fitness with balanced nutrition and regular workouts."
                          : status === "Overweight"
                            ? "A combination of cardio, strength training, and nutrition control is recommended."
                            : "Consult a fitness coach and follow a structured weight-loss plan."
                    }
                  </p>

                  <div className="mt-12 max-w-2xl mx-auto">
                    <div className="relative h-4 rounded-full overflow-hidden flex">
                      <div className="w-[18.5%] bg-blue-500"></div>
                      <div className="w-[25%] bg-green-500"></div>
                      <div className="w-[30%] bg-yellow-500"></div>
                      <div className="flex-1 bg-red-500"></div>
                    </div>

                    <div
                      className="relative mt-3"
                      style={{
                        left: `${Math.min((Number(bmi) / 40) * 100, 100)}%`
                      }}
                    >
                      <div className="-translate-x-1/2 text-yellow-400 text-xl">▲</div>
                    </div>

                    <div className="flex justify-between text-xs text-gray-400 mt-4">
                      <span>Underweight</span>
                      <span>Healthy</span>
                      <span>Overweight</span>
                      <span>Obese</span>
                    </div>
                  </div>

                </div>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* Transformations Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">

          <div className="text-center mb-24 max-w-2xl mx-auto">
            <p className="text-pink-500 uppercase tracking-[4px] mb-4">
              Success Stories
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Real
              <span className="text-yellow-400"> Transformations</span>
            </h2>
            <p className="text-gray-400">
              Results achieved by our members through dedication and expert guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">

            {/* Card 1 */}
            <div className="bg-[#121212] rounded-3xl overflow-hidden border border-gray-800">
              <div className="h-64 bg-gradient-to-r from-gray-800 to-gray-900 flex items-center justify-center text-gray-500">
                Before / After Photo
              </div>
              <div className="p-7">
                <h3 className="text-xl font-bold mb-3">Rahul Sharma</h3>
                <p className="text-yellow-400 font-semibold mb-4">Lost 18 KG in 5 Months</p>
                <p className="text-gray-400">Improved fitness level and reduced body fat significantly.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#121212] rounded-3xl overflow-hidden border border-gray-800">
              <div className="h-64 bg-gradient-to-r from-gray-800 to-gray-900 flex items-center justify-center text-gray-500">
                Before / After Photo
              </div>
              <div className="p-7">
                <h3 className="text-xl font-bold mb-3">Priya Verma</h3>
                <p className="text-pink-500 font-semibold mb-4">Lost 12 KG in 4 Months</p>
                <p className="text-gray-400">Achieved a healthier lifestyle through structured training.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#121212] rounded-3xl overflow-hidden border border-gray-800">
              <div className="h-64 bg-gradient-to-r from-gray-800 to-gray-900 flex items-center justify-center text-gray-500">
                Before / After Photo
              </div>
              <div className="p-7">
                <h3 className="text-xl font-bold mb-3">Aman Singh</h3>
                <p className="text-blue-500 font-semibold mb-4">Gained 8 KG Muscle</p>
                <p className="text-gray-400">Built strength and improved overall physique.</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">

          <div className="text-center mb-24 max-w-2xl mx-auto">
            <p className="text-pink-500 uppercase tracking-[4px] mb-4">
              Get In Touch
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Start Your
              <span className="text-yellow-400"> Fitness Journey Today</span>
            </h2>
            <p className="text-gray-400">
              Visit Forever Fitness by Firoz Khan and take the first step towards a healthier life.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">

            <div className="bg-[#121212] p-10 rounded-3xl border border-gray-800">
              <h3 className="text-yellow-400 text-xl font-bold mb-5">📍 Address</h3>
              <p className="text-gray-400 leading-relaxed">
                Forever Fitness by Firoz Khan
                <br />
                Your Gym Address Here
              </p>
            </div>

            <div className="bg-[#121212] p-10 rounded-3xl border border-gray-800">
              <h3 className="text-pink-500 text-xl font-bold mb-5">📞 Contact</h3>
              <p className="text-gray-400 leading-relaxed">
                +91 XXXXX XXXXX
                <br />
                foreverfitness@gmail.com
              </p>
            </div>

            <div className="bg-[#121212] p-10 rounded-3xl border border-gray-800">
              <h3 className="text-blue-500 text-xl font-bold mb-5">🕒 Working Hours</h3>
              <p className="text-gray-400 leading-relaxed">
                Monday - Saturday
                <br />
                5:00 AM - 11:00 PM
              </p>
            </div>

          </div>

          <div className="flex justify-center mt-16">
            <button className="bg-yellow-400 text-black px-10 py-4 rounded-xl font-semibold hover:scale-105 transition">
              Contact Us Today
            </button>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 flex flex-col md:flex-row justify-between items-center gap-5">

          <div>
            <h3 className="text-xl font-bold text-yellow-400">FOREVER FITNESS</h3>
            <p className="text-gray-500 mt-1">By Firoz Khan</p>
          </div>

          <p className="text-gray-500">
            © 2026 Forever Fitness By Firoz Khan. All Rights Reserved.
          </p>

        </div>
      </footer>

    </div>
  );
}

export default App;
