import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const schema = yup.object().shape({
    donorName: yup.string().required("نام اهداکننده الزامی است"),
    email: yup.string().email("ایمیل معتبر وارد کنید"),
    phone: yup.string().required("شماره تماس الزامی است"),
    donationType: yup.string().required("نوع کمک را انتخاب کنید"),
    amount: yup.number().when("donationType", {
        is: "cash",
        then: yup.number().required("مبلغ را وارد کنید").positive("باید مقدار مثبت باشد"),
    }),
    itemDescription: yup.string().when("donationType", {
        is: "non-cash",
        then: yup.string().required("جزئیات کمک غیرنقدی الزامی است"),
    }),
    description: yup.string(),
});

export default function CreateDonation() {
    const {
        register,
        handleSubmit,
        watch,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const [successMessage, setSuccessMessage] = useState("");
    const donationType = watch("donationType");

    const onSubmit = (data) => {
        console.log("Donation Data:", data);
        setSuccessMessage("کمک شما با موفقیت ثبت شد. متشکریم!");
    };

    return (
        <div className="bg-white p-6">
            <nav className="mb-4 text-gray-600 flex items-center space-x-2 rtl:space-x-reverse">
                <Link to="/" className="text-blue-500">ٌصفحه نخست</Link>
                <ChevronLeft size={16} />
                <Link to="/donations" className="text-blue-500">مدیریت کمک های مالی</Link>
                <ChevronLeft size={16} />
                <span className="text-gray-800">ثبت کمک مالی</span>
            </nav>
            <h2 className="text-xl font-bold mb-4">فرم ثبت کمک مالی</h2>
            {successMessage && <p className="text-green-600">{successMessage}</p>}
            <form onSubmit={handleSubmit(onSubmit)} className="">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block">نام اهداکننده:</label>
                        <input {...register("donorName")} className="w-full p-2 border border-gray-300 rounded" />
                        <p className="text-red-500">{errors.donorName?.message}</p>
                    </div>
                    <div>
                        <label className="block">ایمیل (اختیاری):</label>
                        <input {...register("email")} className="w-full p-2 border border-gray-300 rounded" />
                        <p className="text-red-500">{errors.email?.message}</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div >
                        <label className="block">شماره تماس:</label>
                        <input {...register("phone")} className="w-80 p-2 border border-gray-300 rounded" />
                        <p className="text-red-500">{errors.phone?.message}</p>
                    </div>
                    <div>
                        <label className="block">نوع کمک:</label>
                        <select {...register("donationType")} className="w-full p-2 border border-gray-300 rounded">
                            <option value="">انتخاب کنید</option>
                            <option value="cash">نقدی</option>
                            <option value="non-cash">غیرنقدی</option>
                        </select>
                        <p className="text-red-500">{errors.donationType?.message}</p>
                    </div>
                </div>

                {donationType === "cash" && (
                    <div>
                        <label className="block">مبلغ (تومان):</label>
                        <input type="number" {...register("amount")} className="w-full p-2 border rounded" />
                        <p className="text-red-500">{errors.amount?.message}</p>
                    </div>
                )}

                {donationType === "non-cash" && (
                    <div>
                        <label className="block">جزئیات کمک غیرنقدی:</label>
                        <textarea {...register("itemDescription")} className="w-full p-2 border border-gray-300 rounded"></textarea>
                        <p className="text-red-500">{errors.itemDescription?.message}</p>
                    </div>
                )}

                <div>
                    <label className="block">توضیحات اضافی (اختیاری):</label>
                    <textarea {...register("description")} className="w-full p-2 border border-gray-300 rounded"></textarea>
                </div>

                <button type="submit" className="bg-blue-200 !bg-blue-200 w-xs text-gray-600 p-2 border border-gray-300 hover:bg-blue-600">
                    ثبت کمک
                </button>
            </form>
        </div>
    );
}
