import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="w-full bg-white h-128">
      <div className="pt-24 text-5xl font-bold text-center text-humana-green">
        API Catalog
      </div>
      <div className="max-w-6xl mx-auto mt-8 text-3xl text-center text-gray-700">
        Humana offers a variety of Application Programming Interfaces (APIs) to
        help you make data more manageable, accessible and valuable for clients
        and consumers. This list will continue to grow as more APIs become
        available.
      </div>
      <div className="flex flex-wrap w-full max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-between w-full">
          <Link
            to="/medicare-enrollment"
            className="w-1/2 h-32 max-w-lg px-5 py-4 mt-16 bg-white border rounded-lg cursor-pointer hover:shadow-lg border-gray"
          >
            <div className="text-2xl font-medium text-gray-700">
              Medicare Enrollment API
            </div>
            <p className="h-24 mt-4 text-base leading-tight text-gray-700">
              This API is intended for the submission of Medicare enrollment
              applications.
            </p>
          </Link>
          <Link
            to="/assessment"
            className="w-1/2 h-32 max-w-lg px-5 py-4 mt-16 bg-white border rounded-lg cursor-pointer hover:shadow-lg border-gray"
          >
            <div className="text-2xl font-medium text-gray-700">
              Assessment API
            </div>
            <p className="h-24 mt-4 text-base leading-tight text-gray-700">
              Sends a patient assessment.
            </p>
          </Link>
          <div className="w-1/2 h-32 max-w-lg px-5 py-4 my-16 bg-gray-100 border rounded-lg border-gray"></div>
          <div className="w-1/2 h-32 max-w-lg px-5 py-4 my-16 bg-gray-100 border rounded-lg border-gray"></div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
