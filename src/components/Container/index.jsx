import React from 'react';

const Container = ({children}) => {
  return (
  <div style={{maxWidth: "1500px", margin: "0 auto", width: "100%", background:"#F0F8FF"}}>
    {children}
  </div>
  )
}

export default Container;