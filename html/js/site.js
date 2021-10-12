
let cartProducts = [];
if (localStorage.getItem("product") === null) {
    localStorage.setItem("product", JSON.stringify(cartProducts));
}

let cartTotal = []
let sizes = ['Select Size', ' A1 (+R200.00)', ' A2 (+R150.00)', ' A3 (+R120.00)', ' A4 (+R100.00)', ' A5']
let colors = ['Select Color', ' Black', ' Brown', ' White']

class Product {
    constructor(name, sizes, colors, price, image, id) {
        this.name = name;
        this.sizes = sizes;
        this.colors = colors;
        this.price = price;
        this.image = image;
        this.id = id;
    }
    //this function takes the object's data and creates a pop-up dialog page from which the user can specify frame sizes and colour to add to cart
    expansionPage() {
        //scroll page back up to wheree dialog opens
        document.documentElement.scrollTop = 650;
        document.body.scrollTop = 650;
        //create dialog and append
        let newDialog = document.createElement('dialog')
        document.getElementById('startCatalogueDiv').appendChild(newDialog)
        //assign class and id
        newDialog.className = 'dialog';
        newDialog.id = this.id + '_dialog';
        //add in dialog content
        //divs for bootstrap grid
        let newDivRow = document.createElement('div')
        let newDivCol1 = document.createElement('div')
        let newDivCol2 = document.createElement('div')
        newDivRow.className = 'row'
        newDivCol1.className = 'col-lg-6'
        newDivCol2.className = 'col-lg-6'
        //add grid divs into dialog
        newDialog.appendChild(newDivRow)
        newDivRow.appendChild(newDivCol1)
        newDivRow.appendChild(newDivCol2)
        //h1
        let newH1 = document.createElement('h1')
        newH1.innerText = (this.name)
        newH1.className = 'display-5'
        newDivCol1.appendChild(newH1)
        //img
        let newImg = document.createElement('img');
        newImg.src = this.image;
        newImg.className = 'img_dialog';
        newDivCol1.appendChild(newImg);
        //p
        let newP = document.createElement('p')
        newP.innerText = (`Picture frames not only define the personality of the house, but they also depict the aesthetic sense of the people living in that house. The kind of art that you put up will describe your knowledge of creativity. Hence picture frames are an essential part of the interior design of the property.`)
        newDivCol2.appendChild(newP)
        //h2
        let newH2 = document.createElement('h2')
        newH2.innerText = (`R ${this.price}.00 (A5)`)
        newH2.className = 'display-6'
        newH2.id = this.price
        newDivCol2.appendChild(newH2)
        //form
        let newForm = document.createElement('form')
        newDivCol2.appendChild(newForm)
        let newNumInput = document.createElement('input')
        newNumInput.type = 'number'
        newNumInput.value = 1
        newNumInput.min = 1
        newNumInput.id = 'qtyInput'
        newNumInput.placeholder = 'Qty'
        newForm.appendChild(newNumInput)
        //select for frame size
        let newSelectSizes = document.createElement('select')
        newSelectSizes.name = 'selectSizes'
        let newLabelSize = document.createElement('label')
        newLabelSize.for = 'selectSizes'
        newLabelSize.id = 'selectSizes'
        newLabelSize.innerText = 'Size'
        newForm.appendChild(newLabelSize)
        newForm.appendChild(newSelectSizes)
        //iterate through sizes array to make an option for each color
        for (let element of sizes) {
            let newOption = document.createElement('option')
            newOption.value = element
            newOption.innerText = element
            newSelectSizes.appendChild(newOption)
        }
        //select for frame color
        let newSelectColors = document.createElement('select')
        newSelectColors.name = 'selectColors'
        let newLabelColor = document.createElement('label')
        newLabelColor.for = 'selectColors'
        newLabelColor.id = 'selectColors'
        newLabelColor.innerText = 'Color'
        newForm.appendChild(newLabelColor)
        newForm.appendChild(newSelectColors)
        for (let element of colors) {
            let newOption2 = document.createElement('option')
            newOption2.value = element
            newOption2.innerText = element
            newSelectColors.appendChild(newOption2)
        }
        //addToCartBtn
        let addToCartBtn = document.createElement('button')
        addToCartBtn.innerText = 'Add To Cart';
        addToCartBtn.id = 'addToCartBtn'
        newDivCol2.appendChild(addToCartBtn);
        addToCartBtn.addEventListener('click', addProductToCart)
        //give dialog a close button
        let newButton = document.createElement('button');
        newDialog.appendChild(newButton);
        newButton.className = 'closeButton'
        newButton.id = 'closeBtn'
        newButton.innerText = 'x';
        newButton.addEventListener('click', function () {
            newDialog.remove();
        })
    }
}

