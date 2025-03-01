'use client';
import Button from '@/ui/Button';
import RHFTextField from '@/ui/RHFTextField';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import { SpinnerMini } from '@/ui/Spinner';

const formSchema = yup
  .object({
    name: yup
      .string()
      .min(5, 'نام و نام خانوادگی نامعتبر است')
      .required('نام و نام خانوادگی ضروری است'),
    email: yup.string().email('ایمیل نامعتبر است ').required('ایمیل ضروری است'),
    password: yup
      .string()
      .min(8, 'رمز عبور حداقل 8 رقم ضروری است')
      .required('رمز عبور ضروری است'),
  })
  .required();

const SignupPage = () => {
  //=========== Hooks ===========
  const {
    handleSubmit,
    register,
    formState: { errors, isLoading },
  } = useForm({
    resolver: yupResolver(formSchema),
    mode: 'onTouched',
  });

  const { signup } = useAuth();

  //=========== Handler ===========
  const submitHandler = async (data) => {
    await signup(data);
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
          isRequired
          errors={errors}
        />
        <RHFTextField
          register={register}
          label="ایمیل"
          name="email"
          dir="ltr"
          type="email"
          isRequired
          errors={errors}
        />
        <RHFTextField
          register={register}
          label="رمز عبور"
          name="password"
          type="password"
          dir="ltr"
          isRequired
          errors={errors}
        />
        <Button
          disabled={isLoading}
          variant="primary"
          type="submit"
          className="w-full flex justify-center"
        >
          {isLoading ? <SpinnerMini /> : 'تایید'}
        </Button>
      </form>

      <Link className="text-secondary-500 mt-6 text-center" href="/signin">
        حساب کاربری دارید؟
      </Link>
    </div>
  );
};

export default SignupPage;
