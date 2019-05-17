import React, { Component } from "react"
import styles from "../styles/cursor.module.css"
import { getNegativePatternsAsPositive } from "fast-glob/out/managers/tasks"

export default class Cursor extends Component {
  state = { visible: true, isBlinking: false }

  // setCursorBlinkAnimation() {
  //   if (this.state.isBlinking) return

  //   this.setState({ isBlinking: true })
  //   setInterval(() => {
  //     const visible = !this.state.visible
  //     this.setState({ visible })
  //   }, 1000)
  // }

  // stopCursorBlinkAnimation() {
  //   this.setState({ isBlinking: true })
  //   clearInterval(cursorInterval)
  //   this.setState({ visible: true })
  // }

  // componentDidMount() {
  // setTimeout(this.setCursorBlinkAnimation, 2000)
  // }

  // deriveStateFromProps(props) {
  //   this.setCursorBlinkAnimation()
  //   return {
  //     visible: props.visible,
  //     isBlinking: props.isBlinking,
  //   }
  // }

  render() {
    let classNames = this.state.visible
      ? [styles.cursor, styles.blinkOn].join(" ")
      : [styles.cursor, styles.blinkOff].join(" ")

    return (
      <div className={styles.container}>
        <div className={classNames} />
      </div>
    )
  }
}
