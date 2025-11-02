import React from "react";

const NewsItem = () => {
  return (
    <li>
      <a href="#" className="text-[#7B542F] font-bold text-lg hover:underline">
        Libre Translate
      </a>
      <div className="flex gap-1">
        <span className="flex gap-1">
          <a className="hover:underline text-[#FF9D00]" href="#">
            #polls
          </a>
          <a className="hover:underline text-[#FF9D00]" href="#">
            #test
          </a>
        </span>
        <span>|</span>
        <div className="line-clamp-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
          provident quasi accusantium facere nulla fugiat est magnam consequatur
          odit, recusandae, repudiandae impedit quia molestias illo officiis
          delectus voluptatem. Ipsam, aliquam.
        </div>
      </div>

      <div>
        <span className="text-gray-400 text-sm leading-0">Yesterday</span>
      </div>
    </li>
  );
};

export default NewsItem;
