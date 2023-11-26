import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import axios from "axios";
import logo from "../../assets/PPCLogo-128-128.png";

const AddContract = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { error },
  } = useForm();
  const navigate = useNavigate();

  const contractSubmit = async (values) => {
    console.log(values)
    const { data } = await axios.post(
        "http://localhost:5000/api/contract",
        values,
    );
    if (data.success === true) {
      alert("Thêm hợp đồng thành công");
      navigate('/list-contract')
    }
  };

  return (
    <div className="max-w-6xl mx-auto w-full">
      <div className="w-full min-h-0 border py-4 px-8 bg-[#E0F3FC]">
        <div className="grid grid-cols-3">
          <span className="text-xl font-bold">
            <img src={logo} alt="" />
          </span>
          <span className="text-2xl font-bold whitespace-nowrap">
            Thêm hợp đồng
          </span>
          <div></div>
        </div>
        <div className="mt-12 p-4 bg-[#e3e3e3] w-full grid grid-cols-12">
          <div className="col-span-12">
            <form
              onSubmit={handleSubmit(contractSubmit)}
              className="grid grid-cols-2 gap-4"
            >
              <div className="w-10/12 flex justify-between items-center">
                <span className="text-sm mr-2">Mã hợp đồng:</span>
                <input
                  readOnly
                  type="text"
                  className="border border-black pl-2 outline-none"
                  placeholder={"Hệ thống tự động nhập"}
                />
              </div>
              <div className="w-10/12 flex justify-between items-center">
                <span className="text-sm mr-2">Họ tên người mua:</span>
                <input
                  {...register("name")}
                  type="text"
                  className="border border-black pl-2 outline-none"
                />
              </div>
              <div className="w-10/12 flex justify-between items-center">
                <span className="text-sm mr-2">Ngày lập hợp đồng:</span>
                <input
                  {...register("contract_created_at")}
                  type="date"
                  className="border border-black pl-2 outline-none"
                />
              </div>
              <div className="w-10/12 flex justify-between items-center">
                <span className="text-sm mr-2">Sinh năm:</span>
                <input
                  {...register("date_of_birth")}
                  type="number"
                  className="border border-black pl-2 outline-none"
                />
              </div>
              <div className="w-10/12 flex justify-between items-center">
                <span className="text-sm mr-2">Giá trị hợp đồng:</span>
                <input
                  {...register("contract_price")}
                  type="number"
                  className="border border-black pl-2 outline-none"
                />
              </div>
              <div className="w-10/12 flex justify-between items-center">
                <span className="text-sm mr-2">CMND:</span>
                <input
                  {...register("id_card")}
                  type="text"
                  className="border border-black pl-2 outline-none"
                />
              </div>
              <div className="w-10/12 flex justify-between items-center">
                <span className="text-sm mr-2">Số tiền đã cọc:</span>
                <input
                  {...register("contract_deposit")}
                  type="number"
                  className="border border-black pl-2 outline-none"
                />
              </div>
              <div className="w-10/12 flex justify-between items-center">
                <span className="text-sm mr-2">Địa chỉ:</span>
                <input
                  {...register("address")}
                  type="text"
                  className="border border-black pl-2 outline-none"
                />
              </div>
              <div className="w-10/12 flex justify-between items-center">
                <span className="text-sm mr-2">Số tiền còn lại:</span>
                <input
                  {...register("contract_remaining")}
                  type="number"
                  className="border border-black pl-2 outline-none"
                />
              </div>
              <div className="w-10/12 flex justify-between items-center">
                <span className="text-sm mr-2">Số điện thoại:</span>
                <input
                  {...register("phone")}
                  type="text"
                  className="border border-black pl-2 outline-none"
                />
              </div>
              <div className="w-10/12 flex justify-between items-center">
                <span className="text-sm mr-2">Trạng thái</span>
                <input
                  {...register("contract_status")}
                  type="number"
                  className="border border-black pl-2 outline-none"
                />
              </div>
              <div className="col-span-2 mr-16 gap-x-4 flex justify-end items-center">
                <Link to={"/list-contract"}>
                  <button className="w-20 py-1 bg-red-500 text-white">
                    Quay về
                  </button>
                </Link>
                <button
                  type={"submit"}
                  className="w-20 py-1 bg-blue-500 text-white"
                >
                  Lưu
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddContract;
