import React from 'react'

const Lessonlist = ({data,currentPage,itemsPerPage}) => {
  const paginatedData = paginate(data, currentPage, itemsPerPage);

  function paginate(data, currentPage, itemsPerPage) {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  }

  return (
    <div className="bg-white shadow-md rounded-xl text-xs sm:text-sm border-2 border-indigo-300 overflow-x-auto no-scrollbar font-poppins">
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-sky-200">
        <tr>
          <th
            scope="col"
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            SL
          </th>
          <th
            scope="col"
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Class
          </th>
          <th
            scope="col"
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Section
          </th>
          <th
            scope="col"
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Subject
          </th>
          <th
            scope="col"
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Lesson
          </th>
          <th
            scope="col"
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Topic
          </th>
          <th
            scope="col"
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
      {data.map((data) => (
            <tr key={data.sl}>
              <td className="px-6 py-4 whitespace-nowrap">{data.sl}</td>
              <td className="px-6 py-4 whitespace-nowrap">{data.class}</td>
              <td className="px-6 py-4 whitespace-nowrap">{data.section}</td>
              <td className="px-6 py-4 whitespace-nowrap">{data.subject}</td>
              <td className="px-6 py-4 whitespace-nowrap">{data.lesson}</td>
              <td className="px-6 py-4 whitespace-nowrap">{data.topic}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex space-x-3 sm:space-x-7">
                <button>
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.7039 13.6025C23.7039 13.3285 23.8127 13.0656 24.0065 12.8719C24.2003 12.6781 24.4631 12.5692 24.7372 12.5692C25.0112 12.5692 25.274 12.6781 25.4678 12.8719C25.6616 13.0656 25.7704 13.3285 25.7704 13.6025V24.9686C25.7704 25.2426 25.6616 25.5055 25.4678 25.6992C25.274 25.893 25.0112 26.0019 24.7372 26.0019H2.00496C1.73092 26.0019 1.4681 25.893 1.27432 25.6992C1.08054 25.5055 0.97168 25.2426 0.97168 24.9686V2.23641C0.97168 1.96236 1.08054 1.69954 1.27432 1.50577C1.4681 1.31199 1.73092 1.20312 2.00496 1.20312H13.3711C13.6451 1.20312 13.9079 1.31199 14.1017 1.50577C14.2955 1.69954 14.4043 1.96236 14.4043 2.23641C14.4043 2.51045 14.2955 2.77327 14.1017 2.96705C13.9079 3.16082 13.6451 3.26969 13.3711 3.26969H3.03824V23.9353H23.7039V13.6025Z"
                    fill="#2956AE"
                  />
                  <path
                    d="M12.0133 14.9662L13.7183 14.7224L24.1916 4.2511C24.2903 4.15578 24.369 4.04177 24.4232 3.9157C24.4773 3.78964 24.5058 3.65405 24.507 3.51685C24.5082 3.37965 24.4821 3.24359 24.4301 3.1166C24.3781 2.98962 24.3014 2.87425 24.2044 2.77723C24.1074 2.68021 23.992 2.60349 23.865 2.55154C23.738 2.49958 23.602 2.47344 23.4648 2.47463C23.3276 2.47582 23.192 2.50433 23.0659 2.55848C22.9399 2.61263 22.8259 2.69135 22.7305 2.79004L12.2551 13.2613L12.0113 14.9662H12.0133ZM25.6527 1.32691C25.9407 1.61479 26.1692 1.9566 26.3251 2.33282C26.481 2.70904 26.5613 3.11229 26.5613 3.51954C26.5613 3.92678 26.481 4.33003 26.3251 4.70625C26.1692 5.08247 25.9407 5.42429 25.6527 5.71216L14.9375 16.4273C14.7795 16.5859 14.5743 16.6889 14.3527 16.7207L10.9429 17.2085C10.784 17.2313 10.6219 17.2168 10.4696 17.166C10.3173 17.1153 10.1789 17.0298 10.0653 16.9163C9.95182 16.8028 9.86631 16.6644 9.8156 16.5121C9.76489 16.3597 9.75037 16.1977 9.77319 16.0388L10.2609 12.6289C10.2922 12.4076 10.3945 12.2024 10.5523 12.0441L21.2695 1.32898C21.8508 0.747848 22.6391 0.421387 23.4611 0.421387C24.283 0.421387 25.0714 0.747848 25.6527 1.32898V1.32691Z"
                    fill="#2956AE"
                  />
                </svg>
              </button>
              <button>
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5271 26.0101C3.74368 26.0101 3.07279 25.7344 2.51443 25.1829C1.95606 24.6315 1.67736 23.9693 1.6783 23.1965V4.90794H0.253906V2.09431H7.3759V0.6875H15.9223V2.09431H23.0443V4.90794H21.6199V23.1965C21.6199 23.9703 21.3407 24.6329 20.7823 25.1843C20.224 25.7358 19.5536 26.0111 18.7711 26.0101H4.5271ZM18.7711 4.90794H4.5271V23.1965H18.7711V4.90794ZM7.3759 20.3829H10.2247V7.72157H7.3759V20.3829ZM13.0735 20.3829H15.9223V7.72157H13.0735V20.3829Z"
                    fill="black"
                  />
                </svg>
              </button>
                </div>{" "}
              </td>
            </tr>
          ))}
       
      </tbody>
    </table>
  </div>
  )
}

export default Lessonlist