//Generate all products by creating new products of object Product type
const frame1 = new Product('Gallery Frame', sizes, colors, 299, 'images/frame1.jpg', 'frame1')
const frame2 = new Product('Modern Frame A', sizes, colors, 249, 'images/frame2.jpg', 'frame2')
const frame3 = new Product('Modern Frame B', sizes, colors, 279, 'images/frame3.jpg', 'frame3')
const frame4 = new Product('Floating Frame', sizes, colors, 299, 'images/frame4.jpg', 'frame4')
const frame5 = new Product('Canvas Print Frame', sizes, colors, 219, 'images/frame5.jpg', 'frame5')
const frame6 = new Product('Tabletop Frame', sizes, colors, 399, 'images/frame6.jpg', 'frame6')
const frame7 = new Product('Photo Frame', sizes, colors, 269, 'images/frame7.jpg', 'frame7')
const frame8 = new Product('Deep-set Frame', sizes, colors, 209, 'images/frame8.jpg', 'frame8')
const book1 = new Product('Photobook 1', sizes, colors, 599, 'images/book1.jpg', 'book1')

//Add new products to an array of all products
allProducts = [frame1, frame2, frame3, frame4, frame5, frame6, frame7, frame8, book1];

//STEP 1 - load the store page with a  catalogue of all products on load***********************************************************************************

function storeLoad() {
    if (localStorage.getItem("product") === null) {
        localStorage.setItem("product", JSON.stringify(cartProducts));
    }
    else{
        cartProducts = JSON.parse(localStorage.getItem("product"));
    }
    //for each item in all products arrray do the following:
    for (let element of allProducts) {
        //get all value into a new array for ease of access
        let newArray2 = Object.values(element)
        //make and append new div
        let newDiv = document.createElement('div')
        document.getElementById('startCatalogueDiv').appendChild(newDiv)
        newDiv.className = 'col-lg-4';
        newDiv.id = element.id + '_div';
        //create product image 
        let newImg = document.createElement('img')
        newImg.src = newArray2[4]
        newImg.className = ''
        //create a button to open the individual product's page
        let newBtn = document.createElement('button')
        newBtn.className = 'catalogueBtn'
        newBtn.id = element.id
        newBtn.innerText = (`${newArray2[0]}`)
        //append all of the above
        newDiv.appendChild(newBtn)
        newDiv.appendChild(newImg)
        //when btn is clicked run the create dialog method on the object
        newBtn.addEventListener('click', function () {
            if (document.getElementsByClassName('dialog').length === 0) {
                element.expansionPage()
            }
        })
        //same as for button above since user may not always know to click to button
        newImg.addEventListener('click', function () {
            if (document.getElementsByClassName('dialog').length === 0) {
                element.expansionPage()
            }
        })
        //create button to quick add item to cart
        let newBtn2 = document.createElement('button')
        //hackey way to get product price and name info associated with btn by making it the id and class name...
        newBtn2.className = element.price
        newBtn2.id = element.name
        newBtn2.innerText = 'Quick Add to Cart'
        //hidden until div is hovered on
        newBtn2.style.display = 'none'
        newDiv.appendChild(newBtn2)
        //jquery functions for show/hide
        $('#startCatalogueDiv > div').hover(function () {
            $('#startCatalogueDiv > div > button:nth-child(3)').slideDown('fast');
        }, function () {
            $('#startCatalogueDiv > div > button:nth-child(3)').slideUp('slow');
        });
    }
    // quick add button function to add one black A5 of that frame type to cart
    $('#startCatalogueDiv > div > button:nth-child(3)').click(function (e) {
        let quickAddItem = [
            e.currentTarget.id,
            " Black",
            " A5",
            e.currentTarget.className,
            '1'
        ]
        //get array of cart items

        //add new product to cart
        cartProducts.push(quickAddItem)
        localStorage.setItem("product", JSON.stringify(cartProducts));
        //dispay alert with total price after add to cart
        calculateTotalForAlert()
        document.querySelector("#nav_cart > button:nth-child(1) > a > span").innerText = cartProducts.length;
    })
    //update nav cart items icon
    if (cartProducts.length !== 0) {
        document.querySelector("#nav_cart > button:nth-child(1) > a > span").innerText = cartProducts.length;
    }
}

// STEP 2 - add functionality to add items to a shopping cart **********************************************************************************

