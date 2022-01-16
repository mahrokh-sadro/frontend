// I have an array of products that I fetch data from APIs and it works perfectly.I prop

// ProductListingPage.js

// const ProductList = () => {

//   return (

//     <>
//       <div>
//         {products.map((e) => (
//           <ProductListItem product={e} key={e.id} keyy={e.id} />
//         ))}
//       </div>
//     </>
//   );
// };

// export default ProductList;

// ProductListItem.js

// import Heart from "react-heart";

// const ProductListItem = ({ product}) => {
//   const [active, setActive] = useState(false);

//   useEffect(() => {
//     const data = window.localStorage.getItem("key");
//     setActive(data);
//   }, []);

//   useEffect(() => {
//     window.localStorage.setItem("key", active);
//   }, [active]);

//   return (
//     <>
//       <div >
//         <div >
//           <img
//             src={product.img_src}
//             class="card-img-top"
//             alt="Hollywood Sign on The Hill"
//           />
//           <div >
//             <h5 class="card-title">Card title</h5>
//             <div style={{ width: "1rem" }}>
//               <Heart isActive={active} onClick={() => setActive(!active)} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProductListItem;
