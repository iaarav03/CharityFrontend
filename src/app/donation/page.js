// About.js

import Image from 'next/image';
import DonationForm from '../components/donationComp';

const Donation = () => {
  return (
    <div>
    <div className=' bg-white h-[20vh] container mx-auto flex justify-center items-center'>
  <h1 className="text-5xl md:text-6xl lg:text-6xl text-green-900 font-marker mt-20 ">
    Make <span className="text-green-500">The</span> Change
  </h1>
</div>
      <div className='bg-white md:flex md:flex-row'>
           
        <div className=''>
        
          <div className='container relative h-[70vh]  min-w-full  md:w-[50vw] lg:pl-24'>
          
            <Image src="/donation.jpeg" width={550} height={200} objectFit="cover" className='overflow-hidden ' />
          </div>
          <div className='min-w-96 absolute pb-20'>
          {/* <h1 className="text-6xl md:pl-96 text-center md:text-5xl lg:text-6xl text-green-900  font-marker h-20    ">Make <span className="text-green-500">The</span> Change</h1> */}
          </div>
         

        </div>
        {/* <div className='container mx:auto text-center md:ml-16 lg:ml-48  max-w-screen-md '> */}
          {/* <br />
          <h1 className='text-5xl text-gray-600  lg:text-6xl '>WHO WE ARE</h1>
          <p className='mt-10 lg:mt-10'>8.1 million children need help to stay in school. These are the children whom education has passed by. These are the children whom we dream will, one day, all have access to schooling. Are these numbers daunting? Yes, perhaps. Yet, to us, transforming these numbers is what drives us each morning. Established in 2003 by cricket icon Kapil Dev, KHUSHII works tirelessly to keep children in school, through holistic interventions that impact the community. In just 19 years, KHUSHII has transformed the lives of over 1.5 million women and children.</p> */}
        {/* </div>
         */}
       <DonationForm/>
       
       
      </div>
       
    </div>
  );
};

export default Donation;
