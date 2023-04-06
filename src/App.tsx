import Gallery from "./Gallery/Gallery";

function App() {
  return (
    <div className="App">
      Gallery soon will be here.{" "}
      <Gallery
        pictures={[
          { id: 1, src: "/photos/1.jpg", preview: "/photos/preview/1.jpg" },
          { id: 2, src: "/photos/2.jpg", preview: "/photos/preview/2.jpg" },
          { id: 3, src: "/photos/3.jpg", preview: "/photos/preview/3.jpg" },
          { id: 4, src: "/photos/4.jpg", preview: "/photos/preview/4.jpg" },
          { id: 5, src: "/photos/5.jpg", preview: "/photos/preview/5.jpg" },
          { id: 6, src: "/photos/6.jpg", preview: "/photos/preview/6.jpg" },
          { id: 7, src: "/photos/7.jpg", preview: "/photos/preview/7.jpg" },
        ]}
      />
    </div>
  );
}

export default App;
