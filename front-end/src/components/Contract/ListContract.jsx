import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaPencilAlt, FaUser } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import axios from "axios";
import moment from "moment";
import { formatCurrency } from "../../utils/format.js";
import logo from "../../assets/PPCLogo-128-128.png";
import {BsFillHouseAddFill} from "react-icons/bs";

const ListContract = () => {
  const [contract, setContract] = useState(null);
  const fetchContract = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/contract");
      if (data.success === true) {
        setContract(data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchContract().then();
  }, []);

  return (
    <div className="max-w-6xl mx-auto w-full">
      <div className="w-full min-h-0 border py-4 px-24 bg-[#E0F3FC]">
        <div className="grid grid-cols-3">
          <span className="text-xl font-bold">
            <img src={logo} alt="" />
          </span>
          <span className="text-2xl font-bold whitespace-nowrap">
            Xem danh sách hợp đồng
          </span>
          <div></div>
        </div>
        <div className="mt-3 grid grid-cols-4 gap-4">
          <div></div>
          <div className="px-2 flex justify-between items-center col-span-2 bg-white border border-black">
            <input
              type="text"
              className="w-full py-0.5 outline-none"
              placeholder="Nhập bất động sản cần tìm"
            />
            <IoSearch className="w-5 h-5" />
          </div>
          <Link to={"/add-contract"} className="w-full">
            <button className="flex flex-col justify-center items-center py-0.5 w-28 ">
              <BsFillHouseAddFill className="w-8 h-8" />
              <span className="whitespace-nowrap">Thêm mới</span>
            </button>
          </Link>
        </div>
        <div className="mt-3 w-full flex flex-col gap-y-4 items-center justify-center">
          {contract &&
            contract?.recordset?.map((item) => (
              <div
                key={item.id}
                className="w-full min-h-0 p-2 bg-[#6CC1F0] py-3 px-10 overflow-hidden"
              >
                <div className="grid grid-cols-5 gap-20">
                  <div className="col-span-1">
                    <div className="w-40 h-24">
                      <img
                        src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="col-span-3">
                    <div className="h-full flex justify-between items-center">
                      <div className="flex flex-col">
                        <span className="text-lg font-bold">
                          Mã hợp đồng: {item.Full_Contract_Code}
                        </span>
                        <span className="text-base">
                          Ngày tháng:{" "}
                          {moment(item.Date_Of_Contract).format(
                            "DD/MM/YYYY HH:mm:ss",
                          )}
                        </span>
                      </div>
                      <div className="flex flex-col item">
                        {item.Status === false ? (
                          <span className="text-base font-bold text-yellow-600">
                            Trạng thái đã cọc
                          </span>
                        ) : (
                          <span className="text-base font-bold text-green-600">
                            Trạng thái đã bán
                          </span>
                        )}
                        <span className="text-base">
                          {formatCurrency(item.Price)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 flex justify-center items-center w-full">
                    <div className="flex justify-center items-center gap-4">
                      <div className="flex flex-col justify-between items-center">
                        <FaUser className="w-8 h-8" />
                        <span className="text-sm">Thông tin</span>
                      </div>
                      <div className="flex flex-col justify-between items-center">
                        <FaRegTrashCan className="w-8 h-8 text-red-500" />
                        <span className="text-sm text-red-500">Xoá</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ListContract;
