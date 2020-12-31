import React, { useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Transactions = () => {
  useEffect(() => {
    var script = document.createElement("script")
    script.src =
      "https://confident-bose-d00c39.netlify.app/static/js/portal.v7.js"
    script.onload = function () {
      //eslint-disable-next-line
      APIMaticDevPortal.show({
        container: "apimatic-widget",
        portalStyle: "default",
        codegenApiRoutes: {
          docsgen:
            "/api/api-entities/7h-b_WnhDRW44OalWXoifqquHyfT-va6isIiEA09NxPoITMQ6YRp-cA6Khf34vhs/portal-artifacts/docs/generated-file?template={template}",
          codegen:
            "/api/api-entities/7h-b_WnhDRW44OalWXoifqquHyfT-va6isIiEA09NxPoITMQ6YRp-cA6Khf34vhs/portal-artifacts/sdks/generated-file?template={template}",
          transform:
            "/api/api-entities/7h-b_WnhDRW44OalWXoifqquHyfT-va6isIiEA09NxPoITMQ6YRp-cA6Khf34vhs/portal-artifacts/specs/generated-file?format={format}",
        },
        apiKey:
          "7h-b_WnhDRW44OalWXoifqquHyfT-va6isIiEA09NxPoITMQ6YRp-cA6Khf34vhs",
        baseUrl: "https://alpha.apimatic.io",
        enableExport: true,
        renameHttpToRest: false,
        enableConsoleCalls: true,
        useProxyForConsoleCalls: false,
        initialPlatform: "http_curl_v1",
        languageSettings: {
          http_curl_v1: {
            disableSdkDownload: true,
          },
          cs_net_standard_lib: {
            disableSdkDownload: false,
            sdkDownloadLink: "",
          },
          java_eclipse_jre_lib: {
            disableSdkDownload: false,
            sdkDownloadLink: "",
          },
          php_generic_lib: {
            disableSdkDownload: false,
            sdkDownloadLink: "",
          },
          python_generic_lib: {
            disableSdkDownload: false,
            sdkDownloadLink: "",
          },
          ruby_generic_lib: {
            disableSdkDownload: false,
            sdkDownloadLink: "",
          },
        },
        allowedExportFormats: [
          "postman10",
          "postman20",
          "openapi3json",
          "openapi3yaml",
          "swagger20",
          "swaggeryaml",
          "swagger10",
          "raml",
          "raml10",
          "apiblueprint",
          "wadl2009",
          "apimatic",
          "wsdl",
          "insomnia",
          "insomniayaml",
        ],
        themeOverrides: {
          themeType: "cool",
          palette: {
            primaryColor: "#2a5d9c",
          },
          fontSource: [],
          cssStyles: {
            headings: {
              fontFamily:
                "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue, Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
              h1: {
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue, Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
                fontSize: "24px",
                fontWeight: "600",
                fontStyle: "normal",
                lineHeight: "0.9",
              },
              h2: {
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue, Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
                fontSize: "23px",
                fontWeight: "600",
                fontStyle: "normal",
                lineHeight: "0.82",
              },
              h3: {
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue, Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
                fontSize: "19px",
                fontWeight: "600",
                fontStyle: "normal",
                lineHeight: "1",
              },
              h4: {
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue, Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
                fontSize: "17px",
                fontWeight: "600",
                fontStyle: "normal",
                lineHeight: "1.17",
              },
              h5: {
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue, Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
                fontSize: "15px",
                fontWeight: "600",
                fontStyle: "normal",
                lineHeight: "1.26",
              },
              h6: {
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue, Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
                fontSize: "14px",
                fontWeight: "600",
                fontStyle: "normal",
                lineHeight: "1.35",
              },
            },
            body: {
              fontFamily:
                "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue, Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
              text1: {
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue, Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
                fontSize: "14px",
                fontWeight: "400",
                fontStyle: "normal",
                lineHeight: "1.78",
              },
              text2: {
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue, Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
                fontSize: "13px",
                fontWeight: "400",
                fontStyle: "normal",
                lineHeight: "1.5",
              },
              text3: {
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue, Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
                fontSize: "12px",
                fontWeight: "400",
                fontStyle: "normal",
                lineHeight: "1.66",
              },
            },
            code: {
              fontFamily:
                "'SFMono-400', Consolas, 'Liberation Mono', Menlo, Courier",
              blockCode: {
                fontFamily:
                  "'SFMono-400', Consolas, 'Liberation Mono', Menlo, Courier",
                fontSize: "14px",
                fontWeight: "400",
                fontStyle: "normal",
                lineHeight: "1.66",
              },
              inlineCode: {
                fontFamily:
                  "'SFMono-400', Consolas, 'Liberation Mono', Menlo, Courier",
                fontSize: "14px",
                fontWeight: "400",
                fontStyle: "normal",
                lineHeight: "1.66",
              },
            },
          },
        },
      })
    }
    document.getElementsByTagName("head")[0].appendChild(script)
  }, [])
  return (
    <Layout>
      <SEO title="Home" />
      <div id="apimatic-widget" className="w-full h-screen"></div>
    </Layout>
  )
}
export default Transactions
