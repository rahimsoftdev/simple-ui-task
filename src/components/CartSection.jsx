
import { ShoppingBag, Trash2, Plus, Minus, ArrowRight } from "lucide-react";

const CartSection = ({ myList, setMyList }) => {
    const increaseQuantity = (id) => {
        setMyList((prevList) =>
            prevList.map((item) =>
                item.id === id
                    ? { ...item, quantity: (item.quantity || 1) + 1 }
                    : item
            )
        );
    };

    const decreaseQuantity = (id) => {
        setMyList((prevList) =>
            prevList.map((item) =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, (item.quantity || 1) - 1) }
                    : item
            )
        );
    };

    const removeItem = (id) => {
        setMyList((prevList) => prevList.filter((item) => item.id !== id));
    };

    const totalItems = myList.reduce(
        (total, item) => total + (item.quantity || 1),
        0
    );

    const totalPrice = myList.reduce(
        (total, item) => total + item.price * (item.quantity || 1),
        0
    );

    const handleCheckout = () => {
        alert(`Order placed successfully! Total: ৳${totalPrice.toLocaleString("en-BD")}`);
        setMyList([]);
    };

    return (
        <section  id="cart" className="max-w-main mx-auto px-4 py-16">
            <div className="mb-10 text-center">
                <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
                    <ShoppingBag size={18} />
                    Your Shopping Cart
                </span>

                <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                    Shopping Cart
                </h2>

                <p className="mt-2 text-gray-500">
                    Review your products before checkout
                </p>
            </div>

            {myList.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-5 py-16 text-center">
                    <ShoppingBag className="mx-auto h-16 w-16 text-gray-300" />

                    <h3 className="mt-5 text-xl font-bold text-gray-800">
                        Your cart is empty!
                    </h3>

                    <p className="mt-2 text-gray-500">
                        Add some products to get started.
                    </p>

                    <a
                        href="#products"
                        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                    >
                        Explore Products
                        <ArrowRight size={18} />
                    </a>
                </div>
            ) : (
                <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
                    <div className="space-y-4 lg:col-span-2">
                        {myList.map((item) => (
                            <div
                                key={item.id}
                                className="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:flex-row sm:items-center"
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="h-36 w-full rounded-xl bg-gray-50 object-cover sm:h-28 sm:w-28"
                                />

                                <div className="min-w-0 flex-1">
                                    <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                                        {item.category}
                                    </p>

                                    <h3 className="mt-1 text-lg font-bold text-gray-900">
                                        {item.name}
                                    </h3>

                                    <p className="mt-1 text-sm text-gray-500">
                                        {item.brand}
                                    </p>

                                    <p className="mt-2 font-bold text-blue-600">
                                        ৳{item.price.toLocaleString("en-BD")}
                                    </p>
                                </div>

                                <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
                                    <div className="flex items-center gap-3 rounded-xl border border-gray-200 p-1">
                                        <button
                                            onClick={() => decreaseQuantity(item.id)}
                                            disabled={(item.quantity || 1) <= 1}
                                            className="rounded-lg p-2 text-gray-600 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
                                            aria-label={`Decrease ${item.name} quantity`}
                                        >
                                            <Minus size={16} />
                                        </button>

                                        <span className="min-w-5 text-center font-semibold">
                                            {item.quantity || 1}
                                        </span>

                                        <button
                                            onClick={() => increaseQuantity(item.id)}
                                            disabled={(item.quantity || 1) >= item.stock}
                                            className="rounded-lg p-2 text-gray-600 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
                                            aria-label={`Increase ${item.name} quantity`}
                                        >
                                            <Plus size={16} />
                                        </button>
                                    </div>

                                    <button
                                        onClick={() => removeItem(item.id)}
                                        className="flex items-center gap-1 text-sm font-medium text-red-500 transition hover:text-red-700"
                                    >
                                        <Trash2 size={16} />
                                        Remove
                                    </button>

                                    <p className="font-bold text-gray-900">
                                        ৳{(item.price * (item.quantity || 1)).toLocaleString("en-BD")}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 lg:sticky lg:top-6">
                        <h3 className="text-xl font-bold text-gray-900">
                            Order Summary
                        </h3>

                        <div className="mt-6 space-y-4">
                            <div className="flex justify-between gap-3 text-gray-600">
                                <span>Total Products</span>
                                <span>{totalItems}</span>
                            </div>

                            <div className="flex justify-between gap-3 text-gray-600">
                                <span>Subtotal</span>
                                <span>৳{totalPrice.toLocaleString("en-BD")}</span>
                            </div>

                            <div className="flex justify-between gap-3 text-gray-600">
                                <span>Shipping</span>
                                <span className="font-medium text-green-600">Free</span>
                            </div>

                            <div className="border-t border-gray-200 pt-4">
                                <div className="flex items-center justify-between gap-3">
                                    <span className="text-lg font-bold text-gray-900">
                                        Total
                                    </span>

                                    <span className="text-2xl font-extrabold text-blue-600">
                                        ৳{totalPrice.toLocaleString("en-BD")}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={handleCheckout}
                            className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-4 font-bold text-white transition hover:bg-blue-700"
                        >
                            Proceed to Checkout
                            <ArrowRight size={20} />
                        </button>

                        <button
                            onClick={() => setMyList([])}
                            className="mt-3 w-full rounded-xl border border-gray-200 px-5 py-3 font-semibold text-gray-600 transition hover:bg-white"
                        >
                            Clear Cart
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default CartSection;
