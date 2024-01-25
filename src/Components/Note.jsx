import React from "react";
import StarRating from "./StarRating";

const Note = () => {
  return (
    <div className="w-[100vw] h-[100vh] top-[0] left-[0] right-[0] bottom-[0] fixed z-[1000]">
      <div className="w-[100vw] h-[100vh] top-[0] left-[0] right-[0] bottom-[0] fixed bg-[rgba(49,49,49,0.5)]"></div>
      <div className="w-[60%] text-center rounded-[14px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#F7E8D7] py-[40px] px-[40px] max-xl:!w-[80%]">
        <h1 className="text-[#000] font-[Montagu_Slab] text-[26px] font-medium uppercase">NOTEZ   --  MR RAYANE BAKHTI</h1>
        <StarRating />
        <form action="" className="flex flex-col gap-[20px]">
          <textarea className="resize-none outline-none border-[solid] border-[0.2px] border-[#000] placeholder-[#000] px-[20px] py-[20px] mx-[auto] w-[100%] h-[260px] text-[#000]" placeholder="Laisse  votre commentaire sur MR rayane Bakhti"></textarea>
          <input className="bg-[#197311] self-end	text-[#FFF] font-[Montagu_Slab] text-[16px] font-normal uppercase py-[8px] px-[20px] cursor-pointer" type="submit" value="Valider" />
        </form>
      </div>
    </div>
  );
};

export default Note;
