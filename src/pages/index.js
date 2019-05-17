import React, { Component } from "react"
import Layout, { BoxContainer } from "../components/layout"
import Header from "../components/header"
import styles from "../styles/index.module.css"
import portrait from "../images/portrait.jpg"
import silhouette from "../images/silhouette.png"
import CursorLine from "../components/cursor-line"

export default class Index extends Component {
  state = { header: "", blinkCursor: false }

  componentDidMount() {
    this.cursorLine()
  }

  async cursorLine() {
    const text = "My Name Is Daniel"
    for (let i = 1; i <= text.length; i++) {
      await this.sleep()
      this.setState({ header: text.slice(0, i) })
    }
  }

  sleep() {
    const ms = Math.random() * 500
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  render() {
    return (
      <Layout>
        <Header isActive="daniel" />

        <CursorLine text={this.state.header} blink={this.state.blinkCursor} />

        <h2 className={[styles.white, styles.sourceCodePro].join(" ")}>
          Nice to meet you. I'm
          {"\u00A0"}
          <span className={[styles.pacifico, styles.emphasis].join(" ")}>
            Daniel
          </span>
        </h2>
        <BoxContainer>
          <h1 className={[styles.sourceCodePro].join(" ")}>
            I am a{"\u00A0"}
            <span className={[styles.vt323, styles.emphasis].join(" ")}>
              Developer
            </span>
          </h1>
        </BoxContainer>

        <div style={{ position: "relative" }}>
          <img
            alt=""
            src={portrait}
            width={150}
            style={{ position: "absolute" }}
          />
          <div
            style={{
              top: 45,
              position: "absolute",
              height: 40,
              width: 300,
              backgroundColor: "blue",
            }}
          />
          <img
            alt=""
            src={silhouette}
            width={150}
            style={{ position: "absolute" }}
          />
        </div>
      </Layout>
    )
  }
}
