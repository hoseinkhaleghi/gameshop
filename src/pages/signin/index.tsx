import { FcGoogle } from 'react-icons/fc';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import { phone_or_email_regex } from '../../models/regex';
import Button from '../../components/common/Button';
import Logo from '../../assets/logo';
import Input from '../../components/common/Input';
import { useState } from 'react';
import { signin } from '../../services/api/user.http';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import localStorage from 'local-storage';
import { Link, useNavigate } from 'react-router-dom';

export default function Signin() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const schema = object({
    emailOrPhonenumber: string()
      .matches(
        phone_or_email_regex,
        'لطفا شماره تلفن و یا ایمیل خود را وارد نمایید.',
      )
      .required(),
    password: string()
      .min(6)
      .matches(
        new RegExp('((?=.*d)|(?=.*W+))(?![.n])(?=.*[a-z]).*$'),
        'password must contain numbers & symbols',
      )
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitHandler = (data: {
    emailOrPhonenumber: string;
    password: string;
  }) => {
    setIsLoading(true);
    signin(data)
      .then((req) => {
        setIsLoading(false);
        localStorage('user', req.data);
        navigate('/dashboard');
      })
      .catch((error: AxiosError) => {
        setIsLoading(false);
        toast.error(error.message);
      });
  };

  return (
    <div>
      <div className=" flex items-center justify-center gap-3 mt-24">
        <Logo />
        <h3 className="text-center text-2xl font-medium">خوش آمدید</h3>
      </div>
      <form
        className="mt-10 flex flex-col gap-5"
        onSubmit={handleSubmit(submitHandler)}
      >
        <Input
          type="text"
          placeholder="ایمیل یا شماره تلفن"
          required
          {...register('emailOrPhonenumber')}
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
          {...register('password')}
        />
        {errors.password ? (
          <p className="text-red-500 text-xs">{errors.password.message}</p>
        ) : null}

        <Button type="submit" loading={isLoading} className="mt-5">
          ورود به حساب کاربری
        </Button>
      </form>
      <h3 className="mt-10 text-center">
        تاکنون ثبت نام نکرده اید؟
        <Link to="/signup" className="mr-2 font-bold text-primary">
          ورود
        </Link>
      </h3>

      <div className="flex items-center justify-center gap-5 mt-10 w-full">
        <button className="max-w-64 w-full flex items-center justify-center gap-3 py-2 rounded-md border border-gray-300">
          <FcGoogle size={25} />
          <h3>ورود با گوگل</h3>
        </button>
      </div>
    </div>
  );
}
