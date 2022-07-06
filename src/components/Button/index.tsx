// interface IButton {
//   type: string;
// }

export const Button = (props:any) => {
  return (
    <button type={props.type}>{props.children}</button>
  )
}
