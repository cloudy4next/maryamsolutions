/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Fade } from 'react-awesome-reveal';

export default function TermsAndConditionsPage() {
  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      <Fade direction="down" triggerOnce>
        <h1 className="text-4xl font-bold text-theme-blue mb-8">নিয়ম ও শর্তাবলী</h1>
      </Fade>

      <Fade direction="up" triggerOnce>
        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-theme-blue mb-4">ভূমিকা</h2>
            <p className="text-gray-700 mb-4">
              মেরিয়াম সল্যুশন্স-এ স্বাগতম। আমাদের ওয়েবসাইট ব্যবহার করে,
              আপনি এই নিয়ম ও শর্তাবলী মেনে চলতে সম্মত হন।
              অনুগ্রহ করে এই শর্তগুলি মনোযোগ সহকারে পড়ুন।
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-theme-blue mb-4">পরিষেবার ব্যবহার</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>
                আপনি আমাদের পরিষেবা ব্যবহার করার সময় সমস্ত প্রযোজ্য আইন মেনে চলতে সম্মত হন
              </li>
              <li>আপনি অবৈধ বা ক্ষতিকারক কোনো কার্যকলাপে লিপ্ত হবেন না</li>
              <li>আমরা যেকোনো সময় পরিষেবা প্রত্যাখ্যান বা সীমাবদ্ধ করার অধিকার সংরক্ষণ করি</li>
              <li>সমস্ত প্রজেক্ট ডেলিভারি সময়সীমা পারস্পরিক সম্মতির ভিত্তিতে নির্ধারিত হবে</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-theme-blue mb-4">মূল্য পরিশোধ ও বিলিং</h2>
            <p className="text-gray-700 mb-4">
              আমাদের পরিষেবার জন্য মূল্য পরিশোধ নিম্নলিখিত শর্তাবলী অনুসারে পরিচালিত হবে:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>সমস্ত মূল্য বাংলাদেশি টাকায় নির্ধারিত</li>
              <li>প্রজেক্ট শুরুর আগে ৫০% অগ্রিম প্রদান করতে হবে</li>
              <li>বাকি ৫০% প্রজেক্ট সম্পূর্ণ হওয়ার পর প্রদান করতে হবে</li>
              <li>সমস্ত পেমেন্ট নির্ধারিত সময়ের মধ্যে করতে হবে</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-theme-blue mb-4">মেধা সম্পত্তি অধিকার</h2>
            <p className="text-gray-700 mb-4">
              আমাদের দ্বারা তৈরি সমস্ত সফটওয়্যার,
              ডিজাইন এবং কোড সম্পর্কিত মেধা সম্পত্তি
              অধিকার নিম্নরূপ:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>
                প্রজেক্টের সম্পূর্ণ পেমেন্ট করার পর সোর্স কোডের মালিকানা
                ক্লায়েন্টের কাছে হস্তান্তর করা হবে
              </li>
              <li>
                যেকোনো থার্ড-পার্টি লাইব্রেরি বা টুলস এর লাইসেন্স ক্লায়েন্টকে নিজে নিতে হবে
              </li>
              <li>
                আমাদের পোর্টফোলিওতে প্রজেক্টের রেফারেন্স ব্যবহারের অধিকার আমরা সংরক্ষণ করি
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-theme-blue mb-4">
              দায় সীমাবদ্ধতা
            </h2>
            <p className="text-gray-700 mb-4">
              আমাদের পরিষেবা ব্যবহারের ফলে সৃষ্ট যেকোনো ক্ষতির ক্ষেত্রে
              আমাদের দায়বদ্ধতা প্রদত্ত পরিষেবার
              মূল্যের সমপরিমাণ পর্যন্ত সীমাবদ্ধ থাকবে।
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-theme-blue mb-4">পরিবর্তন ও সমাপ্তি</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>আমরা যেকোনো সময় এই শর্তাবলী পরিবর্তন করার অধিকার সংরক্ষণ করি</li>
              <li>পরিবর্তনগুলি ওয়েবসাইটে প্রকাশের পর কার্যকর হবে</li>
              <li>পরিষেবা ব্যবহার চালিয়ে যাওয়া মানে পরিবর্তিত শর্তাবলী মেনে নেওয়া</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-theme-blue mb-4">যোগাযোগ</h2>
            <p className="text-gray-700 mb-4">
              এই নিয়ম ও শর্তাবলী সম্পর্কে কোনো প্রশ্ন থাকলে আমাদের সাথে যোগাযোগ করুন:
            </p>
            <ul className="list-none text-gray-700 mb-4">
              <li>ইমেইল: support@maryamsolutions.com</li>
              <li>ফোন: +8801712020833</li>
              <li>ঠিকানা: মিরপুর ১, ঢাকা, বাংলাদেশ</li>
            </ul>
          </section>
        </div>
      </Fade>
    </div>
  );
}
