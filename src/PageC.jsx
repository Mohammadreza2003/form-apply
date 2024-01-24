import Page from "./components/Page";

import React from "react";

const PageC = () => {
  return (
    <>
      <Page isInnerPage={false}>
        <div class="flex border-2 border-black items-center justify-between h-[80px]">
          <img
            src="../report/logo.jpg"
            class="w-18 h-16 ml-4 rounded mr-[5px]"
            alt="Company Logo"
          />
          <div class="flex flex-col justify-center ml-4">
            <p class="text-lg font-semibold mb-2">فرم ارزیابی عملکرد کارکنان</p>
          </div>
          <div class="flex items-center">
            <div class="bg-black text-white flex items-center justify-center w-[45px] h-[76px]">
              <p class="text-xl">C</p>
            </div>
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
        <table className=" border-2 border-black h-[8rem] w-[56.78rem]">
          <thead className=" bg-neutral-400 border-b-2 border-black h-[3rem] ">
            <tr className="border-b-2 border-black ">
              <th className="border-r-2 border-black  rotate-90 h-[3rem}] ">
                ابعاد
              </th>
              <th className="border-r-2  border-black w-[14rem] h-[4rem]">
                مولفه
              </th>
              <th className="border-r-2  border-black w-[19rem] h-[6rem]">
                شرح
              </th>
              <th className="border-r-2  border-black border-l-2  border-black w-[2rem] h-[6rem]">
                وزن (نسبی)
              </th>
              <div className="flex justify-center self-center items-center border-b-2 border-black">
                <th className="bt-10 text-[0.90rem]  ">
                  برنامه های آموزشی اجرا شده
                </th>
              </div>
              <div className="flex justify-center self-center items-center">
                <thead className="bg-neutral-400  ">
                  <tr>
                    <th className="border-l-2 border-black text-[0.90rem]">
                      بسیار کمتر از حد انتضار
                    </th>
                    <th className="border-l-2 border-black  text-[0.90rem]">
                      کمتر از حد انتضار
                    </th>
                    <th className=" border-l-2 border-black text-[0.90rem]">
                      در حد انتضار
                    </th>
                    <th className=" border-l-2 border-black text-[0.90rem]">
                      بیشتر از حد انتضار
                    </th>
                    <th className="text-[0.90rem]">بسیار فراتر از حد انتضار</th>
                  </tr>
                </thead>
              </div>
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
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="border-b-2 border-black rotate-90  h-[3rem] ">
                P
              </td>
              <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
              <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
              <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
              <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="border-b-2 border-black rotate-90  h-[3rem] ">
                P
              </td>
              <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
              <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
              <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
              <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="border-b-2 border-black rotate-90  h-[3rem] ">
                P
              </td>
              <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
              <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
              <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
              <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="border-b-2 border-black rotate-90  h-[3rem] ">
                P
              </td>
              <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
              <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
              <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
              <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="border-b-2 border-black rotate-90  h-[3rem] ">
                P
              </td>
              <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
              <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
              <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
              <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="border-b-2 border-black rotate-90  h-[3rem] ">
                P
              </td>
              <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
              <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
              <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
              <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="border-b-2 border-black rotate-90  h-[3rem] ">
                P
              </td>
              <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
              <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
              <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
              <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="border-b-2 border-black rotate-90  h-[3rem] ">
                P
              </td>
              <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
              <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
              <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
              <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="border-b-2 border-black rotate-90  h-[3rem] ">
                KSA
              </td>
              <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
              <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
              <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
              <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="border-b-2 border-black rotate-90  h-[3rem] ">
                KSA
              </td>
              <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
              <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
              <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
              <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="border-b-2 border-black rotate-90  h-[3rem] ">
                KSA
              </td>
              <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
              <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
              <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
              <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="border-b-2 border-black rotate-90  h-[3rem] ">
                KSA
              </td>
              <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
              <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
              <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
              <td className="border-r-2 border-black border-b-2 border-black h-[3rem]"></td>
            </tr>
          </tbody>
        </table>
        <div className="flex border-2 border-black">
          <div className="flex border-l-2 border-black w-[38.3rem] h-[6rem] mr-[5px]">
            <p className=" justify-start">
              *برای محاسبه امتیاز نهایی عدد مربوط به گزینه انتخاب شده را به وزن
              مربوطه ضرب کرده ،اعداد بدست آمده را جمع نمایید.
            </p>
          </div>

          <div className="mr-[5px]">
            <p className="text-start">محل امضای ارزیابی کننده:</p>
          </div>
        </div>
      </Page>
    </>
  );
};

export default PageC;
