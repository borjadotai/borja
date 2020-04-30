import React from "react"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <ul>
      <li data-year="2020">
        <p>
          Released{" "}
          <a
            href="https://www.glyphfinder.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Glyphfinder
          </a>
        </p>
        <small>Every fricking glyph at your fingertips</small>
      </li>
      <li data-year="2019">
        <p>
          Released{" "}
          <a
            href="https://www.mouseless.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mouseless
          </a>
        </p>
        <small>Unleash your keyboard’s superpower</small>
      </li>
      <li data-year="2018">
        <p>
          Released{" "}
          <a
            href="https://tiptap.scrumpy.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            tiptap
          </a>
        </p>
        <small>Renderless rich-text editor for Vue.js</small>
      </li>
      <li data-year="2018">
        <p>
          Launched{" "}
          <a
            href="https://scrumpy.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Scrumpy
          </a>
        </p>
        <small>Agile project management software</small>
      </li>
      <li data-year="2016">
        <p>
          Co-Founded{" "}
          <a href="https://ueber.io" target="_blank" rel="noopener noreferrer">
            überdosis
          </a>
        </p>
        <small>Agency for digital products</small>
      </li>
      <li data-year="2015">
        <p>
          Launched{" "}
          <a
            href="https://workeer.de"
            target="_blank"
            rel="noopener noreferrer"
          >
            workeer
          </a>
        </p>
        <small>First job board for refugees in Germany</small>
      </li>
      <li data-year="2015">
        <p>Graduation at University of Applied Sciences Berlin</p>
        <small>Communication Design</small>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