function addProductToCart() {
    //new object constructed from input field values
    let newCartProduct = [
        document.querySelector("dialog > div > div:nth-child(1) > h1").innerText,
        document.querySelector("dialog > div > div:nth-child(2) > form > select:nth-child(5)").value,
        document.querySelector("dialog > div > div:nth-child(2) > form > select:nth-child(3)").value,
        document.querySelector("dialog > div > div:nth-child(2) > h2").id,
        document.querySelector('#qtyInput').value,
    ]
    //make sure object has valid select values chosen
    if (newCartProduct[1] !== 'Select Color' && newCartProduct[2] !== 'Select Size' && parseInt(newCartProduct[4]) > 0) {
        cartProducts.push(newCartProduct)
        localStorage.setItem("product", JSON.stringify(cartProducts));
        document.querySelector('dialog').remove();
        document.querySelector("#nav_cart > button:nth-child(1) > a > span").innerText = cartProducts.length;
        calculateTotalForAlert()
    }
    else {
        alert('Please correctly complete all fields to add to cart')
    }
}

//alert user of new new total
function calculateTotalForAlert() {
    let alertTotalCalc = []
    //iterate through array to get prices
    for (let element of cartProducts) {
        // get price for A5
        let x = element[3]
        x = parseInt(x)
        let y = 0
        //adjust price for larger frames by adding relevant amount
        if (element[2] !== ' A5') {
            y = parseInt(element[2].slice(7, 10))
        }
        //get quantity of this type of frame added to cart
        let z = parseInt(element[4])
        //calculate total for each array item
        let pricePerItem = ((x + y) * z)
        alertTotalCalc.push(pricePerItem)
    }
    let alertTotalAmount = 0;
    //use each total calculated above to get a running total for the cart
    alertTotalCalc.forEach(function (value) {
        alertTotalAmount = alertTotalAmount + value
    })
    //alert of current total
    alert(`Total is R${alertTotalAmount} so far (excluding shipping, discounts and VAT)`)
}

// STEP 3 - create a page showing cart details*************************************************************************************

//function to display cart contents in a table on cart page load
function cartLoad() {
    cartProducts = JSON.parse(localStorage.getItem("product"));
    //for each cart item:
    for (let cartItem of cartProducts) {
        // make a new table row
        let newTR = document.createElement("tr");
        //give new row an ID
        newTR.id = "tr_" + (cartProducts.indexOf(cartItem) + 1)
        document.querySelector('#startAddingTRHere').appendChild(newTR)
        //add an identifier line number for each new row
        let itemNoTD = document.createElement("td");
        itemNoTD.innerText = cartProducts.indexOf(cartItem) + 1;
        newTR.appendChild(itemNoTD);
        for (let detail of cartItem) {
            //populate columns 2,3
            if (cartItem.indexOf(detail) === 0 || cartItem.indexOf(detail) === 1) {
                let newTD = document.createElement("td");
                newTD.innerText = detail;
                newTR.appendChild(newTD);
            }
            //populate column 4
            else if (cartItem.indexOf(detail) === 2) {
                let newTD = document.createElement("td");
                newTD.innerText = cartItem[2].slice(1, 3);
                newTR.appendChild(newTD);
            }
            //populate column 5
            else if (cartItem.indexOf(detail) === 3) {
                let x = parseInt(cartItem[3])
                let y = 0
                if (cartItem[2] !== ' A5') {
                    y = parseInt(cartItem[2].slice(7, 10))
                }
                pricePerItem = x + y
                let newTD = document.createElement("td");
                newTD.innerText = (`R ${pricePerItem}`);
                newTR.appendChild(newTD);
            }
            //populate col 6 + 7 + 8
            else if (cartItem.indexOf(detail) === 4) {
                //Quantity TD
                let newTD = document.createElement("td");
                newTD.innerText = detail;
                newTR.appendChild(newTD);
                //calc line item total
                let totalTD = document.createElement("td");
                let totalPrice = pricePerItem * parseInt(detail)
                totalTD.innerText = (`R ${totalPrice}`);
                newTR.appendChild(totalTD);
                //add line total to cart total array
                cartTotal.push(totalPrice)
                //add delete buttons to delete items from cart
                let delTD = document.createElement("td");
                let newBtn = document.createElement('button')
                newBtn.id = cartProducts.indexOf(cartItem) + '_btn'
                let newIcon = document.createElement('i')
                newIcon.className = 'fas fa-trash-alt'
                newTR.appendChild(delTD)
                delTD.appendChild(newBtn);
                newBtn.appendChild(newIcon);
                //add delete button event listener + function
                newBtn.addEventListener('click', function () {
                    //splice out deleted item
                    cartProducts.splice(cartProducts.indexOf(cartItem), 1)
                    //update array in storage
                    localStorage.setItem("product", JSON.stringify(cartProducts));
                    //remove TR
                    newTR.remove()
                    //fetch updated array and refresh page to repopulate table
                    cartProducts = JSON.parse(localStorage.getItem("product"));
                    location.reload();
                })
            }
        }
    }
    //update nav cart items icon
    document.querySelector("#nav_cart > button:nth-child(1) > a > span").innerText = cartProducts.length;
    //order button to generate order number and confirmation inside a new div
    document.querySelector('#confirmOrderBtn').addEventListener('click', function () {
        let newOrderNo = Math.floor(Math.random() * 100000);
        let newDiv = document.createElement('div')
        newDiv.className = "row justify-content-md-center g-3"
        let newDiv2 = document.createElement('div')
        newDiv2.className = "col-lg-6"
        let newH4 = document.createElement('h4')
        newH4.className = "display-6"
        newH4.innerText = "Order Confirmed"
        let newP = document.createElement('p')
        newP.innerText = (`Thank you for your order. Your order number is ${newOrderNo}.`)
        document.querySelector('#cartSection').appendChild(newDiv)
        newDiv.appendChild(newDiv2)
        newDiv2.appendChild(newH4)
        newDiv2.appendChild(newP)
    })
}

