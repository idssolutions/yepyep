import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="relative pb-20 bg-gray-900">
        <nav className="flex items-center justify-between px-4 py-8 xl:px-10">
          <a className="text-lg font-semibold" href="#">
            <img
              className="h-7"
              src="zeus-assets/logo/logo-zeus-white.svg"
              alt
              width="auto"
            />
          </a>
          <div className="lg:hidden">
            <button className="flex items-center p-3 rounded navbar-burger hover:bg-blue-300">
              <svg
                className="block w-4 h-4 text-white"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <ul className="hidden lg:ml-auto lg:mr-12 lg:flex lg:items-center lg:space-x-12">
            <li>
              <a
                className="text-sm font-semibold text-white hover:text-blue-100"
                href="#"
                data-removed="true"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="text-sm font-semibold text-white hover:text-blue-100"
                href="#"
              >
                Services
              </a>
            </li>
            <li>
              <a
                className="text-sm font-semibold text-white hover:text-blue-100"
                href="#"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                className="text-sm font-semibold text-white hover:text-blue-100"
                href="#"
              >
                Apprenticeships
              </a>
            </li>
          </ul>
          <div className="hidden lg:block">
            <a
              className="inline-block px-8 py-3 text-sm font-medium leading-normal text-blue-500 transition duration-200 bg-blue-500 bg-opacity-25 rounded hover:bg-opacity-50"
              href="#"
              data-removed="true"
            >
              Contact Us
            </a>
          </div>
        </nav>
        <img
          className="top-0 left-0 hidden mt-32 lg:block lg:absolute"
          src="zeus-assets/icons/dots/yellow-dot-left-bars.svg"
          alt
        />
        <img
          className="bottom-0 right-0 hidden mt-20 lg:block lg:absolute"
          src="zeus-assets/icons/dots/red-dot-right-shield.svg"
          alt
        />
        <div className="container relative px-4 pt-12 mx-auto mb-20 text-center">
          <span className="font-semibold text-blue-500" />
          <h2 className="mt-8 mb-8 text-4xl font-semibold text-white lg:mb-12 lg:text-6xl">
            <i>Don't</i> want to learn to code?
          </h2>
          <p className="max-w-3xl mx-auto mb-8 text-xl text-white opacity-50 lg:mb-12">
            Custom, affordable, digital products for your business. Ask and you
            shall receive. It's that simple. Yep yep!
          </p>
          <a
            className="relative z-10 inline-block w-full px-8 py-4 mb-2 mr-4 text-sm font-medium font-bold leading-normal text-gray-900 transition duration-200 bg-yellow-500 rounded md:w-auto md:mb-0 hover:bg-yellow-300"
            href="#"
          >
            Learn more
          </a>
        </div>
        <div className="max-w-6xl px-4 mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 mb-4 md:w-1/3 md:mb-0">
              <div className="p-8 border border-blue-800 rounded-lg">
                <span className="flex items-center justify-center w-16 h-16 mb-12 bg-teal-500 rounded-full">
                  <svg
                    width={20}
                    height={17}
                    viewBox="0 0 20 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.1614 8.05311C13.1614 9.79911 11.7454 11.2141 9.99938 11.2141C8.25338 11.2141 6.83838 9.79911 6.83838 8.05311C6.83838 6.30611 8.25338 4.89111 9.99938 4.89111C11.7454 4.89111 13.1614 6.30611 13.1614 8.05311Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.998 15.3549C13.806 15.3549 17.289 12.6169 19.25 8.05285C17.289 3.48885 13.806 0.750854 9.998 0.750854H10.002C6.194 0.750854 2.711 3.48885 0.75 8.05285C2.711 12.6169 6.194 15.3549 10.002 15.3549H9.998Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <h3 className="mb-6 text-2xl font-semibold text-white">
                  Chat to create
                </h3>
                <p className="mb-8 text-gray-500">
                  No more annoying, complicated editors! Start with a template
                  made to fit your style and business. Want to make a change to
                  fit your specific needs? Just ask us in the app, and we'll
                  take care of you right away.
                </p>
                <a
                  className="flex items-center justify-center ml-auto text-white bg-blue-800 rounded-full w-14 h-14 hover:bg-blue-700"
                  href="#"
                  data-removed="true"
                >
                  <svg
                    width={19}
                    height={13}
                    viewBox="0 0 19 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-removed="true"
                  >
                    <path
                      d="M9.7 6.74872L0.75 6.74872"
                      stroke="#45C1FF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.7002 11.7497L17.6372 6.74869L9.7002 1.74769V11.7497Z"
                      stroke="#45C1FF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="w-full px-4 mb-4 md:w-1/3 md:mb-0">
              <div className="p-8 border border-blue-800 rounded-lg">
                <span className="flex items-center justify-center w-16 h-16 mb-12 bg-orange-500 rounded-full">
                  <svg
                    width={20}
                    height={18}
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.8397 17.1642V3.54639"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.9173 13.068L14.8395 17.1647L10.7617 13.068"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.91102 0.832886V14.4507"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M0.833496 4.92894L4.91127 0.832275L8.98905 4.92894"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <h3 className="mb-6 text-2xl font-semibold text-white">
                  Transparent pricing
                </h3>
                <p className="mb-8 text-gray-500">
                  No quotes. No hourly pricing. Just simple tiers with add-ons
                  if you'd like. You can actually predict the cost for custom
                  work. Each plan comes credits you can use to request
                  customizations. They refill every month.{" "}
                </p>
                <a
                  className="flex items-center justify-center ml-auto text-white bg-blue-800 rounded-full w-14 h-14 hover:bg-blue-700"
                  href="#"
                  data-removed="true"
                >
                  <svg
                    width={19}
                    height={13}
                    viewBox="0 0 19 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.7 6.74872L0.75 6.74872"
                      stroke="#45C1FF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.7002 11.7497L17.6372 6.74869L9.7002 1.74769V11.7497Z"
                      stroke="#45C1FF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/3">
              <div className="p-8 border border-blue-800 rounded-lg">
                <span className="flex items-center justify-center w-16 h-16 mb-12 bg-red-400 rounded-full">
                  <svg
                    width={18}
                    height={20}
                    viewBox="0 0 18 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.7364 0.76187H5.0844C3.0044 0.75387 1.3004 2.41087 1.2504 4.49087V15.2279C1.2054 17.3299 2.8734 19.0699 4.9744 19.1149C5.0114 19.1149 5.0484 19.1159 5.0844 19.1149H13.0724C15.1624 19.0409 16.8144 17.3189 16.8024 15.2279V6.03787L11.7364 0.76187Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.4746 0.750122V3.65912C11.4746 5.07912 12.6236 6.23012 14.0436 6.23412H16.7976"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.64062 7.90881V13.9498"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.9864 10.2643L8.64139 7.9093L6.29639 10.2643"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <h3 className="mb-6 text-2xl font-semibold text-white">
                  You can relax
                </h3>
                <p className="mb-8 text-gray-500">
                  We include domains and hosting in every plan. No need to mess
                  with the DNS WTF anymore. We will take care of making sure
                  your site is always online and fast for your customers.
                </p>
                <a
                  className="flex items-center justify-center ml-auto text-white bg-blue-800 rounded-full w-14 h-14 hover:bg-blue-700"
                  href="#"
                  data-removed="true"
                >
                  <svg
                    width={19}
                    height={13}
                    viewBox="0 0 19 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.7 6.74872L0.75 6.74872"
                      stroke="#45C1FF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.7002 11.7497L17.6372 6.74869L9.7002 1.74769V11.7497Z"
                      stroke="#45C1FF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed top-0 bottom-0 left-0 z-50 hidden w-5/6 max-w-sm navbar-menu">
          <div className="fixed inset-0 bg-gray-800 opacity-25 navbar-backdrop" />
          <nav className="relative flex flex-col w-full h-full px-6 py-6 overflow-y-auto bg-white border-r">
            <div className="flex items-center mb-8">
              <a
                className="mr-auto text-lg font-semibold leading-none"
                href="#"
              >
                <img
                  className="h-7"
                  src="zeus-assets/logo/logo-zeus-red.svg"
                  alt
                  width="auto"
                />
              </a>
              <button className="navbar-close">
                <svg
                  className="w-6 h-6 text-gray-500 cursor-pointer hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div>
              <ul>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-medium text-gray-900 rounded hover:bg-gray-50"
                    href="#"
                  >
                    About
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-medium text-gray-900 rounded hover:bg-gray-50"
                    href="#"
                  >
                    Services
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-medium text-gray-900 rounded hover:bg-gray-50"
                    href="#"
                  >
                    Pricing
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-medium text-gray-900 rounded hover:bg-gray-50"
                    href="#"
                  >
                    Apprenticeships
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-auto">
              <div className="pt-6">
                <a
                  className="block py-3 text-sm font-semibold leading-normal text-center text-red-500 transition duration-200 rounded bg-red-50 hover:bg-red-200"
                  href="#"
                >
                  Contact Us
                </a>
              </div>
              <p className="mt-6 mb-4 text-sm text-center text-gray-500">
                <span>© 2021 All rights reserved.</span>
              </p>
            </div>
          </nav>
        </div>
      </section>
      <section class="py-20">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap -m-px">
            <div class="w-full md:w-1/2 p-px">
              <div class="text-center bg-gray-50 p-6 lg:py-12 lg:px-16 md:rounded-tr-lg hover:shadow-2xl hover:bg-white cursor-pointer">
                <span class="flex items-center justify-center w-16 h-16 mb-12 mx-auto bg-yellow-300 rounded-full text-white">
                  <svg
                    width="18"
                    height="21"
                    viewBox="0 0 18 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.98457 19.606C8.98457 19.606 16.6566 17.283 16.6566 10.879C16.6566 4.474 16.9346 3.974 16.3196 3.358C15.7036 2.742 9.99057 0.75 8.98457 0.75C7.97857 0.75 2.26557 2.742 1.65057 3.358C1.03457 3.974 1.31257 4.474 1.31257 10.879C1.31257 17.283 8.98457 19.606 8.98457 19.606Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M6.38599 9.87463L8.27799 11.7696L12.176 7.86963"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </span>
                <h3 class="mb-4 text-2xl font-semibold font-heading">
                  Web apps
                </h3>
                <p class="text-base text-gray-500">
                  Stay tuned for mobile apps! From landing pages to data
                  visualization dashboards, you can have it. Yep yep!
                </p>
              </div>
            </div>
            <div class="w-full md:w-1/2 p-px">
              <div class="text-center bg-gray-50 p-6 lg:py-12 lg:px-16 md:rounded-tr-lg hover:shadow-2xl hover:bg-white cursor-pointer">
                <span class="flex items-center justify-center w-16 h-16 mx-auto mb-12 bg-blue-400 rounded-full">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 0.750122C15.108 0.750122 19.25 4.89112 19.25 10.0001C19.25 15.1081 15.108 19.2501 10 19.2501C4.891 19.2501 0.75 15.1081 0.75 10.0001C0.75 4.89112 4.891 0.750122 10 0.750122Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M9.99512 6.20422V10.6232"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M9.995 13.7961H10.005"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </span>
                <h3 class="mb-4 text-2xl font-semibold font-heading">
                  Discord bots
                </h3>
                <p class="text-base text-gray-500">
                  Discord is a great, free resource for team communication and
                  management. Automate it using bots made with you in mind.
                </p>
              </div>
            </div>
            <div class="w-full md:w-1/2 p-px">
              <div class="text-center bg-gray-50 p-6 lg:py-12 lg:px-16 md:rounded-bl-lg hover:shadow-2xl hover:bg-white cursor-pointer">
                <span class="flex-shrink-0 flex items-center justify-center w-16 h-16 mb-12 mx-auto bg-red-400 rounded-full text-white">
                  <svg
                    width="18"
                    height="20"
                    viewBox="0 0 18 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.4235 7.4478V5.3008C13.4235 2.7878 11.3855 0.7498 8.87249 0.7498C6.35949 0.7388 4.31349 2.7668 4.30249 5.2808V5.3008V7.4478"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.6832 19.2496H5.04224C2.94824 19.2496 1.25024 17.5526 1.25024 15.4576V11.1686C1.25024 9.07359 2.94824 7.37659 5.04224 7.37659H12.6832C14.7772 7.37659 16.4752 9.07359 16.4752 11.1686V15.4576C16.4752 17.5526 14.7772 19.2496 12.6832 19.2496Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M8.86304 12.2028V14.4238"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </span>
                <h3 class="mb-4 text-2xl font-semibold font-heading">
                  Databases and APIs
                </h3>
                <p class="text-base text-gray-500">
                  Move data from app to app with ease. No tech jargon or
                  formulas required.{" "}
                </p>
              </div>
            </div>
            <div class="w-full md:w-1/2 p-px">
              <div class="text-center bg-gray-50 p-6 lg:py-12 lg:px-16 md:rounded-br-lg hover:shadow-2xl hover:bg-white cursor-pointer">
                <span class="flex items-center justify-center w-16 h-16 mb-12 mx-auto bg-orange-400 rounded-full text-white">
                  <svg
                    width="22"
                    height="20"
                    viewBox="0 0 22 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.9026 6.8512L12.4593 10.4642C11.6198 11.1302 10.4387 11.1302 9.59919 10.4642L5.11841 6.8512"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.9089 19C18.9502 19.0084 21 16.5095 21 13.4384V6.57001C21 3.49883 18.9502 1 15.9089 1H6.09114C3.04979 1 1 3.49883 1 6.57001V13.4384C1 16.5095 3.04979 19.0084 6.09114 19H15.9089Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </span>
                <h3 class="mb-4 text-2xl font-semibold font-heading">
                  And more
                </h3>
                <p class="text-base text-gray-500">
                  Use your credits to purchase changes to your projects. You can
                  also add on design or copywriting services to your membership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <img
          className="absolute top-0 left-0 hidden mt-20 lg:block"
          src="zeus-assets/icons/dots/blue-dot-left-bars.svg"
          alt
        />
        <img
          className="absolute top-0 right-0 hidden lg:block mt-52"
          src="zeus-assets/icons/dots/yellow-dot-right-shield.svg"
          alt
        />
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-12 text-center lg:mb-20">
            <span className="text-xs font-semibold text-gray-400">
              Wait, you get to help do good too? Yep yep!
            </span>
            <h2 className="mt-8 mb-10 text-4xl font-semibold text-gray-900 font-heading">
              Your projects train and level up students and recent grads
            </h2>
            <p className="text-xl text-gray-500">
              The tech industry is notoriously picky when hiring junior
              developers. We hire people who are stuck in the purgatory between
              school and their careers, provide personal training and education,
              and help them land high-paying, high-ranking positions while
              getting paid. Thanks to you, we can change lives in practical
              ways.{" "}
            </p>
          </div>
          <div className="flex flex-wrap -m-3">
            <div className="w-full p-3 md:w-1/2 lg:w-1/3">
              <div className="p-6 pb-12 text-center border rounded-xl">
                <img
                  className="object-cover w-full mx-auto mb-6 rounded-lg md:w-80 h-80"
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                  alt
                />
                <h3 className="mb-1 text-2xl font-semibold font-heading">
                  Tracy Braswell
                </h3>
                <p className="mb-8 text-gray-500">Frontend Apprentice</p>
                <div>
                  <a
                    className="inline-flex items-center justify-center w-10 h-10 mr-4 rounded-full bg-gray-50"
                    href="#"
                  >
                    <svg
                      width={7}
                      height={12}
                      viewBox="0 0 7 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.08986 11.8182V6.51068H5.90543L6.17782 4.44164H4.08986V3.12086C4.08986 2.52201 4.2587 2.1139 5.13522 2.1139L6.25131 2.11345V0.26283C6.0583 0.238228 5.39575 0.181824 4.62462 0.181824C3.01437 0.181824 1.91196 1.14588 1.91196 2.91594V4.44164H0.0908813V6.51068H1.91196V11.8182H4.08986Z"
                        fill="#758A99"
                      />
                    </svg>
                  </a>
                  <a
                    className="inline-flex items-center justify-center w-10 h-10 mr-4 rounded-full bg-gray-50"
                    href="#"
                  >
                    <svg
                      width={13}
                      height={11}
                      viewBox="0 0 13 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.5454 2.09731C12.0904 2.29895 11.6021 2.43569 11.0891 2.49674C11.6129 2.18307 12.0139 1.68553 12.2039 1.0945C11.7126 1.38499 11.1702 1.59592 10.5923 1.71026C10.1296 1.21658 9.47132 0.909088 8.74122 0.909088C7.34053 0.909088 6.20483 2.04479 6.20483 3.4447C6.20483 3.64325 6.22724 3.83717 6.27051 4.0226C4.16291 3.91675 2.29405 2.90699 1.04324 1.37262C0.824591 1.74656 0.700208 2.18228 0.700208 2.64739C0.700208 3.52737 1.14831 4.30382 1.82819 4.75808C1.41253 4.74418 1.0216 4.62984 0.679359 4.43978V4.47145C0.679359 5.69986 1.55392 6.72507 2.71356 6.9584C2.5011 7.01557 2.27706 7.04725 2.04528 7.04725C1.8815 7.04725 1.72312 7.03103 1.56782 7.00012C1.89075 8.00834 2.82714 8.74151 3.93657 8.76161C3.06895 9.44149 1.97498 9.84555 0.786753 9.84555C0.582026 9.84555 0.380369 9.83319 0.181824 9.81079C1.30439 10.5316 2.6371 10.9519 4.06946 10.9519C8.73508 10.9519 11.2854 7.08743 11.2854 3.73598L11.2769 3.40763C11.7752 3.05222 12.2063 2.60567 12.5454 2.09731Z"
                        fill="#758A99"
                      />
                    </svg>
                  </a>
                  <a
                    className="inline-flex items-center justify-center w-10 h-10 mr-4 rounded-full bg-gray-50"
                    href="#"
                  >
                    <svg
                      width={14}
                      height={14}
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.06713 0.454544H9.9328C11.9249 0.454544 13.5456 2.07521 13.5455 4.06716V9.93284C13.5455 11.9248 11.9249 13.5455 9.9328 13.5455H4.06713C2.07518 13.5455 0.45459 11.9249 0.45459 9.93284V4.06716C0.45459 2.07521 2.07518 0.454544 4.06713 0.454544ZM9.9329 12.384C11.2845 12.384 12.3841 11.2844 12.3841 9.93283H12.384V4.06716C12.384 2.71565 11.2844 1.61603 9.93282 1.61603H4.06715C2.71564 1.61603 1.61609 2.71565 1.61609 4.06716V9.93283C1.61609 11.2844 2.71564 12.384 4.06715 12.384H9.9329ZM3.57148 7.00007C3.57148 5.10948 5.10951 3.57142 7.00005 3.57142C8.8906 3.57142 10.4286 5.10948 10.4286 7.00007C10.4286 8.89058 8.8906 10.4286 7.00005 10.4286C5.10951 10.4286 3.57148 8.89058 3.57148 7.00007ZM4.75203 6.99999C4.75203 8.23952 5.76054 9.2479 7.00004 9.2479C8.23955 9.2479 9.24806 8.23952 9.24806 6.99999C9.24806 5.76038 8.23963 4.75192 7.00004 4.75192C5.76046 4.75192 4.75203 5.76038 4.75203 6.99999Z"
                        fill="#758A99"
                      />
                    </svg>
                  </a>
                  <a
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-50"
                    href="#"
                  >
                    <svg
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8 0H1.2C0.54 0 0 0.54 0 1.2V10.8C0 11.46 0.54 12 1.2 12H10.8C11.46 12 12 11.46 12 10.8V1.2C12 0.54 11.46 0 10.8 0ZM3.6 10.2H1.8V4.8H3.6V10.2ZM2.7 3.78C2.1 3.78 1.62 3.3 1.62 2.7C1.62 2.1 2.1 1.62 2.7 1.62C3.3 1.62 3.78 2.1 3.78 2.7C3.78 3.3 3.3 3.78 2.7 3.78ZM10.2 10.2H8.4V7.02C8.4 6.54002 7.98 6.12 7.5 6.12C7.02 6.12 6.6 6.54002 6.6 7.02V10.2H4.8V4.8H6.6V5.52C6.9 5.04 7.56 4.68 8.1 4.68C9.24 4.68 10.2 5.64 10.2 6.78V10.2Z"
                        fill="#758A99"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full p-3 md:w-1/2 lg:w-1/3">
              <div className="p-6 pb-12 text-center border rounded-xl">
                <img
                  className="object-cover w-full mx-auto mb-6 rounded-lg md:w-80 h-80"
                  src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  alt
                />
                <h3 className="mb-1 text-2xl font-semibold font-heading">
                  Robert Fox
                </h3>
                <p className="mb-8 text-gray-500">Design apprentice</p>
                <div>
                  <a
                    className="inline-flex items-center justify-center w-10 h-10 mr-4 rounded-full bg-gray-50"
                    href="#"
                  >
                    <svg
                      width={7}
                      height={12}
                      viewBox="0 0 7 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.08986 11.8182V6.51068H5.90543L6.17782 4.44164H4.08986V3.12086C4.08986 2.52201 4.2587 2.1139 5.13522 2.1139L6.25131 2.11345V0.26283C6.0583 0.238228 5.39575 0.181824 4.62462 0.181824C3.01437 0.181824 1.91196 1.14588 1.91196 2.91594V4.44164H0.0908813V6.51068H1.91196V11.8182H4.08986Z"
                        fill="#758A99"
                      />
                    </svg>
                  </a>
                  <a
                    className="inline-flex items-center justify-center w-10 h-10 mr-4 rounded-full bg-gray-50"
                    href="#"
                  >
                    <svg
                      width={13}
                      height={11}
                      viewBox="0 0 13 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.5454 2.09731C12.0904 2.29895 11.6021 2.43569 11.0891 2.49674C11.6129 2.18307 12.0139 1.68553 12.2039 1.0945C11.7126 1.38499 11.1702 1.59592 10.5923 1.71026C10.1296 1.21658 9.47132 0.909088 8.74122 0.909088C7.34053 0.909088 6.20483 2.04479 6.20483 3.4447C6.20483 3.64325 6.22724 3.83717 6.27051 4.0226C4.16291 3.91675 2.29405 2.90699 1.04324 1.37262C0.824591 1.74656 0.700208 2.18228 0.700208 2.64739C0.700208 3.52737 1.14831 4.30382 1.82819 4.75808C1.41253 4.74418 1.0216 4.62984 0.679359 4.43978V4.47145C0.679359 5.69986 1.55392 6.72507 2.71356 6.9584C2.5011 7.01557 2.27706 7.04725 2.04528 7.04725C1.8815 7.04725 1.72312 7.03103 1.56782 7.00012C1.89075 8.00834 2.82714 8.74151 3.93657 8.76161C3.06895 9.44149 1.97498 9.84555 0.786753 9.84555C0.582026 9.84555 0.380369 9.83319 0.181824 9.81079C1.30439 10.5316 2.6371 10.9519 4.06946 10.9519C8.73508 10.9519 11.2854 7.08743 11.2854 3.73598L11.2769 3.40763C11.7752 3.05222 12.2063 2.60567 12.5454 2.09731Z"
                        fill="#758A99"
                      />
                    </svg>
                  </a>
                  <a
                    className="inline-flex items-center justify-center w-10 h-10 mr-4 rounded-full bg-gray-50"
                    href="#"
                  >
                    <svg
                      width={14}
                      height={14}
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.06713 0.454544H9.9328C11.9249 0.454544 13.5456 2.07521 13.5455 4.06716V9.93284C13.5455 11.9248 11.9249 13.5455 9.9328 13.5455H4.06713C2.07518 13.5455 0.45459 11.9249 0.45459 9.93284V4.06716C0.45459 2.07521 2.07518 0.454544 4.06713 0.454544ZM9.9329 12.384C11.2845 12.384 12.3841 11.2844 12.3841 9.93283H12.384V4.06716C12.384 2.71565 11.2844 1.61603 9.93282 1.61603H4.06715C2.71564 1.61603 1.61609 2.71565 1.61609 4.06716V9.93283C1.61609 11.2844 2.71564 12.384 4.06715 12.384H9.9329ZM3.57148 7.00007C3.57148 5.10948 5.10951 3.57142 7.00005 3.57142C8.8906 3.57142 10.4286 5.10948 10.4286 7.00007C10.4286 8.89058 8.8906 10.4286 7.00005 10.4286C5.10951 10.4286 3.57148 8.89058 3.57148 7.00007ZM4.75203 6.99999C4.75203 8.23952 5.76054 9.2479 7.00004 9.2479C8.23955 9.2479 9.24806 8.23952 9.24806 6.99999C9.24806 5.76038 8.23963 4.75192 7.00004 4.75192C5.76046 4.75192 4.75203 5.76038 4.75203 6.99999Z"
                        fill="#758A99"
                      />
                    </svg>
                  </a>
                  <a
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-50"
                    href="#"
                  >
                    <svg
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8 0H1.2C0.54 0 0 0.54 0 1.2V10.8C0 11.46 0.54 12 1.2 12H10.8C11.46 12 12 11.46 12 10.8V1.2C12 0.54 11.46 0 10.8 0ZM3.6 10.2H1.8V4.8H3.6V10.2ZM2.7 3.78C2.1 3.78 1.62 3.3 1.62 2.7C1.62 2.1 2.1 1.62 2.7 1.62C3.3 1.62 3.78 2.1 3.78 2.7C3.78 3.3 3.3 3.78 2.7 3.78ZM10.2 10.2H8.4V7.02C8.4 6.54002 7.98 6.12 7.5 6.12C7.02 6.12 6.6 6.54002 6.6 7.02V10.2H4.8V4.8H6.6V5.52C6.9 5.04 7.56 4.68 8.1 4.68C9.24 4.68 10.2 5.64 10.2 6.78V10.2Z"
                        fill="#758A99"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full p-3 md:w-1/2 lg:w-1/3">
              <div className="p-6 pb-12 text-center border rounded-xl">
                <img
                  className="object-cover w-full mx-auto mb-6 rounded-lg md:w-80 h-80"
                  src="https://images.unsplash.com/photo-1525129498994-580709352e20?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  alt
                />
                <h3 className="mb-1 text-2xl font-semibold font-heading">
                  Esther Howards
                </h3>
                <p className="mb-8 text-gray-500">Marketing apprentice</p>
                <div>
                  <a
                    className="inline-flex items-center justify-center w-10 h-10 mr-4 rounded-full bg-gray-50"
                    href="#"
                  >
                    <svg
                      width={7}
                      height={12}
                      viewBox="0 0 7 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.08986 11.8182V6.51068H5.90543L6.17782 4.44164H4.08986V3.12086C4.08986 2.52201 4.2587 2.1139 5.13522 2.1139L6.25131 2.11345V0.26283C6.0583 0.238228 5.39575 0.181824 4.62462 0.181824C3.01437 0.181824 1.91196 1.14588 1.91196 2.91594V4.44164H0.0908813V6.51068H1.91196V11.8182H4.08986Z"
                        fill="#758A99"
                      />
                    </svg>
                  </a>
                  <a
                    className="inline-flex items-center justify-center w-10 h-10 mr-4 rounded-full bg-gray-50"
                    href="#"
                  >
                    <svg
                      width={13}
                      height={11}
                      viewBox="0 0 13 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.5454 2.09731C12.0904 2.29895 11.6021 2.43569 11.0891 2.49674C11.6129 2.18307 12.0139 1.68553 12.2039 1.0945C11.7126 1.38499 11.1702 1.59592 10.5923 1.71026C10.1296 1.21658 9.47132 0.909088 8.74122 0.909088C7.34053 0.909088 6.20483 2.04479 6.20483 3.4447C6.20483 3.64325 6.22724 3.83717 6.27051 4.0226C4.16291 3.91675 2.29405 2.90699 1.04324 1.37262C0.824591 1.74656 0.700208 2.18228 0.700208 2.64739C0.700208 3.52737 1.14831 4.30382 1.82819 4.75808C1.41253 4.74418 1.0216 4.62984 0.679359 4.43978V4.47145C0.679359 5.69986 1.55392 6.72507 2.71356 6.9584C2.5011 7.01557 2.27706 7.04725 2.04528 7.04725C1.8815 7.04725 1.72312 7.03103 1.56782 7.00012C1.89075 8.00834 2.82714 8.74151 3.93657 8.76161C3.06895 9.44149 1.97498 9.84555 0.786753 9.84555C0.582026 9.84555 0.380369 9.83319 0.181824 9.81079C1.30439 10.5316 2.6371 10.9519 4.06946 10.9519C8.73508 10.9519 11.2854 7.08743 11.2854 3.73598L11.2769 3.40763C11.7752 3.05222 12.2063 2.60567 12.5454 2.09731Z"
                        fill="#758A99"
                      />
                    </svg>
                  </a>
                  <a
                    className="inline-flex items-center justify-center w-10 h-10 mr-4 rounded-full bg-gray-50"
                    href="#"
                  >
                    <svg
                      width={14}
                      height={14}
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.06713 0.454544H9.9328C11.9249 0.454544 13.5456 2.07521 13.5455 4.06716V9.93284C13.5455 11.9248 11.9249 13.5455 9.9328 13.5455H4.06713C2.07518 13.5455 0.45459 11.9249 0.45459 9.93284V4.06716C0.45459 2.07521 2.07518 0.454544 4.06713 0.454544ZM9.9329 12.384C11.2845 12.384 12.3841 11.2844 12.3841 9.93283H12.384V4.06716C12.384 2.71565 11.2844 1.61603 9.93282 1.61603H4.06715C2.71564 1.61603 1.61609 2.71565 1.61609 4.06716V9.93283C1.61609 11.2844 2.71564 12.384 4.06715 12.384H9.9329ZM3.57148 7.00007C3.57148 5.10948 5.10951 3.57142 7.00005 3.57142C8.8906 3.57142 10.4286 5.10948 10.4286 7.00007C10.4286 8.89058 8.8906 10.4286 7.00005 10.4286C5.10951 10.4286 3.57148 8.89058 3.57148 7.00007ZM4.75203 6.99999C4.75203 8.23952 5.76054 9.2479 7.00004 9.2479C8.23955 9.2479 9.24806 8.23952 9.24806 6.99999C9.24806 5.76038 8.23963 4.75192 7.00004 4.75192C5.76046 4.75192 4.75203 5.76038 4.75203 6.99999Z"
                        fill="#758A99"
                      />
                    </svg>
                  </a>
                  <a
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-50"
                    href="#"
                  >
                    <svg
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8 0H1.2C0.54 0 0 0.54 0 1.2V10.8C0 11.46 0.54 12 1.2 12H10.8C11.46 12 12 11.46 12 10.8V1.2C12 0.54 11.46 0 10.8 0ZM3.6 10.2H1.8V4.8H3.6V10.2ZM2.7 3.78C2.1 3.78 1.62 3.3 1.62 2.7C1.62 2.1 2.1 1.62 2.7 1.62C3.3 1.62 3.78 2.1 3.78 2.7C3.78 3.3 3.3 3.78 2.7 3.78ZM10.2 10.2H8.4V7.02C8.4 6.54002 7.98 6.12 7.5 6.12C7.02 6.12 6.6 6.54002 6.6 7.02V10.2H4.8V4.8H6.6V5.52C6.9 5.04 7.56 4.68 8.1 4.68C9.24 4.68 10.2 5.64 10.2 6.78V10.2Z"
                        fill="#758A99"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full p-3 md:w-1/2 lg:w-1/3">
              <div className="p-6 pb-12 text-center border rounded-xl">
                <img
                  className="object-cover w-full mx-auto mb-6 rounded-lg md:w-80 h-80"
                  src="https://images.unsplash.com/photo-1524508762098-fd966ffb6ef9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  alt
                />
                <h3 className="mb-1 text-2xl font-semibold font-heading">
                  Ralp Edwards
                </h3>
                <p className="mb-8 text-gray-500">
                  Mobile Development Apprentice
                </p>
                <div>
                  <a
                    className="inline-flex items-center justify-center w-10 h-10 mr-4 rounded-full bg-gray-50"
                    href="#"
                  >
                    <svg
                      width={7}
                      height={12}
                      viewBox="0 0 7 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.08986 11.8182V6.51068H5.90543L6.17782 4.44164H4.08986V3.12086C4.08986 2.52201 4.2587 2.1139 5.13522 2.1139L6.25131 2.11345V0.26283C6.0583 0.238228 5.39575 0.181824 4.62462 0.181824C3.01437 0.181824 1.91196 1.14588 1.91196 2.91594V4.44164H0.0908813V6.51068H1.91196V11.8182H4.08986Z"
                        fill="#758A99"
                      />
                    </svg>
                  </a>
                  <a
                    className="inline-flex items-center justify-center w-10 h-10 mr-4 rounded-full bg-gray-50"
                    href="#"
                  >
                    <svg
                      width={13}
                      height={11}
                      viewBox="0 0 13 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.5454 2.09731C12.0904 2.29895 11.6021 2.43569 11.0891 2.49674C11.6129 2.18307 12.0139 1.68553 12.2039 1.0945C11.7126 1.38499 11.1702 1.59592 10.5923 1.71026C10.1296 1.21658 9.47132 0.909088 8.74122 0.909088C7.34053 0.909088 6.20483 2.04479 6.20483 3.4447C6.20483 3.64325 6.22724 3.83717 6.27051 4.0226C4.16291 3.91675 2.29405 2.90699 1.04324 1.37262C0.824591 1.74656 0.700208 2.18228 0.700208 2.64739C0.700208 3.52737 1.14831 4.30382 1.82819 4.75808C1.41253 4.74418 1.0216 4.62984 0.679359 4.43978V4.47145C0.679359 5.69986 1.55392 6.72507 2.71356 6.9584C2.5011 7.01557 2.27706 7.04725 2.04528 7.04725C1.8815 7.04725 1.72312 7.03103 1.56782 7.00012C1.89075 8.00834 2.82714 8.74151 3.93657 8.76161C3.06895 9.44149 1.97498 9.84555 0.786753 9.84555C0.582026 9.84555 0.380369 9.83319 0.181824 9.81079C1.30439 10.5316 2.6371 10.9519 4.06946 10.9519C8.73508 10.9519 11.2854 7.08743 11.2854 3.73598L11.2769 3.40763C11.7752 3.05222 12.2063 2.60567 12.5454 2.09731Z"
                        fill="#758A99"
                      />
                    </svg>
                  </a>
                  <a
                    className="inline-flex items-center justify-center w-10 h-10 mr-4 rounded-full bg-gray-50"
                    href="#"
                  >
                    <svg
                      width={14}
                      height={14}
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.06713 0.454544H9.9328C11.9249 0.454544 13.5456 2.07521 13.5455 4.06716V9.93284C13.5455 11.9248 11.9249 13.5455 9.9328 13.5455H4.06713C2.07518 13.5455 0.45459 11.9249 0.45459 9.93284V4.06716C0.45459 2.07521 2.07518 0.454544 4.06713 0.454544ZM9.9329 12.384C11.2845 12.384 12.3841 11.2844 12.3841 9.93283H12.384V4.06716C12.384 2.71565 11.2844 1.61603 9.93282 1.61603H4.06715C2.71564 1.61603 1.61609 2.71565 1.61609 4.06716V9.93283C1.61609 11.2844 2.71564 12.384 4.06715 12.384H9.9329ZM3.57148 7.00007C3.57148 5.10948 5.10951 3.57142 7.00005 3.57142C8.8906 3.57142 10.4286 5.10948 10.4286 7.00007C10.4286 8.89058 8.8906 10.4286 7.00005 10.4286C5.10951 10.4286 3.57148 8.89058 3.57148 7.00007ZM4.75203 6.99999C4.75203 8.23952 5.76054 9.2479 7.00004 9.2479C8.23955 9.2479 9.24806 8.23952 9.24806 6.99999C9.24806 5.76038 8.23963 4.75192 7.00004 4.75192C5.76046 4.75192 4.75203 5.76038 4.75203 6.99999Z"
                        fill="#758A99"
                      />
                    </svg>
                  </a>
                  <a
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-50"
                    href="#"
                  >
                    <svg
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8 0H1.2C0.54 0 0 0.54 0 1.2V10.8C0 11.46 0.54 12 1.2 12H10.8C11.46 12 12 11.46 12 10.8V1.2C12 0.54 11.46 0 10.8 0ZM3.6 10.2H1.8V4.8H3.6V10.2ZM2.7 3.78C2.1 3.78 1.62 3.3 1.62 2.7C1.62 2.1 2.1 1.62 2.7 1.62C3.3 1.62 3.78 2.1 3.78 2.7C3.78 3.3 3.3 3.78 2.7 3.78ZM10.2 10.2H8.4V7.02C8.4 6.54002 7.98 6.12 7.5 6.12C7.02 6.12 6.6 6.54002 6.6 7.02V10.2H4.8V4.8H6.6V5.52C6.9 5.04 7.56 4.68 8.1 4.68C9.24 4.68 10.2 5.64 10.2 6.78V10.2Z"
                        fill="#758A99"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full p-3 md:w-1/2 lg:w-1/3">
              <div className="p-6 pb-12 text-center border rounded-xl">
                <img
                  className="object-cover w-full mx-auto mb-6 rounded-lg md:w-80 h-80"
                  src="https://images.unsplash.com/photo-1544717305-996b815c338c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                  alt
                />
                <h3 className="mb-1 text-2xl font-semibold font-heading">
                  Danny Bailey
                </h3>
                <p className="mb-8 text-gray-500">Data Science Apprentice</p>
                <div>
                  <a
                    className="inline-flex items-center justify-center w-10 h-10 mr-4 rounded-full bg-gray-50"
                    href="#"
                  >
                    <svg
                      width={7}
                      height={12}
                      viewBox="0 0 7 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.08986 11.8182V6.51068H5.90543L6.17782 4.44164H4.08986V3.12086C4.08986 2.52201 4.2587 2.1139 5.13522 2.1139L6.25131 2.11345V0.26283C6.0583 0.238228 5.39575 0.181824 4.62462 0.181824C3.01437 0.181824 1.91196 1.14588 1.91196 2.91594V4.44164H0.0908813V6.51068H1.91196V11.8182H4.08986Z"
                        fill="#758A99"
                      />
                    </svg>
                  </a>
                  <a
                    className="inline-flex items-center justify-center w-10 h-10 mr-4 rounded-full bg-gray-50"
                    href="#"
                  >
                    <svg
                      width={13}
                      height={11}
                      viewBox="0 0 13 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.5454 2.09731C12.0904 2.29895 11.6021 2.43569 11.0891 2.49674C11.6129 2.18307 12.0139 1.68553 12.2039 1.0945C11.7126 1.38499 11.1702 1.59592 10.5923 1.71026C10.1296 1.21658 9.47132 0.909088 8.74122 0.909088C7.34053 0.909088 6.20483 2.04479 6.20483 3.4447C6.20483 3.64325 6.22724 3.83717 6.27051 4.0226C4.16291 3.91675 2.29405 2.90699 1.04324 1.37262C0.824591 1.74656 0.700208 2.18228 0.700208 2.64739C0.700208 3.52737 1.14831 4.30382 1.82819 4.75808C1.41253 4.74418 1.0216 4.62984 0.679359 4.43978V4.47145C0.679359 5.69986 1.55392 6.72507 2.71356 6.9584C2.5011 7.01557 2.27706 7.04725 2.04528 7.04725C1.8815 7.04725 1.72312 7.03103 1.56782 7.00012C1.89075 8.00834 2.82714 8.74151 3.93657 8.76161C3.06895 9.44149 1.97498 9.84555 0.786753 9.84555C0.582026 9.84555 0.380369 9.83319 0.181824 9.81079C1.30439 10.5316 2.6371 10.9519 4.06946 10.9519C8.73508 10.9519 11.2854 7.08743 11.2854 3.73598L11.2769 3.40763C11.7752 3.05222 12.2063 2.60567 12.5454 2.09731Z"
                        fill="#758A99"
                      />
                    </svg>
                  </a>
                  <a
                    className="inline-flex items-center justify-center w-10 h-10 mr-4 rounded-full bg-gray-50"
                    href="#"
                  >
                    <svg
                      width={14}
                      height={14}
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.06713 0.454544H9.9328C11.9249 0.454544 13.5456 2.07521 13.5455 4.06716V9.93284C13.5455 11.9248 11.9249 13.5455 9.9328 13.5455H4.06713C2.07518 13.5455 0.45459 11.9249 0.45459 9.93284V4.06716C0.45459 2.07521 2.07518 0.454544 4.06713 0.454544ZM9.9329 12.384C11.2845 12.384 12.3841 11.2844 12.3841 9.93283H12.384V4.06716C12.384 2.71565 11.2844 1.61603 9.93282 1.61603H4.06715C2.71564 1.61603 1.61609 2.71565 1.61609 4.06716V9.93283C1.61609 11.2844 2.71564 12.384 4.06715 12.384H9.9329ZM3.57148 7.00007C3.57148 5.10948 5.10951 3.57142 7.00005 3.57142C8.8906 3.57142 10.4286 5.10948 10.4286 7.00007C10.4286 8.89058 8.8906 10.4286 7.00005 10.4286C5.10951 10.4286 3.57148 8.89058 3.57148 7.00007ZM4.75203 6.99999C4.75203 8.23952 5.76054 9.2479 7.00004 9.2479C8.23955 9.2479 9.24806 8.23952 9.24806 6.99999C9.24806 5.76038 8.23963 4.75192 7.00004 4.75192C5.76046 4.75192 4.75203 5.76038 4.75203 6.99999Z"
                        fill="#758A99"
                      />
                    </svg>
                  </a>
                  <a
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-50"
                    href="#"
                  >
                    <svg
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8 0H1.2C0.54 0 0 0.54 0 1.2V10.8C0 11.46 0.54 12 1.2 12H10.8C11.46 12 12 11.46 12 10.8V1.2C12 0.54 11.46 0 10.8 0ZM3.6 10.2H1.8V4.8H3.6V10.2ZM2.7 3.78C2.1 3.78 1.62 3.3 1.62 2.7C1.62 2.1 2.1 1.62 2.7 1.62C3.3 1.62 3.78 2.1 3.78 2.7C3.78 3.3 3.3 3.78 2.7 3.78ZM10.2 10.2H8.4V7.02C8.4 6.54002 7.98 6.12 7.5 6.12C7.02 6.12 6.6 6.54002 6.6 7.02V10.2H4.8V4.8H6.6V5.52C6.9 5.04 7.56 4.68 8.1 4.68C9.24 4.68 10.2 5.64 10.2 6.78V10.2Z"
                        fill="#758A99"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full p-3 md:w-1/2 lg:w-1/3">
              <div className="p-6 pb-12 text-center border rounded-xl">
                <img
                  className="object-cover w-full mx-auto mb-6 rounded-lg md:w-80 h-80"
                  src="https://images.unsplash.com/photo-1544717305-f9c88f2897bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  alt
                />
                <h3 className="mb-1 text-2xl font-semibold font-heading">
                  Jane Cooper
                </h3>
                <p className="mb-8 text-gray-500">Backend Apprentice</p>
                <div>
                  <a
                    className="inline-flex items-center justify-center w-10 h-10 mr-4 rounded-full bg-gray-50"
                    href="#"
                  >
                    <svg
                      width={7}
                      height={12}
                      viewBox="0 0 7 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.08986 11.8182V6.51068H5.90543L6.17782 4.44164H4.08986V3.12086C4.08986 2.52201 4.2587 2.1139 5.13522 2.1139L6.25131 2.11345V0.26283C6.0583 0.238228 5.39575 0.181824 4.62462 0.181824C3.01437 0.181824 1.91196 1.14588 1.91196 2.91594V4.44164H0.0908813V6.51068H1.91196V11.8182H4.08986Z"
                        fill="#758A99"
                      />
                    </svg>
                  </a>
                  <a
                    className="inline-flex items-center justify-center w-10 h-10 mr-4 rounded-full bg-gray-50"
                    href="#"
                  >
                    <svg
                      width={13}
                      height={11}
                      viewBox="0 0 13 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.5454 2.09731C12.0904 2.29895 11.6021 2.43569 11.0891 2.49674C11.6129 2.18307 12.0139 1.68553 12.2039 1.0945C11.7126 1.38499 11.1702 1.59592 10.5923 1.71026C10.1296 1.21658 9.47132 0.909088 8.74122 0.909088C7.34053 0.909088 6.20483 2.04479 6.20483 3.4447C6.20483 3.64325 6.22724 3.83717 6.27051 4.0226C4.16291 3.91675 2.29405 2.90699 1.04324 1.37262C0.824591 1.74656 0.700208 2.18228 0.700208 2.64739C0.700208 3.52737 1.14831 4.30382 1.82819 4.75808C1.41253 4.74418 1.0216 4.62984 0.679359 4.43978V4.47145C0.679359 5.69986 1.55392 6.72507 2.71356 6.9584C2.5011 7.01557 2.27706 7.04725 2.04528 7.04725C1.8815 7.04725 1.72312 7.03103 1.56782 7.00012C1.89075 8.00834 2.82714 8.74151 3.93657 8.76161C3.06895 9.44149 1.97498 9.84555 0.786753 9.84555C0.582026 9.84555 0.380369 9.83319 0.181824 9.81079C1.30439 10.5316 2.6371 10.9519 4.06946 10.9519C8.73508 10.9519 11.2854 7.08743 11.2854 3.73598L11.2769 3.40763C11.7752 3.05222 12.2063 2.60567 12.5454 2.09731Z"
                        fill="#758A99"
                      />
                    </svg>
                  </a>
                  <a
                    className="inline-flex items-center justify-center w-10 h-10 mr-4 rounded-full bg-gray-50"
                    href="#"
                  >
                    <svg
                      width={14}
                      height={14}
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.06713 0.454544H9.9328C11.9249 0.454544 13.5456 2.07521 13.5455 4.06716V9.93284C13.5455 11.9248 11.9249 13.5455 9.9328 13.5455H4.06713C2.07518 13.5455 0.45459 11.9249 0.45459 9.93284V4.06716C0.45459 2.07521 2.07518 0.454544 4.06713 0.454544ZM9.9329 12.384C11.2845 12.384 12.3841 11.2844 12.3841 9.93283H12.384V4.06716C12.384 2.71565 11.2844 1.61603 9.93282 1.61603H4.06715C2.71564 1.61603 1.61609 2.71565 1.61609 4.06716V9.93283C1.61609 11.2844 2.71564 12.384 4.06715 12.384H9.9329ZM3.57148 7.00007C3.57148 5.10948 5.10951 3.57142 7.00005 3.57142C8.8906 3.57142 10.4286 5.10948 10.4286 7.00007C10.4286 8.89058 8.8906 10.4286 7.00005 10.4286C5.10951 10.4286 3.57148 8.89058 3.57148 7.00007ZM4.75203 6.99999C4.75203 8.23952 5.76054 9.2479 7.00004 9.2479C8.23955 9.2479 9.24806 8.23952 9.24806 6.99999C9.24806 5.76038 8.23963 4.75192 7.00004 4.75192C5.76046 4.75192 4.75203 5.76038 4.75203 6.99999Z"
                        fill="#758A99"
                      />
                    </svg>
                  </a>
                  <a
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-50"
                    href="#"
                  >
                    <svg
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8 0H1.2C0.54 0 0 0.54 0 1.2V10.8C0 11.46 0.54 12 1.2 12H10.8C11.46 12 12 11.46 12 10.8V1.2C12 0.54 11.46 0 10.8 0ZM3.6 10.2H1.8V4.8H3.6V10.2ZM2.7 3.78C2.1 3.78 1.62 3.3 1.62 2.7C1.62 2.1 2.1 1.62 2.7 1.62C3.3 1.62 3.78 2.1 3.78 2.7C3.78 3.3 3.3 3.78 2.7 3.78ZM10.2 10.2H8.4V7.02C8.4 6.54002 7.98 6.12 7.5 6.12C7.02 6.12 6.6 6.54002 6.6 7.02V10.2H4.8V4.8H6.6V5.52C6.9 5.04 7.56 4.68 8.1 4.68C9.24 4.68 10.2 5.64 10.2 6.78V10.2Z"
                        fill="#758A99"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <img
          className="absolute top-0 left-0 hidden mt-64 lg:block"
          src="zeus-assets/icons/dots/blue-dot-left-bars.svg"
          alt
        />
        <img
          className="absolute top-0 right-0 hidden mt-40 lg:block"
          src="zeus-assets/icons/dots/yellow-dot-right-shield.svg"
          alt
        />
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto mb-20 text-center">
            <span className="text-xs font-semibold text-gray-300">
              Have we got a treat for you.
            </span>
            <h2 className="mt-8 mb-10 text-4xl font-semibold text-gray-900 font-heading">
              Combos
            </h2>
            <p className="mb-16 text-xl text-gray-500">
              With combos, your technology needs are as easy as 1, 2, 3.
            </p>
            <div className="p-1 mx-auto rounded max-w-max bg-gray-50">
              <button className="px-10 py-4 text-sm font-semibold leading-normal bg-white rounded">
                Monthly
              </button>
              <button className="px-10 py-4 text-sm font-semibold leading-normal text-gray-500 hover:text-gray-900">
                Yearly
              </button>
            </div>
          </div>
          <div className="flex flex-wrap items-center -mx-3">
            <div className="w-full px-3 mb-6 lg:w-1/3 lg:mb-0">
              <div className="px-8 pt-12 pb-8 text-gray-900 border rounded-xl lg:text-center">
                <h3 className="mb-6 font-medium text-gray-500">#1 Combo</h3>
                <div className="flex mb-8 lg:justify-center">
                  <span className="self-start inline-block mr-1 text-xl font-semibold text-gray-500">
                    $
                  </span>
                  <p className="self-end text-5xl font-semibold font-heading">
                    25.00
                  </p>
                </div>
                <ul className="mb-6 text-left">
                  <li className="flex items-center py-4 border-b">
                    <svg
                      className="mr-2"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z"
                        fill="#45C1FF"
                      />
                    </svg>
                    <p className="font-medium">Domain/hosting for 1 project</p>
                  </li>
                  <li className="flex items-center py-4 border-b">
                    <svg
                      className="mr-2"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z"
                        fill="#45C1FF"
                      />
                    </svg>
                    <p className="font-medium">Access to source code</p>
                  </li>
                  <li className="flex items-center py-4 border-b">
                    <svg
                      className="mr-2"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z"
                        fill="#45C1FF"
                      />
                    </svg>
                    <p className="font-medium font-bold">5 credits per month</p>
                  </li>
                  <li className="flex items-center py-4 mb-8">
                    <svg
                      className="mr-2"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z"
                        fill="#45C1FF"
                      />
                    </svg>
                    <p className="font-medium">Direct access to developers</p>
                  </li>
                </ul>
                <a
                  className="block py-4 text-sm font-medium leading-normal text-center text-white transition duration-200 bg-orange-400 rounded"
                  href="#"
                >
                  Express interest
                </a>
              </div>
            </div>
            <div className="w-full px-3 mb-6 lg:w-1/3 lg:mb-0">
              <div className="px-8 pt-12 pb-8 text-gray-900 bg-yellow-300 rounded-xl lg:text-center">
                <h3 className="mb-6 font-medium text-gray-700">#2 Combo</h3>
                <div className="flex mb-8 lg:justify-center">
                  <span className="self-start inline-block mr-1 text-xl font-semibold">
                    $
                  </span>
                  <p className="self-end text-5xl font-semibold">50.00</p>
                </div>
                <ul className="mb-6 text-left">
                  <li className="flex items-center py-4 border-b border-red-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z"
                        fill="#0a2463"
                      />
                    </svg>
                    <p className="font-medium">Domain/hosting for 2 projects</p>
                  </li>
                  <li className="flex items-center py-4 border-b border-red-400">
                    <svg
                      className="mr-2"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z"
                        fill="#45C1FF"
                      />
                    </svg>
                    <p className="font-medium">Access to source code</p>
                  </li>
                  <li
                    className="flex items-center py-4 border-b border-red-400"
                    data-removed="true"
                  >
                    <svg
                      className="mr-2"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z"
                        fill="#45C1FF"
                        data-removed="true"
                      />
                    </svg>
                    <p className="font-medium" data-removed="true">
                      100GB cloud storage
                    </p>
                  </li>
                  <li className="flex items-center py-4 border-b border-red-400">
                    <svg
                      className="mr-2"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z"
                        fill="#45C1FF"
                      />
                    </svg>
                    <p className="font-medium font-bold">
                      10 credits per month
                    </p>
                  </li>
                  <li className="flex items-center py-4 mb-8">
                    <svg
                      className="mr-2"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z"
                        fill="#45C1FF"
                      />
                    </svg>
                    <p className="font-medium">Direct access to developers</p>
                  </li>
                </ul>
                <a
                  className="inline-block w-full py-4 text-sm font-medium font-bold leading-normal text-center text-white transition duration-200 bg-gray-900 rounded hover:bg-gray-600"
                  href="#"
                >
                  Express interest
                </a>
              </div>
            </div>
            <div className="w-full px-3 mb-6 lg:w-1/3 lg:mb-0">
              <div className="px-8 pt-12 pb-8 text-gray-900 border rounded-xl lg:text-center">
                <h3 className="mb-6 font-medium text-gray-500">#3 Combo</h3>
                <div className="flex mb-8 lg:justify-center">
                  <span className="self-start inline-block mr-1 text-xl font-semibold text-gray-500">
                    $
                  </span>
                  <p className="self-end text-5xl font-semibold font-heading">
                    75.00
                  </p>
                </div>
                <ul className="mb-6 -mx-8 text-left">
                  <li className="flex items-center py-4 pl-8 border-b">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z"
                        fill="#0a2463"
                      />
                    </svg>
                    <p className="font-medium">Domain/hosting for 3 projects</p>
                  </li>
                  <li className="flex items-center py-4 pl-8 border-b">
                    <svg
                      className="mr-2"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z"
                        fill="#45C1FF"
                      />
                    </svg>
                    <p className="font-medium">Working materials in Figma</p>
                  </li>
                  <li className="flex items-center py-4 pl-8 border-b">
                    <svg
                      className="mr-2"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z"
                        fill="#45C1FF"
                      />
                    </svg>
                    <p className="font-medium">18 credits per month</p>
                  </li>
                  <li className="flex items-center py-4 pl-8 mb-8">
                    <svg
                      className="mr-2"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z"
                        fill="#45C1FF"
                      />
                    </svg>
                    <p className="font-medium">Direct access to developers</p>
                  </li>
                </ul>
                <a
                  className="inline-block w-full py-4 text-sm font-medium leading-normal text-center text-white transition duration-200 bg-orange-400 rounded hover:bg-red-300"
                  href="#"
                >
                  Express interest
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-2/6">
              <a
                className="inline-block mb-6 text-lg font-semibold text-gray-900"
                href="#"
              >
                <img
                  className="h-7"
                  src="zeus-assets/logo/logo-zeus-red.svg"
                  alt
                  width="auto"
                />
              </a>
              <p className="hidden text-sm text-gray-500 lg:block">
                YEPYEP is a product by IDS Solutions All rights reserved © IDS
                Solutions LLC 2021
              </p>
            </div>
            <div className="w-full px-4 lg:w-4/6">
              <div className="flex flex-wrap items-center justify-end">
                <ul className="inline-flex flex-wrap w-full mb-4 lg:w-auto lg:mb-0 md:mr-6 lg:mr-12">
                  <li className="mb-2 mr-12 md:mb-0">
                    <a
                      className="text-sm font-medium"
                      href="#"
                      data-removed="true"
                    >
                      About
                    </a>
                  </li>
                  <li className="mb-2 mr-12 md:mb-0">
                    <a className="text-sm font-medium" href="#">
                      Services
                    </a>
                  </li>
                  <li className="mb-2 mr-12 md:mb-0">
                    <a className="text-sm font-medium" href="#">
                      Pricing
                    </a>
                  </li>
                  <li className="mb-2 md:mb-0">
                    <a className="text-sm font-medium" href="#">
                      Apprenticeships
                    </a>
                  </li>
                </ul>
                <a
                  className="inline-block px-8 py-4 mr-auto text-sm font-medium text-white bg-red-400 rounded lg:mr-0 leafing-normal hover:bg-red-300"
                  href="#"
                  data-removed="true"
                >
                  Get in Touch
                </a>
              </div>
              <p className="mt-6 text-sm text-gray-500 lg:hidden">
                YEPYEP is a product by IDS Solutions All rights reserved © IDS
                Solutions LLC 2021
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
