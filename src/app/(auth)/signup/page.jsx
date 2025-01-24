'use client';
import Button from '@/ui/Button';
import RHFTextField from '@/ui/RHFTextField';
import TextField from '@/ui/TextField';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { signupApi } from '@/services/authService';
import toast from 'react-hot-toast';

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

  //=========== Handler ===========
  const submitHandler = async (data) => {
    try {
      console.log(data);
      const { user, message } = await signupApi({
        email: data.email,
        name: data.name,
        password: data.password,
      });
      console.log(user, message);
      toast.success(message);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
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
        <Button variant="primary" type="submit" className="w-full">
          تایید
        </Button>
      </form>
    </div>
  );
};

export default SignupPage;
