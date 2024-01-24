import Page from "./components/Page";
import React from "react";

const PageB = () => {
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
            <p class="text-lg font-semibold mb-2">فرم آموزش و بهسازی کارکنان</p>
          </div>
          <div class="flex items-center">
            <div class="bg-black text-white flex items-center justify-center w-[45px] h-[76px]">
              <p class="text-xl">B</p>
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

        <div>
          <table className="w-[56.78rem]">
            <thead className="bg-neutral-400 border-2 border-black ">
              <tr>
                <th className="border-2 border-black text-[0.90rem]">
                  دانش ، مهارت و توانمندی های مورد نیاز
                </th>
                <th className="border-2 border-black text-[0.90rem]">
                  الویت **
                </th>
                <th className="border-2 border-black text-[0.90rem]">
                  وضعیت شاغل *
                </th>
                <div className="flex justify-center self-center items-center border-b-2 border-black">
                  <th className="bt-10 text-[0.90rem]  ">
                    برنامه های آموزشی اجرا شده
                  </th>
                </div>
                <div className="flex justify-center self-center items-center">
                  <thead className="bg-neutral-400  ">
                    <tr>
                      <th className="  text-[0.90rem]">عنوان برنامه</th>
                      <th className="border-l-2 border-black  text-[0.90rem]">
                         مدت 
                      </th>
                      <th className=" border-l-2 border-black text-[0.90rem]">
                        تاریخ
                      </th>
                      <th className="  text-[0.90rem]">محل دوره </th>
                    </tr>
                  </thead>
                </div>
              </tr>
            </thead>
            <tbody className="border-2 border-black mr-[24px]">
              <tr className="border-b-2 border-black border-t-2 border-black">
                <td className="border-r-2 border-black text[0]">فرم کاریابی</td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2  border-black"></td>
                <td className="border-r-2 border-black"></td>
              </tr>
            </tbody>
            <tbody className="border-2 border-black mr-[24px]">
              <tr className="border-b-2 border-black border-t-2 border-black">
                <td className="border-r-2 border-black text[0]">فرم کاریابی</td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2  border-black"></td>
                <td className="border-r-2 border-black"></td>
              </tr>
            </tbody>
            <tbody className="border-2 border-black mr-[24px]">
              <tr className="border-b-2 border-black border-t-2 border-black">
                <td className="border-r-2 border-black text[0]">فرم کاریابی</td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2  border-black"></td>
                <td className="border-r-2 border-black"></td>
              </tr>
            </tbody>
            <tbody className="border-2 border-black mr-[24px]">
              <tr className="border-b-2 border-black border-t-2 border-black">
                <td className="border-r-2 border-black text[0]">فرم کاریابی</td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2  border-black"></td>
                <td className="border-r-2 border-black"></td>
              </tr>
            </tbody>
            <tbody className="border-2 border-black mr-[24px]">
              <tr className="border-b-2 border-black border-t-2 border-black">
                <td className="border-r-2 border-black text[0]">فرم کاریابی</td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2  border-black"></td>
                <td className="border-r-2 border-black"></td>
              </tr>
            </tbody>
            <tbody className="border-2 border-black mr-[24px]">
              <tr className="border-b-2 border-black border-t-2 border-black">
                <td className="border-r-2 border-black">فرم کاریابی</td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2  border-black"></td>
              </tr>
            </tbody>
            <tbody className="border-2 border-black mr-[24px]">
              <tr className="border-b-2 border-black border-t-2 border-black">
                <td className="border-r-2 border-black">فرم کاریابی</td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2  border-black"></td>
                <td className="border-r-2 border-black"></td>
              </tr>
            </tbody>
            <tbody className="border-2 border-black mr-[24px]">
              <tr className="border-b-2 border-black border-t-2 border-black">
                <td className="border-r-2 border-black">فرم کاریابی</td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2  border-black"></td>
                <td className="border-r-2 border-black"></td>
              </tr>
            </tbody>
            <tbody className="border-2 border-black mr-[24px]">
              <tr className="border-b-2 border-black border-t-2 border-black">
                <td className="border-r-2 border-black">فرم کاریابی</td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2  border-black"></td>
                <td className="border-r-2 border-black"></td>
              </tr>
            </tbody>
            <tbody className="border-2 border-black mr-[24px]">
              <tr className="border-b-2 border-black border-t-2 border-black">
                <td className="border-r-2 border-black">فرم کاریابی</td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2  border-black"></td>
                <td className="border-r-2 border-black"></td>
              </tr>
            </tbody>
            <tbody className="border-2 border-black mr-[24px]">
              <tr className="border-b-2 border-black border-t-2 border-black">
                <td className="border-r-2 border-black">فرم کاریابی</td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2  border-black"></td>
                <td className="border-r-2 border-black"></td>
              </tr>
            </tbody>
            <tbody className="border-2 border-black mr-[24px]">
              <tr className="border-b-2 border-black border-t-2 border-black">
                <td className="border-r-2 border-black">فرم کاریابی</td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2  border-black"></td>
                <td className="border-r-2 border-black"></td>
              </tr>
            </tbody>
            <tbody className="border-2 border-black mr-[24px]">
              <tr className="border-b-2 border-black border-t-2 border-black">
                <td className="border-r-2 border-black">فرم کاریابی</td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2  border-black"></td>
                <td className="border-r-2 border-black"></td>
              </tr>
            </tbody>
            <tbody className="border-2 border-black mr-[24px]">
              <tr className="border-b-2 border-black border-t-2 border-black">
                <td className="border-r-2 border-black">فرم کاریابی</td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2  border-black"></td>
                <td className="border-r-2 border-black"></td>
              </tr>
            </tbody>
            <tbody className="border-2 border-black mr-[24px]">
              <tr className="border-b-2 border-black border-t-2 border-black">
                <td className="border-r-2 border-black">فرم کاریابی</td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2  border-black"></td>
                <td className="border-r-2 border-black"></td>
              </tr>
            </tbody>
            <tbody className="border-2 border-black mr-[24px]">
              <tr className="border-b-2 border-black border-t-2 border-black">
                <td className="border-r-2 border-black">فرم کاریابی</td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2  border-black"></td>
                <td className="border-r-2 border-black"></td>
              </tr>
            </tbody>
            <tbody className="border-2 border-black mr-[24px]">
              <tr className="border-b-2 border-black border-t-2 border-black">
                <td className="border-r-2 border-black">فرم کاریابی</td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2  border-black"></td>
              </tr>
            </tbody>
            <tbody className="border-2 border-black mr-[24px]">
              <tr className="border-b-2 border-black border-t-2 border-black">
                <td className="border-r-2 border-black">فرم کاریابی</td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2  border-black"></td>
              </tr>
            </tbody>
            <tbody className="border-2 border-black mr-[24px]">
              <tr className="border-b-2 border-black border-t-2 border-black">
                <td className="border-r-2 border-black">فرم کاریابی</td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2  border-black"></td>
              </tr>
            </tbody>
            <tbody className="border-2 border-black mr-[24px]">
              <tr className="border-b-2 border-black border-t-2 border-black">
                <td className="border-r-2 border-black">فرم کاریابی</td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2  border-black"></td>
              </tr>
            </tbody>
            <tbody className="border-2 border-black mr-[24px]">
              <tr className="border-b-2 border-black border-t-2 border-black">
                <td className="border-r-2 border-black">فرم کاریابی</td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2  border-black"></td>
              </tr>
            </tbody>
            <tbody className="border-2 border-black mr-[24px]">
              <tr className="border-b-2 border-black border-t-2 border-black">
                <td className="border-r-2 border-black">فرم کاریابی</td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2  border-black"></td>
              </tr>
            </tbody>
            <tbody className="border-2 border-black mr-[24px]">
              <tr className="border-b-2 border-black border-t-2 border-black">
                <td className="border-r-2 border-black">فرم کاریابی</td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2  border-black"></td>
              </tr>
            </tbody>
            <tbody className="border-2 border-black mr-[24px]">
              <tr className="border-b-2 border-black border-t-2 border-black">
                <td className="border-r-2 border-black">فرم کاریابی</td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2  border-black"></td>
                <td className="border-r-2 border-black"></td>
              </tr>
            </tbody>
            <tbody className="border-2 border-black mr-[24px]">
              <tr className="border-b-2 border-black border-t-2 border-black">
                <td className="border-r-2 border-black">فرم کاریابی</td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2  border-black"></td>
              </tr>
            </tbody>
            <tbody className="border-2 border-black mr-[24px]">
              <tr className="border-b-2 border-black border-t-2 border-black">
                <td className="border-r-2 border-black">فرم کاریابی</td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2  border-black"></td>
              </tr>
            </tbody>
            <tbody className="border-2 border-black mr-[24px]">
              <tr className="border-b-2 border-black border-t-2 border-black">
                <td className="border-r-2 border-black">فرم کاریابی</td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2  border-black"></td>
              </tr>
            </tbody>
            <tbody className="border-2 border-black mr-[24px]">
              <tr className="border-b-2 border-black border-t-2 border-black">
                <td className="border-r-2 border-black">فرم کاریابی</td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2  border-black"></td>
                <td className="border-r-2 border-black"></td>
              </tr>
            </tbody>
            <tbody className="border-2 border-black mr-[24px]">
              <tr className="border-b-2 border-black border-t-2 border-black">
                <td className="border-r-2 border-black h-7">{""}</td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2  border-black"></td>
              </tr>
            </tbody>
            <tbody className="border-2 border-black mr-[24px]">
              <tr className="border-b-2 border-black border-t-2 border-black">
                <td className="border-r-2 border-black h-7">{""}</td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2  border-black"></td>
              </tr>
            </tbody>
            <tbody className="border-2 border-black mr-[24px]">
              <tr className="border-b-2 border-black border-t-2 border-black">
                <td className="border-r-2 border-black h-7">{""}</td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2  border-black"></td>
              </tr>
            </tbody>
            <tbody className="border-2 border-black mr-[24px]">
              <tr className="border-b-2 border-black border-t-2 border-black">
                <td className="border-r-2 border-black h-7">{""}</td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2  border-black"></td>
              </tr>
            </tbody>
            <tbody className="border-2 border-black mr-[24px]">
              <tr className="border-b-2 border-black border-t-2 border-black">
                <td className="border-r-2 border-black h-7">{""}</td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2  border-black"></td>
              </tr>
            </tbody>
            <tbody className="border-2 border-black mr-[24px]">
              <tr className="border-b-2 border-black border-t-2 border-black">
                <td className="border-r-2 border-black h-7">{""}</td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2  border-black"></td>
                <td className="border-r-2 border-black"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex  flex-col items-start justify-start self-start border-2 border-black mb-[0.25rem]   h-[8rem]">
          <p className="mb-1 mr-[0.75rem] text-sm">*وضعیت شاغل:</p>
          <p className="mb-1 mr-[0.75rem] text-sm">
            - اگر چنانچه فرد قبلا برنامه آموزشی مرتبط را گذرانده در این ستون عدد
            (۱) را قرار داده و عنوان و تاریخ برنامه آموزشی را در ستون مربوطه فرد
            نمایید .
          </p>
          <p className="mb-1 mr-[0.75rem] text-sm">
            - اگر چنانچه فرد با توجه به سوابق تحصیلی و تجربی خود این قابلیت را
            کسب . کرده و نیاز به آموزش ندارد عدد (۲) را قرار دهید.
          </p>
          <p className="mb-1 mr-[0.75rem] text-sm">
            - اگر چنانچه فرد نیاز به این دوره دارد و بایستی برنامه آموزشی لازم
            برگزار شود عدد (۳) را قرار داده و برنامه ریزی لازم جهت اجرای دوره ها
            را فراهم نمایید.
          </p>
          <p className="mb-1 mr-[0.75rem] text-sm">
            * درجه اولویت (۱) بیانگر بیشترین حد نیاز بوده و سایر موارد در اولویت
            های بعدی قرار دارند.
          </p>
        </div>
      </Page>
    </>
  );
};

export default PageB;
