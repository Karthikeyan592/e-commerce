# Next.js Ecommerce - Next Fashion

This is a responsive e-commerce platform built using **Next.js**, **Sanity.io**, and **Stripe**. The project includes a variety of features such as a product listing page, cart functionality, and checkout process.

## Features Implemented

### Product Listing Page
- Displayed 8 products using a grid layout.
- Each product card includes:
  - Product image
  - Product name
  - Product price
  - Product Description
  - "Add to Cart" button
  - "Checkout Now" button

### Add to Cart Functionality
- Clicking "Add to Cart" adds the selected product to the virtual shopping cart.
- The cart icon or counter updates to reflect the number of items added dynamically.

### Cart Page
- Dedicated cart page for managing selected products.
- Displays a list of all added products with:
  - Product image
  - Product name
  - Product price
  - Quantity selector - UP/DOWN Arrow for manual selection
  - "Remove Item" button to delete products from the cart.
- **Cart Summary** section:
  - **Subtotal**: Total cost of all items in the cart.
  - **Discounts**:
    - Fixed discounts - DISCOUNT COUPONS - *DISC10* , *DISC20*, *DISC15*
  - **Total Price**: Final price including discounts.
  - **Checkout Button** (optional): Redirects to a simulated checkout page or displays a successful cart addition message.
### Payment Page
- Redirects to payment Page from checkout.
- Test Payment is Done. On successful payment, redirects to success page.

## Additional Features

- Sanity.io - Used Sanity for Content Management throughout the application
- Stripe    - Included Real-time payment using Stripe payment gateway.

## Available pages

- Home page: /
- Categories page: /[category]
- Product single page: /product/[slug]
- Cart page:
- Payment Success and Error Page.

## Demo

[Watch the video](https://drive.google.com/file/d/1Yqhn3MGv6uekrW1Rxcb2kwBn17I3Zy_T/view?usp=sharing)

