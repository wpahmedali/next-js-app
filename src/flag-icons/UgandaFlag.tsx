import * as React from 'react';
import { SVGProps } from 'react';

const UgandaFlag = (props: SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 900 600"
      width={22}
      height={17}
      {...props}
    >
      <path d="M0 0h900v600H0z" />
      <path fill="#fcdc04" d="M0 100h900v100H0z" />
      <path fill="#d90000" d="M0 200h900v100H0z" />
      <path fill="#fcdc04" d="M0 400h900v100H0z" />
      <path fill="#d90000" d="M0 500h900v100H0z" />
      <circle cx={450} cy={300} r={93.5} fill="#fff" />
      <g stroke="#000">
        <path
          d="m433.52 228.39-6.064-11.17c2.34-2.34 6.277-4.149 12.553-4.149 0 .426-.638 12.235-.638 12.235z"
          fill="#d90000"
        />
        <path
          d="m439.371 225.412.851-12.34s12.554-.745 19.362 7.446c.107-.106-6.702 9.574-6.702 9.574z"
          fill="#fcdc04"
        />
        <path
          d="m453.095 229.986 6.17-9.574c4.15 4.362 5.85 7.447 6.49 12.128.106.106-9.788 2.446-9.788 2.34 0-.107-2.765-4.788-2.872-4.894z"
          fill="#d90000"
        />
        <path d="M436.605 388.073s11.596-13.298 34.15-10.425c-3.405-5.533-14.362-4.894-14.362-4.894s-3.404-25.851-.745-27.128c2.66-1.277 13.936.106 13.936.106 1.489 0 4.043-4.042 2.022-6.595-2.022-2.554-7.98-12.341-5.533-14.256 2.448-1.915 15.745 1.064 15.745 1.064l-37.553-48.086s-3.83-18.085 3.83-26.809c9.256-7.66 8.298-15.957 7.979-15.851-1.277-8.404-14.043-14.469-22.66-6.702-5.107 6.17-1.703 10.851-1.703 10.851s-13.404 3.617-13.936 5.957c-.532 2.341 15.107-.425 15.107-.425l-1.49 10.745s-30.426 27.66-7.127 51.596c.212-.106.744-1.064.744-1.064s8.192 10.107 16.809 12.34c8.085 8.299 7.34 7.022 7.34 7.022s1.596 13.086.107 15.639c-2.021-.639-22.66-1.383-25.745-.213-2.766.851-13.404.319-10.745 17.66 2.021-4.681 3.83-8.83 3.83-8.83s-.32 6.276 2.234 8.51c-.425-6.596 2.447-11.063 2.447-11.063s.532 7.234 2.127 8.297c1.596 1.064 1.596-11.702 10.427-10.638 8.829 1.064 15.212.745 15.212.745s2.979 25 2.021 27.34c-6.383-1.489-21.595.64-22.553 4.469 8.936-.532 13.086.531 13.086.531s-7.234 6.384-5 10.107z" />
        <path
          d="M440.191 251.66s-22.139 24.403-12.587 43.076c.508-2.604.286-4.24.606-4.134-.532-.32 2.745 2.247 2.496 1.747.07-1.35-.998-4.243-.998-4.243l2.995.749-1.748-3.245 4.244.499s-1.498-3.994-.998-3.994c.499 0 3.494.25 3.494.25-6.296-11.3-.356-20.683 2.496-30.705zm7.691-20.93s1.17 8.405-3.404 10.852c-.745.532-3.617 1.49-3.192 3.192.532 2.34 1.808 1.915 3.617 1.489 4.787-.851 10.32-11.064 2.979-15.532z"
          fill="#9ca69c"
          stroke="#9ca69c"
        />
        <circle cx={438} cy={238} r={1.8} fill="#fff" stroke="none" />
        <path
          d="M432.563 244.986c-1.17.958-7.34 7.341-1.277 9.681 6.277-1.702 4.574-2.872 5.958-4.255.035-2.872-3.121-3.617-4.681-5.426z"
          fill="#d90000"
        />
        <path
          d="M445.967 305.307c-.32 1.383-1.702 6.489.212 10.425 5.32-2.234 7.767-1.596 9.575-.426-4.36-3.51-6.063-5-9.787-10z"
          fill="#9ca69c"
          stroke="#9ca69c"
        />
        <path
          d="m455.116 329.455.32 11.915s4.148.745 6.063 0-.107-8.298-6.383-11.915z"
          fill="#fff"
          stroke="#fff"
        />
        <path
          d="M485.223 330.945s-7.66-18.51-27.235-23.192c-19.575-4.681-17.022-25.532-15.426-26.809.852-1.809 1.49-4.574 7.128-1.914 5.639 2.66 31.596 15.744 35.32 16.382 3.723.639.532 35.959.213 35.533z"
          fill="#9ca69c"
        />
        <path
          d="M466.606 307.647c-.32.212 26.17 15.637 18.191 28.936 7.554-5 5.107-13.723 5.107-13.723s6.17 16.064-8.83 23.936c1.596 1.384 2.66 1.064 2.66 1.064l-2.554 2.553s-1.17 1.915 8.937-2.98c-2.767 2.235-2.979 3.83-2.979 3.83s.744 2.129 7.34-3.616c-5.32 5.745-6.49 8.723-6.49 8.617 14.362-1.277 45.64-47.979-9.893-61.81 2.98 3.086 2.553 2.66 2.553 2.66z"
          fill="#d90000"
        />
        <path
          d="M467.776 303.072c3.617 2.553 4.893 3.404 5.319 4.681-3.298-.744-6.277-.532-6.277-.532s-7.127-6.808-8.404-7.34c-.958 0-6.49-3.511-6.49-3.511-2.765-1.383-5.318-10.957 4.895-8.192 10.53 5 12.02 5.426 12.02 5.426 4.185 1.312 8.369 2.625 12.554 3.936l7.234 8.086s-12.872-6.384-14.468-6.49c3.51 2.872 5.532 6.808 5.532 6.808-4.078-1.17-7.624-2.234-11.915-2.872z"
          fill="#fff"
        />
        <path d="M417.669 245.944s12.34-2.979 13.83-2.553" stroke="#fff" />
      </g>
    </svg>
  );
};

export default UgandaFlag;
