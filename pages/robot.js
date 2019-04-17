import fetch from 'isomorphic-unfetch';
import React from 'react';

class Robot extends React.Component {

    static async getInitialProps({query}) {
        console.log(query);
        const res = await fetch('https://jsonplaceholder.typicode.com/users/'+query.id);
        const data = await res.json();
        console.log(data);
        return {
            robot: data
        }
    }

    render() {
        const { robot } = this.props;
        console.log(this.props);
        return (
            <div className='tc'>
                <link href='/static/styles.css' rel='stylesheet'></link>
                <link rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css"/>
                <div className='tc bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
                    <img alt='robots' src={`https://robohash.org/${robot.id}?200x200`} />
                    <div>
                        <h2>{robot.name}</h2>
                        <p>{robot.email}</p>
                        <p>{robot.username}</p>
                    </div>
                </div>
            </div>
            
          );
    }
}

// const Robot = (props) => {
//     return (
//         <div>
//             <link href='/static/styles.css' rel='stylesheet'></link>
//             <link rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css"/>
//             <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
//                 <img alt='robots' src={`https://robohash.org/${props.id}?200x200`} />
//                 <div>
//                     <h2>{props.robot.name}a</h2>
//                     <p>{props.robot.email}b</p>
//                     <p>{props.robot.username}c</p>
//                 </div>
//             </div>
//         </div>
        
//     )
// }

// Robot.getInitialProps = async function({query}) {
//     console.log(query);
//     const res = await fetch('https://jsonplaceholder.typicode.com/users/'+query.id);
//     const data = await res.json();
//     console.log(data);
//     return {
//         robot: data
//     }
// }
  

export default Robot