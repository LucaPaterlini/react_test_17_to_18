import Star from './Star';
import ReactDOM from "react-dom";

test("renders a star", () =>{
    const div = document.createElement("div")
    ReactDOM.render(<Star/>,div)
    expect(div.querySelector("svg")).toBeTruthy()
})