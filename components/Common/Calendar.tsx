"use client"
/* First make sure that you have installed the package */

  /* If you are using yarn */
  // yarn add @calcom/embed-react

  /* If you are using npm */
  // npm install @calcom/embed-react
  
  import { getCalApi } from "@calcom/embed-react";
  import { useEffect } from "react";
  export default function Calender({ text, className }: { text?: string, className?: string }) {
	useEffect(()=>{
	  (async function () {
		const cal = await getCalApi({"namespace":"15min"});
		cal("ui", {"styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":false,"layout":"month_view"});
	  })();
	}, [])
	return <button data-cal-namespace="15min"
	  data-cal-link="techkatalyst/30min"
    
	  data-cal-config='{"layout":"month_view"}'
      className={`lg:mt-12 bg-[#5A3AEC] hover:bg-[#9EE463] py-[14px] lg:py-5 px-10 text-white hover:text-[#5A3AEC] transition-all duration-300 rounded-sm text-[18px] text-center lg:text-lg xl:text-xl font-medium w-full lg:w-auto inline-block ${className}`}
	  >{text || 'Book a free call'}</button>;
  };
  