import { useEffect, useState } from "react";
import axios from "axios";
import { mutate } from "swr";
import { useForm, SubmitHandler } from "react-hook-form";
import { massageBoxRoute, useMassageBox } from "@/hooks/useMassageBox";
import { IMassageBox } from "@/interface/massageBox";
import PopupSeccess from "../popupSeccess";
import PopupError from "../popupError";

const ContactSection = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const { create } = useMassageBox();

  // for delay popup
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isSuccess || isError) {
      timer = setTimeout(() => handleClose(), 2000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isSuccess, isError]);

  const handleClose = () => {
    setIsSuccess(false);
    setIsError(false);
  };

  const handleToggleSuccess = () => {
    setIsSuccess(!isSuccess);
  };

  const handleToggleError = () => {
    setIsError(!isError);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IMassageBox>();
  const onSubmit: SubmitHandler<IMassageBox> = async (data) => {
    try {
      await create(data);
      mutate(massageBoxRoute);
      reset();
      handleToggleSuccess();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);
        handleToggleError();
      }
    }
  };

  return (
    <section className="w-full py-24" id="contact">
      <h1 className="text-center text-4xl font-bold leading-8">Contact</h1>
      <p className="mx-auto mt-8 max-w-3xl text-center leading-8 text-neutral opacity-90 lg:max-w-xl md:max-w-lg sm:max-w-sm xs:px-8">
        Feel free to reach out to me on
        <a
          className="link link-info px-1"
          target="_blank"
          href="https://www.linkedin.com/in/apisid-phothidong/"
        >
          LinkedIn
        </a>
        for professional inquiries
      </p>
      <p className="mx-auto max-w-3xl text-center leading-8 text-neutral opacity-90 lg:max-w-xl md:max-w-lg sm:max-w-sm xs:px-8">
        or Contact me by submitting the form below and I will get back to you as
        soon as possible
      </p>

      <form
        className="form-control mx-auto mt-16 max-w-md space-y-8 sm:max-w-sm xs:px-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="form-control relative w-full space-y-1">
          <span className="label-text">
            Name <span className="text-xs text-red-400">*</span>
          </span>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="input input-info"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <div className="label absolute left-2 top-[4.25rem]">
              <span className="label-text-alt text-red-400 ">
                * Please enter your name
              </span>
            </div>
          )}
        </label>
        <label className="form-control relative w-full space-y-1">
          <span className="label-text">
            Email <span className="text-xs text-red-400">*</span>
          </span>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="input input-bordered input-info w-full"
            {...register("email", { required: true })}
          />
          {errors.name && (
            <div className="label absolute left-2 top-[4.25rem]">
              <span className="label-text-alt text-red-400 ">
                * Please enter your email address
              </span>
            </div>
          )}
        </label>
        <label className="form-control w-full space-y-1">
          <span className="label-text">Massage</span>
          <textarea
            className="textarea textarea-bordered textarea-info h-24 text-base"
            id="massage"
            placeholder="Enter your massage"
            {...register("massage")}
          ></textarea>
        </label>
        <button className="btn btn-info text-white" type="submit">
          SUBMIT
        </button>
      </form>

      {/* Success or Error response */}
      <PopupSeccess isDisplay={isSuccess} />
      <PopupError isDisplay={isError} />
    </section>
  );
};
export default ContactSection;
