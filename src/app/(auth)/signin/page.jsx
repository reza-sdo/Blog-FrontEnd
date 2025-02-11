'use client';
import { useAuth } from '@/context/AuthContext';
import Button from '@/ui/Button';
import RHFTextField from '@/ui/RHFTextField';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
const formSchema = yup
  .object({
    email: yup
      .string()
      .email('ایمیل وارد شده صحیح نیست')
      .required('این فیلد اجباری است'),
    password: yup
      .string()
      .min(8, 'پسورد حداقل 8 رقم باید باشد')
      .required('این فیلد اجباری است'),
  })
  .required('فرم الزامی است');

const SigninPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({ resolver: yupResolver(formSchema), mode: 'onTouched' });

  const { signin } = useAuth();
  //=========== Handler ===========
  const submitHandler = async (data) => {
    await signin(data);
  };
  return (
    <div>
      <h1 className="text-xl font-bold text-secondary-500 text-center mb-6">
        ورود
      </h1>
      <form onSubmit={handleSubmit(submitHandler)} className="space-y-10">
        <RHFTextField
          name="email"
          register={register}
          label="ایمیل"
          dir="ltr"
          isRequired
          type="email"
          errors={errors}
        />
        <RHFTextField
          name="password"
          register={register}
          label="پسورد"
          dir="ltr"
          isRequired
          type="password"
          errors={errors}
        />
        <Button variant="primary" type="submit" className="w-full">
          تایید
        </Button>
      </form>
      <Link className="text-secondary-500 mt-6 text-center" href="/signup">
        ثبت نام
      </Link>
    </div>
  );
};

export default SigninPage;
