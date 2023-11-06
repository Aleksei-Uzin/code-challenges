/**
 * Job Matching #2
 * https://www.codewars.com/kata/56c2578be8b139bd5c001bd8/train/javascript
 *
 */

const match = ({ equityMax, locations }, candidates) =>
  candidates.filter(
    ({ desiresEquity, currentLocation, desiredLocations }) =>
      (equityMax > 0 || !desiresEquity) &&
      locations.some(
        location =>
          location === currentLocation || desiredLocations.includes(location)
      )
  )
