'use client';
import Button from '@/ui/Button';
import RHFTextField from '@/ui/RHFTextField';
import TextField from '@/ui/TextField';
import { useForm } from 'react-hook-form';

// export const metadata = {
//   title: 'ثبت نام',
// };
const SignupPage = () => {
  const { handleSubmit, register } = useForm();
  const submitHandler = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h1 className="text-xl font-bold text-secondary-500 text-center mb-6">
        ثبت نام
      </h1>
      <form onSubmit={handleSubmit(submitHandler)} className="space-y-10">
        <RHFTextField
          register={register}
          label="نام و نام خانوادگی"
          name="name"
        />
        <RHFTextField
          register={register}
          label="ایمیل"
          name="email"
          dir="ltr"
          type="email"
        />
        <RHFTextField
          register={register}
          label="رمز عبور"
          name="password"
          type="password"
          dir="ltr"
        />
        <Button variant="primary" type="submit" className="w-full">
          تایید
        </Button>
      </form>
    </div>
  );
};

export default SignupPage;
