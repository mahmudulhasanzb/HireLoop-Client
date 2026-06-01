import { Button, Tabs } from '@heroui/react';
import React from 'react';
import PricingCard from './PricingCard';

const Pricing = () => {
  return (
    <div>
      <div>
        <p className="text-center text-lg font-semibold text-gray-500">
          PRICING
        </p>
        <h1 className="text-3xl font-semibold text-center">
          Pay for the leverge, <br />
          not the listings
        </h1>
      </div>

      <div>
        <Tabs className="w-full max-w-md">
          <Tabs.ListContainer>
            <Tabs.List aria-label="Options">
              <Tabs.Tab id="overview">
                Monthly
                <Tabs.Indicator />
              </Tabs.Tab>
              <Tabs.Tab id="analytics">
                Yearly
                <span className="text-purple-500 px-2 py-1 rounded-full">
                  {' '}
                  25%
                </span>
                <Tabs.Indicator />
              </Tabs.Tab>
            </Tabs.List>
          </Tabs.ListContainer>
          <Tabs.Panel className="pt-4" id="overview">
            <p>Monthly package</p>
            <PricingCard/>
          </Tabs.Panel>
          <Tabs.Panel className="pt-4" id="analytics">
            <p>Yearly package</p>
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};

export default Pricing;
