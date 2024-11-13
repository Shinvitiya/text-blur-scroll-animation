import TextBlur from "@/components/TextBlur";

export default function Home() {
  return (
    <div className='bg-[#010101] '>
        <div className='h-screen  flex items-end justify-end md:px-10 px-2 py-10 font-semibold text-[#A6AEBF] text-4xl'>
          Scroll Down
        </div>
        <TextBlur />
        <div className='h-screen'/>
    </div>
  );
}
