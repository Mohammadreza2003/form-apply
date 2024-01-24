import React from "react";
import Page from "./components/Page";

const PageD = () => {
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
            <p class="text-lg font-semibold mb-2">
              فرم ارتقاء و جانشینی(کانون ارزیابی)
            </p>
          </div>
          <div class="flex items-center">
            <div class="bg-black text-white flex items-center justify-center w-[45px] h-[76px]">
              <p class="text-xl">D</p>
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
        <div className="flex border-2 border-black">
          <div className="">
            <p className="ml-[25px] mr-[3px] text-sm">ابزار ارزیابی:</p>
          </div>
          <div className="">
            <p className="ml-[25px] text-sm">مصاحبه فردی O</p>
          </div>
          <div className="">
            <p className="ml-[25px] text-sm">بحث گروهی O</p>
          </div>
          <div className="">
            <p className="ml-[25px] text-sm">ایفای نقش O</p>
          </div>
          <div className="">
            <p className="ml-[25px] text-sm">بازی مدیریتی O</p>
          </div>
          <div className="">
            <p className="ml-[25px] text-sm">کارتابل O</p>
          </div>
          <div className="">
            <p className="ml-[25px] text-sm">کشف اطلاعات O</p>
          </div>
          <div className="">
            <p className="text-sm">سایر O</p>
          </div>
        </div>
        <div className="border-2 border-black h-[35rem]">
          <table className="bg-neutral-400 flex border-b-2 border-black ">
            <thead>
              <th className="w-[24.9rem]">شواهد مثبت</th>
              <th className="w-[25.9rem] border-r-2 border-black">
                شواهد منفی
              </th>
              <th className="border-r-2 border-black">کد</th>
            </thead>
          </table>
        </div>

        <div class="">
          <table class="border-b-2 border-black w-[56.78rem]">
            <thead class="bg-neutral-400">
              <th class="border-r-2 border-black border-l-2 border-black w-[8rem]">
                شایستگی
              </th>
              <th class="border-l-2 border-black w-[-1rem]">کد</th>
              <th class="border-l-2 border-black">شرح</th>
              <th class="border-l-2 border-black">وزن</th>
              <th class="border-l-2 border-black">
                امتیاز کسب شده (۱= ضعیف ... ۱۰= خوب)
                
              </th>
            </thead>
            <tbody class="border-2 border-black">
              <tr class="border-b-2 border-black">
                <td class="border-l-2 border-black w-[3rem]">مسئولیت پذیری</td>
                <td class="border-l-2 border-black ">c1</td>
                <td class="border-l-2 border-black">استقبال از کار ها</td>
                <td class="border-l-2 border-black ">5</td>
              </tr>
            </tbody>
            <tbody class="border-2 border-black">
              <tr class="border-b-2 border-black">
                <td class="border-l-2 border-black w-[3rem]">مسئولیت پذیری</td>
                <td class="border-l-2 border-black ">c2</td>
                <td class="border-l-2 border-black">استقبال از کار ها</td>
                <td class="border-l-2 border-black ">5</td>
              </tr>
            </tbody>
            <tbody class="border-2 border-black">
              <tr class="border-b-2 border-black">
                <td class="border-l-2 border-black w-[3rem]">مسئولیت پذیری</td>
                <td class="border-l-2 border-black ">c3</td>
                <td class="border-l-2 border-black">استقبال از کار ها</td>
                <td class="border-l-2 border-black ">5</td>
              </tr>
            </tbody>
            <tbody class="border-2 border-black">
              <tr class="border-b-2 border-black">
                <td class="border-l-2 border-black w-[3rem]">مسئولیت پذیری</td>
                <td class="border-l-2 border-black ">c4</td>
                <td class="border-l-2 border-black">استقبال از کار ها</td>
                <td class="border-l-2 border-black ">5</td>
              </tr>
            </tbody>
            <tbody class="border-2 border-black">
              <tr class="border-b-2 border-black">
                <td class="border-l-2 border-black w-[3rem]">مسئولیت پذیری</td>
                <td class="border-l-2 border-black ">c5</td>
                <td class="border-l-2 border-black">استقبال از کار ها</td>
                <td class="border-l-2 border-black ">5</td>
              </tr>
            </tbody>
            <tbody class="border-2 border-black">
              <tr class="border-b-2 border-black">
                <td class="border-l-2 border-black w-[3rem]">مسئولیت پذیری</td>
                <td class="border-l-2 border-black ">c6</td>
                <td class="border-l-2 border-black">استقبال از کار ها</td>
                <td class="border-l-2 border-black ">5</td>
              </tr>
            </tbody>
            <tbody class="border-2 border-black">
              <tr class="border-b-2 border-black">
                <td class="border-l-2 border-black w-[3rem]">مسئولیت پذیری</td>
                <td class="border-l-2 border-black ">c7</td>
                <td class="border-l-2 border-black">استقبال از کار ها</td>
                <td class="border-l-2 border-black ">5</td>
              </tr>
            </tbody>
            <tbody class="border-2 border-black">
              <tr class="border-b-2 border-black">
                <td class="border-l-2 border-black w-[3rem]">مسئولیت پذیری</td>
                <td class="border-l-2 border-black ">c8</td>
                <td class="border-l-2 border-black">استقبال از کار ها</td>
                <td class="border-l-2 border-black ">5</td>
              </tr>
            </tbody>
            <tbody class="border-2 border-black">
              <tr class="border-b-2 border-black">
                <td class="border-l-2 border-black w-[3rem]">مسئولیت پذیری</td>
                <td class="border-l-2 border-black ">9</td>
                <td class="border-l-2 border-black">استقبال از کار ها</td>
                <td class="border-l-2 border-black ">5</td>
              </tr>
            </tbody>
            <tbody class="border-2 border-black">
              <tr class="border-b-2 border-black">
                <td class="border-l-2 border-black w-[3rem]">مسئولیت پذیری</td>
                <td class="border-l-2 border-black ">c10</td>
                <td class="border-l-2 border-black">استقبال از کار ها</td>
                <td class="border-l-2 border-black ">5</td>
              </tr>
            </tbody>
            <tbody class="border-2 border-black">
              <tr class="border-b-2 border-black">
                <td class="border-l-2 border-black w-[3rem]">مسئولیت پذیری</td>
                <td class="border-l-2 border-black ">c11</td>
                <td class="border-l-2 border-black">استقبال از کار ها</td>
                <td class="border-l-2 border-black ">5</td>
              </tr>
            </tbody>
            <tbody class="border-2 border-black">
              <tr class="border-b-2 border-black">
                <td class="border-l-2 border-black w-[3rem]">مسئولیت پذیری</td>
                <td class="border-l-2 border-black ">c12</td>
                <td class="border-l-2 border-black">استقبال از کار ها</td>
                <td class="border-l-2 border-black ">5</td>
              </tr>
            </tbody>
            <tbody class="border-2 border-black">
              <tr class="border-b-2 border-black">
                <td class="border-l-2 border-black w-[3rem]">مسئولیت پذیری</td>
                <td class="border-l-2 border-black ">c13</td>
                <td class="border-l-2 border-black">استقبال از کار ها</td>
                <td class="border-l-2 border-black ">5</td>
              </tr>
            </tbody>
            <tbody class="border-2 border-black">
              <tr class="border-b-2 border-black">
                <td class="border-l-2 border-black w-[3rem]">مسئولیت پذیری</td>
                <td class="border-l-2 border-black ">c14</td>
                <td class="border-l-2 border-black">استقبال از کار ها</td>
                <td class="border-l-2 border-black ">5</td>
              </tr>
            </tbody>
            <tbody class="border-2 border-black">
              <tr class="border-b-2 border-black">
                <td class="border-l-2 border-black w-[3rem]">مسئولیت پذیری</td>
                <td class="border-l-2 border-black ">c15</td>
                <td class="border-l-2 border-black">استقبال از کار ها</td>
                <td class="border-l-2 border-black ">5</td>
              </tr>
            </tbody>
          </table>
          <div className="flex border-2 border-black">
            <div className="flex border-l-2 border-black w-[38.3rem] h-[6rem] mr-[5px]">
              <p className=" justify-start">
               توصیه های فردی:
              </p>
            </div>

            <div className="mr-[5px]">
              <p className="text-start">ارزیاب:</p>
            </div>
          </div>
        </div>
      </Page>
    </>
  );
};

export default PageD;
