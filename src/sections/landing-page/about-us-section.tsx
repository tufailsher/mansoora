import LargeSectionHeader from '@/components/shared/large-section-header';
import SectionHeader from '@/components/shared/section-header'
import Image from 'next/image';

export const AboutUsSection = () => {
  const bodyText: String = 'Qamar Mahmood currently resides in Melbourne, Australia, where he practices homeopathy full-time. He is a board member of the Australian Register of Homoeopaths (AROH) and also a professional member of the Australian Homoeopathic Association.Qamar holds a B.Sc (Hons) in Homoeopathy from the University of Central Lancashire (2005), and has accreditations from the Royal Society of Health (UK) and the Society of Homeopaths (UK).';
  const drName: String = 'Qamar Mahmood';
  const title: String = '"Homoeopathy is supposed to work miracles"';
  return (
    
   <div className='w-full bg-custom-serviceCard2Color px-32 py-16 mt-20'>
    <div className='flex flex-row'>
      <div className='w-1/2'>
        
        {/* <div className=" rounded-es-aboutUsPix rounded-se-aboutUsPix border-dashed border-2  border-custom-buttonColor p-1"> */}
      <Image className='h-full rounded-es-aboutUsPix rounded-se-aboutUsPix border-dashed border-2  border-custom-buttonColor p-1' src='/images/qamar-pic.svg' width={500} height={100} alt='Dr Qamar'/>
      {/* </div> */}
      {/* <div className='h-full w-4 bg-blue-700 z-10 relative bottom-64 ml-64'></div> */}
      </div>
      <div className=' justify-start pl-16'>
     <SectionHeader title= '| About Us'/>
     <div className='pt-3'>
     <LargeSectionHeader title={title} />
     </div>
     <p className='py-10'>{bodyText}</p>
     <LargeSectionHeader title={drName} />
     <Image src='/images/signature.svg' width={200} height={200} alt='Signature' />
     </div>
   </div>
   </div>
  );
}
