// About.js

import Image from 'next/image';

const About = () => {
  return (
    <>
      <div className='bg-gray-300'>
        <div className=''>
          <div className='container relative min-h-[80vh] min-w-full'>
            <Image src="/side.jpg" fill={true} objectFit="cover" className='overflow-hidden' />
          </div>
          {/* <div className='absolute left-20 top-1/2 transform -translate-y-1/2 ml-8'>
            <h1 className='text-gray-600 text-4xl font-bold max-w-lg whitespace-pre-line'>
              “8.1 Million children are out of school" - Unicef
            </h1>
          </div> */}
        </div>
        <div className="container mx-auto px-4 py-8">
  <div className="max-w-screen-md mx-auto text-center">
    <h1 className="text-5xl lg:text-6xl text-gray-600">WHO WE ARE</h1>
    <p className="mt-10 lg:mt-10 text-lg">Yogdaan is more than just a charity donation platform; its a beacon of hope and a catalyst for positive change. Founded on the principles of transparency, empathy, and community empowerment, we strive to connect passionate donors with impactful projects around the globe. At Yogdaan, we believe in the power of collective action and the transformative potential of small acts of kindness. Our platform offers a seamless and secure way for individuals to contribute to causes they care about deeply, knowing that their donations will directly benefit those in need. We are  not just facilitating transactions; we are building bridges between hearts and communities, fostering a sense of belonging and shared responsibility for a brighter future.</p>
  </div>
  <hr class="mx-auto my-8 w-32 border-t-2 border-gray-400" />
  <div className='mt-10 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 ml-4 md:ml-28  '>
          <div className="max-w-sm md:w-1/3  h-fit rounded overflow-hidden shadow-lg">
            <Image
              src="/card1.webp"
              alt="Sunset in the mountains"
              width={600}
              height={400}
              className="w-full h-[300px]"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Vision</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
                perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
          
          </div>

          <div className="max-w-sm md:w-1/3 rounded overflow-hidden shadow-lg h-fit">
            <Image
              src="/card2.jpg"
              alt="Sunset in the mountains"
              width={600}
              height={400}
              className="w-full h-[300px]"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Mission</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
                perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            
          </div>

          <div className="max-w-sm md:w-1/3 rounded overflow-hidden shadow-lg h-fit">
            <Image
              src="/back.jpg"
              alt="Sunset in the mountains"
              width={600}
              height={300}
              className="w-full h-[300px]"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Values</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
                perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
           
          </div>
          
        </div>
        <hr class="mx-auto my-8 w-32 border-t-2 border-gray-400" />
  <div className="max-w-screen-md mx-auto text-center">
    <h1 className="text-5xl lg:text-6xl text-gray-600">Our Strength is Our Team</h1>
    <p className="mt-10 lg:mt-10 text-lg">The team at Yogdaan is committed to creating change and breaking the cycle of poverty. They give tirelessly of their time, working around the clock and around the globe to provide our children with their best opportunities in life.</p>
  </div>
  
</div>

     
      </div>
    </>
  );
};

export default About;
