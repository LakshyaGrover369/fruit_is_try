import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Order() {
  return (
    <>
      <Navbar />
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-green-800">Place Your Order</h2>
        <form className="mt-8 max-w-lg mx-auto bg-white shadow-lg p-6 rounded-xl">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border rounded-lg mb-4"
          />
          <input
            type="text"
            placeholder="Address"
            className="w-full p-3 border rounded-lg mb-4"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full p-3 border rounded-lg mb-4"
          />
          <textarea
            placeholder="Special Instructions"
            className="w-full p-3 border rounded-lg mb-4"
          />
          <button className="w-full bg-green-700 text-white py-3 rounded-lg">
            Confirm Order
          </button>
        </form>
      </section>
      <Footer />
    </>
  );
}
