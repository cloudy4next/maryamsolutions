/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';

import BrandIcon from './BrandIcon';
import Button from '../elements/Button';

export default function Footer() {
  return (
    <div className="bg-gray-50 border-t border-gray-200 pb-6">
      <div className="container flex-col mx-auto ">
        <div className="flex flex-col sm:flex-row mt-8 justify-center">
          <div className="w-1/3 flex-col ml-16 mr-8">
            <BrandIcon />
            <p className="w-full text-lg text-gray-400 font-light">
              Empowering Your Digital Journey
              {' '}
              <br />
              with Innovative Solutions.
            </p>
          </div>
          <div className="w-1/3 mt-0 ml-16 mr-0 sm:ml-0 sm:mr-5 mb-2">
            <p className="text-lg text-gray-400 font-light">
              +8801712020833
            </p>
            <p className="text-lg text-gray-400 font-light">
              support@maryamsolutions.com
            </p>
            <p className="text-lg text-gray-400 font-light">
              Mirpur 1, Bangladesh
            </p>
          </div>
        </div>

        <div className="flex-col text-center mt-7">
          <div className="flex justify-center space-x-4">
            <Button
              type="link"
              href="/privacy-policy"
              className="text-theme-blue hover:text-theme-purple transition-colors"
            >
              গোপনীয়তা নীতি
            </Button>
            <span className="text-gray-400">|</span>
            <Button
              type="link"
              href="/terms-and-conditions"
              className="text-theme-blue hover:text-theme-purple transition-colors"
            >
              নিয়ম ও শর্তাবলী
            </Button>
            <span className="text-gray-400">|</span>
            <Button
              type="link"
              href="/trade-license"
              className="text-theme-blue hover:text-theme-purple transition-colors"
            >
              ট্রেড লাইসেন্স
            </Button>
          </div>
          <p className="text-lg text-gray-400 font-light mb-2">
            Copyright  {new Date().getFullYear()}  - All rights reserved - Maryam Solutions
          </p>
        </div>
      </div>
    </div>
  );
}
