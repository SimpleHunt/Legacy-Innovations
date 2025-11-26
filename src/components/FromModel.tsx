"use client";

import axios from "axios";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

// Lazy loaded forms
const ProductForm = dynamic(() => import("./forms/ProductForm"), { loading: () => <h1>Loading...</h1> });
const CustomerForm = dynamic(() => import("./forms/CustomerForm"), { loading: () => <h1>Loading...</h1> });
const OrderForm = dynamic(() => import("./forms/OrderForm"), { loading: () => <h1>Loading...</h1> });
const FranchiseForm = dynamic(() => import("./forms/FranchiseForm"), { loading: () => <h1>Loading...</h1> });
const PaymentForm = dynamic(() => import("./forms/PaymentForm"), { loading: () => <h1>Loading...</h1> });
const UserForm = dynamic(() => import("./forms/UserForm"), { loading: () => <h1>Loading...</h1> });

// FIXED: Added onClose support to forms[]
const forms: {
  [key: string]: (type: "create" | "update", data?: any, onClose?: () => void) => JSX.Element;
} = {
  products: (type, data, onClose) => <ProductForm type={type} data={data} onClose={onClose} />,
  customers: (type, data, onClose) => <CustomerForm type={type} data={data} onClose={onClose} />,
  order: (type, data, onClose) => <OrderForm type={type} data={data}  onClose={onClose}/>,
  franchise: (type, data, onClose) => <FranchiseForm type={type} data={data} onClose={onClose}  />,
  payment: (type, data, onClose) => <PaymentForm type={type} data={data} />,
  users: (type, data, onClose) => <UserForm type={type} data={data} onClose={onClose}/>,
};

const FormModal = ({
  table,
  type,
  data,
  id,
}: {
  table: "products" | "customers" | "order" | "franchise" | "payment" | "users" ;
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
}) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create" ? "bg-lamaYellow" : type === "update" ? "bg-lamaSky" : "bg-lamaPurple";

  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    if (!id) return;

    const loadingToast = toast.loading("Deleting...");

    try {
      await axios.delete(`/api/${table}/${id}`);

      toast.update(loadingToast, {
        render: `${table} deleted successfully!`,
        type: "success",
        isLoading: false,
        autoClose: 2000,
      });

      setOpen(false);
      router.refresh();
    } catch (err: any) {
      toast.update(loadingToast, {
        render: err.response?.data?.error || "Delete failed!",
        type: "error",
        isLoading: false,
        autoClose: 2000,
      });
    }
  };

  // FIXED: passing onClose → setOpen(false)
  const Form = () => {
    return type === "delete" && id ? (
      <form className="p-4 flex flex-col gap-4">
        <span className="text-center font-medium">
          All data will be lost. Are you sure you want to delete this {table}?
        </span>

        <button
          type="button"
          onClick={handleDelete}
          className="bg-red-700 text-white py-2 px-4 rounded-md w-max self-center"
        >
          Delete
        </button>
      </form>
    ) : type === "create" || type === "update" ? (
      // FIX: pass setOpen(false) into the form
      forms[table](type, data, () => setOpen(false))
    ) : (
      "Form not found!"
    );
  };

  return (
    <>
      <button
        className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
        onClick={() => setOpen(true)}
      >
        <Image src={`/${type}.png`} alt="" width={16} height={16} />
      </button>

      {open && (
        <div className="w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
            <Form />
            <div
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <Image src="/close.png" alt="" width={14} height={14} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
