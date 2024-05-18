import { useState } from 'react';
import SectionTwo from '../../components/features/signup/sections/sectionTwo';
import SectionOne from '../../components/features/signup/sections/sectionOne';
import { getOTP, signup } from '../../services/api/user.http';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { User } from '../../types/user.type';
// import localStorage from 'local-storage';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/features/landingpage/Header';

export default function Signup() {
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User>();
  const navigate = useNavigate();

  const getOtp = (user: User) => {
    setIsLoading(true);
    setUser(user);

    getOTP(user)
      .then(() => {
        setPage(2);
        setIsLoading(false);
      })
      .catch((error: AxiosError) => {
        setIsLoading(false);
        toast.error(error.message);
      });
  };

  const signUp = (otp: number) => {
    setIsLoading(true);
    signup({ ...user!, otp })
      .then((req) => {
        setIsLoading(false);
        // localStorage('user', req.data);
        navigate('/dashboard');
      })
      .catch((error: AxiosError) => {
        setIsLoading(false);
        toast.error(error.message);
      });
  };

  return (
    <section className="relative min-h-[650px] ">
      <Header />
      <div
        style={{
          position: 'absolute',
          zIndex: 1,
          right: '10px',
          left: '10px',
          top: '0',
          bottom: '0',
          opacity: page != 1 ? '0' : '1',
          transition: 'all .s',
          visibility: page != 1 ? 'hidden' : 'visible',
        }}
      >
        <SectionOne isLoading={isLoading} onSubmit={getOtp} />
      </div>
      <div
        style={{
          position: 'absolute',
          zIndex: 1,
          right: '10px',
          left: '10px',
          top: '0',
          bottom: '0',
          opacity: page != 2 ? '0' : '1',
          transition: 'all .s',
          visibility: page != 2 ? 'hidden' : 'visible',
        }}
      >
        <SectionTwo isLoading={isLoading} onSubmit={signUp} />
      </div>
    </section>
  );
}
