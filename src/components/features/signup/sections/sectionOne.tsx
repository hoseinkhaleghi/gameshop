import {FcGoogle} from "react-icons/fc";
import Logo from "../../../../assets/logo";
import Input from "../../../common/Input";
import Button from "../../../common/Button";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {object, string, ref} from "yup";
import {phone_or_email_regex} from "../../../../models/regex";
import {User} from "../../../../types/user.type";

interface Props {
  onSubmit: (data: User) => void;
  isLoading: boolean;
}

export default function SectionOne({onSubmit, isLoading}: Props) {
  const schema = object({
    fullName: string().min(2).required(),
    emailOrPhonenumber: string()
      .matches(
        phone_or_email_regex,
        "لطفا شماره تلفن و یا ایمیل صحیح وارد نمایید."
      )
      .required(),
    password: string()
      .min(6)
      .matches(
        new RegExp("((?=.*d)|(?=.*W+))(?![.n])(?=.*[a-z]).*$"),
        "password must contain numbers & symbols"
      )
      .required(),
    passwordConfirm: string()
      .min(6)
      .oneOf([ref("password")], "Passwords must match")
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <main>
      <div className=" flex items-center justify-center gap-3 mt-24">
        <Logo />
        <h3 className="text-center text-2xl font-medium">خوش آمدید</h3>
      </div>
      <form
        className="mt-10 flex flex-col gap-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          type="text"
          placeholder="نام و نام خانوادگی"
          {...register("fullName")}
        />
        {errors.fullName ? (
          <p className="text-red-500 text-xs">{errors.fullName.message}</p>
        ) : null}
        <Input
          type="text"
          placeholder="ایمیل یا شماره تلفن"
          required
          {...register("emailOrPhonenumber")}
        />
        {errors.emailOrPhonenumber ? (
          <p className="text-red-500 text-xs">
            {errors.emailOrPhonenumber.message}
          </p>
        ) : null}

        <Input
          type="password"
          placeholder="رمز عبور"
          required
          {...register("password")}
        />
        {errors.password ? (
          <p className="text-red-500 text-xs">{errors.password.message}</p>
        ) : null}
        <Input
          type="password"
          placeholder="تکرار رمز عبور"
          {...register("passwordConfirm")}
        />
        {errors.passwordConfirm ? (
          <p className="text-red-500 text-xs">
            {errors.passwordConfirm.message}
          </p>
        ) : null}
        <Button type="submit" loading={isLoading} className="mt-5">
          ایجاد حساب کاربری
        </Button>
      </form>
      <h3 className="mt-10 text-center">
        قبلا ثبت نام کرده اید؟
        <Link to="/signin" className="mr-2 font-bold text-primary">
          ورود
        </Link>
      </h3>
      <div className="flex items-center justify-center gap-5 mt-10 w-full">
        <button className="max-w-64 w-full flex items-center justify-center gap-3 py-2 rounded-md border border-gray-300">
          <FcGoogle size={25} />
          <h3>ورود با گوگل</h3>
        </button>
      </div>
    </main>
  );
}
