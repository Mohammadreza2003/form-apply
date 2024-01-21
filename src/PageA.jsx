import Page from "./components/Page";
import React from 'react';

const PageA = () => {
    return (
      <>
        <Page isInnerPage={false}>
          <div className="flex border-2 border-black items-center mb-[0.25rem] mt-[0.25rem]">
            <img
              src="../report/logo.jpg"
              className="w-18 h-16  ml-[274px] mr-[5px] mb-[5px]"
            />
            <p>فرم انتخاب و استخدام</p>
            <div className="bg-black text-white w-[3.25rem] h-[5rem] mr-[23.75rem] ">
              <p>A</p>
            </div>
          </div>
          <div className="flex flex-col border-2 border-black items-center w-[56.75rem] h-[6.12rem]">
            <div className="flex border-b-2 border-black self-start ml-[5.5rem] mb-2 rotate-90 text-xs mr-[-2rem] mt-[1.89rem]">
              مشخصات شغل
            </div>
          </div>
          <div className="flex flex-col border-2 border-black items-center mb-[0.25rem] mt-[0.25rem] w-[56.75rem] h-[6.12rem]">
            <div className="flex border-b-2 border-black  ml-[6rem] mb-2 rotate-90 self-start text-xs mr-[-2rem] mt-[2.3rem]">
              مشخصات متقاضی
            </div>
          </div>
          <table className=" text-black  border-2 border-black border-collapse w-[56.75rem]">
            <thead className="bg-neutral-400 ">
              <tr>
                <th className="border border-black">شرایط احراز</th>
                <th className="border border-black">حد پذیرش</th>
                <th className="border border-black">وزن</th>
                <th className="border border-black">ابزار سنجش</th>
                <div className="flex justify-center flex-col">
                  <th className="border-b border-black ">امتیاز نهایی</th>
                  <th className=""> امتیاز * | تفسیر ** </th>
                </div>
                <th className="border border-black">وضعیت متقاضی</th>
                <th className="border border-black">امتیاز نهایی **</th>
              </tr>
            </thead>
          </table>
          <div className="flex flex-col border-2 border-black items-center mb-[0.25rem] mt-[0.25rem] w-[56.75rem] h-[6.12rem]">
            <div className="flex border-b-2 border-black  ml-[6rem] mb-2 rotate-90 self-start text-xs mr-[-2rem] mt-[2.3rem]">
              پایه
            </div>
          </div>
          <div className="flex flex-col border-2 border-black items-center mb-[0.25rem] mt-[0.25rem] w-[56.75rem] h-[6.12rem]">
            <div className="flex border-b-2 border-black  ml-[6rem] mb-2 rotate-90 self-start text-xs mr-[-2rem] mt-[2.3rem]">
              ویژگی های روانشناختی
            </div>
          </div>
          <div className="flex flex-col border-2 border-black items-center mb-[0.25rem] mt-[0.25rem] w-[56.75rem] h-[6.12rem]">
            <div className="flex border-b-2 border-black  ml-[6rem] mb-2 rotate-90 self-start text-xs mr-[-2rem] mt-[2.3rem]">
              مهارت های شغلی
            </div>
          </div>
          <div className="flex flex-col border-2 border-black items-center mb-[0.25rem] mt-[0.25rem] w-[56.75rem] h-[6.12rem]">
            <div className="flex border-b-2 border-black  ml-[6rem] mb-2 rotate-90 self-start text-xs mr-[-2rem] mt-[2.3rem]">
              جمعبندی
            </div>
          </div>
          <div className="flex flex-col border-2 border-black items-center mb-[0.25rem] mt-[0.25rem] w-[56.75rem] h-[6.12rem]"></div>
          <div className="flex flex-col border-2 border-black items-center mb-[0.25rem] mt-[0.25rem] w-[56.75rem] h-[6.12rem]">
            <div className="flex border-b-2 border-black  ml-[6rem] mb-2 rotate-90 self-start text-xs mr-[-2rem] mt-[2.3rem]">
              محل امضاء
            </div>
          </div>
        </Page>
      </>
    );
};

export default PageA;