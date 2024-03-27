// About.js

import Image from 'next/image';

const ScsStory = () => {
  return (
    <>
      <div className='bg-white relative bottom-40'>
        <div className=''>
          {/* <div className='container relative min-h-[80vh] min-w-full'>
            <Image src="/aboutimage.jpg" fill={true} objectFit="cover" className='overflow-hidden' />
          </div> */}
          {/* <div className='absolute left-20 top-1/2 transform -translate-y-1/2 ml-8'>
            <h1 className='text-gray-600 text-4xl font-bold max-w-lg whitespace-pre-line'>
              “8.1 Million children are out of school" - Unicef
            </h1>
          </div> */}
        </div>
        <div className='container mx:auto text-center md:ml-16 lg:ml-56  max-w-screen-md '>
          <br />
          <h1 className='text-5xl text-gray-600 font-marker  lg:text-5xl lg:pl-96 '>Success Stories</h1>
          {/* <p className='mt-10 lg:mt-10'>8.1 million children need help to stay in school. These are the children whom education has passed by. These are the children whom we dream will, one day, all have access to schooling. Are these numbers daunting? Yes, perhaps. Yet, to us, transforming these numbers is what drives us each morning. Established in 2003 by cricket icon Kapil Dev, KHUSHII works tirelessly to keep children in school, through holistic interventions that impact the community. In just 19 years, KHUSHII has transformed the lives of over 1.5 million women and children.</p> */}
        </div>
        <div className='mt-10 pb-14 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 ml-4 xl:ml-44  '>
          <div className="max-w-sm md:w-1/3  h-fit rounded overflow-hidden shadow-lg">
            <Image
              src="/priya.jpg"
              alt="Sunset in the mountains"
              width={600}
              height={400}
              className="w-full h-[300px]"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Priya</div>
              <p className="text-gray-700 text-base">
              "Yogdaan helped provide school supplies for Priya's children. Now they have the resources they need to learn and build a brighter future for themselves."
              </p>
            </div>
          
          </div>

          <div className="max-w-sm md:w-1/3 rounded overflow-hidden shadow-lg h-fit">
            <Image
              src="/arun.jpg"
              alt="Sunset in the mountains"
              width={500}
              height={400}
              className="w-fit h-[300px]"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Arun</div>
              <p className="text-gray-700 text-base">
              {/* "After losing his job, Rajesh received essential support thanks to charity donations. This aid helped him get back on his feet and secure a new job to provide for his family." */}
              "Yogdaan covered Arun's school fees, opening the doors to education. Now, he has the opportunity to learn, grow, and reach his full potential."
              </p>
            </div>
          
          </div>

          <div className="max-w-sm md:w-1/3 rounded overflow-hidden shadow-lg h-fit">
            <Image
              src="/asha.jpg"
              alt="Sunset in the mountains"
              width={600}
              height={300}
              className="w-full h-[300px]"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Asha Devi</div>
              <p className="text-gray-700 text-base">
              "Yogdaan funded a well in Asha Devi's village, providing clean drinking water. This has significantly improved the health and well-being of her community."
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default ScsStory;