//empty table and remove all saved items inside cart
function clearArray() {
    for (let i = 1; i <= cartProducts.length + 1; i++) {
        // get each row's ID
        let tRID = (`#tr_${i}`)
        //remove each table row by using ID
        $(tRID).remove()
    }
    cartProducts.splice(0, cartProducts.length);
    localStorage.setItem("product", JSON.stringify(cartProducts));
    document.querySelector("#nav_cart > button:nth-child(1) > a > span").innerText = cartProducts.length;
}

// STEP 4 - calculate cart subtotal*************************************************************************************

//make an object to hold relevant info
let cartCalcItems = { 'VAT': 15 }
//available coupon codes with corresponding values
let coupons = { 'TENPERCENT': 0.1, 'FIFTEENPERCENT': 0.15, 'TWENTYPERCENT': 0.20 }
//create various variables
let couponSelected = 0;
let cartTotalAmount = 0;
let deliveryCost = 0

function calculateTotal() {
    //check delivery option value
    deliveryCost = document.querySelector("#deliverySelect").value
    //if valid can proceed
    //show delivery address forms
    if (deliveryCost !== 'Select Delivery Option') {
        if (deliveryCost === '100') {
            document.querySelector('#postnetSelect').style.display = 'block';
            document.querySelector('#addressDiv').style.display = 'none';
        }
        else if (deliveryCost === '150') {
            document.querySelector('#addressDiv').style.display = 'flex';
            document.querySelector('#postnetSelect').style.display = 'none';
        }
        //get discount value and parse to int
        cartCalcItems['deliveryCost'] = parseInt(deliveryCost);
        //reset cart total to zero
        cartTotalAmount = 0;
        //iterate through array
        cartTotal.forEach(function (value) {
            cartTotalAmount = cartTotalAmount + value
        })
        cartCalcItems['cartTotalAmount'] = cartTotalAmount;
        //coupon value
        couponSelected = coupons[document.querySelector("#couponCodeDiv > input").value];
        if (couponSelected === undefined) {
            couponSelected = 0
        }
        cartCalcItems['couponSelected'] = couponSelected;
        //switch button colours around after calculate
        document.querySelector("#confirmOrderBtn").style.backgroundColor = '#3db9d8';
        document.querySelector("#checkoutBtn").style.backgroundColor = '#848e903b';
        populateTotalDiv()
    }
    //no delivery selected alert
    else {
        alert("Please select a delivery option")
    }
}

// STEP 5 - calculate values for the cart total div*************************************************************************************
function populateTotalDiv() {
    //cart items total
    let num0 = (cartCalcItems['cartTotalAmount'])
    document.querySelector("#subTotal").innerText = (`R ${num0}`)
    //show discount amount
    let num1 = (cartCalcItems['couponSelected'])
    document.querySelector('#discountCoupons').innerText = (`${(cartCalcItems['couponSelected']) * 100} %`)
    //calc delivery cost
    let num2 = (cartCalcItems['deliveryCost'])
    document.querySelector('#shipping').innerText = (`R ${num2}`)
    //calc VAT
    let num3 = ((num0 - (num0 * num1) + num2) * 0.15)
    document.querySelector('#vat').innerText = (`R ${Math.floor(num3)}`)
    //calc total
    let total = Math.floor(((num0 - (num0 * num1)) + num2) + num3)
    document.querySelector('#total').innerText = (`R ${Math.floor(total)}`)
}

//jquery dropdown menu, function with hiding/showing, and chaining events
$("#nav_cart > button:nth-child(2) > span").click(function () {
    $('#helpUL').slideToggle().css({ 'padding': 0, 'background-color': 'grey' });
    $('#helpUL > li').css('border', 'white solid 1px')
})

//jquery animations
$("body > main > div.shipping").hover(function () {
    $(this).animate({
        padding: "40px",
        letterSpacing: "+=5px"
    })
}, function () {
    $(this).animate({
        padding: "6px",
        letterSpacing: "-=5px"
    })
})