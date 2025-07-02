export default function AboutUsSection() {
  return (
    <section id="about-us" className="bg-gray-100 py-16 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-[#03071e] mb-6">About Us</h2>

        <p className="text-lg text-gray-700 mb-8 leading-relaxed ">
          At <span className="font-semibold text-green-600">Snapcycle</span>, we're on a mission to make recycling smarter, easier, and more rewarding.
          By combining technology and sustainability, we empower users to track their eco-contributions and earn points for returning empty product containers.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="bg-white p-6 rounded shadow max-w-sm  rounded-full h-60 w-60 align-items-center justify-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Who We Are</h3>
            <p className="text-gray-600">
              We’re a team of tech enthusiasts, designers, and changemakers passionate about creating tools that drive positive impact.
            </p>
          </div>

          <div className="bg-white p-6 rounded shadow max-w-sm rounded-full h-60 w-60 align-items-center justify-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Why Snapcycle</h3>
            <p className="text-gray-600">
              Recycling shouldn’t be boring. With Snapcycle, we make it fun, trackable, and rewarding—one scan at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
