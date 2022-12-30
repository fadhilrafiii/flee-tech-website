import React, { useState } from 'react';

import styles from './contact-section.module.scss';

interface FormType {
  name: string;
  email: string;
  company: string;
  note: string;
}

const ContactForm = () => {
  const [form, setForm] = useState<FormType>({
    name: '',
    email: '',
    company: '',
    note: '',
  });

  const handleChangeForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setForm((prev: FormType) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('SUBMIT!');
  };

  return (
    <form className="flex flex-col gap-y-6 md:gap-y-12" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-y-6 md:gap-y-9">
        <input
          type="text"
          className={
            'p-4 md:p-5 text-base md:text-2xl lg:text-3xl border md:border-2 border-grey rounded-[6px] md:rounded-[10px] ' +
            styles.input
          }
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChangeForm}
          required
        />
        <input
          type="email"
          className={
            'p-4 md:p-5 text-base md:text-2xl lg:text-3xl border md:border-2 border-grey rounded-[6px] md:rounded-[10px] ' +
            styles.input
          }
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChangeForm}
          required
        />
        <input
          type="text"
          className={
            'p-4 md:p-5 text-base md:text-2xl lg:text-3xl border md:border-2 border-grey rounded-[6px] md:rounded-[10px] ' +
            styles.input
          }
          name="company"
          placeholder="Company"
          value={form.company}
          onChange={handleChangeForm}
          required
        />
        <textarea
          className={
            'w-full p-4 md:p-5 text-base md:text-2xl lg:text-3xl border md:border-2 border-grey rounded-[6px] md:rounded-[10px] ' +
            styles.input
          }
          value={form.note}
          name="note"
          placeholder="Tell us about your project. What problem we can help you solve?"
          onChange={handleChangeForm}
          rows={3}
          required
        />
      </div>
      <button
        className={
          'self-end rounded-[6px] md:rounded-[24.5px] font-medium capitalize bg-primary md:bg-gradient-to-t md:from-black md:to-dark-grey text-white text-base md:text-2xl lg:text-3xl p-[14px] ring-1 ring-black w-full max-w-[424px] ' +
          styles.buttonShadow
        }
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
