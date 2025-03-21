
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
import Products from "../components/products";
  

export default function Cart() {
    const cartItems = [
      { id: 1, name: "T-shirts with multiple colors, for men and lady", price: 79.99, quantity: 1, image: "/img-10.jpg" },
      { id: 2, name: "T-shirts with multiple colors, for men and lady", price: 33.99, quantity: 3, image: "/img-15.jpg" },
      { id: 3, name: "T-shirts with multiple colors, for men and lady", price: 170.50, quantity: 1, image: "/img-19.jpg" },
    ];
  
    return (
        <div className="bg-gray-100">
            <div className="container w-[1200px] place-self-center py-5">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                    <BreadcrumbLink href="/products">Products</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                    <BreadcrumbPage>Cart</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
                </Breadcrumb>

            </div>

      <div className="container w-[1200px] place-self-center">
        <h2 className="text-xl font-semibold mb-4">My Cart (3)</h2>
        
        <div className="flex gap-5">
            <div className="container w-[800px] place-self-center my-5 broder border-gray-50 bg-white rounded-md px-5 py-5">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between border-b py-4">
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.name} className="w-24 h-24 rounded-md" />
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">Size: Medium, Color: Blue, Material: Plastic</p>
                <p className="text-xs text-blue-600">Seller: Mart Market</p>
                <div className="flex gap-2 mt-2">
                  <button className="text-red-500 text-sm">Remove</button>
                  <button className="text-blue-500 text-sm">Save for later</button>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold">${item.price.toFixed(2)}</p>
              <select className="mt-2 border rounded px-2 py-1">
                {[...Array(5)].map((_, i) => (
                  <option key={i} value={i + 1}>Qty: {i + 1}</option>
                ))}
              </select>
            </div>
          </div>
        ))}
  
        <div className="flex justify-between mt-6">
          <button className="text-blue-500">Back to shop</button>
          <button className="text-blue-500">Remove all</button>
        </div>
        </div>

        <div className="container w-[350px] place-self-center broder border-gray-50 bg-white rounded-md px-5 py-5">
        {/* Coupon Section */}
        <div className="mt-6 border p-4 rounded-lg">
          <p className="font-medium mb-2">Have a coupon?</p>
          <div className="flex gap-2">
            <input type="text" className="border rounded px-3 py-1 flex-1" placeholder="Add coupon" />
            <button className="bg-blue-500 text-white px-4 py-1 rounded">Apply</button>
          </div>
        </div>
  
        {/* Price Summary */}
        <div className="mt-6 border p-4 rounded-lg">
          <p className="flex justify-between font-medium">Subtotal: <span>$1403.57</span></p>
          <p className="flex justify-between text-green-600">Discount: <span>-$90.00</span></p>
          <p className="flex justify-between">Tax: <span>$14.00</span></p>
          <hr className="my-2" />
          <p className="flex justify-between font-semibold text-lg">Total: <span>$1357.97</span></p>
          <button className="bg-green-500 text-white w-full py-2 rounded mt-4">Checkout</button>
        </div>
  
        {/* Footer */}
        <div className="mt-6 flex justify-between text-xs text-gray-500">
          <p>🔒 Secure payment</p>
          <p>📞 Customer support</p>
          <p>🚚 Free delivery</p>
        </div>
        </div>
        </div>

        <Products/>
      </div>
      </div>
    );
  }