// import React from 'react'

// //   function HOCex(WrappedComponent) {
// //       return class extends React.Component{
// //         render() {
// //           return <WrappedComponent {...this.props}/>;
// //         }
// //       }
// //     }

// //  const InputHOC = HOCex(name)

// const withHoverOpacity = (ImageComponent) => {
//   return class extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         opacity: 1,
//       };
//       //bind this
//       this.onMouseLeave = this.onMouseLeave.bind(this);
//       this.onMouseEnter = this.onMouseEnter.bind(this);
//     }
//     onMouseEnter() {
//       this.setState({
//         opacity: 0.5,
//       });
//     }
//     onMouseLeave() {
//       this.setState({
//         opacity: 1,
//       });
//     }
//     render() {
//       return (
//         <div
//           style={{ opacity: this.state.opacity }}
//           onMouseEnter={this.onMouseEnter}
//           onMouseLeave={this.onMouseLeave}
//         >
//           <ImageComponent />
//         </div>
//       );
//     }
//   };
// };