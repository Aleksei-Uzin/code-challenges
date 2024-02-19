/**
 * Truncate paragraph using higher-order component in React JS
 * https://www.codewars.com/kata/5a667bf8e6be382ecd000102/train/javascript
 *
 */

import React from 'react'

export const withTruncateParagraph = Component => {
  function WithSubscription({ children, textLength = 10, ...props }) {
    let content =
      textLength >= 0 ? `${children.slice(0, textLength)}...` : children

    return <Component {...props}>{content}</Component>
  }

  WithSubscription.displayName = `WithTruncateParagraph(${getDisplayName(
    Component
  )})`

  return WithSubscription
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}
