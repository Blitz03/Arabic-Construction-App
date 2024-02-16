"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

import ButtonComponent from "./ButtonComponent";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import useAlert from "@/hooks/useAlert";

export default function FormComponent() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const { alert, showAlert, hideAlert } = useAlert();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Fatehalden",
          from_email: form.email,
          to_email: "novablitz03@gmail.com",
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);

        showAlert({
          show: true,
          text: "تم إرسال رسالتك بنجاح!",
          variant: "default",
        });

        setTimeout(() => {
          hideAlert();
          setForm({ name: "", email: "", message: "" });
        }, [3000]);
      })
      .catch((error) => {
        setIsLoading(false);

        console.log(error);

        showAlert({
          show: true,
          text: "حدث خطأ: لم يتم إرسال رسالتك",
          variant: "destructive",
        });

        setTimeout(() => {
          hideAlert();
          setForm({ name: "", email: "", message: "" });
        }, [3000]);
      });
  }

  return (
    <div className="bg-secondary-950 bg-hero-pattern bg-cover bg-no-repeat bg-bottom rounded-[20px] p-10 lg:w-[400px] md:min-h-[762px] text-center order-2 lg:order-1">
      <h2 className="text-h2-bold text-white">اتصل بنا</h2>

      <p className="text-base-regular sm:text-body-normal text-gray-400 leading-8 mt-5">
        نحن هنا لدعم مشروع بنائك! يرجى ملء النموذج أدناه وسنقوم بالرد عليك في
        أقرب وقت ممكن.
      </p>

      {alert.show && (
        <Alert variant={alert.variant}>
          <Terminal className="h-4 w-4" />
          <AlertTitle>{alert.text}</AlertTitle>
        </Alert>
      )}

      <form className="flex flex-col gap-7 mt-10" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5 relative">
          <input
            type="text"
            placeholder="الأسم الكامل"
            className="contact-input"
            required
            name="name"
            value={form.name}
            onChange={handleChange}
          />

          <div className="h-[1px] w-full bg-secondary-900 rounded-full absolute bottom-0" />
        </div>

        <div className="flex flex-col gap-5 relative">
          <input
            type="email"
            placeholder="الايميل"
            className="contact-input"
            required
            name="email"
            value={form.email}
            onChange={handleChange}
          />

          <div className="h-[1px] w-full bg-secondary-900 rounded-full absolute bottom-0" />
        </div>

        <textarea
          className="bg-transparent resize-none border-[1px] border-secondary-900 rounded-[5px] p-3 placeholder:text-secondary-900 text-gray-200 focus:outline-none"
          placeholder="أكتب رسالتك"
          required
          rows={10}
          name="message"
          value={form.message}
          onChange={handleChange}
        />

        <ButtonComponent text={isLoading ? "جار الإرسال..." : "أرسل رسالتك"} />
      </form>
    </div>
  );
}
