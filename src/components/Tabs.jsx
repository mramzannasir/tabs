import { useState } from "react";
import classNames from "classnames";
import { AiFillCaretUp } from "react-icons/ai";
const DonationTabs = () => {
  const [activeMainTab, setActiveMainTab] = useState(0);
  const [activeSubTabMonthly, setActiveSubTabMonthly] = useState(0);
  const [activeSubTabOnce, setActiveSubTabOnce] = useState(0);

  const handleMainTabClick = (index) => {
    setActiveMainTab(index);
    setActiveSubTabMonthly(0);
    setActiveSubTabOnce(0);
  };

  const handleSubTabMonthlyClick = (index) => {
    setActiveSubTabMonthly(index);
  };

  const handleSubTabOnceClick = (index) => {
    setActiveSubTabOnce(index);
  };

  const monthlyMoneyQuantities = [
    10,
    40,
    75,
    100,
    "other amount",
    "Donate £40 today",
  ];
  const onceMoneyQuantities = [
    6,
    12,
    18,
    30,
    "other amount",
    "Donate £12 today",
  ];

  return (
    <>
      <div className="flex items-center gap-2 mt-16 font-medium">
        <div
          onClick={() => handleMainTabClick(0)}
          className={classNames(
            "py-2 px-4 duration-300 cursor-pointer bg-white border-t-2 border-l-2 border-r-2 border-gray-300",
            {
              "active-tab-parent border-white border-t-2 border-l-2 border-r-2":
                activeMainTab === 0,
            }
          )}
        >
          Donate Monthly
        </div>
        <div
          onClick={() => handleMainTabClick(1)}
          className={classNames(
            "py-2 px-4 duration-300 cursor-pointer bg-white border-t-2 border-l-2 border-r-2 border-gray-300",
            {
              "active-tab-parent border-white border-t-2 border-l-2 border-r-2":
                activeMainTab === 1,
            }
          )}
        >
          Donate Once
        </div>
      </div>
      <div className="w-[] border-gray-300  border-[1px] p-5">
        <h1 className="my-1 font-medium">I would like to donation of</h1>
        <div className="">
          {activeMainTab === 0 && (
            <div>
              <div className="grid md:flex grid-cols-2 md:justify-between md:grid-cols-6 gap-4 font-semibold mt-4">
                {monthlyMoneyQuantities.map((quantity, index) => (
                  <div
                    key={index}
                    onClick={() => handleSubTabMonthlyClick(index)}
                    className={classNames(
                      "py-2 px-5 cursor-pointer border mx-1 bg-[#eaedf4] border-gray-500",
                      {
                        "active-tab border border-[#009ca0] text-white":
                          activeSubTabMonthly === index,
                        "bg-[#fe9235] !border-[#fe9235]":
                          index === monthlyMoneyQuantities.length - 1,
                      }
                    )}
                  >
                    {index === monthlyMoneyQuantities.length - 1
                      ? ""
                      : "Donate £"}
                    {quantity}
                  </div>
                ))}
              </div>
              <div className="mt-4 bg-[#ffce9f] p-2 relative">
                <p>
                  Donate £ 40 could help answer an emergency call to our Animal
                  rescue line
                </p>
                <div className="absolute top-[-20px] text-[#ffce9f] right-16">
                  <AiFillCaretUp size={30} />
                </div>
              </div>
            </div>
          )}
          {activeMainTab === 1 && (
            <div>
              <div className="grid md:flex grid-cols-2 md:justify-between md:grid-cols-6 gap-4  mt-4 font-semibold">
                {onceMoneyQuantities.map((quantity, index) => (
                  <div
                    key={index}
                    onClick={() => handleSubTabOnceClick(index)}
                    className={classNames(
                      "py-2 px-5 cursor-pointer border mx-1 bg-[#eaedf4] border-gray-500",
                      {
                        "active-tab border border-[#009ca0] text-white":
                          activeSubTabOnce === index,
                        "bg-[#fe9235] !border-[#fe9235]":
                          index === onceMoneyQuantities.length - 1,
                      }
                    )}
                  >
                    {index === onceMoneyQuantities.length - 1 ? "" : "Donate £"}
                    {quantity}
                  </div>
                ))}
              </div>
              <div className="mt-4 bg-[#ffce9f] p-2 relative">
                <p>
                  £ 12 could help answer an emergency call to our Animal rescue
                  line
                </p>
                <div className="absolute top-[-20px] text-[#ffce9f] right-16">
                  <AiFillCaretUp size={30} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="w-full bg-[#eaedf4] flex justify-between items-center px-6 shadow-md h-[80px]">
        <div className="underline font-medium">i would like to pay</div>
        <div className="flex gap-3 items-center">
          <img className="w-[40px]" src="/image.png" alt="" />
          <img src="/mastercard-logo.png" alt="" />
          <img src="/paypal-logo.png" alt="" />
          <img src="/fund.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default DonationTabs;
