import React from 'react';

interface PricingTierProps {
  title: string;
  price: string;
  pricefor: string;
  features: string[];
}

const PricingTier: React.FC<PricingTierProps> = ({
  title,
  price,
  features,
  pricefor,
}) => {
  return (
    <div className=' flex h-[460px] w-72 cursor-pointer  flex-col rounded-2xl shadow-2xl duration-500 hover:scale-105 max-md:border md:h-80 md:w-full md:flex-row lg:h-[560px] lg:w-80 lg:flex-col'>
      <div className='h-1/2 rounded-2xl bg-white md:h-full md:w-1/3 lg:h-1/2 lg:w-full'>
        <h3 className='p-4 text-center text-[var(--color-primary-600)] lg:text-2xl '>
          {title}
        </h3>
        <p className='ml-2 mt-10 p-2'>
          <span className='text-2xl font-normal'>Rs. </span>
          <span className=' text-6xl font-normal'>{price}</span> {pricefor}
        </p>
      </div>
      <div className='flex h-1/2 rounded-2xl bg-[#F2F2F2] md:h-full md:w-2/3 lg:h-1/2 lg:w-full'>
        <ul className='flex-col justify-around gap-12 p-4 font-normal md:my-auto md:text-xl lg:mt-2 lg:text-lg'>
          {features.map((feature, index) => (
            <li className='flex gap-4 py-1' key={index}>
              <svg
                width='19'
                height='19'
                viewBox='0 0 19 19'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='md:mt-1'
              >
                <circle cx='9.5' cy='9.5' r='9.5' fill='#53BB2F' />
                <path
                  d='M4.64557 8.69833L3.39282 10.1789L7.46425 14.2503L15.6071 7.58794L14.3544 6.10742L7.46425 11.6594L4.64557 8.69833Z'
                  fill='white'
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Pricing: React.FC = () => {
  const pricingData: PricingTierProps[] = [
    {
      title: 'Pre-Intelligence Tier',
      price: 'TBD',
      pricefor: '/Student/year',
      features: [
        'Microsoft A1/A3 Licenses',
        'Proprietary Microsoft add-ins',
        'Customizable Education Data Model',
        'Student lifecycle dashboards',
        'OSF network',
      ],
    },
    {
      title: 'Intelligence Tier',
      price: 'TBD',
      pricefor: '/Student/year',
      features: [
        'Enhanced Student Learning',
        'Intelligent reporting tooling.',
        'Customizable Education Data Model',
        'Workflow Builder',
      ],
    },
    {
      title: 'Enterprise Tier',
      price: 'TBD',
      pricefor: '(contact sales)',
      features: [
        'Everything in Intelligence plus',
        'Enterprise support Center',
        'Enterprise module integration',
        'Streamlined Feedback Delivery',
      ],
    },
  ];

  return (
    <div className='flex min-h-screen flex-col justify-center text-black'>
      <h1 className='mb-14 mt-20 text-center text-5xl font-medium lg:text-7xl'>
        A plan that fits your college needs{' '}
      </h1>
      <div className='mx-auto my-14 flex flex-col justify-around gap-12 px-5 md:mx-0 lg:flex-row lg:gap-2 xl:gap-0'>
        {pricingData.map((tier, index) => (
          <PricingTier key={index} {...tier} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
