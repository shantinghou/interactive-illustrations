import { RotateObject } from "interactive-illustrations";

const ARROW = () => (
  <svg width="299" height="299" viewBox="0 0 299 299" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M86.2776 294.885L0.45102 3.07517C-0.218113 0.800115 2.59734 -0.858887 4.26325 0.828809L161 159.5L94.5259 296.013C92.4416 299.354 87.3886 298.663 86.2776 294.885Z" fill="#7BB7DD"/>
    <path d="M295.059 86.9991L3.56263 0.111606C1.29003 -0.565799 -0.379201 2.2436 1.30242 3.91564L160 160L296.157 95.2514C299.505 93.1793 298.832 88.1239 295.059 86.9991Z" fill="#2C87C0"/>
  </svg>
)

export default function ExampleRotateFullObject() {
  return (
    <RotateObject src={<ARROW/>} size={1.0} respondsTo={"mouse"} offset={135}/>
  );
}