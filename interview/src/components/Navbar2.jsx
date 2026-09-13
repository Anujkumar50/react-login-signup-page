import { useEffect, useState } from "react";

function Navbar2() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
    <div>
    <nav
      className={`
        fixed z-50 top-0 left-1/2 -translate-x-1/2
         shadow-md
        transition-all duration-500
        ${scrollY > 300 ? "-translate-y-full" : ""}
        ${scrollY > 50 ? "w-[900px] rounded-2xl mt-4 bg-blue-50 font-size-10" : "w-full"}
      `}
    >
      <div className="flex justify-between items-center px-8 py-4">
        <h1 className="text-2xl font-bold text-black-600">
          Shape
        </h1>

        <ul className="flex gap-8">
          <li>Service</li>
      <li>Work</li>
      <li>About</li>
      <li>Blog</li>
      <li>Contact</li>
        </ul>
        <div className="hover:flex justify-between" style={{width:"150px"}}>
            <button className="border bg-green-400 px-1 rounded-2xl">Start a Project</button>
            <button className="w-[30px] bg-green-400 px-1 rounded-full">A</button>
        </div>
       
      </div>
    </nav>
     <div className="mt-39 relative size-32 ml-30 bg-White-200px "><h2 className="text-[44px] d-flex absolute top-0  size-130">
        <p className="bg-white-1500" style={{fontSize:"60px",fontWeight:"bold"}}>A web design and</p>
         <p className="rounded-2xl" style={{backgroundColor:"white", width:"600px", fontSize:"60px" , fontWeight:"bold"}}>
             branding  agency</p><p className="rounded-2xl" 
             style={{backgroundColor:"white", width:"450px " ,fontSize:"60px" , fontWeight:"bold"}}>in Manchester</p></h2>
    
     </div>

     <div style={{marginTop:"1px"} }>
            <video className="w-full h-[500px] object-cover rounded-2xl p-2"
        src="https://servd-made-byshape.b-cdn.net/production/uploads/videos/shape-showreel-2024_looping-v3.mp4"
    
        autoPlay
        muted
        playsInline
         loop
        width="1000px"
        height="300px"
      />
        </div>

     <div className="overflow-hidden w-full">
  <div className="flex gap-4 animate-[slide_20s_linear_infinite] w-max">

    {/* First set */}
    <img src="/img1.jpg" className="w-[300px] h-[200px] object-cover rounded-xl shrink-0" />
    <img src="/img2.jpg" className="w-[300px] h-[200px] object-cover rounded-xl shrink-0" />
    <img src="/img3.jpg" className="w-[300px] h-[200px] object-cover rounded-xl shrink-0" />
    <img src="/img4.jpg" className="w-[300px] h-[200px] object-cover rounded-xl shrink-0" /><img src="/img1.jpg" className="w-[300px] h-[200px] object-cover rounded-xl shrink-0" />
    <img src="/img2.jpg" className="w-[300px] h-[200px] object-cover rounded-xl shrink-0" />
    <img src="/img3.jpg" className="w-[300px] h-[200px] object-cover rounded-xl shrink-0" />
    <img src="/img4.jpg" className="w-[300px] h-[200px] object-cover rounded-xl shrink-0" />

   

  </div>
</div>

        <div className="w-full h-200"  > this is </div>




</div>

</>



  );
}

export default Navbar2;