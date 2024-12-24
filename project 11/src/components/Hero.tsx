import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-gray-900 sm:text-7xl">
          Build your next{' '}
          <span className="relative whitespace-nowrap text-indigo-600">
            <span className="relative">great idea</span>
          </span>{' '}
          with us
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Transform your vision into reality with our cutting-edge platform. Start building today and join thousands of successful creators.
        </p>
        <div className="mt-10 flex justify-center gap-x-6">
          <button className="group inline-flex items-center justify-center rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700 hover:text-slate-100 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:bg-indigo-800 active:text-indigo-100">
            Get started now
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
          <button className="group inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-slate-700 ring-1 ring-slate-200 hover:ring-slate-300 hover:bg-slate-50">
            Learn more
          </button>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <img
          className="relative rounded-xl shadow-xl ring-1 ring-black ring-opacity-5"
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="App screenshot"
        />
      </div>
    </div>
  );
}