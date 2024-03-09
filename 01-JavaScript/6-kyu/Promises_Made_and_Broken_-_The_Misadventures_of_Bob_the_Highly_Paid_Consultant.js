/**
 * Promises Made and Broken: The Misadventures of Bob the Highly Paid Consultant
 * https://www.codewars.com/kata/587593285448632b8d000143/train/javascript
 *
 */

// A
async function submitOrder(user) {
  const shoppingCart = await OrderAPI.getShoppingCartAsync(user)
  const { zipCode } = await CustomerAPI.getProfileAsync(user)
  const shippingRate = calculateShipping(shoppingCart, zipCode)
  const orderSuccessful = await OrderAPI.placeOrderAsync(
    shoppingCart,
    shippingRate
  )

  console.log(
    `Your order ${orderSuccessful ? 'was' : 'was NOT'} placed successfully`
  )
}

// B
function submitOrder(user) {
  const shoppingCart = OrderAPI.getShoppingCartAsync(user)
  const profile = CustomerAPI.getProfileAsync(user)

  Promise.all([shoppingCart, profile])
    .then(([shoppingCart, { zipCode }]) => {
      const shippingRate = calculateShipping(shoppingCart, zipCode)
      return [shoppingCart, shippingRate]
    })
    .then(([shoppingCart, shippingRate]) => {
      return OrderAPI.placeOrderAsync(shoppingCart, shippingRate)
    })
    .then(orderSuccessful => {
      console.log(
        `Your order ${orderSuccessful ? 'was' : 'was NOT'} placed successfully`
      )
    })
}
