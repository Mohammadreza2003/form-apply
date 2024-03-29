import Page from "./components/Page";
import React from "react";

const PageA = () => {
  return (
    <>
      <Page isInnerPage={false}>
        <div class="flex border-2 border-black items-center justify-between h-[80px] mb-1">
          <img
            src="../report/logo.jpg"
            class="w-18 h-16 ml-4 rounded mr-[5px]"
            alt="Company Logo"
          />
          <div class="flex flex-col justify-center ml-4">
            <p class="text-lg font-semibold mb-2">فرم انتخاب و استخدام</p>
          </div>
          <div class="flex items-center">
            <div class="bg-black text-white flex items-center justify-center w-[45px] h-[76px]">
              <p class="text-xl">A</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col border-2 border-black items-center  h-[5.14rem] mb-1">
          <div className="flex border-b-2 border-black self-start ml-[5.5rem] mb-2 rotate-90 text-xs mr-[-2rem] mt-[1.89rem]">
            مشخصات شغل
          </div>
          <div className="flex flex-col items-start gap-4">
            <div className="flex justify-start mt-[-3rem]">
              <p className="pl-[12rem] self-start">عنوان پست:</p>
              <p className="pl-[12rem] self-start">حوزه شغلی:</p>
              <p className="pl-[12rem] self-start">کد شغل:</p>
            </div>
            <div className="flex justify-start">
              <p className="pl-[12rem] self-start">حداقل تحصیلات:</p>
              <p className="pl-[12rem] self-start">رشته/گرایش:</p>
              <p className="pl-[12rem] self-start">حداقل سابقه:</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col border-2 border-black items-center  h-[5.14rem] mb-1">
          <div className="flex border-b-2 border-black self-start ml-[5.5rem] mb-2 rotate-90 text-xs mr-[-2rem] mt-[1.89rem]">
            مشخصات فردی
          </div>
          <div className="flex flex-col items-start gap-4 ">
            <div className="flex justify-start mt-[-3rem]">
              <p className="pl-[12rem]">نام:</p>
              <p className="pl-[12rem]">نام خانوادگی:</p>
              <p className="pl-[12rem]">کد ملی:</p>
            </div>
            <div className="flex justify-start ">
              <p className="pl-[12rem]">مقطع تحصیلی:</p>
              <p className="pl-[12rem]">رشته تحصیلی:</p>
              <p className="pl-[12rem]">سابقه:</p>
            </div>
          </div>
        </div>
        <div>
          <table className="w-[56.78rem]">
            <thead className="bg-neutral-400 border-2 border-black ">
              <tr>
                <th className="border-t-2 border-black border-b-2 border-black border-l-2 border-black">
                  شرایط احراز
                </th>
                <th className="border-2 border-black">حد پذیرش</th>
                <th className="border-2 border-black">وزن</th>
                <th className="border-2 border-black">ابزار سنجش</th>
                <div className="flex justify-center flex-col">
                  <th className="border-b border-black ">امتیاز نهایی</th>
                  <th className="border-b border-black ">
                    {" "}
                    امتیاز * | تفسیر **{" "}
                  </th>
                </div>
                <th className="border-2 border-black">وضعیت متقاضی</th>
                <th className="border-2 border-black">امتیاز نهایی **</th>
              </tr>
            </thead>
            <br />
            <tbody className="border-2 border-black ">
              <tr className="border-b-2 border-black border-t-2 border-black">
                <td className="border-r-2 border-black">پایه</td>
              </tr>
            </tbody>
            <tbody className="border-2 border-black ">
              <tr className="border-b-2 border-black border-t-2 border-black">
                <td className="border-r-2 border-black">تحصیلات</td>
                <td className="border-r-2 border-black">لیسانس</td>
                <td className="border-r-2  border-black">50</td>
                <td className="border-r-2 border-black">
                  مدارک و مستندات تحصیلی معتبر
                </td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2 border-black"></td>
              </tr>
            </tbody>
            <tbody className="border-2 border-black">
              <tr className="border-b-2 border-black ">
                <td className="border-r-2 border-black">سابقه(سال)</td>
                <td className="border-r-2 border-black">8</td>
                <td className="border-r-2 border-black">50</td>
                <td className="border-r-2 border-black">
                  مشاهده سوابق بمه و سوابق
                </td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2 border-black"></td>
              </tr>
            </tbody>
            <br />
            <tbody className="border-2 border-black ">
              <tr className="border-b-2 border-black border-t-2 border-black">
                <td className="border-r-2 border-black">
                  ویژگی های روانشناختی
                </td>
              </tr>
            </tbody>
            <tbody className="border-2 border-black">
              <tr className="border-b-2 border-black">
                <td className="border-r-2 border-black">ثبات هیجانی</td>
                <td className="border-r-2 border-black">77</td>
                <td className="border-r-2 border-black">10</td>
                <td className="border-r-2 border-black">NEOPIR</td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2 border-black"></td>
              </tr>
            </tbody>
            <tbody className="border-2 border-black">
              <tr className="border-b-2 border-black">
                <td className="border-r-2 border-black">برونگرایی</td>
                <td className="border-r-2 border-black">71</td>
                <td className="border-r-2 border-black">10</td>
                <td className="border-r-2 border-black">NEOPIR</td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2 border-black"></td>
              </tr>
            </tbody>
            <tbody className="border-2 border-black">
              <tr className="border-b-2 border-black">
                <td className="border-r-2 border-black">انعطاف پذیری</td>
                <td className="border-r-2 border-black">60</td>
                <td className="border-r-2 border-black">7</td>
                <td className="border-r-2 border-black">NEOPIR</td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2 border-black"></td>
              </tr>
            </tbody>
            <tbody className="border-2 border-black">
              <tr className="border-b-2 border-black">
                <td className="border-r-2 border-black">توافق پذیری </td>
                <td className="border-r-2 border-black">69</td>
                <td className="border-r-2 border-black">7</td>
                <td className="border-r-2 border-black">NEOPIR</td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2 border-black"></td>
              </tr>
            </tbody>
            <br />
            <tbody className="border-2 border-black ">
              <tr className="border-b-2 border-black border-t-2 border-black">
                <td className="border-r-2 border-black">مهارت های شغلی</td>
              </tr>
            </tbody>
            <tbody className="border-2 border-black">
              <tr className="border-b-2 border-black">
                <td className="border-r-2 border-black">مهارت های کامپیوتری</td>
                <td className="border-r-2 border-black">48</td>
                <td className="border-r-2 border-black">9</td>
                <td className="border-r-2 border-black">NEOPIR</td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2 border-black"></td>
              </tr>
            </tbody>
            <tbody className="border-2 border-black">
              <tr className="border-b-2 border-black">
                <td className="border-r-2 border-black">
                  مهارت های کیفیت و استانداردها
                </td>
                <td className="border-r-2 border-black">63</td>
                <td className="border-r-2 border-black">18</td>
                <td className="border-r-2 border-black">NEOPIR</td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2 border-black"></td>
              </tr>
            </tbody>
            <tbody className="border-2 border-black">
              <tr className="border-b-2 border-black">
                <td className="border-r-2 border-black">مهارت های انسانی </td>
                <td className="border-r-2 border-black">85</td>
                <td className="border-r-2 border-black">36</td>
                <td className="border-r-2 border-black">NEOPIR</td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2 border-black"></td>
              </tr>
            </tbody>
            <tbody className="border-2 border-black">
              <tr className="border-b-2 border-black">
                <td className="border-r-2 border-black">مهارتهای ادراکی </td>
                <td className="border-r-2 border-black">60</td>
                <td className="border-r-2 border-black">18</td>
                <td className="border-r-2 border-black">NEOPIR</td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2 border-black"></td>
              </tr>
            </tbody>
            <tbody className="border-2 border-black">
              <tr className="border-b-2 border-black">
                <td className="border-r-2 border-black">
                  مهارتهای فنی - تخصصی{" "}
                </td>
                <td className="border-r-2 border-black">63</td>
                <td className="border-r-2 border-black">18</td>
                <td className="border-r-2 border-black">NEOPIR</td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2 border-black"></td>
                <td className="border-r-2 border-black"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <tbody className=" ">
          <tr className="border-2 border-black ">
            <td className="border-2 border-black">جمعبندی</td>
          </tr>
        </tbody>
        <table className="w-[56.78rem]">
          <thead className="border-2 border-black ">
            <tr>
              <th className="border-2 border-black">
                امتیاز شرایط پایه ای(از100): .....
              </th>
              <th className="border-2 border-black">
                امتیاز روانشناختی (از100): .....
              </th>
              <th className="border-2 border-black">
                امتیاز مهارت شغلی(از100): .....
              </th>
            </tr>
          </thead>
          <tbody className="border-2 border-black h-[2rem] ">
            <tr>
              <td className="">**** امتیاز نهایی (از100):</td>
              <td className="">....</td>
              <td className="">رد O قبول O ذخیره O</td>
            </tr>
          </tbody>
        </table>

        <div className="flex  flex-col items-start justify-start self-start border-2 border-black mb-[0.25rem] mt-[0.25rem]  h-[19.12rem] ">
          <p className="mb-1 mr-[0.75rem] text-sm">
            *نمره ستون امتیاز در همه موارد به غیر از موارد زیر از ۱۰۰ می باشد.
          </p>
          <p className="mb-1 mr-[0.75rem] text-sm">
            -گونه شخصیتی عبارت چهار حرفی مبتنی بر آزمون ام بی تی ای می باشد.
          </p>
          <p className="mb-1 mr-[0.75rem] text-sm">
            -بهره هوشی مبتنی بر نتایج آزمون ریون از ۱۳۶ محاسبه می شود.
          </p>
          <p className="mb-1 mr-[0.75rem] text-sm">
            *تحصیلات و سابقه در صورتی که کاملا مرتبط و مناسب باشد ۸۰ تا ۱۰۰ :
            عدم ارتباط کامل ۰ تا ۲۰ در سایر موارد حالت بینایین در نظر گرفته می
            شود.
          </p>
          <p className="mb-1 mr-[0.75rem] text-sm">
            **تفسیر نتایج در قسمت آزمونها مبتنی بر نرم با هنجار آزمون بوده و در
            سایر موارد از ۲۰۰ خیلی ضعیف ۲۱-۴۰ ضعیف ۴۱-۶۰ متوسط ۶۱-۸۰ خوب ،
            ۸۱-۱۰۰
          </p>
          <p className="mb-1 mr-[1.70rem] text-sm">
            خیلی خوب در نظر گرفته می شود.
          </p>
          <p className="mb-1 mr-[0.75rem] text-sm">
            ***امتیاز نهایی در تحصیلات و سابقه بر اساس حاصل ضرب ستون امتیاز در
            وزن مربوطه تقسیم بر عدد ۱۰۰ محاسبه می شود.
          </p>
          <p className="mb-1 mr-[0.75rem] text-sm">
            ***امتیاز نهایی در گونه شخصیتی بر اساس تعداد حروف مشترک شغل و متقاضی
            تقسیم بر عدد ۴ ضربدر وزن تعیین می شود.
          </p>
          <p className="mb-1 mr-[0.75rem] text-sm">
            ***امتیاز نهایی در سایر موارد بر اساس نسبت امتیاز داوطلب به حدیدیرش
            شغل ضربدر ضریب وزنی مربوطه تعیین می گردد.
          </p>
          <p className="mr-[0.75rem] text-sm">
            ****حد نصاب نمره قبولی کسب امتیاز مصوب می باشد. (حدود ۹۰)
          </p>
        </div>
        <div>
          <table className="w-[56.78rem]">
            <thead className="border-2 border-black ">
              <tr>
                <th className="border-2 border-black w-[302px]">
                  مصاحبه کننده ها
                </th>
                <th className="border-2 border-black">
                  اداره کل توسعه منابع انسانی و پشتیبانی
                </th>
                <th className="border-2 border-black">
                  معاونت برنامه ریزی ،توسعه مدیریت و منابع
                </th>
              </tr>
            </thead>
            <tbody className="border-2 border-black h-[6rem] ">
              <tr>
                <td className="border-2 border-black">{""}</td>
                <td className="border-2 border-black">{""}</td>
                <td className="border-2 border-black">{""}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Page>
    </>
  );
};

export default PageA;
