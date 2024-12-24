import React from 'react';
import { Zap, Shield, Smartphone, Globe } from 'lucide-react';

const features = [
  {
    name: 'Lightning Fast',
    description: 'Built on cutting-edge technology for optimal performance.',
    icon: Zap,
  },
  {
    name: 'Secure by Default',
    description: 'Enterprise-grade security protecting your data 24/7.',
    icon: Shield,
  },
  {
    name: 'Mobile First',
    description: 'Responsive design that works seamlessly on all devices.',
    icon: Smartphone,
  },
  {
    name: 'Global Scale',
    description: 'Deploy worldwide with our distributed infrastructure.',
    icon: Globe,
  },
];

export function Features() {
  return (
    <div id="features" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to deploy your app
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our platform provides all the tools you need to build and scale your applications with confidence.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}