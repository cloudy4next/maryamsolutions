/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Fade } from 'react-awesome-reveal';

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      <Fade direction="down" triggerOnce>
        <h1 className="text-4xl font-bold text-theme-blue mb-8">গোপনীয়তা নীতি</h1>
      </Fade>

      <Fade direction="up" triggerOnce>
        <div className="prose max-w-none">
          {/* <p className="text-gray-600 mb-6">সর্বশেষ আপডেট: ২৬ জুলাই, ২০২৫</p> */}

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-theme-blue mb-4">ভূমিকা</h2>
            <p className="text-gray-700 mb-4">
              মেরিয়াম সল্যুশন্স-এ আপনার গোপনীয়তা আমাদের কাছে অত্যন্ত গুরুত্বপূর্ণ।
              এই গোপনীয়তা নীতি ব্যাখ্যা করে কিভাবে আমরা আপনার তথ্য সংগ্রহ, ব্যবহার এবং
              সুরক্ষা করি যখন আপনি আমাদের ওয়েবসাইট ব্যবহার করেন বা আমাদের সেবা গ্রহণ করেন।
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-theme-blue mb-4">যে তথ্য আমরা সংগ্রহ করি</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>কন্টাক্ট ফর্মে প্রদত্ত নাম ও যোগাযোগের তথ্য</li>
              <li>প্রতিষ্ঠানের তথ্য</li>
              <li>প্রজেক্টের প্রয়োজনীয়তা ও বিবরণ</li>
              <li>গুগল এনালিটিক্স এর মাধ্যমে ব্যবহার সংক্রান্ত তথ্য</li>
              <li>আপনার ব্রাউজার এবং ডিভাইস সম্পর্কিত তথ্য</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-theme-blue mb-4">কিভাবে আমরা আপনার তথ্য ব্যবহার করি</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>আমাদের সেবা প্রদান ও রক্ষণাবেক্ষণের জন্য</li>
              <li>আপনার প্রজেক্ট সম্পর্কে যোগাযোগ করার জন্য</li>
              <li>আমাদের ওয়েবসাইট ও সেবার মান উন্নয়নের জন্য</li>
              <li>আপনার সম্মতিতে মার্কেটিং যোগাযোগের জন্য</li>
              <li>আইনি বাধ্যবাধকতা পালনের জন্য</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-theme-blue mb-4">তথ্য সুরক্ষা</h2>
            <p className="text-gray-700 mb-4">
              আমরা আপনার ব্যক্তিগত তথ্য সুরক্ষার জন্য উপযুক্ত নিরাপত্তা ব্যবস্থা গ্রহণ করি।
              তবে, ইন্টারনেটের মাধ্যমে তথ্য স্থানান্তর ১০০% নিরাপদ নয়,
              এবং আমরা সম্পূর্ণ নিরাপত্তার গ্যারান্টি দিতে পারি না।
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-theme-blue mb-4">আপনার অধিকার</h2>
            <p className="text-gray-700 mb-4">
              আপনার নিম্নলিখিত অধিকার রয়েছে:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>আপনার ব্যক্তিগত তথ্য দেখার অধিকার</li>
              <li>ভুল তথ্য সংশোধনের অধিকার</li>
              <li>তথ্য মুছে ফেলার অনুরোধের অধিকার</li>
              <li>তথ্য ব্যবহারে আপত্তি করার অধিকার</li>
              <li>যেকোনো সময় সম্মতি প্রত্যাহারের অধিকার</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-theme-blue mb-4">যোগাযোগ</h2>
            <p className="text-gray-700 mb-4">
              এই গোপনীয়তা নীতি সম্পর্কে কোনো প্রশ্ন থাকলে আমাদের সাথে যোগাযোগ করুন:
            </p>
            <ul className="list-none text-gray-700 mb-4">
              <li>ইমেইল: support@maryamsolutions.com</li>
              <li>ফোন: +৮৮০১৭১২০২০৮৩৩</li>
              <li>ঠিকানা: মিরপুর ১, ঢাকা, বাংলাদেশ</li>
            </ul>
          </section>
        </div>
      </Fade>
    </div>
  );
}
