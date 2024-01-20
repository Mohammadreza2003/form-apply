import './App.css'
import Page from './components/Page'

function App() {

  return (
    <>
      <Page isInnerPage={false}>
        <div className="flex border-2 border-black items-center">
          <img
            src="../report/logo.jpg"
            className="w-18 h-16  ml-[274px] mr-[5px] mb-[5px]"
          />
          <p>فرم انتخاب و استخدام</p>
          <div className="bg-black text-white w-[3.25rem] h-[5rem] mr-[23.75rem] ">
            <p>A</p>
          </div>
        </div>
        <div className="flex flex-col border-2 border-black items-center">
          <div className="flex border-b-2 border-black justify-center ml-[5.5rem] mb-2">
            مشخصات شغل
          </div>
          <div className="flex  items-center">
            <p className="mr-[2px] ml-[160px]">عنوان پست:</p>
            <p className="mr-[2px] ml-[160px]">حوزه شغلی:</p>
            <p className="mr-[2px] ml-[160px]">کد شغل:</p>
          </div>
          <div className="flex  items-center">
            <p className="mr-[2px] ml-[160px]">حداقل تحصیلات:</p>
            <p className="mr-[2px] ml-[160px]">رشته/گرایش:</p>
            <p className="mr-[2px] ml-[160px]">حداقل تجربه:</p>
          </div>
        </div>
        <div className="flex flex-col border-2 border-black items-center">
          <div className="flex border-b-2 border-black justify-center ml-[5.5rem] mb-2">
            مشخصات متقاضی
          </div>
          <div className="flex  items-center">
            <p className="mr-[2px] ml-[160px]">نام:</p>
            <p className="mr-[2px] ml-[160px]">نام خانوادگی:</p>
            <p className="mr-[2px] ml-[160px]">کد ملی:</p>
          </div>
          <div className="flex  items-center">
            <p className="mr-[2px] ml-[160px]">مقطع تحصیلی:</p>
            <p className="mr-[2px] ml-[160px]">رشته تحصیلی:</p>
            <p className="mr-[2px] ml-[160px]">سابقه:</p>
          </div>
        </div>
        <table className=" text-black  border-2 border-black border-collapse">
          <thead className="bg-neutral-400 ">
            <tr>
              <th className="border border-black">شرایط احراز</th>
              <th className="border border-black">حد پذیرش</th>
              <th className="border border-black">وزن</th>
              <th className="border border-black">ابزار سنجش</th>
              <th className="border border-black">امتیاز نهایی</th>
              <th className="border border-black">وضعیت متقاضی</th>
              <th className="border border-black">امتیاز نهایی</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black">سلام خوبی</td>
              <td className="border border-black">سلام خوبی</td>
              <td className="border border-black">سلام خوبی</td>
              <td className="border border-black">سلام خوبی</td>
              <td className="border border-black">سلام خوبی</td>
              <td className="border border-black">سلام خوبی</td>
              <td className="border border-black">سلام خوبی</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="border border-black">سلام خوبی</td>
              <td className="border border-black">سلام خوبی</td>
              <td className="border border-black">سلام خوبی</td>
              <td className="border border-black">سلام خوبی</td>
              <td className="border border-black">سلام خوبی</td>
              <td className="border border-black">سلام خوبی</td>
              <td className="border border-black">سلام خوبی</td>
            </tr>
          </tbody>
        </table>
      </Page>
      <Page isInnerPage={false}>B</Page>
      <Page isInnerPage={false}>C</Page>
      <Page isInnerPage={false}>D</Page>
    </>
  );
}

export default App
