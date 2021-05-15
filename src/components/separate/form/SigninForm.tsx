import { FC, useEffect } from "react";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "src/components/shared/form-items/Input";
import { AuthContext } from "src/contexts/AuthContext";

export const SigninForm: FC = (props) => {
  const { signin } = useContext(AuthContext);
  const { register, handleSubmit, formState, setError } = useForm({
    reValidateMode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      await signin(data.email, data.password);
    } catch (error) {
      setError("email", {
        type: "manual",
        message: error.message,
      });
    }
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder="メールアドレス"
        error={formState.errors.email?.message}
        {...register("email", { required: "メールアドレスを入力してください" })}
      />
      <Input
        type="password"
        placeholder="パスワード"
        error={formState.errors.password?.message}
        {...register("password", { required: "パスワードを入力してください" })}
      />
      <input
        type="submit"
        value="メールアドレスでログイン"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full px-4 py-2 mt-4 rounded focus:outline-none focus:shadow-outline"
      />
    </form>
  );
};
