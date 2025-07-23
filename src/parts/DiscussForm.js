/* eslint-disable linebreak-style */
/* eslint-disable no-useless-escape */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';

import { Fade } from 'react-awesome-reveal';
// eslint-disable-next-line import/no-extraneous-dependencies
import * as emailjs from '@emailjs/browser';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ToastContainer, toast } from 'react-toastify';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-toastify/dist/ReactToastify.css';

import { Form } from 'elements/Form';
import Button from 'elements/Button';

export const DiscussForm = (actions) => {
  const { data, resetForm } = actions;
  const submitEmail = () => {
    const {
      name, company, email, phone, projectIdea,
    } = data;

    const templateParams = {
      from_name: `${name} - ${company} ( ${phone} - ${email} )`,
      to_name: 'MaryamSolutions',
      message: projectIdea,
    };

    if (
      name !== ''
      && company !== ''
      && email !== ''
      && phone !== ''
      && projectIdea !== ''
    ) {
      emailjs.send(
        'service_h4gtndg',
        'template_a9tvs7a',
        templateParams,
        'user_csqIxzN5mKsl1yw4ffJzV',
      )
        .then(() => {
          toast.success('Success! we\'\ll get back to you soon. Thank you!');
          resetForm();
        }, (error) => {
          toast.error(error);
        });
    } else {
      toast.error('Please fill out the blank form.');
    }
  };

  return (
    <section className="flex flex-col min-h-screen justify-center items-center bg-gradient-to-br from-theme-blue/10 via-white to-theme-purple/10 py-16 px-4">
      <Fade direction="down" triggerOnce>
        <h1 className="text-5xl text-theme-blue text-center font-extrabold drop-shadow mb-2">Let&apos;s Discuss</h1>
      </Fade>
      <Fade direction="up" triggerOnce>
        <p className="font-light text-lg text-gray-500 text-center mb-10 max-w-xl">
          Please fill out the form below to discuss your project and we&apos;ll get back to you in less than 24 hours.
        </p>
      </Fade>
      <Fade direction="up" triggerOnce>
        <div className="w-full max-w-2xl bg-white/80 shadow-xl rounded-3xl p-8 sm:p-12 flex flex-col gap-6 border border-theme-blue/10 backdrop-blur">
          <div className="flex flex-col sm:flex-row gap-6">
            <Form
              id="name"
              name="name"
              type="text"
              value={data.name}
              placeholder="Your name"
              className="flex-1 rounded-xl border border-gray-300 focus:border-theme-purple focus:ring-2 focus:ring-theme-purple/30 px-4 py-3 text-lg bg-white/90 shadow-sm transition"
              onChange={actions.onChange}
            />
            <Form
              id="company"
              name="company"
              type="text"
              value={data.company}
              placeholder="Your company"
              className="flex-1 rounded-xl border border-gray-300 focus:border-theme-purple focus:ring-2 focus:ring-theme-purple/30 px-4 py-3 text-lg bg-white/90 shadow-sm transition"
              onChange={actions.onChange}
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-6">
            <Form
              id="email"
              name="email"
              type="email"
              value={data.email}
              placeholder="Your email address"
              className="flex-1 rounded-xl border border-gray-300 focus:border-theme-purple focus:ring-2 focus:ring-theme-purple/30 px-4 py-3 text-lg bg-white/90 shadow-sm transition"
              onChange={actions.onChange}
            />
            <Form
              id="phone"
              name="phone"
              type="number"
              value={data.phone}
              placeholder="Your contact number"
              className="flex-1 rounded-xl border border-gray-300 focus:border-theme-purple focus:ring-2 focus:ring-theme-purple/30 px-4 py-3 text-lg bg-white/90 shadow-sm transition"
              onChange={actions.onChange}
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-6">
            <Form
              id="projectIdea"
              name="projectIdea"
              type="textarea"
              value={data.projectIdea}
              placeholder="Explain about your project idea"
              className="w-full rounded-xl border border-gray-300 focus:border-theme-purple focus:ring-2 focus:ring-theme-purple/30 px-4 py-3 text-lg bg-white/90 shadow-sm min-h-[120px] resize-none transition"
              onChange={actions.onChange}
            />
          </div>
          <Button
            className="text-xl w-full sm:w-auto px-12 py-3 mt-2 bg-gradient-to-r from-theme-purple to-theme-blue text-white rounded-full border-2 border-theme-purple hover:from-theme-blue hover:to-theme-purple hover:scale-105 transition duration-200 focus:outline-none shadow-lg"
            type="button"
            onClick={submitEmail}
          >
            Submit
          </Button>
        </div>
      </Fade>
      <ToastContainer />
    </section>
  );
};
