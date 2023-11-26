import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import logo from "../../assets/PPCLogo-128-128.png";

const AddProperty = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { error },
  } = useForm();
  const navigate = useNavigate();
  const propertySubmit = async (values) => {
    const { data } = await axios.post(
      "http://localhost:5000/api/property",
      values,
    );
    if (data.success === true) {
      alert("Thêm bất động sản thành công");
      navigate("/")
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
            Thêm bất động sản
          </span>
          <div></div>
        </div>
        <div className="mt-12 p-4 bg-[#e3e3e3] w-full grid grid-cols-12">
          <div className="col-span-3 flex flex-col justify-between items-center gap-y-5">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32">
                <img src="" alt="" className="w-full h-full object-cover" />
              </div>
              <span className="mt-3 text-sm">Hình đại diện</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-32 h-32">
                <img src="" alt="" className="w-full h-full object-cover" />
              </div>
              <span className="mt-3 text-sm">Hình ảnh khác</span>
            </div>
          </div>
          <div className="col-span-9">
            <form
              onSubmit={handleSubmit(propertySubmit)}
              className="grid grid-cols-2 gap-4"
            >
              <div className="w-10/12 flex justify-between items-center">
                <span className="text-sm mr-2">Mã bất động sản:</span>
                <input
                  readOnly
                  type="text"
                  className="border border-black pl-2 outline-none"
                  placeholder={"Hệ thống tự động nhập"}
                />
              </div>
              <div className="w-10/12 flex justify-between items-center">
                <span className="text-sm mr-2">Tên bất động sản:</span>
                <input
                  {...register("property_name")}
                  type="text"
                  className="border border-black pl-2 outline-none"
                />
              </div>
              <div className="w-10/12 flex justify-between items-center">
                <span className="text-sm mr-2">Loại bất động sản:</span>
                <input
                  {...register("property_type")}
                  type="number"
                  className="border border-black pl-2 outline-none"
                />
              </div>
              <div className="w-10/12 flex justify-between items-center">
                <span className="text-sm mr-2">Tỉnh/Thành:</span>
                <input
                  {...register("property_province")}
                  type="text"
                  className="border border-black pl-2 outline-none"
                />
              </div>
              <div className="w-10/12 flex justify-between items-center">
                <span className="text-sm mr-2">Địa chỉ:</span>
                <input
                  {...register("property_address")}
                  type="text"
                  className="border border-black pl-2 outline-none"
                />
              </div>
              <div className="w-10/12 flex justify-between items-center">
                <span className="text-sm mr-2">Quận/Huyện:</span>
                <input
                  {...register("property_district")}
                  type="number"
                  className="border border-black pl-2 outline-none"
                />
              </div>
              <div className="w-10/12 flex justify-between items-center">
                <span className="text-sm mr-2">Diện tích:</span>
                <input
                  {...register("property_area")}
                  type="number"
                  className="border border-black pl-2 outline-none"
                />
              </div>
              <div className="w-10/12 flex justify-between items-center">
                <span className="text-sm mr-2">SL phòng ngủ:</span>
                <input
                  {...register("property_bed_room")}
                  type="number"
                  className="border border-black pl-2 outline-none"
                />
              </div>
              <div className="w-10/12 flex justify-between items-center">
                <span className="text-sm mr-2">SL phòng tắm:</span>
                <input
                  {...register("property_bath_room")}
                  type="number"
                  className="border border-black pl-2 outline-none"
                />
              </div>
              <div className="w-10/12 flex justify-between items-center">
                <span className="text-sm mr-2">Dịch vụ:</span>
                <input
                  type="text"
                  className="border border-black pl-2 outline-none"
                />
              </div>
              <div className="w-10/12 flex justify-between items-center">
                <span className="text-sm mr-2">Giá bán:</span>
                <input
                  {...register("property_price")}
                  type="number"
                  className="border border-black pl-2 outline-none"
                />
              </div>
              <div className="w-10/12 flex justify-between items-center">
                <span className="text-sm mr-2">Lãi suất trả góp:</span>
                <input
                  type="text"
                  className="border border-black pl-2 outline-none"
                />
              </div>
              <div className="w-10/12 flex justify-between items-center">
                <span className="text-sm mr-2">Trạng thái</span>
                <input
                  {...register("property_status")}
                  type="number"
                  className="border border-black pl-2 outline-none"
                />
              </div>
              <div className="w-10/12 flex justify-between items-center">
                <span className="text-sm mr-2">Mô tả:</span>
                <textarea
                  {...register("property_description")}
                  className="border border-black outline-none"
                />
              </div>
              <div className="col-span-2 mr-16 gap-x-4 flex justify-end items-center">
                <Link to={"/"}>
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

export default AddProperty;
