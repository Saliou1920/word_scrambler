import reactDom from "react-dom";
import Home from "./Home";

test("renders without crashing", () => {
  const div = document.createElement("div");
  reactDom.render(<Home />, div);
  reactDom.unmountComponentAtNode(div);
});
