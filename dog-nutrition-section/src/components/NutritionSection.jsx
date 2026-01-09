import React from 'react';

const NutritionSection = () => {
  return (
    <div className="bg-[#FFF8F3]">
      
  {/* Hero Section */}
<section className="py-12 px-4">
  <div className="max-w-[1100px] mx-auto">
    
    {/* Main Heading */}
    <h1 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-12">
      What makes us different<br />makes them stronger
    </h1>

    {/* Features Grid with Split Circle in Center */}
    <div className="rounded-lg p-6 md:p-8 mb-8">
      <div className="flex items-center justify-between gap-6">
        
        {/* Left Features */}
        <div className="flex-1 space-y-8 min-w-0">
          {/* Real Food */}
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z"/>
              </svg>
            </div>
            <div className="min-w-0">
              <h3 className="font-bold text-gray-900 mb-1 text-sm">Real Food</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Wholesome recipes for dogs with real meat and veggies.</p>
            </div>
          </div>

          {/* Premium Ingredient */}
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
              </svg>
            </div>
            <div className="min-w-0">
              <h3 className="font-bold text-gray-900 mb-1 text-sm">Premium Ingredient</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Elevating pet care with unmatched safety and quality.</p>
            </div>
          </div>
        </div>

        {/* Center - Split Bowl Image */}
<div className="flex-shrink-0">
  <div className="w-[280px] h-[280px] rounded-full overflow-hidden shadow-2xl border-4 border-white">
    <img 
      src="/Bowl_img.png"
      alt="Split dog food bowl - raw food and kibble"
      className="w-full h-full object-cover"
    />
  </div>
</div>

        {/* Right Features */}
        <div className="flex-1 space-y-8 min-w-0">
          {/* Made Fresh */}
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"/>
              </svg>
            </div>
            <div className="min-w-0">
              <h3 className="font-bold text-gray-900 mb-1 text-sm">Made Fresh</h3>
              <p className="text-xs text-gray-600 leading-relaxed">We prioritize maintaining the integrity of whole foods and nutrition.</p>
            </div>
          </div>

          {/* Vet Developed */}
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
              </svg>
            </div>
            <div className="min-w-0">
              <h3 className="font-bold text-gray-900 mb-1 text-sm">Vet Developed</h3>
              <p className="text-xs text-gray-600 leading-relaxed">We raise the bar for dog nutrition, surpassing industry expectations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* CTA Button */}
    <div className=" rounded-lg p-6 text-center">
      <button className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-semibold px-12 py-3 rounded-md transition-all shadow-md text-sm mb-3">
        Get your dog's healthy meal today!
      </button>
      <div className="flex items-center justify-center gap-3 flex-wrap text-xs">
        <div className="flex items-center gap-1">
          <span>🔒</span>
          <span className="text-gray-600">30-day money back guarantee</span>
        </div>
        <div className="flex items-center gap-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="h-5"/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-5"/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4"/>
        </div>
      </div>
    </div>
  </div>
</section>



      {/* Nutrition Foundation Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
              Nutrition is the foundation for longer, healthier lives in dogs.
            </h2>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              Invest in your dog's future with our scientifically formulated superfood blend that nourishes puppies, adults and senior dogs with all the nutrients they need to thrive in every stage of life. A diet that's rich in mega, nutrition that fuels a longer, healthier life.
            </p>

            {/* Key Points */}
            <div className="mb-6">
              <h3 className="font-bold text-gray-900 mb-3 text-sm">Key Points:</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-bold text-orange-500 leading-none">97%</span>
                  <p className="text-xs text-gray-700 pt-1">
                    Dogs choose we dog food over leading brands because of the real functional ingredients and safe home flavor.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-bold text-orange-500 leading-none">84%</span>
                  <p className="text-xs text-gray-700 pt-1">
                    Our dog food provides superior nutrition and a premium probiotics for cleaner and healthier products.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-bold text-orange-500 leading-none">92%</span>
                  <p className="text-xs text-gray-700 pt-1">
                    Our dog food provides superior nutrition and a premium probiotics to local every quality.
                  </p>
                </div>
              </div>
            </div>

            <button className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-semibold px-8 py-2.5 rounded-md transition-all shadow-md text-sm">
              What your Story breed top gift of wholesome nutrition
            </button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="bg-gradient-to-br to-white-900 rounded-xl p-6 shadow-2xl">
              <img 
                src="/Dog_bites.png"
                alt="Happy dog with food package"
                className="rounded-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gastrointestinal Health Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          
          {/* Left Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="/gif.gif"
              alt="Two dogs eating from bowls"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
              Improve overall gastrointestinal health for better nutrient absorption
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Through rigorous scientific studies and connections with researchers, we have created breakthrough function exclusively tailored to protect your dog's health while strengthening their immune system. Our customers have reported significant improvement in their dogs' vitro incorporated our product into their pets.
            </p>
          </div>
        </div>
      </section>

      {/* Prebiotics Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
              Prebiotics nourish the beneficial gut bacteria, supporting digestive health
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              We believe a living nutrition naturally, always present in real food, is the gateway for maintaining a balanced gut microbiome and peak health. The growth and maintenance of beneficial bacteria, ultimately supporting digestive wellness.
            </p>
          </div>

          {/* Right Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="/dog_food.jpg"
              alt="Dog food kibble close-up"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default NutritionSection;
