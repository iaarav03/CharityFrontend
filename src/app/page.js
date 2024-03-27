// Home.js
"use client"
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import BuyProduct from './components/razorpay/BuyProduct';
import App from './components/Carousel';
import ActiveSlider from './components/ActiveSlider';
import ScsStory from './components/ScsStory';
import { FaHandHoldingHeart, FaUserFriends, FaBuilding, FaHandshake, FaRubleSign, FaRupeeSign } from 'react-icons/fa';
import Testimonials from './components/Testimonials';


export default function Home() {

 const router=useRouter();
const handleSubmit=()=>{
      
       router.push('/donation')
}



  return (
   
    <> 
    
       <div>
      <div className='container bg-[#002147] relative h-[70vh] min-w-full'>
        {/* <Image src="/side.jpg" fill={true}  objectFit="cover" className='overflow-hidden '/> */}
       
      </div>
      {/* <div className='absolute lg:top-1/2 bottom-60  w-[300px] md:w-auto md:ml-32 transform -translate-y-1/2 ml-8'> */}
  {/* <h1 className='text-white text-3xl font-semibold max-w-lg whitespace-pre-line'>
    “Giving is not just about making a donation. It is about making a difference.”

  </h1> */}

 {/* <button onClick={handleSubmit} className="bg-gradient-to-r from-zinc-700 to-gray-900 hover:from-zinc-900 hover:to-stone-900 text-white font-bold py-2 px-4 rounded mt-4">
              Donate Now
            </button>  */}
            
{/* // </div> */}
<div className='container rounded-2xl flex flex-row bg-[#002147] mx-auto h-[65vh] w-[68vw] relative bottom-[20rem] hidden md:flex'>
  <div className='w-1/2'>
    <h1 className='font-semibold text-7xl text-white pl-10'>Fundraise for</h1>
    <h1 className='font-semibold text-7xl text-white pl-10'> a great Cause.</h1>
    <p className='text-white text-xl font-normal mt-6 pl-10'>Giving is not just about making a donation. It is about making a difference.</p>
    <button onClick={handleSubmit} className="bg-white ml-10 text-black hover:scale-105 font-bold py-2 px-4 rounded mt-4">
      Donate Now
    </button>
    <h1 className='font-sans text-4xl text-white text-center pt-6'>Raised so far</h1>
    <h1 className='text-3xl text-white text-center'>$12,95,66,309</h1>
  </div>
  <div className='w-1/2'>
    {/* Ensure you have imported Image properly if you're using Next.js as shown in the initial example */}
    <Image src="/donation2.jpg" objectFit="cover" width={600} height={100} className="h-[65vh] lg:w-[50vw]" />
  </div>
</div>




 <div className='md:hidden container bg-[#002147] mx-auto h-[70vh] lg:h-[80vh] w-[80vw] md:w-[50vw] relative bottom-[22rem]  ' >
 <div className=' text-center '>
         
        <Image src="/donation2.jpg"   objectFit="cover"  width={600}
              height={100}
              className=" h-[40vh] lg:h-[70vh] w-[80vw] lg:w-[50vw]"/>
              <h1 className='font-semibold text-2xl text-white'>Giving is not just about making donation.</h1>
              <h1 className='font-semibold text-2xl text-white'>It is about  </h1>
              <h1 className='font-semibold text-2xl text-white'>making a difference. </h1>
              <button onClick={handleSubmit} className=" bg-white text-black font-bold py-2 px-4 rounded mt-4">
              Donate Now
            </button> 
 </div>
 
 </div>

      </div>
       {/* <div className='bg-slate-400'>
    <App/>
     </div> */}
      
     <div>
      
      <ScsStory/>
     </div>
     <div className="flex justify-center items-center h-[60vh] bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold  mb-4">India’s most trusted online donation platform</h1>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <FaHandHoldingHeart className="text-6xl text-blue-500 mb-2 mx-auto" />
            <p className="text-lg">2.7M+ Donors</p>
          </div>
          <div>
            <FaUserFriends className="text-6xl text-green-500 mb-2 mx-auto" />
            <p className="text-lg">15M+ Lives Impacted</p>
          </div>
          <div>
            <FaBuilding className="text-6xl text-yellow-500 mb-2 mx-auto" />
            <p className="text-lg">3000+ Verified Non Profits</p>
          </div>
          <div>
            <FaHandshake className="text-6xl text-purple-500 mb-2 mx-auto" />
            <p className="text-lg">300+ Corporate Partners</p>
          </div>
        </div>
      </div>
    </div>
    <Testimonials/>
 
  </>
  );
}
