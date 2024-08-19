import React from "react";
import { NextPageContext } from "next";
import Link from "next/link";

interface ErrorProps {
  statusCode?: number;
}

const Error = ({ statusCode }: ErrorProps) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        {statusCode === 404 ? (
          <>
            <h1 className="text-4xl font-bold text-red-600">404</h1>
            <p className="text-lg mt-4 text-gray-600">
              Oops! The page you are looking for does not exist.
            </p>
          </>
        ) : statusCode === 500 ? (
          <>
            <h1 className="text-4xl font-bold text-red-600">500</h1>
            <p className="text-lg mt-4 text-gray-600">
              Sorry! Something went wrong on our end.
            </p>
          </>
        ) : (
          <>
            <h1 className="text-4xl font-bold text-red-600">{statusCode}</h1>
            <p className="text-lg mt-4 text-gray-600">
              An unexpected error occurred.
            </p>
          </>
        )}
        <Link
          href="/"
          className="mt-6 inline-block bg-amazon_blue text-white px-4 py-2 rounded-md hover:bg-amazon_yellow hover:text-black"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
