# online-store

## Project Description ##

This is a basic online store website with some JS functionality, but no submission to server yet.
Some basic static pages, as well as a catalogue of frames for sale render dynamically, using JS.
These items can be added to a shopping cart in various iterations (sizes, colours). Delivery details can be specified and totals calculated with VAT, discount coupons and shipping fees. An order number is generated.

## Contents ##
1. Installation
2. Usage
3. Credits

### Installation ###
Since the files consist only of HTML, CSS, JS and some images, the entire "html" folder can be copied into a new root folder and opened in Chrome from there.

### Usage ###
Basic site navigation is done through the navbar.

#### Static pages ####

Home screen contains tabs for Store/About/Register.
*Below: Home screen*

![Home screen](https://github.com/alley-hen/online-store/blob/d6fefaf0d3532a2011f1c6030a4ab2a57f7ab254/html/readme/readme%20Home.jpg)
Other static pages such as "About Us" and "Register" are similar.

Users can navigate to the store page, either by clicking the "Store" button on the home page or by using the navbar links.

### Store ###

*Below: Store Catalogue of all products*
![Store Page](https://github.com/alley-hen/online-store/blob/b23ee3eff3824ce0f7c06a7baa2248c1b4483034/html/readme/readme%20Store1.jpg)

Users can add an item to their cart by either using Quickadd button or clicking on the image or item name.
The quickadd button has a default quantity of 1, size of A5, and colour of black.

Clicking on the image or item name will open the item page, where the number, size and colour of frame can be selected. Clicking add to cart will add the item/s to the cart and close the dialog. Clicking the close button will close the dialog and not save any selections.

*Below: Item dialog page*
![Item dialog page](https://github.com/alley-hen/online-store/blob/b23ee3eff3824ce0f7c06a7baa2248c1b4483034/html/readme/readme%20Store2.jpg)

Once all required items have been added to cart, the user can navigate to the cart by clicking on the cart icon in the nav bar.

*Below: Cart page*
![Cart page](https://github.com/alley-hen/online-store/blob/b23ee3eff3824ce0f7c06a7baa2248c1b4483034/html/readme/readme%20Cart1.jpg)

All cart items are displayed in a table on the cart page. Items can be individually deleted witht he delete buttons, or the entire cart can be emptied using the empty cart button.
A discount coupon can be added (pre-defined example values have associated discount amounts).
A method of shipping can also be selected using the dropdown menu

Once all of the above are selected, clickin the calculate total button will display the different totals in the Cart Total div.

*Below: Cart Total div with values*
![Cart Total](https://github.com/alley-hen/online-store/blob/b23ee3eff3824ce0f7c06a7baa2248c1b4483034/html/readme/readme%20Cart2.jpg)

Clicking the confirm order button generates an order number and confirmation message.

*Below: Order confirmed*
![Order confirmed](https://github.com/alley-hen/online-store/blob/b23ee3eff3824ce0f7c06a7baa2248c1b4483034/html/readme/readme%20Cart3.jpg)

### Credits ###

I was the only one who worked on this project directly.
Feedback was provided at various points by Hyperion mentors.
