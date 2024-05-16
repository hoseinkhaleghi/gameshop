import {FormEvent, useState} from "react";
import OtpInput from "react-otp-input";
import {toast} from "react-toastify";
import Button from "../../../common/Button";

interface Props {
  onSubmit: (data: number) => void;
  isLoading: boolean;
}

export default function SectionTwo({onSubmit, isLoading}: Props) {
  const [otp, setOtp] = useState<string>();

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!otp || otp === "")
      return toast.error("لطفا کد یکبار مصرف را وارد نمایید");
    onSubmit(+otp);
  };

  return (
    <form onSubmit={submitForm}>
      <h1 className="mt-[10rem] text-center text-3xl font-bold">
        کد خود را وارد نمایید
      </h1>
      <p className="mt-20 font-bold text-gray-500 text-center">
        کد یک بار مصرف به ایمیل شما ارسال شد. لطفا ایمیل حاوی کد را با کسی به
        اشتراک نگذارید.
      </p>
      <div style={{direction: "ltr"}}>
        <OtpInput
          containerStyle="mt-10 flex justify-center "
          value={otp}
          onChange={setOtp}
          numInputs={5}
          inputStyle="mx-1 py-6 !w-10 h-2 rounded-lg text-center border border-gray-300 text-black"
          renderInput={(props) => <input {...props} />}
        />
      </div>
      <Button type="submit" className="mt-20" loading={isLoading}>
        ساخت اکانت
      </Button>
    </form>
  );
}
