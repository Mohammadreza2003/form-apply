import Page from "./components/Page";

import React from 'react';

const PageC = () => {
    return (
      <>
        <Page isInnerPage={false}>
          <div className="flex border-2 border-black items-center mb-[0.25rem] mt-[0.25rem]">
            <img
              src="../report/logo.jpg"
              className="w-18 h-16  ml-[262px] mr-[5px] mb-[5px]"
            />
            <p className="text-xm">فرم انتخاب و استخدام</p>
            <div className="bg-black text-white w-[3.25rem] h-[5rem] mr-[26.75rem] ">
              <p>C</p>
            </div>
          </div>
          <div className="flex flex-col  items-center w-[58.99rem] h-[5.14rem]">
            <div className="flex justify-start ">
              <p className="self-start pl-[12rem]">عنوان پست:</p>
              <p className="self-start pl-[12rem]">حوزه شغلی:</p>
              <p className="self-start pl-[12rem]">کد شغل:</p>
            </div>
            <br />
            <br />
            <div className="flex justify-start mt-[-2rem]">
              <p className="self-start pl-[12rem]">حداقل تحصیلات:</p>
              <p className="self-start pl-[12rem]">رشته/گرایش:</p>
              <p className="self-start pl-[12rem]">حداقل سابقه:</p>
            </div>
          </div>
          <table className=" border-2 border-black h-[8rem]">
            <thead className=" bg-neutral-400 border-b-2 border-black h-[3rem] ">
              <tr className="border-b-2 border-black ">
                <th className="border-r-2 border-black  rotate-90 h-[3rem}] ">
                  ابعاد
                </th>
                <th className="border-r-2  border-black">مولفه</th>
                <th className="border-r-2  border-black">شرح</th>
                <th className="border-r-2  border-black">
                  بسیار کمتر از انتظار
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b-2 border-black rotate-90  h-[3rem] ">
                  EVC
                </td>
                <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
                <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
                <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
                <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
                <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
                <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
                <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
                <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td className="border-b-2 border-black rotate-90  h-[3rem] ">
                  EVC
                </td>
                <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
                <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
                <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
                <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
                <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
                <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
                <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
                <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td className="border-b-2 border-black rotate-90  h-[3rem] ">
                  EVC
                </td>
                <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
                <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
                <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
                <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
                <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
                <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
                <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
                <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td className="border-b-2 border-black rotate-90  h-[3rem] ">
                  EVC
                </td>
                <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
                <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
                <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
                <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
                <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
                <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
                <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
                <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td className="border-b-2 border-black rotate-90  h-[3rem] ">
                  EVC
                </td>
                <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
                <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
                <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
                <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
                <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
                <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
                <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
                <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td className="border-b-2 border-black rotate-90  h-[3rem] ">
                  EVC
                </td>
                <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
                <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
                <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
                <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
                <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
                <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
                <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
                <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td className="border-b-2 border-black rotate-90  h-[3rem] ">
                  EVC
                </td>
                <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
                <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
                <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
                <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
                <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
                <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
                <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
                <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td className="border-b-2 border-black rotate-90  h-[3rem] ">
                  EVC
                </td>
                <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
                <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
                <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
                <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
                <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
                <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
                <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
                <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
              </tr>
            </tbody>
          </table>
        </Page>
      </>
    );
};

export default PageC;