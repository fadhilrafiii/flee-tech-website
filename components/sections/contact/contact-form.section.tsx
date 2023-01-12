import React, { useCallback, useEffect, useState } from 'react';

import axios from 'axios';

import LoadingAnimationIcon from 'components/icons/loading-animation';

import styles from './contact-section.module.scss';

interface FormType {
  name: string;
  email: string;
  company: string;
  note: string;
}

interface ContactFormProps {
  isInInsightPage?: boolean;
}

const ContactForm = ({ isInInsightPage = false }: ContactFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
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

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const data = {
        Name: form.name,
        Email: form.email,
        Company: form.company,
        Description: form.note,
      };

      setIsLoading(true);
      await axios
        .post(process.env.NEXT_PUBLIC_SHEET_BEST || '', data)
        .then(() => {
          setSuccessMessage(
            'We have received your story! Please wait our admin to reach you.',
          );
        })
        .catch(() => {
          setErrorMessage('An error has occured! Please submit later.');
        })
        .finally(() => {
          setForm({
            name: '',
            email: '',
            company: '',
            note: '',
          });
          setIsLoading(false);
        });
    },
    [form],
  );

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (successMessage) {
      timeout = setTimeout(() => setSuccessMessage(''), 8000);
    }

    return () => {
      if (successMessage) {
        clearTimeout(timeout);
      }
    };
  }, [successMessage]);

  return (
    <form className="flex flex-col gap-y-6 md:gap-y-12" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-y-6 md:gap-y-6">
        <input
          type="text"
          className={
            'py-3 px-4 text-base md:text-xl lg:text-2xl border md:border-2 border-grey rounded-[6px] md:rounded-[10px] ' +
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
            'py-3 px-4 text-base md:text-xl lg:text-2xl border md:border-2 border-grey rounded-[6px] md:rounded-[10px] ' +
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
            'py-3 px-4 text-base md:text-xl lg:text-2xl border md:border-2 border-grey rounded-[6px] md:rounded-[10px] ' +
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
            'w-full py-3 px-4 text-base md:text-xl lg:text-2xl border md:border-2 border-grey rounded-[6px] md:rounded-[10px] ' +
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
      <div className="flex flex-col">
        <button
          className={
            `${
              isInInsightPage ? 'mx-auto' : 'ml-auto'
            } rounded-[6px] md:rounded-[24.5px] font-medium capitalize bg-primary md:bg-gradient-to-t md:from-black md:to-dark-grey text-white text-base md:text-2xl lg:text-3xl p-[14px] ring-1 ring-black w-full max-w-[424px] ` +
            styles.buttonShadow
          }
        >
          {isLoading ? <LoadingAnimationIcon size={32} /> : 'Submit'}
        </button>
        {errorMessage && (
          <div
            className={`text-base text-center md:${
              isInInsightPage ? 'text-center' : 'text-right'
            }  mt-6 text-red`}
          >
            {errorMessage}
          </div>
        )}
        {successMessage && (
          <div
            className={`text-base text-center md:${
              isInInsightPage ? 'text-center' : 'text-right'
            }  mt-6 text-green`}
          >
            {successMessage}
          </div>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
