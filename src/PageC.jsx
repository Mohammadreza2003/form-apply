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
        </Page>
      </>
    );
};

export default PageC;